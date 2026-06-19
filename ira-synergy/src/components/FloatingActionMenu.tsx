"use client";

import { Phone, MessageCircle, FileText, Download } from "lucide-react";
import Link from "next/link";
import { companyInfo } from "@/data/company";

export default function FloatingActionMenu() {
  return (
    <div className="fixed right-0 top-1/3 z-50 flex flex-col shadow-xl rounded-l-lg overflow-hidden border border-r-0 border-[#2d7a33]">
      <a
        href={`tel:${companyInfo.phone}`}
        className="flex items-center gap-3 w-32 bg-[#1b5e20] hover:bg-[#2d7a33] text-white py-2.5 px-3 transition-colors border-b border-[#144818]"
        title="Call Us"
      >
        <Phone size={16} fill="currentColor" className="flex-shrink-0" />
        <span className="text-xs font-semibold">Call Us</span>
      </a>

      <a
        href={companyInfo.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 w-32 bg-[#1b5e20] hover:bg-[#2d7a33] text-white py-2.5 px-3 transition-colors border-b border-[#144818]"
        title="WhatsApp"
      >
        {/* Simple WhatsApp icon approximation since we don't have the brand icon */}
        <MessageCircle size={16} className="flex-shrink-0" />
        <span className="text-xs font-semibold">WhatsApp</span>
      </a>

      <Link
        href="/contact"
        className="flex items-center gap-3 w-32 bg-[#1b5e20] hover:bg-[#2d7a33] text-white py-2.5 px-3 transition-colors border-b border-[#144818]"
        title="Enquiry"
      >
        <FileText size={16} className="flex-shrink-0" />
        <span className="text-xs font-semibold">Enquiry</span>
      </Link>

      <a
        href="/downloads"
        className="flex items-center gap-3 w-32 bg-[#1b5e20] hover:bg-[#2d7a33] text-white py-2.5 px-3 transition-colors"
        title="Brochure"
      >
        <FileText size={16} className="flex-shrink-0" />
        <span className="text-xs font-semibold">Brochure</span>
      </a>
    </div>
  );
}
