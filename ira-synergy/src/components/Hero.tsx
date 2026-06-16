import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative bg-ira-primary h-[600px] flex items-center overflow-hidden">
      {/* Background image overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000')", 
        }}
      >
        <div className="absolute inset-0 bg-ira-primary/70 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/20 mb-6 text-sm font-medium tracking-wide">
            <span className="w-2 h-2 rounded-full bg-ira-accent animate-pulse"></span>
            Building a Smarter, Cleaner & Sustainable India
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
            Innovative Solutions for <span className="text-ira-accent">Infrastructure</span> & <span className="text-ira-accent">Sustainability</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
            Partnering with government and communities to execute impactful development projects, transforming ideas into sustainable infrastructure for a stronger tomorrow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#solutions" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-sm text-ira-primary bg-white hover:bg-gray-100 transition-colors duration-200 shadow-lg group">
              Explore Our Solutions
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-sm text-white bg-transparent border-2 border-white hover:bg-white/10 transition-colors duration-200">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 text-white">
        <svg className="relative block w-full h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="fill-white/10"></path>
          <path d="M0 120L1200 120 1200 60 0 120z" className="fill-white"></path>
        </svg>
      </div>
    </div>
  );
}
