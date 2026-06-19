"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Globe, Menu, X, User, ChevronDown, Phone, ArrowRight } from "lucide-react";
import { navigationItems } from "@/data/company";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-premium border-b border-gray-100"
            : "bg-transparent"
        }`}
      >
        {/* Top utility bar — only visible when not scrolled */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
          }`}
        >
          <div className="bg-ira-primary/90 backdrop-blur-sm text-white text-xs py-1.5 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              <div className="hidden sm:flex items-center gap-4 text-white/80">
                <a href="tel:+918007629969" className="flex items-center gap-1 hover:text-white transition-colors">
                  <Phone size={10} />
                  +91 80076 29969
                </a>
                <span className="w-px h-3 bg-white/20" />
                <span>info@irasynergy.com</span>
              </div>
              <div className="flex items-center gap-4 ml-auto">
                <Link href="/contact" className="hover:text-ira-accent transition-colors">
                  Contact Us
                </Link>
                <span className="w-px h-3 bg-white/20" />
                <button className="flex items-center gap-1 hover:text-ira-accent transition-colors">
                  <Globe size={11} />
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-[72px] items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
              <div className="w-10 h-10 bg-gradient-to-br from-ira-secondary to-ira-primary rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-ira-secondary/30 transition-shadow">
                S
              </div>
              <div className="flex flex-col">
                <span
                  className={`text-xl font-extrabold leading-none tracking-tight transition-colors ${
                    scrolled ? "text-ira-primary" : "text-white"
                  }`}
                >
                  iRA Synergy
                </span>
                <span
                  className={`text-[0.6rem] tracking-[0.2em] uppercase mt-0.5 font-semibold transition-colors ${
                    scrolled ? "text-ira-secondary" : "text-ira-accent"
                  }`}
                >
                  Private Limited
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigationItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                      scrolled
                        ? "text-gray-700 hover:text-ira-primary hover:bg-ira-primary/5"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                    {item.children && <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === item.label ? "rotate-180" : ""}`} />}
                  </Link>

                  {/* Dropdown */}
                  {item.children && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 pt-2 min-w-[280px] animate-fade-in-down">
                      <div className="bg-white rounded-xl shadow-premium-lg border border-gray-100 overflow-hidden p-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-gray-700 hover:bg-ira-primary/5 hover:text-ira-primary transition-colors group"
                          >
                            <span className="w-2 h-2 rounded-full bg-ira-accent group-hover:bg-ira-primary transition-colors" />
                            {child.label}
                          </Link>
                        ))}
                        <div className="border-t border-gray-100 mt-1 pt-1">
                          <Link
                            href={item.href}
                            className="flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold text-ira-primary hover:bg-ira-primary/5 transition-colors"
                          >
                            View All {item.label}
                            <ArrowRight size={14} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden sm:inline-flex btn-primary text-sm !py-2.5 !px-5"
              >
                Request Consultation
                <ArrowRight size={16} />
              </Link>
              <button
                onClick={() => setMobileOpen(true)}
                className={`lg:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${
                  scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"
                }`}
                aria-label="Open menu"
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
