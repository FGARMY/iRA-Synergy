import Link from "next/link";
import { ArrowRight, Leaf, ShieldCheck, Map, Settings } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";

export default function Hero() {
  return (
    <section className="relative min-h-[700px] lg:min-h-[800px] flex items-center pt-32 pb-32 lg:pt-40 lg:pb-32">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        {/* We use a placeholder pattern, but in real life this should be the solar-bench park image */}
        <div className="absolute inset-0 bg-gray-900 overflow-hidden">
           {/* Fallback pattern if image is missing */}
           <div className="absolute inset-0 pattern-grid opacity-20" />
           {/* Simulated hero image */}
           <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-10" />
           <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
           <img 
             src="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop" 
             alt="Smart City Infrastructure" 
             className="w-full h-full object-cover opacity-100"
           />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full">
        <ScrollReveal>
          <div className="max-w-2xl mt-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.15] tracking-tight">
              Building a <br />
              <span className="text-ira-accent font-extrabold">Smarter, Cleaner &</span> <br />
              Sustainable India
            </h1>
            
            <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-xl font-medium leading-relaxed">
              End-to-end solutions for Infrastructure, Environment & Community Wellbeing.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/solutions" className="bg-ira-accent hover:bg-ira-primary transition-colors text-white px-6 py-3 rounded text-sm font-bold flex items-center gap-2">
                EXPLORE SOLUTIONS
                <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded text-sm font-bold flex items-center gap-2 transition-colors">
                GET IN TOUCH
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Bottom Feature Bar */}
      <div className="absolute bottom-6 left-0 w-full z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap md:grid md:grid-cols-4 gap-4 py-4 relative inline-flex md:inline-grid">
            <div className="flex items-center gap-3">
              <Leaf size={32} strokeWidth={1.5} className="text-ira-accent flex-shrink-0" />
              <span className="text-white text-sm font-semibold leading-tight">Sustainable<br/>Solutions</span>
            </div>
            <div className="flex items-center gap-3 border-l border-white/20 pl-4">
              <ShieldCheck size={32} strokeWidth={1.5} className="text-ira-accent flex-shrink-0" />
              <span className="text-white text-sm font-semibold leading-tight">Quality<br/>Assured</span>
            </div>
            <div className="flex items-center gap-3 border-l border-white/20 pl-4">
              <Map size={32} strokeWidth={1.5} className="text-ira-accent flex-shrink-0" />
              <span className="text-white text-sm font-semibold leading-tight">Made in<br/>India</span>
            </div>
            <div className="flex items-center gap-3 border-l border-white/20 pl-4">
              <Settings size={32} strokeWidth={1.5} className="text-ira-accent flex-shrink-0" />
              <span className="text-white text-sm font-semibold leading-tight">Reliable<br/>Performance</span>
            </div>

            {/* Pagination Dots */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              <div className="w-2 h-2 rounded-full bg-ira-accent"></div>
              <div className="w-2 h-2 rounded-full bg-white/50"></div>
              <div className="w-2 h-2 rounded-full bg-white/50"></div>
              <div className="w-2 h-2 rounded-full bg-white/50"></div>
              <div className="w-2 h-2 rounded-full bg-white/50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
