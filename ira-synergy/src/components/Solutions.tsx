"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Building2, Recycle, Zap, HeartPulse, Dumbbell, Globe, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";
import { solutions } from "@/data/solutions";

const iconMap: Record<string, React.ElementType> = {
  "smart-school-infrastructure": Building2,
  "waste-management-systems": Recycle,
  "renewable-energy-solutions": Zap,
  "public-health-hygiene": HeartPulse,
  "fitness-play-equipment": Dumbbell,
  "smart-city-csr-projects": Globe,
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
              const Icon = iconMap[solution.id] || Building2;
              return (
                <ScrollReveal key={solution.id} delay={idx * 50} className="snap-start shrink-0 w-[280px] md:w-[320px]">
                  <div className="bg-white rounded border border-gray-200 p-8 text-center flex flex-col items-center h-full hover:shadow-xl transition-shadow group">
                    <div className="mb-5 text-ira-primary-dark group-hover:text-ira-accent transition-colors">
                      <Icon size={48} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 uppercase h-14 flex items-center justify-center">
                      {solution.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-6 flex-grow leading-relaxed line-clamp-3">
                      {solution.description}
                    </p>
                    <Link
                      href={`/solutions/${solution.id}`}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-gray-800 hover:text-ira-accent transition-colors mt-auto"
                    >
                      Explore
                      <ArrowRight size={16} />
                    </Link>
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
