"use client";

import { Phone, MessageCircle, FileText, FileDown, Bot, X } from "lucide-react";
import Link from "next/link";
import { companyInfo } from "@/data/company";

import { useState } from "react";

export default function FloatingActionMenu() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-0 left-0 w-full z-40 flex flex-row md:flex-col bg-[#1a4a23] md:rounded-l-lg shadow-[0_-4px_20px_rgba(0,0,0,0.15)] md:shadow-xl md:top-1/3 md:bottom-auto md:left-auto md:right-0 md:w-auto overflow-hidden md:py-3">
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

        <Link
          href="/contact"
          className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3 px-2 md:px-4 py-3 md:py-2 hover:bg-black/10 transition-colors md:border-b md:border-white/10 md:mx-2 flex-1 md:flex-auto border-r border-white/10 md:border-r-0"
          title="Enquiry"
        >
          <FileText size={20} className="text-white flex-shrink-0 md:w-4 md:h-4" />
          <span className="text-white text-[10px] md:text-xs font-semibold whitespace-nowrap">Enquiry</span>
        </Link>

        <a
          href="/downloads"
          className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3 px-2 md:px-4 py-3 md:py-2 hover:bg-black/10 transition-colors md:mx-2 flex-1 md:flex-auto"
          title="Brochure"
        >
          <FileDown size={20} className="text-white flex-shrink-0 md:w-4 md:h-4" />
          <span className="text-white text-[10px] md:text-xs font-semibold whitespace-nowrap">Brochure</span>
        </a>
      </div>

      {/* AI Assistant Chat Box */}
      <div className="fixed z-50 bottom-20 md:bottom-8 right-4 md:right-8 flex flex-col items-end pointer-events-none">
        {chatOpen && (
          <div className="pointer-events-auto bg-white w-[300px] sm:w-[350px] h-[400px] rounded-2xl shadow-2xl flex flex-col overflow-hidden mb-4 border border-gray-200 origin-bottom-right transition-all">
            <div className="bg-gradient-to-r from-ira-primary-dark to-ira-primary text-white p-4 flex justify-between items-center shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-sm leading-tight">iRA Synergy Assistant</h3>
                  <p className="text-[10px] text-white/80">Online & ready to help</p>
                </div>
              </div>
              <button onClick={() => setChatOpen(false)} className="text-white hover:bg-white/20 rounded-full p-1 transition-colors">
                <X size={20} />
              </button>
            </div>
            
            <div className="flex-1 p-4 overflow-y-auto bg-[#f8f9fa] flex flex-col gap-4">
              <div className="flex gap-2 w-full">
                <div className="w-6 h-6 bg-ira-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Bot size={14} className="text-ira-primary" />
                </div>
                <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-sm p-3 shadow-sm text-sm text-gray-700">
                  Hi there! 👋 I'm the iRA Synergy AI Assistant. How can I help you explore our sustainable infrastructure solutions?
                </div>
              </div>
            </div>
            
            <div className="p-3 bg-white border-t border-gray-100 flex gap-2 items-center">
              <input 
                type="text" 
                placeholder="Type your message..." 
                className="flex-1 border border-gray-200 bg-gray-50 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:border-ira-primary focus:bg-white transition-colors"
                disabled
              />
              <button className="bg-ira-primary text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-ira-primary-dark transition-colors flex-shrink-0 pointer-events-none opacity-50">
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
              </button>
            </div>
          </div>
        )}

        <button 
          onClick={() => setChatOpen(!chatOpen)}
          className={`pointer-events-auto flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105 ${
            chatOpen 
              ? 'w-12 h-12 bg-gray-800 text-white rounded-full' 
              : 'w-16 h-16 bg-gradient-to-tr from-ira-primary-dark to-ira-primary text-white rounded-full'
          }`}
        >
          {chatOpen ? <X size={24} /> : <Bot size={32} />}
        </button>
      </div>
    </>
  );
}
