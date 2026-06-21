import { type TeamMember, type Certification, type CoreValue, type Stat, type NavItem } from "@/types";

export const teamMembers: TeamMember[] = [
  {
    id: "tm-1",
    name: "Dinesh Anand",
    role: "Director",
    bio: "Visionary leader with 15+ years of experience in infrastructure development and sustainability solutions. Passionate about leveraging technology to build a smarter, cleaner India. Spearheads iRA Synergy's strategic partnerships with government bodies and drives innovation across all solution verticals.",
    image: "/images/team/dinesh-anand.jpg", // We'll just use a placeholder from unsplash in the component if this fails
    email: "info@irasynergy.com",
    linkedin: "#",
  },
];

export const certifications: Certification[] = [
  { id: "cert-1", name: "ISO 9001:2015", shortName: "ISO 9001", description: "Quality Management System", icon: "Shield", issuer: "ISO" },
  { id: "cert-2", name: "OHSAS 18001:2007", shortName: "OHSAS 18001", description: "Occupational Health and Safety", icon: "ShieldCheck", issuer: "ISO" },
  { id: "cert-3", name: "ISO 14001:2015", shortName: "ISO 14001", description: "Environmental Management", icon: "Leaf", issuer: "ISO" },
  { id: "cert-4", name: "ISO 45001:2018", shortName: "ISO 45001", description: "Occupational Health & Safety", icon: "Shield", issuer: "ISO" },
  { id: "cert-5", name: "Maharashtra Pollution Control Board", shortName: "MPCB", description: "Pollution Control Compliance", icon: "Leaf", issuer: "MPCB" },
  { id: "cert-6", name: "CMMI Maturity Level 5", shortName: "CMMI L5", description: "Capability Maturity Model Integration", icon: "Award", issuer: "CMMI Institute" },
  { id: "cert-7", name: "NABL", shortName: "NABL", description: "Testing and Calibration Laboratories", icon: "FileCheck", issuer: "NABL" },
  { id: "cert-8", name: "CE Certificate", shortName: "CE", description: "Conformitè Europëenne", icon: "Award", issuer: "EU" },
  { id: "cert-9", name: "NSIC", shortName: "NSIC", description: "National Small Industries Corporation", icon: "Building2", issuer: "Government of India" },
  { id: "cert-10", name: "DIC", shortName: "DIC", description: "District Industries Centre", icon: "Building2", issuer: "Government of India" },
  { id: "cert-11", name: "ZED Silver", shortName: "ZED Silver", description: "Zero Defect Zero Effect", icon: "Award", issuer: "MSME" },
  { id: "cert-12", name: "MSME Registered", shortName: "MSME", description: "Micro, Small & Medium Enterprise", icon: "Award", issuer: "Government of India" },
  { id: "cert-13", name: "GMP Certified", shortName: "GMP", description: "Good Manufacturing Practices", icon: "FileCheck", issuer: "WHO" },
  { id: "cert-14", name: "Government of India", shortName: "Govt of India", description: "Government of India Recognized", icon: "Building2", issuer: "Government of India" },
  { id: "cert-15", name: "GeM Registered", shortName: "GeM", description: "Government e-Marketplace", icon: "Building2", issuer: "Government of India" },
  { id: "cert-16", name: "IEC", shortName: "IEC", description: "Import Export Code", icon: "FileCheck", issuer: "DGFT" },
  { id: "cert-17", name: "Central Vigilance Commission", shortName: "CVC", description: "Integrity Pledge", icon: "ShieldCheck", issuer: "CVC" }
];

export const platforms = [
  { id: "plat-1", name: "GeM", logo: "Building2" },
  { id: "plat-2", name: "IndiaMART", logo: "Building2" },
  { id: "plat-3", name: "Trade India", logo: "Building2" },
  { id: "plat-4", name: "Google My Business", logo: "Building2" },
  { id: "plat-5", name: "Amazon", logo: "Building2" },
];

export const coreValues: CoreValue[] = [
  {
    id: "cv-1",
    title: "Absolute Integrity",
    description: "We conduct massive public projects with absolute financial and structural honesty.",
    icon: "ShieldCheck",
    color: "#0a0a0a",
  },
  {
    id: "cv-2",
    title: "Engineering Innovation",
    description: "We continuously seek better, stronger, and more efficient infrastructure solutions.",
    icon: "Lightbulb",
    color: "#0a0a0a",
  },
  {
    id: "cv-3",
    title: "Sustainable Scale",
    description: "We build for tomorrow. Our projects minimize ecological footprints while maximizing utility.",
    icon: "Leaf",
    color: "#0a0a0a",
  },
];

export const companyStats: Stat[] = [
  { id: "stat-1", value: 150, suffix: "+", label: "Massive Projects Delivered", icon: "Briefcase" },
  { id: "stat-2", value: 50, suffix: "+", label: "Industrial Solutions Engineered", icon: "Package" },
  { id: "stat-3", value: 12, suffix: "+", label: "States Covered Across India", icon: "MapPin" },
  { id: "stat-4", value: 100, suffix: "%", label: "Make in India Compliance", icon: "Flag" },
];

export const navigationItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Smart School Infrastructure", href: "/solutions/smart-school-infrastructure" },
      { label: "Waste Management Systems", href: "/solutions/waste-management-systems" },
      { label: "Renewable Energy Solutions", href: "/solutions/renewable-energy-solutions" },
      { label: "Public Health & Hygiene", href: "/solutions/public-health-hygiene" },
      { label: "Fitness & Play Equipment", href: "/solutions/fitness-play-equipment" },
      { label: "Smart City & CSR Projects", href: "/solutions/smart-city-csr-projects" },
    ],
  },
  { label: "Products", href: "/products" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const companyInfo = {
  name: "iRA Synergy Private Limited",
  tagline: "Pioneering India's Infrastructure Evolution",
  mission: "Building a Smarter, Cleaner & Sustainable India",
  
  // Expanded Corporate Copy
  storyParagraph1: "iRA Synergy Private Limited is a premier infrastructure and sustainability engineering corporation headquartered in Nashik, Maharashtra. Founded on the principle that modern civic administration requires modern technological backbones, we have rapidly expanded to become a critical partner for government departments, municipal corporations, and enterprise CSR divisions across the nation.",
  storyParagraph2: "We specialize in the end-to-end execution of heavy infrastructure—from decentralized automated waste management facilities to Category-5 cyclone-safe coastal shelters. Our engineering philosophy is rooted in modularity, extreme durability, and seamless IoT integration, ensuring that the public spaces we build today will serve communities for decades.",
  storyParagraph3: "As a proudly 'Make in India' certified corporation, 100% of our manufacturing and assembly is localized. This not only bolsters the national economy but allows us to maintain absolute, uncompromised control over the quality of every steel girder, every solar panel, and every smart sensor deployed in our projects.",
  
  // Director's Vision
  directorQuote: "True infrastructure doesn't just occupy space—it elevates the community. Our goal is to ensure that every municipality, regardless of its size, has access to world-class, sustainable technology.",
  director: "Dinesh Anand",
  directorTitle: "Managing Director",

  phone: "+91 80076 29969",
  email: "info@irasynergy.com",
  website: "www.irasynergy.com",
  address: {
    street: "Nashik",
    city: "Nashik",
    state: "Maharashtra",
    country: "India",
    pincode: "422001",
  },
  whatsapp: "918007629969",
  social: {
    facebook: "#",
    twitter: "#",
    linkedin: "#",
    instagram: "#",
    youtube: "#",
  },
  founded: "2020",
  employees: "150+ Engineers & Staff",
};
