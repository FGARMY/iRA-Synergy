"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Phone, Mail, FileText, Menu, X, Users, Globe, Camera, Video } from "lucide-react";
import { companyInfo } from "@/data/company";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/about" },
    { label: "SOLUTIONS", href: "/solutions" },
    { label: "PROJECTS", href: "/projects" },
    { label: "GALLERY", href: "/gallery" },
    { label: "DOWNLOADS", href: "/downloads" },
    { label: "BLOG / NEWS", href: "/blog" },
    { label: "CAREERS", href: "/careers" },
    { label: "CONTACT US", href: "/contact" },
  ];

  return (
    <header className="fixed w-full z-40 bg-white shadow-md transition-all duration-300">

      {/* Middle Bar - Logo & CTA */}
      <div className="px-4 py-2 md:py-3 lg:px-8 border-b border-gray-100 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 group">
            <img 
              src="/images/navbar-logo.jpg" 
              alt="iRA Synergy Logo" 
              className="h-10 sm:h-12 md:h-20 w-auto object-contain mix-blend-multiply"
            />
          </Link>
          <div className="hidden md:flex flex-col justify-center border-l-2 border-gray-200 pl-4 ml-2">
            <span className="text-sm font-semibold text-gray-800">Innovative Solutions for</span>
            <span className="text-sm font-semibold text-gray-800">Infrastructure & Sustainability</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/contact" className="hidden sm:flex items-center gap-2 bg-ira-primary-dark hover:bg-ira-primary text-white px-5 py-2.5 rounded text-sm font-bold transition-colors shadow-sm">
            REQUEST A CALL BACK
            <Phone size={14} />
          </Link>
          <button className="text-gray-500 hover:text-ira-primary p-2 border border-gray-200 rounded transition-colors">
            <Search size={18} />
          </button>
          <button
            className="lg:hidden text-gray-800 p-2 rounded transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Bottom Bar - Navigation Links */}
      <div className="hidden lg:flex justify-center items-center py-4 bg-ira-primary border-b border-white/10">
        <nav className="flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm font-bold transition-colors tracking-wide relative flex items-center gap-1 ${
                link.label === "HOME" ? "text-white" : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
              {link.label === "SOLUTIONS" && (
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
              )}
              {link.label === "HOME" && (
                <span className="absolute -bottom-4 left-0 w-full h-[3px] bg-white rounded-t-sm shadow-[0_-2px_4px_rgba(255,255,255,0.5)]"></span>
              )}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-6 py-3 text-sm font-bold text-gray-800 hover:bg-gray-50 border-b border-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
