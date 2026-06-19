"use client";

import { Phone, MessageCircle, FileText, Download } from "lucide-react";
import Link from "next/link";
import { companyInfo } from "@/data/company";

export default function FloatingActionMenu() {
  return (
    <div className="fixed right-0 top-1/3 z-50 flex flex-col gap-1">
      <a
        href={`tel:${companyInfo.phone}`}
        className="group flex items-center justify-end w-12 hover:w-36 transition-all duration-300 overflow-hidden bg-ira-primary-dark text-white rounded-l-md shadow-lg py-3 pr-3 pl-3"
        title="Call Us"
      >
        <span className="whitespace-nowrap text-sm font-medium mr-3 opacity-0 group-hover:opacity-100 transition-opacity">
          Call Us
        </span>
        <Phone size={20} className="flex-shrink-0" />
      </a>

      <a
        href={companyInfo.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-end w-12 hover:w-36 transition-all duration-300 overflow-hidden bg-ira-primary text-white rounded-l-md shadow-lg py-3 pr-3 pl-3"
        title="WhatsApp"
      >
        <span className="whitespace-nowrap text-sm font-medium mr-3 opacity-0 group-hover:opacity-100 transition-opacity">
          WhatsApp
        </span>
        <MessageCircle size={20} className="flex-shrink-0" />
      </a>

      <Link
        href="/contact"
        className="group flex items-center justify-end w-12 hover:w-36 transition-all duration-300 overflow-hidden bg-ira-primary-dark text-white rounded-l-md shadow-lg py-3 pr-3 pl-3"
        title="Enquiry"
      >
        <span className="whitespace-nowrap text-sm font-medium mr-3 opacity-0 group-hover:opacity-100 transition-opacity">
          Enquiry
        </span>
        <FileText size={20} className="flex-shrink-0" />
      </Link>

      <a
        href="/downloads"
        className="group flex items-center justify-end w-12 hover:w-36 transition-all duration-300 overflow-hidden bg-ira-primary text-white rounded-l-md shadow-lg py-3 pr-3 pl-3"
        title="Brochure"
      >
        <span className="whitespace-nowrap text-sm font-medium mr-3 opacity-0 group-hover:opacity-100 transition-opacity">
          Brochure
        </span>
        <Download size={20} className="flex-shrink-0" />
      </a>
    </div>
  );
}
