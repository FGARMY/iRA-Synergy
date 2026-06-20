"use client";

import { Phone, MessageCircle, Mail, X, ArrowUp } from "lucide-react";
import { companyInfo } from "@/data/company";
import { useState, useEffect } from "react";

export default function FloatingActionMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
      <div className={`fixed z-40 bottom-24 md:bottom-28 right-4 md:right-8 pointer-events-none transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}>
        <button 
          onClick={scrollTop}
          className={`pointer-events-auto flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-ira-primary hover:-translate-y-1 ${
            showScroll && !menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none hidden'
          } w-10 h-10 md:w-12 md:h-12 bg-gray-900 text-white rounded-full`}
          aria-label="Back to top"
        >
          <ArrowUp size={20} className="md:w-6 md:h-6" />
        </button>
      </div>

      {/* Quick Connect Menu */}
      <div className="fixed z-50 bottom-6 md:bottom-8 right-4 md:right-8 flex flex-col items-end pointer-events-none">
        {menuOpen && (
          <div className="pointer-events-auto bg-white w-[250px] rounded-2xl shadow-2xl flex flex-col overflow-hidden mb-4 border border-gray-200 origin-bottom-right transition-all">
            <div className="bg-ira-primary text-white p-4 flex justify-between items-center">
              <div>
                <h3 className="font-bold text-sm">Quick Connect</h3>
                <p className="text-[10px] text-white/80">We usually respond instantly</p>
              </div>
              <button aria-label="Close Menu" onClick={() => setMenuOpen(false)} className="text-white hover:bg-white/20 rounded-full p-1 transition-colors">
                <X size={20} />
              </button>
            </div>
            
            <div className="flex flex-col p-2">
              <a 
                href={`tel:${companyInfo.phone.replace(/[^0-9+]/g, '')}`} 
                className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-xl transition-colors text-gray-700 hover:text-ira-primary font-medium text-sm"
              >
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center">
                  <Phone size={18} />
                </div>
                Call Us Directly
              </a>
              
              <a 
                href={`https://wa.me/${companyInfo.whatsapp}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-xl transition-colors text-gray-700 hover:text-ira-primary font-medium text-sm"
              >
                <div className="w-10 h-10 rounded-full bg-green-50 text-green-500 flex items-center justify-center">
                  <MessageCircle size={18} />
                </div>
                WhatsApp Chat
              </a>
              
              <a 
                href={`mailto:${companyInfo.email}`} 
                className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-xl transition-colors text-gray-700 hover:text-ira-primary font-medium text-sm"
              >
                <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center">
                  <Mail size={18} />
                </div>
                Email Support
              </a>
            </div>
          </div>
        )}

        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close Menu" : "Contact Us"}
          aria-expanded={menuOpen}
          className={`pointer-events-auto flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105 ${
            menuOpen 
              ? 'w-12 h-12 bg-gray-800 text-white rounded-full' 
              : 'w-14 h-14 md:w-16 md:h-16 bg-ira-primary text-white rounded-full'
          }`}
        >
          {menuOpen ? <X size={24} aria-hidden="true" /> : <MessageCircle size={28} aria-hidden="true" />}
        </button>
      </div>
    </>
  );
}
