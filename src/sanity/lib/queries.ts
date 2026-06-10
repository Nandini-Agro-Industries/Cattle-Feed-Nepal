import { groq } from "next-sanity";

export const allPostsQuery = groq`
  *[_type == "post"] | order(date desc) {
    _id,
    "id": _id,
    title,
    "slug": slug.current,
    excerpt,
    "coverImage": coverImage.asset->url,
    date,
    author,
    authorTitle,
    authorBio,
    tags,
    content
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    "id": _id,
    title,
    "slug": slug.current,
    excerpt,
    "coverImage": coverImage.asset->url,
    date,
    author,
    authorTitle,
    authorBio,
    tags,
    content
  }
`;
