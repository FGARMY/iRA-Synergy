import { type Product, type ProductCategory } from "@/types";

export const products: Product[] = [
  {
    id: "p-8",
    slug: "solar-smart-bench",
    name: "Solar Smart Bench",
    category: "Smart City",
    description:
      "The Solar Smart Bench is a next-generation urban seating solution that brings connectivity and renewable energy to public spaces. Fully powered by integrated solar panels, it provides free Wi-Fi, wireless device charging, USB ports, and atmospheric sensors. Designed with durable, weather-resistant materials, it's perfect for parks, university campuses, smart city squares, and corporate campuses.",
    shortDescription: "Solar-powered smart seating with Wi-Fi & USB charging",
    features: [
      "Integrated monocrystalline solar panels",
      "Wireless charging pad (Qi standard)",
      "4x fast-charging USB ports",
      "Public Wi-Fi hotspot integration",
      "Ambient LED lighting for night safety",
      "Vandal-resistant and weatherproof design",
      "Built-in atmospheric and environmental sensors",
    ],
    specs: [
      { label: "Solar Panel", value: "100W High-Efficiency Monocrystalline" },
      { label: "Battery", value: "12V 40Ah / 50Ah Lithium Iron Phosphate" },
      { label: "USB Ports", value: "2x USB-A + 2x USB-C" },
      { label: "Seating Capacity", value: "4-6 persons" },
      { label: "Construction", value: "SS 304 Frame + UV-Resistant Composite" },
      { label: "IP Rating", value: "IP65 Waterproof" },
    ],
    certifications: ["MNRE Approved", "IP65", "GeM Listed", "CE Marking"],
    images: [
      "/images/products/solar_bench/sb_1.png",
      "/images/products/solar_bench/sb_2.png"
    ],
    price: "On Request",
    inStock: true,
    badge: "Smart City",
    relatedProductSlugs: [],
  },
  {
    id: "p-9",
    slug: "food-trolly",
    name: "Food Trolly",
    category: "Waste Management",
    description:
      "Heavy-duty mobile food trolleys designed for municipal waste management, large-scale community kitchens, hospitals, and industrial canteens. Built with high-grade stainless steel, these trolleys ensure hygienic and efficient transportation of bulk food or food waste.",
    shortDescription: "Heavy-duty stainless steel mobile food & waste trolleys",
    features: [
      "Food-grade SS 304 construction",
      "Heavy-duty caster wheels with locking mechanism",
      "Leak-proof seamless welding",
      "Easy-grip ergonomic handles",
      "High load-bearing capacity",
      "Corrosion and rust resistant",
    ],
    specs: [
      { label: "Material", value: "Stainless Steel 304" },
      { label: "Capacity", value: "100L - 500L options" },
      { label: "Wheels", value: "4x Heavy-Duty Swivel Casters" },
      { label: "Design", value: "Seamless, Leak-Proof" },
      { label: "Application", value: "Food Transport & Waste Management" },
      { label: "Warranty", value: "1 Year" },
    ],
    certifications: ["ISO 9001:2015", "Make in India"],
    images: [
      "/images/products/food_trolley/ft_1.jpg",
      "/images/products/food_trolley/ft_2.jpg",
      "/images/products/food_trolley/ft_3.jpg",
      "/images/products/food_trolley/ft_4.jpg"
    ],
    price: "On Request",
    inStock: true,
    badge: "New",
    relatedProductSlugs: ["solar-smart-bench"],
  }
];

export const productCategories: ProductCategory[] = [
  "Smart City",
  "Renewable Energy",
  "Waste Management",
  "Public Health",
  "Fitness",
  "Education",
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.badge);
}
