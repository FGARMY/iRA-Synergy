import Link from "next/link";
import { ArrowRight, Leaf, ShieldCheck, MapPin, Settings } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";

export default function Hero() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center pt-32 pb-16 lg:pt-40 lg:pb-0">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        {/* We use a placeholder pattern, but in real life this should be the solar-bench park image */}
        <div className="absolute inset-0 bg-gray-900 overflow-hidden">
           {/* Fallback pattern if image is missing */}
           <div className="absolute inset-0 pattern-grid opacity-20" />
           {/* Simulated hero image */}
           <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
           <img 
             src="/images/hero-bg.jpg" 
             alt="Smart City Infrastructure" 
             className="w-full h-full object-cover opacity-60"
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
      <div className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-sm border-t border-white/10 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
            <div className="flex items-center gap-3">
              <Leaf size={24} className="text-ira-accent flex-shrink-0" />
              <span className="text-white text-sm font-semibold">Sustainable<br/>Solutions</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck size={24} className="text-ira-accent flex-shrink-0" />
              <span className="text-white text-sm font-semibold">Quality<br/>Assured</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={24} className="text-ira-accent flex-shrink-0" />
              <span className="text-white text-sm font-semibold">Made in<br/>India</span>
            </div>
            <div className="flex items-center gap-3">
              <Settings size={24} className="text-ira-accent flex-shrink-0" />
              <span className="text-white text-sm font-semibold">Reliable<br/>Performance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
