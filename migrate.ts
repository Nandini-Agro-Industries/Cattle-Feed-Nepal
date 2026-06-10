import { createClient } from '@sanity/client';
import { htmlToBlocks } from '@sanity/block-tools';
import { Schema } from '@sanity/schema';
import { JSDOM } from 'jsdom';
import { blogPosts } from './src/data/blog';

const client = createClient({
  projectId: 'jbsyxp2k',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2025-01-01',
  token: 'skgYCwlaZAz2SJcKjPOZzM9HPu4PFZA4JQ2cufkTTCEQeSxQmMO6BlEzNOPVb71zr135cb6crhzesW7dFG8ddTshDlW7ZRdpa1uydoHPzy8iSOpGwBGb9B8qTlv5n2L0YiuopZf8LaiJ5r5lcAhJtbJoOqEQ4z3esQOzlXHJrvhEvdYfwgy0'
});

// Compile a minimal schema to extract the block content type definition
const defaultSchema = Schema.compile({
  name: 'default',
  types: [
    {
      type: 'document',
      name: 'post',
      fields: [
        {
          name: 'content',
          type: 'array',
          of: [{ type: 'block' }, { type: 'image' }]
        }
      ]
    }
  ]
});

// Get the block content type
const blockContentType = defaultSchema.get('post').fields.find((f: any) => f.name === 'content').type;

async function migrate() {
  console.log("Starting migration of", blogPosts.length, "blogs...");
  
  for (const post of blogPosts) {
    console.log(`Migrating: ${post.title}`);
    
    // Convert the raw HTML content into Sanity Portable Text blocks
    const blocks = htmlToBlocks(post.content, blockContentType, {
      parseHtml: html => new JSDOM(html).window.document
    });
    
    // Create the Sanity document payload
    const sanityDoc = {
      _type: 'post',
      _id: `post-${post.id}`, // Custom IDs
      title: post.title,
      slug: {
        _type: 'slug',
        current: post.slug,
      },
      excerpt: post.excerpt,
      coverImage: post.coverImage,
      date: post.date,
      author: post.author,
      authorTitle: post.authorTitle,
      authorBio: post.authorBio,
      tags: post.tags,
      content: blocks,
    };

    try {
      // Push to Sanity
      const res = await client.createOrReplace(sanityDoc);
      console.log(`Successfully migrated! Document ID: ${res._id}`);
    } catch (err) {
      console.error(`Failed to migrate ${post.title}:`, err);
    }
  }
  
  console.log("Migration complete!");
}

migrate();
