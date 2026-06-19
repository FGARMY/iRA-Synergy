"use client";

import { Phone, MessageCircle, FileText, FileDown } from "lucide-react";
import Link from "next/link";
import { companyInfo } from "@/data/company";

export default function FloatingActionMenu() {
  return (
    <div className="fixed right-0 top-1/3 z-50 flex flex-col bg-[#1a4a23] rounded-l-lg shadow-xl overflow-hidden py-3">
      <a
        href={`tel:${companyInfo.phone}`}
        className="flex items-center gap-3 px-4 py-2 hover:bg-black/10 transition-colors border-b border-white/10 mx-2"
        title="Call Us"
      >
        <Phone size={16} className="text-white flex-shrink-0" />
        <span className="text-white text-xs font-semibold whitespace-nowrap">Call Us</span>
      </a>

      <a
        href={companyInfo.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 px-4 py-2 hover:bg-black/10 transition-colors border-b border-white/10 mx-2"
        title="WhatsApp"
      >
        <MessageCircle size={16} className="text-white flex-shrink-0" />
        <span className="text-white text-xs font-semibold whitespace-nowrap">WhatsApp</span>
      </a>

      <Link
        href="/contact"
        className="flex items-center gap-3 px-4 py-2 hover:bg-black/10 transition-colors border-b border-white/10 mx-2"
        title="Enquiry"
      >
        <FileText size={16} className="text-white flex-shrink-0" />
        <span className="text-white text-xs font-semibold whitespace-nowrap">Enquiry</span>
      </Link>

      <a
        href="/downloads"
        className="flex items-center gap-3 px-4 py-2 hover:bg-black/10 transition-colors mx-2"
        title="Brochure"
      >
        <FileDown size={16} className="text-white flex-shrink-0" />
        <span className="text-white text-xs font-semibold whitespace-nowrap">Brochure</span>
      </a>
    </div>
  );
}
