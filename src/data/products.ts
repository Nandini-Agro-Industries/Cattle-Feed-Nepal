export interface NutritionalInfo {
    crudeProtein: string;
    crudeFat: string;
    crudeFiber: string;
    moisture: string;
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
        benefits: "Ensures peak performance in dairy cattle, leading to higher profitability for farmers.",
        composition: "Grains, Oil Cakes, Minerals, Vitamins, etc.",
        nutritionalInfo: {
            crudeProtein: "Min. 22%",
            crudeFat: "Min. 4%",
            crudeFiber: "Max. 10%",
            moisture: "Max. 11%"
        },
        feedingRate: "400g per liter of milk produced + 1.5kg for body maintenance per day.",
        ingredients: "Maize, Soya Doc, Mustard Doc, Rice Bran, Mineral Mixture, Salt, Vitamins, bypass protein."
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
        nutritionalInfo: {
            crudeProtein: "Min. 20%",
            crudeFat: "Min. 4%",
            crudeFiber: "Max. 12%",
            moisture: "Max. 11%"
        },
        feedingRate: "Feed 1.5 - 2kg daily for maintenance, plus 400g for every liter of milk produced.",
        ingredients: "Roasted Grains, Specially treated Oil Cakes (Bypass Protein), Rice Bran, Mineral Mixture, Calcium, Vitamins."
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
        nutritionalInfo: {
            crudeProtein: "Min. 18%",
            crudeFat: "Min. 3%",
            crudeFiber: "Max. 12%",
            moisture: "Max. 11%"
        },
        feedingRate: "Feed 1.5 - 2kg per adult animal for maintenance, plus additional allowance based on yield.",
        ingredients: "Grains, Mustard Doc, Rice Bran, Mineral Mixture, Molasses, Salt."
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
        nutritionalInfo: {
            crudeProtein: "Min. 16%",
            crudeFat: "Min. 2.5%",
            crudeFiber: "Max. 14%",
            moisture: "Max. 11%"
        },
        feedingRate: "2 - 3 kg per day depending on the body weight and work/yield of the cattle.",
        ingredients: "Bran, Grain screening, Molasses, Mineral Mixture, Salt."
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
        nutritionalInfo: {
            crudeProtein: "Min. 16%",
            crudeFat: "Min. 3%",
            crudeFiber: "Max. 10%",
            moisture: "Max. 10%"
        },
        feedingRate: "100g to 250g per day depending on the age, weight, and physiological state of the goat, alongside good quality fodder.",
        ingredients: "Maize, Soya Doc, Gram chunni, Wheat bran, Mineral mixture, Salt, Vitamins."
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
        nutritionalInfo: {
            crudeProtein: "Min. 18%",
            crudeFat: "Min. 3%",
            crudeFiber: "Max. 8%",
            moisture: "Max. 10%"
        },
        feedingRate: "Provide 1-2.5 kg per day depending on the growth stage (grower vs finisher) with free access to clean water.",
        ingredients: "Maize, Soya Doc, Rice Bran, Fish Meal, Amino Acids, Mineral Mixture, Vitamins."
    },
];
