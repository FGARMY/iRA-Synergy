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
    slug: "ev-rickshaw",
    name: "EV-Rickshaw",
    category: "Waste Management",
    description:
      "Eco-friendly Electric Vehicle (EV) Rickshaw tailored for efficient municipal solid waste collection. Designed with a robust chassis, hydraulic tipping mechanism, and segregated wet/dry waste bins, it offers a zero-emission solution for door-to-door garbage collection in urban and semi-urban areas.",
    shortDescription: "Zero-emission electric rickshaw for solid waste collection",
    features: [
      "100% Electric & Zero Emission",
      "Hydraulic tipping for easy unloading",
      "Segregated compartments (Wet/Dry/Hazardous)",
      "High-capacity Lithium-ion / Lead-acid battery options",
      "Heavy-duty shock absorbers for uneven roads",
      "Low maintenance and running cost",
    ],
    specs: [
      { label: "Motor Power", value: "1000W - 1500W BLDC" },
      { label: "Load Capacity", value: "500 Kg - 700 Kg" },
      { label: "Range", value: "70 - 100 km per charge" },
      { label: "Charging Time", value: "4 - 5 Hours (Fast Charge)" },
      { label: "Bin Capacity", value: "1.5 - 2.5 Cubic Meters" },
      { label: "Warranty", value: "1 Year Vehicle, 3 Years Battery" },
    ],
    certifications: ["ICAT Approved", "Make in India", "ISO 9001:2015"],
    images: [
      "/images/products/ev_rickshaw/ft_1.jpg",
      "/images/products/ev_rickshaw/ft_2.jpg",
      "/images/products/ev_rickshaw/ft_3.jpg",
      "/images/products/ev_rickshaw/ft_4.jpg"
    ],
    price: "On Request",
    inStock: true,
    badge: "Eco-Certified",
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
