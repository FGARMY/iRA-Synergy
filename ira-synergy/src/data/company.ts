import { type TeamMember, type Certification, type CoreValue, type Stat, type NavItem } from "@/types";

export const teamMembers: TeamMember[] = [
  {
    id: "tm-1",
    name: "Dinesh Anand",
    role: "Director",
    bio: "Visionary leader with 15+ years of experience in infrastructure development and sustainability solutions. Passionate about leveraging technology to build a smarter, cleaner India. Spearheads iRA Synergy's strategic partnerships with government bodies and drives innovation across all solution verticals.",
    image: "/images/team/dinesh-anand.jpg",
    email: "info@irasynergy.com",
    linkedin: "#",
  },
];

export const certifications: Certification[] = [
  {
    id: "cert-1",
    name: "ISO 9001:2015",
    shortName: "ISO 9001",
    description: "Quality Management System certification ensuring consistent quality in products and services.",
    icon: "Shield",
    issuer: "International Organization for Standardization",
  },
  {
    id: "cert-2",
    name: "ISO 14001:2015",
    shortName: "ISO 14001",
    description: "Environmental Management System certification demonstrating commitment to environmental responsibility.",
    icon: "Leaf",
    issuer: "International Organization for Standardization",
  },
  {
    id: "cert-3",
    name: "GST Registered",
    shortName: "GST",
    description: "Goods and Services Tax registration for compliant business operations across India.",
    icon: "FileCheck",
    issuer: "Government of India",
  },
  {
    id: "cert-4",
    name: "GeM Registered",
    shortName: "GeM",
    description: "Government e-Marketplace registration enabling direct procurement by government departments.",
    icon: "Building2",
    issuer: "Government of India",
  },
  {
    id: "cert-5",
    name: "MSME Registered",
    shortName: "MSME",
    description: "Micro, Small & Medium Enterprise registration under the MSME Development Act.",
    icon: "Award",
    issuer: "Ministry of MSME, Government of India",
  },
  {
    id: "cert-6",
    name: "Startup India Recognized",
    shortName: "Startup India",
    description: "DPIIT recognized startup promoting innovation and industrial development.",
    icon: "Rocket",
    issuer: "Department for Promotion of Industry and Internal Trade",
  },
];

export const coreValues: CoreValue[] = [
  {
    id: "cv-1",
    title: "Integrity",
    description: "We conduct business with honesty and transparency.",
    icon: "ShieldCheck",
    color: "#2B7A2B",
  },
  {
    id: "cv-2",
    title: "Innovation",
    description: "We continuously seek better solutions.",
    icon: "Lightbulb",
    color: "#D4941A",
  },
  {
    id: "cv-3",
    title: "Sustainability",
    description: "We support environmentally responsible practices.",
    icon: "Leaf",
    color: "#4A90A4",
  },
  {
    id: "cv-4",
    title: "Teamwork",
    description: "We believe in collaboration and mutual growth.",
    icon: "Users",
    color: "#1D3557",
  },
  {
    id: "cv-5",
    title: "Commitment",
    description: "We focus on customer satisfaction and project success.",
    icon: "Handshake",
    color: "#7C3AED",
  },
  {
    id: "cv-6",
    title: "Excellence",
    description: "We maintain the highest quality standards.",
    icon: "Award",
    color: "#E67E22",
  },
];

export const companyStats: Stat[] = [
  { id: "stat-1", value: 150, suffix: "+", label: "Projects Delivered", icon: "Briefcase" },
  { id: "stat-2", value: 50, suffix: "+", label: "Products & Solutions", icon: "Package" },
  { id: "stat-3", value: 12, suffix: "+", label: "States Covered", icon: "MapPin" },
  { id: "stat-4", value: 100, suffix: "%", label: "Make in India", icon: "Flag" },
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
  tagline: "Innovative Solutions for Infrastructure & Sustainability",
  mission: "Building a Smarter, Cleaner & Sustainable India",
  description:
    "iRA Synergy Private Limited is a leading infrastructure and sustainability solutions company headquartered in Nashik, Maharashtra. We partner with government departments, municipal corporations, educational institutions, and corporate CSR teams to deliver impactful development projects across India.",
  director: "Dinesh Anand",
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
  employees: "50+",
};
