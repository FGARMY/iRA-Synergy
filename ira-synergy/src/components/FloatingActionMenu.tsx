"use client";

import { Phone, MessageCircle, FileText, FileDown, Bot, X, ArrowUp } from "lucide-react";
import Link from "next/link";
import { companyInfo } from "@/data/company";

import { useState, useEffect } from "react";

export default function FloatingActionMenu() {
  const [chatOpen, setChatOpen] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (window.scrollY > 400) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  const scrollTop = () => {
    // Scroll window
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Fallbacks for various document structures
    if (document.documentElement) {
      document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
    }
    if (document.body) {
      document.body.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Back To Top Button */}
      <div className={`fixed z-40 bottom-24 md:bottom-28 right-4 md:right-8 pointer-events-none transition-opacity duration-300 ${chatOpen ? 'opacity-0' : 'opacity-100'}`}>
        <button 
          onClick={scrollTop}
          className={`pointer-events-auto flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-ira-primary hover:-translate-y-1 ${
            showScroll && !chatOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none hidden'
          } w-10 h-10 md:w-12 md:h-12 bg-gray-900 text-white rounded-full`}
          aria-label="Back to top"
        >
          <ArrowUp size={20} className="md:w-6 md:h-6" />
        </button>
      </div>

      {/* AI Assistant Chat Box */}
      <div className="fixed z-50 bottom-6 md:bottom-8 right-4 md:right-8 flex flex-col items-end pointer-events-none">
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
