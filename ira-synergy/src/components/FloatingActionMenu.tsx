"use client";

import { Phone, MessageCircle, FileText, FileDown } from "lucide-react";
import Link from "next/link";
import { companyInfo } from "@/data/company";

export default function FloatingActionMenu() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 flex flex-row md:flex-col bg-[#1a4a23] md:rounded-l-lg shadow-[0_-4px_20px_rgba(0,0,0,0.15)] md:shadow-xl md:top-1/3 md:bottom-auto md:left-auto md:right-0 md:w-auto overflow-hidden md:py-3">
      <a
        href={`tel:${companyInfo.phone}`}
        className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3 px-2 md:px-4 py-3 md:py-2 hover:bg-black/10 transition-colors md:border-b md:border-white/10 md:mx-2 flex-1 md:flex-auto border-r border-white/10 md:border-r-0"
        title="Call Us"
      >
        <Phone size={20} className="text-white flex-shrink-0 md:w-4 md:h-4" />
        <span className="text-white text-[10px] md:text-xs font-semibold whitespace-nowrap">Call</span>
      </a>

      <a
        href={companyInfo.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3 px-2 md:px-4 py-3 md:py-2 hover:bg-black/10 transition-colors md:border-b md:border-white/10 md:mx-2 flex-1 md:flex-auto border-r border-white/10 md:border-r-0"
        title="WhatsApp"
      >
        <MessageCircle size={20} className="text-white flex-shrink-0 md:w-4 md:h-4" />
        <span className="text-white text-[10px] md:text-xs font-semibold whitespace-nowrap">WhatsApp</span>
      </a>

      <a
        href="/downloads"
        className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3 px-2 md:px-4 py-3 md:py-2 hover:bg-black/10 transition-colors md:mx-2 flex-1 md:flex-auto"
        title="Brochure"
      >
        <FileDown size={20} className="text-white flex-shrink-0 md:w-4 md:h-4" />
        <span className="text-white text-[10px] md:text-xs font-semibold whitespace-nowrap">Brochure</span>
      </a>
    </div>
  );
}
