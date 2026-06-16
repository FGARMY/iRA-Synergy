import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ira-primary text-white pt-16 pb-8 border-t-4 border-ira-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-white/20 pb-12">
          
          {/* Logo & About */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="inline-block mb-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-ira-secondary rounded-br-2xl rounded-tl-2xl flex items-center justify-center text-white font-bold text-2xl">
                  S
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-ira-primary leading-none tracking-tight">iRA Synergy</span>
                  <span className="text-[0.65rem] text-ira-secondary tracking-widest uppercase mt-1 border-t border-ira-secondary pt-0.5">Private Limited</span>
                </div>
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Innovative Solutions for Infrastructure & Sustainability. Building a Smarter, Cleaner & Sustainable India.
            </p>
            {/* Make in India */}
            <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg border border-white/20">
              <div className="w-12 h-8 bg-[url('https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Make_In_India.png/320px-Make_In_India.png')] bg-contain bg-no-repeat bg-center mix-blend-screen filter grayscale brightness-200"></div>
              <span className="font-bold tracking-widest text-sm text-white uppercase">Make in India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link href="/" className="hover:text-ira-accent transition-colors">Home</Link></li>
              <li><Link href="#focus" className="hover:text-ira-accent transition-colors">Our Focus Areas</Link></li>
              <li><Link href="#solutions" className="hover:text-ira-accent transition-colors">Solutions</Link></li>
              <li><Link href="#products" className="hover:text-ira-accent transition-colors">Products & Equipment</Link></li>
              <li><Link href="#" className="hover:text-ira-accent transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-ira-accent transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="col-span-1 lg:col-span-2 bg-black/20 p-6 rounded-2xl border border-white/10">
            <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Contact Us</h4>
            <div className="mb-4">
              <p className="font-bold text-xl text-ira-accent">Dinesh Anand</p>
              <p className="text-sm text-gray-300 uppercase tracking-widest font-semibold">Director</p>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-ira-accent mt-0.5 flex-shrink-0" />
                <a href="tel:+918007629969" className="text-gray-300 hover:text-white transition-colors">+91 80076 29969</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-ira-accent mt-0.5 flex-shrink-0" />
                <a href="mailto:info@irasynergy.com" className="text-gray-300 hover:text-white transition-colors">info@irasynergy.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-ira-accent mt-0.5 flex-shrink-0" />
                <a href="https://www.irasynergy.com" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white transition-colors">www.irasynergy.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-ira-accent mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Nashik, Maharashtra, India</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} iRA Synergy Private Limited. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors"><FacebookIcon /></a>
            <a href="#" className="hover:text-white transition-colors"><TwitterIcon /></a>
            <a href="#" className="hover:text-white transition-colors"><LinkedinIcon /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FacebookIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
  );
}

function TwitterIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
  );
}

function LinkedinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
  );
}

function Globe(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  )
}

