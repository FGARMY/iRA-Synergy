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
  },
  {
    id: "p-10",
    slug: "organic-waste-composter",
    name: "Organic Food Waste Composter Machine",
    category: "Waste Management",
    description:
      "The Organic Food Waste Composter Machine by WASTEMENT provides a fully automatic, odour-free solution to convert organic food waste into nutritious compost. It features a smart PLC control system and high-efficiency composting process with 50KG to 500KG capacity per cycle. The internal process includes shredding, drying, and composting chambers for sustainable waste reduction.",
    shortDescription: "Fully automatic machine to convert organic food waste into compost",
    features: [
      "Fully Automatic Operation",
      "Smart PLC Control System",
      "Low Power Consumption",
      "Odour Free Process",
      "High Efficiency Composting",
      "Easy to Operate & Maintain",
    ],
    specs: [
      { label: "Capacity", value: "50KG - 500KG per cycle" },
      { label: "Construction", value: "Mild Steel with Powder Coating" },
      { label: "Power Supply", value: "220V / 50Hz" },
      { label: "Power Consumption", value: "3 - 5 kW" },
      { label: "Cycle Time", value: "8 - 12 Hours" },
      { label: "Operating Temp.", value: "40°C - 70°C" },
      { label: "Mobility", value: "Heavy Duty Castor Wheels" },
    ],
    certifications: [],
    images: [
      "/images/products/composter/composter_2.png",
      "/images/products/composter/composter_1.png",
    ],
    price: "On Request",
    inStock: true,
    badge: "Eco-Friendly",
    relatedProductSlugs: ["ev-rickshaw"],
  },
  {
    id: "p-11",
    slug: "bio-medical-waste-incinerator",
    name: "Bio Medical Waste Incinerator",
    category: "Waste Management",
    description:
      "The Bio Medical Waste Incinerator by WASTEMENT is engineered for the safe and compliant disposal of bio-medical hazards. Utilizing advanced combustion technology, it guarantees a complete burn with minimal emissions, reducing infection risks. Built with robust materials for durability and featuring intelligent safety interlocks, this CPCB and MOEF compliant machine offers a low-maintenance, eco-friendly solution for hospitals and clinics.",
    shortDescription: "Safe and compliant advanced combustion incinerator for bio-medical waste",
    features: [
      "Eco Friendly & Low Emission",
      "Smart Control with Safety Interlocks",
      "Advanced Combustion for Complete Burn",
      "CPCB & MOEF Compliant",
      "Durable and Robust Construction",
      "User Friendly & Low Maintenance",
    ],
    specs: [
      { label: "Application", value: "Bio-Medical Waste Disposal" },
      { label: "Compliance", value: "CPCB & MOEF Guidelines" },
      { label: "Combustion", value: "High Efficiency Advanced Burn" },
      { label: "Safety", value: "Intelligent Interlocks" },
      { label: "Design", value: "Made in India" },
    ],
    certifications: ["ISO 14001:2015", "CPCB Compliant", "Made in India"],
    images: [
      "/images/products/incinerator/3_2.png",
      "/images/products/incinerator/3_3.png",
      "/images/products/incinerator/3_4.png",
      "/images/products/incinerator/3_1.png"
    ],
    price: "On Request",
    inStock: true,
    badge: "ISO Certified",
    relatedProductSlugs: ["organic-waste-composter", "ev-rickshaw"],
  },
  {
    id: "p-12",
    slug: "solid-waste-incinerator",
    name: "Solid Waste Incinerator",
    category: "Waste Management",
    description:
      "The Solid Waste Incinerator by WASTEMENT is a next-generation waste solution designed for high-temperature combustion and low emission. Featuring an integrated scrubber tank and cyclone separator, it ensures an environmentally friendly burn process. This heavy-duty system is highly efficient, durable, and cost-effective, offering a complete solution for safe solid waste disposal.",
    shortDescription: "Next-generation solid waste incinerator with integrated scrubber and low emission technology",
    features: [
      "High Temperature Combustion",
      "Low Emission Technology",
      "Integrated Scrubber Tank",
      "Efficient & Reliable Performance",
      "Environment Friendly Solution",
      "Safe, Durable & Cost Effective",
    ],
    specs: [
      { label: "Type", value: "Solid Waste Incinerator" },
      { label: "Emission Control", value: "Cyclone Separator & Scrubber" },
      { label: "Combustion", value: "High Temperature" },
      { label: "Ash Management", value: "Integrated Ash Tray" },
      { label: "Design", value: "Industrial Grade" },
    ],
    certifications: ["Low Emission Certified"],
    images: [
      "/images/products/solid_incinerator/4_1.png",
      "/images/products/solid_incinerator/4_2.png"
    ],
    price: "On Request",
    inStock: true,
    badge: "Next Generation",
    relatedProductSlugs: ["bio-medical-waste-incinerator"],
  },
  {
    id: "p-13",
    slug: "smart-food-cart",
    name: "Smart Mobile Food Cart",
    category: "Smart City",
    description:
      "A modern, hygienic, and fully equipped mobile food vending cart designed to elevate the street food experience. Built with premium food-grade stainless steel, this cart features integrated LED lighting, spacious storage compartments, built-in waste disposal units, and a sleek aesthetic. It's the perfect solution for street food vendors, outdoor catering, and modern smart city urban planning.",
    shortDescription: "Premium stainless steel mobile food vending cart with integrated lighting and storage",
    features: [
      "Food-Grade Stainless Steel Construction",
      "Integrated LED Branding & Lighting",
      "Built-in Hygiene & Waste Management",
      "Weather-resistant Canopy",
      "Modular Cooking & Prep Sections",
      "Heavy-duty Mobility Castors",
    ],
    specs: [
      { label: "Material", value: "Premium Stainless Steel (SS 304)" },
      { label: "Mobility", value: "Heavy Duty Swivel Castors with Brakes" },
      { label: "Lighting", value: "Energy-efficient LED strips & Panel Lights" },
      { label: "Storage", value: "Lockable under-counter cabinets" },
      { label: "Customization", value: "Fully customizable branding wraps" },
    ],
    certifications: ["FSSAI Compliant Design", "Make in India"],
    images: [
      "/images/products/food_cart/5_1.jpg",
      "/images/products/food_cart/5_2.jpg",
      "/images/products/food_cart/5_3.jpg",
      "/images/products/food_cart/5_4.jpg",
      "/images/products/food_cart/5_5.jpg"
    ],
    price: "On Request",
    inStock: true,
    badge: "Modern Design",
    relatedProductSlugs: ["solar-smart-bench"],
  },
  {
    id: "p-14",
    slug: "plastic-grinder-machine",
    name: "Plastic Grinder Machine",
    category: "Waste Management",
    description:
      "The Plastic Grinder Machine by WASTEMENT is built for performance and designed for the future. Ideal for all types of plastic waste, this robust and heavy-duty machine delivers highly efficient grinding with its high-speed rotor system. It guarantees energy-efficient operation with low noise and vibration, making it a low maintenance, user-friendly waste solution for recycling plants.",
    shortDescription: "High efficiency plastic grinding machine for all types of plastic waste recycling",
    features: [
      "High Efficiency Grinding Performance",
      "Robust & Heavy Duty Body Construction",
      "High Speed Rotor System",
      "Low Noise & Vibration",
      "Energy Efficient Operation",
      "Easy Cleaning & Maintenance",
    ],
    specs: [
      { label: "Power", value: "15 - 30 HP" },
      { label: "Rotor Speed", value: "800 - 1200 RPM" },
      { label: "Screen Size", value: "10 - 40 MM" },
      { label: "Capacity", value: "100 - 500 KG/HR" },
    ],
    certifications: ["CE Certified"],
    images: ["/images/products/waste_machinery/6_3.png"],
    price: "On Request",
    inStock: true,
    badge: "High Performance",
    relatedProductSlugs: ["solid-waste-incinerator"],
  },
  {
    id: "p-15",
    slug: "trommel-waste-sorting-plant",
    name: "Trommel Waste Sorting Plant",
    category: "Waste Management",
    description:
      "The Trommel Waste Sorting Plant by VAKRATUND MACHINES offers an industrial-scale automated waste segregation system. Featuring a massive rotating cylindrical screen (trommel) combined with heavy-duty conveyor belts, it efficiently separates municipal solid waste into distinct categories based on size and weight. Built for extreme durability and continuous operation, this plant is essential for modern municipal recycling facilities.",
    shortDescription: "Industrial-scale automated trommel screen and conveyor system for municipal solid waste segregation",
    features: [
      "Massive Cylindrical Trommel Screen",
      "Heavy-Duty Automated Conveyor Belts",
      "High Volume Municipal Waste Segregation",
      "Centralized Control Panel",
      "Durable Steel Frame Construction",
      "Optimized for Continuous Operation",
    ],
    specs: [
      { label: "System Type", value: "Automated Trommel Sorting Plant" },
      { label: "Throughput", value: "High Capacity (Industrial)" },
      { label: "Material", value: "Heavy-Duty Mild Steel" },
      { label: "Operation", value: "Continuous Automated" },
    ],
    certifications: [],
    images: ["/images/products/waste_machinery/6_4.png"],
    price: "On Request",
    inStock: true,
    badge: "Industrial Scale",
    relatedProductSlugs: ["plastic-grinder-machine"],
  },
  {
    id: "p-16",
    slug: "vertical-industrial-incinerator",
    name: "Vertical Industrial Incinerator",
    category: "Waste Management",
    description:
      "Our Vertical Industrial Incinerator is a highly efficient waste-to-energy and mass disposal solution. Featuring a vertical primary combustion chamber and an advanced secondary emission control stack, this heavy-duty system minimizes its footprint while maximizing throughput. Complete with access platforms and robust steel construction, it ensures safe, continuous, and environmentally compliant industrial waste management.",
    shortDescription: "High-throughput vertical industrial incinerator system with advanced emission control",
    features: [
      "Space-Saving Vertical Chamber Design",
      "Advanced Emission Control Stack",
      "Integrated Access Platforms & Safety Stairs",
      "High-Temperature Combustion",
      "Heavy-Duty Industrial Construction",
      "Continuous Operation Capability",
    ],
    specs: [
      { label: "Configuration", value: "Vertical Chamber" },
      { label: "Emission Control", value: "Integrated Stack & Scrubber" },
      { label: "Material", value: "Industrial Grade Steel" },
    ],
    certifications: [],
    images: ["/images/products/waste_machinery/6_2.png"],
    price: "On Request",
    inStock: true,
    badge: "Heavy Duty",
    relatedProductSlugs: ["solid-waste-incinerator"],
  },
  {
    id: "p-17",
    slug: "horizontal-industrial-incinerator",
    name: "Heavy-Duty Horizontal Incinerator",
    category: "Waste Management",
    description:
      "The Heavy-Duty Horizontal Incinerator is built for massive volume reduction and industrial waste processing. This skid-mounted unit features a large, accessible primary horizontal combustion chamber with multi-point automated latching for maximum safety. Equipped with forced-draft fans and a dedicated exhaust stack, it delivers uncompromising burn efficiency for bulk solid wastes in a robust, low-profile footprint.",
    shortDescription: "Large capacity horizontal industrial incinerator for bulk solid waste processing",
    features: [
      "Large Horizontal Combustion Chamber",
      "Multi-Point Safety Latching System",
      "Skid-Mounted Modular Design",
      "Integrated Forced-Draft Blowers",
      "High-Capacity Bulk Waste Processing",
      "Heavy Gauge Steel Construction",
    ],
    specs: [
      { label: "Configuration", value: "Horizontal Skid-Mounted" },
      { label: "Capacity", value: "Bulk Industrial Waste" },
      { label: "Combustion", value: "Forced-Draft High Temperature" },
    ],
    certifications: [],
    images: ["/images/products/waste_machinery/6_5.png"],
    price: "On Request",
    inStock: true,
    badge: "Bulk Capacity",
    relatedProductSlugs: ["vertical-industrial-incinerator"],
  },
  {
    id: "p-18",
    slug: "e-toilet",
    name: "E-Toilet",
    category: "Smart City",
    description: "The EcoRestroom E-Toilet is a self-cleaning, eco-friendly public sanitation solution designed for smart cities. It features an automated access system, hygienic self-washing mechanisms, odor control technology, and minimal water consumption. This green infrastructure is essential for improving urban hygiene with dignity and sustainability.",
    shortDescription: "Automated, self-cleaning eco-friendly public restroom",
    features: [
      "Fully Automated Self-Cleaning System",
      "Eco-Friendly & Minimal Water Usage",
      "Advanced Odor Control Technology",
      "Touchless Hygienic Operation",
      "Smart Access & Usage Monitoring",
      "Durable, Vandal-Resistant Design"
    ],
    specs: [
      { label: "Material", value: "High-Grade Stainless Steel & Composite" },
      { label: "Water Usage", value: "Optimized Flush (1.5L - 2.5L)" },
      { label: "Power", value: "Solar/Grid Compatible" },
      { label: "Maintenance", value: "Automated Floor & Bowl Wash" }
    ],
    certifications: ["Swachh Bharat Approved", "Eco-Friendly", "Smart City Standard"],
    images: [
      "/images/products/e_toilet/1.jpeg",
      "/images/products/e_toilet/2.jpeg",
      "/images/products/e_toilet/3.jpeg",
      "/images/products/e_toilet/4.jpeg",
      "/images/products/e_toilet/5.jpeg"
    ],
    price: "On Request",
    inStock: true,
    badge: "Smart City",
    relatedProductSlugs: []
  },
  {
    id: "p-19",
    slug: "pure-water-atm",
    name: "Pure Water ATM",
    category: "Public Health",
    description: "The Pure Water ATM provides 24/7 access to clean, safe, and mineral-enriched drinking water. Equipped with a 4-stage purification process including Reverse Osmosis (RO), UV Care, Ozonation, and a Mineral Booster, this automated dispensing unit ensures high-quality hydration for public spaces. It features a digital interface, automated dispensing, and sturdy weather-resistant construction.",
    shortDescription: "Automated 4-stage purification water dispensing ATM",
    features: [
      "4-Stage Purification (RO + UV + Ozonation + Mineral Booster)",
      "24/7 Automated Dispensing",
      "Digital Interface & Payment System",
      "Real-time Water Quality Monitoring",
      "Hygienic Touchless Design",
      "Weather & Vandal Resistant"
    ],
    specs: [
      { label: "Purification", value: "RO, UV, Ozonation, Mineral Booster" },
      { label: "Dispensing", value: "Automated Sensor/Button" },
      { label: "Construction", value: "Premium Stainless Steel & Coated Panels" },
      { label: "Capacity", value: "High Volume Commercial Output" }
    ],
    certifications: ["Safe Drinking Water", "ISO Certified"],
    images: [
      "/images/products/water_atm/1.jpeg",
      "/images/products/water_atm/2.jpeg"
    ],
    price: "On Request",
    inStock: true,
    badge: "Public Health",
    relatedProductSlugs: ["e-toilet"]
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
