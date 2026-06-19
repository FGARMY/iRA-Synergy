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
      {/* Top Bar - Contacts & Social */}
      <div className="hidden lg:flex justify-between items-center px-4 py-1.5 bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-700">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-ira-primary-dark">
            <Phone size={14} className="text-ira-accent" />
            <span>+91 8007629969</span>
            <span className="text-gray-300">|</span>
            <span>+91 88880 48480</span>
            <span className="text-gray-300">|</span>
            <span>+91 75880 15401</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Mail size={14} className="text-ira-accent" />
            <a href="mailto:irasynergy2026@gmail.com" className="hover:text-ira-primary">
              irasynergy2026@gmail.com
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <FileText size={14} className="text-ira-accent" />
            <span>GST No : 27AAICI9182Q1ZK</span>
          </div>
          <div className="flex items-center gap-2">
            <a href="#" className="text-blue-600 hover:opacity-80"><Users size={16} /></a>
            <a href="#" className="text-blue-700 hover:opacity-80"><Globe size={16} /></a>
            <a href="#" className="text-pink-600 hover:opacity-80"><Camera size={16} /></a>
            <a href="#" className="text-red-600 hover:opacity-80"><Video size={16} /></a>
          </div>
        </div>
      </div>

      {/* Middle Bar - Logo & CTA */}
      <div className="px-4 py-3 lg:px-8 border-b border-gray-100 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex-shrink-0">
            {/* Replace with actual logo image if available, using styled text for now to match mockup logo structure */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-10 bg-ira-accent rounded-b-full rounded-tr-full flex-shrink-0 relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-tr from-ira-primary-dark to-ira-accent" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-800 leading-none tracking-tight">
                  <span className="text-ira-accent font-black">iRA</span> Synergy
                </span>
                <span className="text-[10px] text-gray-500 font-semibold tracking-widest uppercase mt-1 text-center">
                  Private Limited
                </span>
              </div>
            </div>
          </Link>
          <div className="hidden md:flex flex-col justify-center border-l-2 border-gray-200 pl-4 ml-2">
            <span className="text-sm font-semibold text-gray-800">Innovative Solutions for</span>
            <span className="text-sm font-semibold text-gray-800">Infrastructure & Sustainability</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/contact" className="hidden sm:flex items-center gap-2 bg-ira-primary-dark hover:bg-ira-primary text-white px-5 py-2.5 rounded text-sm font-bold transition-colors">
            REQUEST A CALL BACK
            <Phone size={14} />
          </Link>
          <button className="text-gray-500 hover:text-ira-primary p-2 border border-gray-200 rounded">
            <Search size={18} />
          </button>
          <button
            className="lg:hidden text-gray-800 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Bottom Bar - Navigation Links */}
      <div className="hidden lg:flex justify-center items-center py-3 bg-white">
        <nav className="flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-bold text-gray-800 hover:text-ira-primary transition-colors tracking-wide"
            >
              {link.label}
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
