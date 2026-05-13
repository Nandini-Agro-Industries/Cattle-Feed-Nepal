export interface NutritionalInfo {
    crudeProtein: string;
    crudeFat: string;
    crudeFiber: string;
    moisture: string;
}

export interface Testimonial {
    quote: string;
    author: string;
    location: string;
}

export interface FAQ {
    question: string;
    answer: string;
}

export interface Product {
    id: string;
    name: string;
    brand: string;
    image: string;
    description: string;
    features: string[];
    benefits?: string;
    composition?: string;
    nutritionalInfo?: NutritionalInfo;
    feedingRate?: string;
    ingredients?: string;
    usageGuide?: string[];
    testimonials?: Testimonial[];
    faqs?: FAQ[];
}

export const products: Product[] = [
    {
        id: "vanjula-highpro",
        name: "Vanjula Pashu Aahar HighPro",
        brand: "Vanjula",
        image: "/images/vanjula-highpro.png",
        description: "Premium high-protein feed designed to maximize milk production in high-yielding dairy cattle. Enriched with essential vitamins and minerals.",
        features: [
            "High protein content for maximum milk yield",
            "Balanced vitamins and minerals",
            "Improves cattle health and immunity",
            "Easy to digest"
        ],
        benefits: "Ensures peak performance in dairy cattle, leading to higher profitability for farmers. Regular feeding reduces the risk of metabolic diseases and improves reproductive cycles.",
        composition: "Grains, Oil Cakes, Minerals, Vitamins, etc.",
        nutritionalInfo: {
            crudeProtein: "Min. 22%",
            crudeFat: "Min. 4%",
            crudeFiber: "Max. 10%",
            moisture: "Max. 11%"
        },
        feedingRate: "400g per liter of milk produced + 1.5kg for body maintenance per day.",
        ingredients: "Maize, Soya Doc, Mustard Doc, Rice Bran, Mineral Mixture, Salt, Vitamins, bypass protein.",
        usageGuide: [
            "Start introducing the HighPro feed gradually over a period of 5-7 days.",
            "Mix with the existing feed, slowly increasing the ratio of HighPro.",
            "Ensure free access to clean and fresh drinking water at all times.",
            "Store in a cool, dry place away from direct sunlight to maintain vitamin integrity."
        ],
        testimonials: [
            {
                quote: "Since switching to Vanjula HighPro, my dairy cows have increased their daily milk yield by almost 15%. The fat content has also significantly improved.",
                author: "Ram Sharan Thapa",
                location: "Chitwan"
            },
            {
                quote: "The quality is consistent in every bag. My herd looks healthier and their coats are shinier.",
                author: "Sita Sharma",
                location: "Lumbini"
            }
        ],
        faqs: [
            {
                question: "Is this suitable for pregnant cows?",
                answer: "Yes, Vanjula HighPro is highly recommended for pregnant cows, especially in their last trimester to support fetal growth and prepare for lactation."
            },
            {
                question: "Can I feed this to buffaloes?",
                answer: "Absolutely. This feed is scientifically balanced for high-yielding dairy animals, including buffaloes, to maximize milk production and maintain body conditioning."
            }
        ]
    },
    {
        id: "vanjula-bypass",
        name: "Vanjula Pashu Aahar Bypass",
        brand: "Vanjula",
        image: "/images/vanjula-bypass.png",
        description: "Formulated with bypass protein technology to ensure better nutrient absorption and improved health for your livestock.",
        features: [
            "Bypass protein technology",
            "Enhanced nutrient absorption",
            "Supports reproductive health",
            "Better growth rates"
        ],
        benefits: "By preventing proteins from being degraded in the rumen, this feed ensures amino acids reach the small intestine, dramatically improving protein utilization and overall animal health.",
        nutritionalInfo: {
            crudeProtein: "Min. 20%",
            crudeFat: "Min. 4%",
            crudeFiber: "Max. 12%",
            moisture: "Max. 11%"
        },
        feedingRate: "Feed 1.5 - 2kg daily for maintenance, plus 400g for every liter of milk produced.",
        ingredients: "Roasted Grains, Specially treated Oil Cakes (Bypass Protein), Rice Bran, Mineral Mixture, Calcium, Vitamins.",
        usageGuide: [
            "Ideal for high-yielding cows transitioning from dry periods.",
            "Feed twice daily, ensuring consistent timing.",
            "Can be fed as a total mixed ration (TMR) component."
        ],
        testimonials: [
            {
                quote: "The bypass protein really works. We've seen fewer cases of acidosis and better overall body scores in our cattle.",
                author: "Hari Khadka",
                location: "Rupandehi"
            }
        ],
        faqs: [
            {
                question: "What is bypass protein?",
                answer: "Bypass protein escapes digestion in the rumen and is absorbed directly in the lower digestive tract, making the protein utilization far more efficient for milk production."
            }
        ]
    },
    {
        id: "vanjula-pashu-aahar",
        name: "Vanjula Pashu Aahar",
        brand: "Vanjula",
        image: "/images/vanjula-pashu-aahar.png",
        description: "Balanced daily nutrition for cattle, ensuring steady growth, maintenance, and consistent milk quality.",
        features: [
            "Complete daily nutrition",
            "Maintains body weight",
            "Consistent milk quality",
            "Cost-effective solution"
        ],
        benefits: "Provides a reliable, steady diet that prevents weight loss during lactation and maintains a strong immune system.",
        nutritionalInfo: {
            crudeProtein: "Min. 18%",
            crudeFat: "Min. 3%",
            crudeFiber: "Max. 12%",
            moisture: "Max. 11%"
        },
        feedingRate: "Feed 1.5 - 2kg per adult animal for maintenance, plus additional allowance based on yield.",
        ingredients: "Grains, Mustard Doc, Rice Bran, Mineral Mixture, Molasses, Salt.",
        usageGuide: [
            "Soaking the feed in water for 30 minutes before feeding can improve palatability.",
            "Always clean the feeding trough before serving a fresh batch.",
            "Supplement with green fodder for best results."
        ],
        faqs: [
            {
                question: "Do I need to add extra salt or minerals to this?",
                answer: "No, Vanjula Pashu Aahar is a complete feed that already includes a balanced mineral mixture and salt. Additional supplements are usually unnecessary unless prescribed by a vet."
            }
        ]
    },
    {
        id: "siddhartha-cattle",
        name: "Siddhartha Cattle Feed",
        brand: "Siddhartha",
        image: "/images/siddhartha-cattle-feed.png",
        description: "Economical and nutritious choice for general cattle maintenance and health.",
        features: [
            "Economical choice",
            "Good palatability",
            "Essential nutrients for maintenance",
            "Suitable for all cattle types"
        ],
        benefits: "A budget-friendly option that does not compromise on essential daily nutrients, ensuring your herd stays healthy year-round.",
        nutritionalInfo: {
            crudeProtein: "Min. 16%",
            crudeFat: "Min. 2.5%",
            crudeFiber: "Max. 14%",
            moisture: "Max. 11%"
        },
        feedingRate: "2 - 3 kg per day depending on the body weight and work/yield of the cattle.",
        ingredients: "Bran, Grain screening, Molasses, Mineral Mixture, Salt.",
        usageGuide: [
            "Excellent for dry cows, heifers, and working bullocks.",
            "Mix thoroughly with dry roughage to encourage slower eating."
        ]
    },
    {
        id: "siddhartha-goat",
        name: "Siddhartha Goat Feed",
        brand: "Siddhartha",
        image: "/images/siddhartha-goat-feed.png",
        description: "Specialized formula for goats (Bakhra Ko Dana) to support rapid growth, immunity, and overall well-being.",
        features: [
            "Specialized for goats",
            "Promotes rapid growth",
            "Boosts immunity",
            "High energy formula"
        ],
        benefits: "Accelerates weight gain in meat goats and improves milk yield in dairy breeds. Reduces mortality rates in young kids.",
        nutritionalInfo: {
            crudeProtein: "Min. 16%",
            crudeFat: "Min. 3%",
            crudeFiber: "Max. 10%",
            moisture: "Max. 10%"
        },
        feedingRate: "100g to 250g per day depending on the age, weight, and physiological state of the goat, alongside good quality fodder.",
        ingredients: "Maize, Soya Doc, Gram chunni, Wheat bran, Mineral mixture, Salt, Vitamins.",
        usageGuide: [
            "Introduce slowly to young kids after weaning.",
            "Ensure feeders are kept off the ground to prevent contamination.",
            "Always provide unlimited access to clean water and roughage."
        ],
        testimonials: [
            {
                quote: "My goats have reached market weight much faster since I started using Siddhartha Goat Feed. The meat quality is excellent.",
                author: "Bikash Gurung",
                location: "Pokhara"
            }
        ],
        faqs: [
            {
                question: "At what age can I start feeding this to my goats?",
                answer: "You can start introducing small amounts of this feed as creep feed when kids are around 3-4 weeks old, gradually increasing as they wean."
            }
        ]
    },
    {
        id: "bangur-ko-dana",
        name: "Bangur Ko Dana",
        brand: "Nandani Agro",
        image: "/images/bangur-ko-dana.png",
        description: "High-energy feed for pigs ensuring fast weight gain and healthy development.",
        features: [
            "High energy for fast weight gain",
            "Balanced amino acids",
            "Supports healthy development",
            "Excellent conversion ratio"
        ],
        benefits: "Optimizes the Feed Conversion Ratio (FCR), meaning your pigs gain more weight with less feed. Promotes lean muscle growth.",
        nutritionalInfo: {
            crudeProtein: "Min. 18%",
            crudeFat: "Min. 3%",
            crudeFiber: "Max. 8%",
            moisture: "Max. 10%"
        },
        feedingRate: "Provide 1-2.5 kg per day depending on the growth stage (grower vs finisher) with free access to clean water.",
        ingredients: "Maize, Soya Doc, Rice Bran, Fish Meal, Amino Acids, Mineral Mixture, Vitamins.",
        usageGuide: [
            "Feed twice a day at regular intervals.",
            "For finishers, you can slightly increase the daily ration to maximize weight gain.",
            "Do not feed if the product shows any signs of mold or moisture damage."
        ],
        faqs: [
            {
                question: "Does this feed contain antibiotics?",
                answer: "No, Bangur Ko Dana relies on high-quality ingredients, balanced amino acids, and essential vitamins to promote natural growth and immunity without the use of routine antibiotics."
            }
        ]
    },
];
