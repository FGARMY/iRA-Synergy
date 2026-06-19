import Link from "next/link";
import { Phone, Mail, MapPin, Globe, ArrowUpRight } from "lucide-react";
import { companyInfo } from "@/data/company";

const footerLinks = {
  solutions: [
    { label: "Smart School Infrastructure", href: "/solutions/smart-school-infrastructure" },
    { label: "Waste Management", href: "/solutions/waste-management-systems" },
    { label: "Renewable Energy", href: "/solutions/renewable-energy-solutions" },
    { label: "Public Health & Hygiene", href: "/solutions/public-health-hygiene" },
    { label: "Fitness & Play Equipment", href: "/solutions/fitness-play-equipment" },
    { label: "Smart City & CSR", href: "/solutions/smart-city-csr-projects" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Projects", href: "/projects" },
    { label: "Products Catalog", href: "/products" },
    { label: "Contact Us", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-ira-dark text-white relative overflow-hidden">
      {/* Top accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-ira-primary via-ira-accent to-ira-amber" />

      <div className="absolute inset-0 pattern-grid opacity-5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 pb-12 border-b border-white/10">
          {/* Logo & About */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-6 group">
              <div className="w-10 h-10 bg-gradient-to-br from-ira-secondary to-ira-accent rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                S
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold text-white leading-none tracking-tight">
                  iRA Synergy
                </span>
                <span className="text-[0.6rem] text-ira-accent tracking-[0.2em] uppercase mt-0.5 font-semibold">
                  Private Limited
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {companyInfo.tagline}. {companyInfo.mission}.
            </p>

            {/* Make in India badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10">
              <span className="text-xl">🇮🇳</span>
              <div>
                <span className="text-xs font-bold text-white uppercase tracking-wider block">Make in India</span>
                <span className="text-[0.65rem] text-gray-500">Proudly Indian</span>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-6">
              Solutions
            </h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-ira-accent transition-colors flex items-center gap-1 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-ira-accent/40 group-hover:bg-ira-accent transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-ira-accent transition-colors flex items-center gap-1 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-ira-accent/40 group-hover:bg-ira-accent transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-6">
              Contact Us
            </h4>
            <div className="space-y-4 mb-6">
              <div className="mb-3">
                <p className="font-bold text-ira-accent text-lg">{companyInfo.director}</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Director</p>
              </div>

              <a href={`tel:${companyInfo.phone}`} className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                <Phone size={16} className="text-ira-accent flex-shrink-0" />
                {companyInfo.phone}
              </a>
              <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                <Mail size={16} className="text-ira-accent flex-shrink-0" />
                {companyInfo.email}
              </a>
              <a href={`https://${companyInfo.website}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                <Globe size={16} className="text-ira-accent flex-shrink-0" />
                {companyInfo.website}
              </a>
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin size={16} className="text-ira-accent flex-shrink-0 mt-0.5" />
                Nashik, Maharashtra, India
              </div>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} iRA Synergy Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href={companyInfo.social.linkedin} className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-ira-accent hover:text-white transition-all" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href={companyInfo.social.instagram} className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-ira-accent hover:text-white transition-all" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href={companyInfo.social.facebook} className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-ira-accent hover:text-white transition-all" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href={companyInfo.social.youtube} className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-ira-accent hover:text-white transition-all" aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
