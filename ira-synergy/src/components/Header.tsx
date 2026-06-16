import Link from "next/link";
import { Search, Globe, Menu, User } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      {/* Top utility bar */}
      <div className="bg-ira-primary text-white text-xs py-1 px-4 sm:px-6 lg:px-8 flex justify-end items-center space-x-4">
        <Link href="#" className="hover:underline">Contact Us</Link>
        <Link href="#" className="hover:underline flex items-center gap-1"><Globe size={12}/> EN-IN</Link>
        <Link href="#" className="hover:underline flex items-center gap-1"><User size={12}/> Sign In</Link>
      </div>
      
      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-ira-secondary rounded-br-2xl rounded-tl-2xl flex items-center justify-center text-white font-bold text-xl">
                S
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-ira-primary leading-none tracking-tight">iRA Synergy</span>
                <span className="text-[0.65rem] text-ira-secondary tracking-widest uppercase mt-1 border-t border-ira-secondary pt-0.5">Private Limited</span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="#" className="text-gray-700 hover:text-ira-secondary font-medium">Home</Link>
            <Link href="#focus" className="text-gray-700 hover:text-ira-secondary font-medium">Focus Areas</Link>
            <Link href="#solutions" className="text-gray-700 hover:text-ira-secondary font-medium">Solutions</Link>
            <Link href="#products" className="text-gray-700 hover:text-ira-secondary font-medium">Products</Link>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            <button className="text-gray-700 hover:text-ira-primary">
              <Search className="w-6 h-6" />
            </button>
            <Link href="#contact" className="hidden sm:inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-sm text-white bg-ira-secondary hover:bg-ira-primary transition-colors">
              Get a Quote
            </Link>
            <button className="md:hidden text-gray-700">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
