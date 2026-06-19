"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Building2, Recycle, Zap, HeartPulse, Dumbbell, Globe, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";
import { solutions } from "@/data/solutions";

const imageMap: Record<string, string> = {
  "sol-1": "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop", // Smart School
  "sol-2": "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=600&auto=format&fit=crop", // Waste Management
  "sol-3": "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=600&auto=format&fit=crop", // Renewable Energy
  "sol-4": "https://images.unsplash.com/photo-1584820927498-cafe8c1a6602?q=80&w=600&auto=format&fit=crop", // Public Health
  "sol-5": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop", // Fitness
  "sol-6": "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=600&auto=format&fit=crop", // Smart City
};

export default function Solutions() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = current.clientWidth > 768 ? 350 : 280;
      current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="solutions" className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header line */}
        <ScrollReveal>
          <div className="flex items-center justify-between gap-4 mb-12">
            <div className="flex items-center gap-4">
              <h2 className="text-xl md:text-2xl font-bold text-ira-primary-dark tracking-wide uppercase">
                Our Solutions
              </h2>
              <div className="h-px bg-gray-300 w-12 md:w-32 hidden sm:block"></div>
            </div>
            <Link href="/solutions" className="text-sm font-bold text-gray-800 hover:text-ira-accent transition-colors flex items-center gap-1">
              VIEW ALL
              <ArrowRight size={16} />
            </Link>
          </div>
        </ScrollReveal>

        <div className="relative group">
          {/* Scroll Buttons */}
          <button 
            onClick={() => scroll("left")}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-gray-500 hover:text-ira-primary focus:outline-none hidden md:flex transition-transform opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={() => scroll("right")}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-gray-500 hover:text-ira-primary focus:outline-none hidden md:flex transition-transform opacity-0 group-hover:opacity-100"
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 pt-2 px-2 -mx-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {solutions.map((solution, idx) => {
              return (
                <ScrollReveal key={solution.id} delay={idx * 50} className="snap-start shrink-0 w-[240px] md:w-[280px]">
                  <div className="bg-white rounded border border-gray-200 flex flex-col h-full hover:shadow-xl transition-shadow group overflow-hidden">
                    <div className="h-40 w-full overflow-hidden">
                      <img 
                        src={imageMap[solution.id] || "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=600"} 
                        alt={solution.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 text-center flex flex-col items-center flex-grow">
                      <h3 className="text-md font-bold text-gray-900 mb-3 uppercase h-12 flex items-center justify-center">
                        {solution.title}
                      </h3>
                      <p className="text-xs text-gray-600 mb-6 flex-grow leading-relaxed line-clamp-3">
                        {solution.description}
                      </p>
                      <Link
                        href={`/solutions/${solution.id}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-800 hover:text-ira-accent transition-colors mt-auto"
                      >
                        Explore
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
