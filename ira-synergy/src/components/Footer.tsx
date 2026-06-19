import Link from "next/link";
import { MapPin, Phone, Mail, FileText, ChevronRight, Facebook, Linkedin, Instagram, Youtube, MessageCircle, Download } from "lucide-react";
import { companyInfo } from "@/data/company";

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Solutions", href: "/solutions" },
    { label: "Projects", href: "/projects" },
    { label: "Gallery", href: "/gallery" },
    { label: "Downloads", href: "/downloads" },
    { label: "Blog / News", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Contact Us", href: "/contact" },
  ];

  const downloads = [
    { label: "Company Profile", file: "#" },
    { label: "Product Catalogue", file: "#" },
    { label: "Brochure", file: "#" },
    { label: "Certifications", file: "#" },
  ];

  return (
    <footer className="bg-ira-primary-dark text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-10 bg-ira-accent rounded-b-full rounded-tr-full flex-shrink-0 relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-tr from-ira-primary to-ira-accent" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-none tracking-tight">
                  <span className="text-ira-accent font-black">iRA</span> Synergy
                </span>
                <span className="text-[9px] text-gray-300 font-semibold tracking-widest uppercase mt-1">
                  Private Limited
                </span>
              </div>
            </div>
            <div className="w-12 h-px bg-ira-accent mb-6" />
            <p className="text-xs text-gray-300 leading-relaxed mb-6">
              iRA Synergy Private Limited offers innovative, eco-friendly and technology-driven solutions for infrastructure, environment, health & community development.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-[#3b5998] flex items-center justify-center hover:opacity-80 transition-opacity"><Facebook size={14} /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#0077b5] flex items-center justify-center hover:opacity-80 transition-opacity"><Linkedin size={14} /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#f09433] to-[#bc1888] flex items-center justify-center hover:opacity-80 transition-opacity"><Instagram size={14} /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#ff0000] flex items-center justify-center hover:opacity-80 transition-opacity"><Youtube size={14} /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6">QUICK LINKS</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-xs text-gray-300 hover:text-ira-accent transition-colors flex items-center gap-2 group">
                    <ChevronRight size={12} className="text-ira-accent group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6">CONTACT US</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-ira-accent flex-shrink-0 mt-0.5" />
                <span className="text-xs text-gray-300 leading-relaxed">
                  Shop No. 4113, 4099 Roongta Shopping Hub, Near Hotel Sai Saya, Mumbai Agra Highway Road, Nashik, Maharashtra (India)
                </span>
              </li>
              <li className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-ira-accent flex-shrink-0" />
                  <span className="text-xs text-gray-300">+91 8007629969</span>
                </div>
                <div className="flex items-center gap-3 ml-7">
                  <span className="text-xs text-gray-300">+91 88880 48480</span>
                </div>
                <div className="flex items-center gap-3 ml-7">
                  <span className="text-xs text-gray-300">+91 75880 15401</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-ira-accent flex-shrink-0" />
                <a href="mailto:irasynergy2026@gmail.com" className="text-xs text-gray-300 hover:text-ira-accent">
                  irasynergy2026@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FileText size={16} className="text-ira-accent flex-shrink-0" />
                <span className="text-xs text-gray-300">GST No : 27AAICI9182Q1ZK</span>
              </li>
            </ul>
            <a href={companyInfo.whatsappLink} className="mt-6 w-full bg-[#25D366] hover:bg-[#128C7E] transition-colors text-white text-xs font-bold py-2.5 rounded flex items-center justify-center gap-2">
              <MessageCircle size={16} />
              CHAT ON WHATSAPP
            </a>
          </div>

          {/* Column 4: Download Center */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6">DOWNLOAD CENTER</h3>
            <ul className="space-y-4">
              {downloads.map((item, i) => (
                <li key={i}>
                  <a href={item.file} className="flex items-center justify-between group">
                    <div className="flex items-center gap-2 text-xs text-gray-300 group-hover:text-ira-accent transition-colors">
                      <FileText size={14} className="text-ira-accent" />
                      {item.label}
                    </div>
                    <span className="text-[10px] text-gray-500 font-mono">(PDF)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Enquiry Form */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6">ENQUIRY FORM</h3>
            <form className="space-y-3">
              <input type="text" placeholder="Your Name" className="w-full bg-white text-gray-900 text-xs px-3 py-2.5 rounded focus:outline-none focus:ring-2 focus:ring-ira-accent" />
              <input type="tel" placeholder="Mobile Number" className="w-full bg-white text-gray-900 text-xs px-3 py-2.5 rounded focus:outline-none focus:ring-2 focus:ring-ira-accent" />
              <input type="email" placeholder="Email Address" className="w-full bg-white text-gray-900 text-xs px-3 py-2.5 rounded focus:outline-none focus:ring-2 focus:ring-ira-accent" />
              <textarea placeholder="Your Message" rows={2} className="w-full bg-white text-gray-900 text-xs px-3 py-2.5 rounded focus:outline-none focus:ring-2 focus:ring-ira-accent resize-none"></textarea>
              <button type="button" className="w-full bg-ira-accent hover:bg-ira-accent-light transition-colors text-white text-xs font-bold py-2.5 rounded uppercase">
                SUBMIT ENQUIRY
              </button>
            </form>
          </div>

        </div>
        
        {/* Bottom Bar */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-gray-400">
          <p>© {new Date().getFullYear()} iRA Synergy Private Limited. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
