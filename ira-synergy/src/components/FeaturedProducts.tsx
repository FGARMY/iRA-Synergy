"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";
import { getFeaturedProducts } from "@/data/products";

export default function FeaturedProducts() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const featuredProducts = getFeaturedProducts();

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = current.clientWidth > 768 ? 350 : 280;
      current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
            <div className="flex items-center gap-4">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 uppercase">
                Featured Products
              </h2>
              <div className="h-px bg-gray-300 w-12 md:w-32 hidden sm:block"></div>
            </div>
            <Link href="/products" className="text-sm font-bold text-ira-primary-dark hover:text-ira-accent transition-colors flex items-center gap-1">
              VIEW ALL PRODUCTS
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
            {featuredProducts.map((product, idx) => (
              <ScrollReveal key={product.id} delay={idx * 100} className="snap-start shrink-0 w-[280px] md:w-[320px]">
                <div className="bg-white rounded border border-gray-200 h-full flex flex-col hover:shadow-xl transition-shadow overflow-hidden group">
                  {/* Product Image Area */}
                  <div className="h-48 bg-gray-100 relative overflow-hidden">
                    <div className="absolute inset-0 bg-ira-primary/5 group-hover:bg-transparent transition-colors z-10" />
                    {/* Placeholder for actual image */}
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                       <span className="text-gray-400 font-medium">Product Image</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">
                      {product.name}
                    </h3>
                    
                    <ul className="space-y-2 mb-6 flex-grow">
                      {product.features.slice(0, 4).map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 size={16} className="text-ira-accent mt-0.5 flex-shrink-0" />
                          <span className="text-xs text-gray-600 leading-tight">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link 
                      href={`/products/${product.slug}`}
                      className="w-full py-2 border border-ira-accent text-ira-accent hover:bg-ira-accent hover:text-white transition-colors rounded text-xs font-bold text-center flex items-center justify-center gap-1"
                    >
                      VIEW DETAILS
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
