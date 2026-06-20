export type DownloadCategory = "Brochures" | "Ready Quotations" | "Technical Specs";

export interface DownloadFile {
  id: string;
  title: string;
  description: string;
  category: DownloadCategory;
  fileType: "PDF" | "DOCX" | "XLSX";
  fileSize: string;
  url: string;
  lastUpdated: string;
}

export const downloads: DownloadFile[] = [
  // Brochures
  {
    id: "dl-1",
    title: "Smart City Infrastructure Solutions Brochure 2025",
    description: "Complete overview of our smart poles, solar trees, and smart bus stops.",
    category: "Brochures",
    fileType: "PDF",
    fileSize: "12.4 MB",
    url: "#",
    lastUpdated: "2025-01-15",
  },
  {
    id: "dl-2",
    title: "Waste Management Systems Catalog",
    description: "Detailed catalog covering smart bins, composters, and incinerators.",
    category: "Brochures",
    fileType: "PDF",
    fileSize: "8.2 MB",
    url: "#",
    lastUpdated: "2024-11-20",
  },
  {
    id: "dl-3",
    title: "Smart School Equipment Profile",
    description: "Brochure for Atal Tinkering Labs, AI Robotics Labs, and Portable Libraries.",
    category: "Brochures",
    fileType: "PDF",
    fileSize: "5.1 MB",
    url: "#",
    lastUpdated: "2025-02-10",
  },

  // Ready Quotations / BoQ
  {
    id: "dl-4",
    title: "Standard BOQ: Smart Pole (12m with CCTV & Wi-Fi)",
    description: "Ready quotation template with standard technical specifications and commercial terms.",
    category: "Ready Quotations",
    fileType: "XLSX",
    fileSize: "1.2 MB",
    url: "#",
    lastUpdated: "2025-03-01",
  },
  {
    id: "dl-5",
    title: "Commercial Proposal: 500kg Waste Incinerator",
    description: "Complete commercial proposal including installation, AMC, and standard pricing.",
    category: "Ready Quotations",
    fileType: "DOCX",
    fileSize: "2.5 MB",
    url: "#",
    lastUpdated: "2025-03-05",
  },
  {
    id: "dl-6",
    title: "Standard BOQ: Atal Tinkering Lab Setup",
    description: "Government-approved BOQ format for school STEM lab installations.",
    category: "Ready Quotations",
    fileType: "XLSX",
    fileSize: "1.8 MB",
    url: "#",
    lastUpdated: "2025-02-28",
  },
  {
    id: "dl-7",
    title: "Ready Quotation: Solar Smart Bench (Set of 10)",
    description: "Bulk pricing quotation with solar capacity and battery specifications.",
    category: "Ready Quotations",
    fileType: "PDF",
    fileSize: "3.4 MB",
    url: "#",
    lastUpdated: "2025-01-10",
  },

  // Technical Specs
  {
    id: "dl-8",
    title: "Technical Datasheet: Cyclone Safe Zone Shelter",
    description: "Structural engineering specs, wind load calculations, and material grades.",
    category: "Technical Specs",
    fileType: "PDF",
    fileSize: "15.6 MB",
    url: "#",
    lastUpdated: "2024-12-05",
  },
  {
    id: "dl-9",
    title: "Installation Manual: Food Waste Composter (200kg)",
    description: "Plumbing, electrical requirements, and civil foundation guide.",
    category: "Technical Specs",
    fileType: "PDF",
    fileSize: "6.8 MB",
    url: "#",
    lastUpdated: "2025-01-22",
  },
  {
    id: "dl-10",
    title: "Compliance & BIS Certification Kit",
    description: "Zip file containing all relevant BIS, ISO, and FSSAI certifications for our products.",
    category: "Technical Specs",
    fileType: "PDF",
    fileSize: "22.1 MB",
    url: "#",
    lastUpdated: "2025-03-10",
  },
];
