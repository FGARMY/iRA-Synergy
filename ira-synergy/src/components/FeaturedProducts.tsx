"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";
import { getFeaturedProducts } from "@/data/products";

export default function FeaturedProducts() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const featuredProducts = getFeaturedProducts();

  const fallbackImages = [
    "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=600&auto=format&fit=crop", // solar 
    "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=600&auto=format&fit=crop", // waste bin
    "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=600&auto=format&fit=crop", // engineering
    "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=600&auto=format&fit=crop", // architecture/city
    "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=600&auto=format&fit=crop", // clean energy
    "https://images.unsplash.com/photo-1520190282873-afe1285c9af2?q=80&w=600&auto=format&fit=crop", // public tech
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = current.clientWidth > 768 ? 350 : 280;
      current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-10 bg-gray-50 relative overflow-hidden">
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

          {/* Grid Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-8 pt-2">
            {featuredProducts.map((product, idx) => (
              <ScrollReveal key={product.id} delay={idx * 100} className="w-full">
                <div className="bg-white rounded-lg border border-gray-100 shadow-sm h-full flex flex-col hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  {/* Product Image Area */}
                  <div className="h-40 bg-gray-100 relative overflow-hidden">
                    <div className="absolute inset-0 bg-ira-primary/5 group-hover:bg-transparent transition-colors z-10" />
                    <img 
                      src={product.images[0].startsWith("/") ? fallbackImages[idx % fallbackImages.length] : product.images[0]} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-5 flex-grow flex flex-col">
                    <h3 className="text-base font-bold text-gray-900 mb-3 text-center line-clamp-2">
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
                      className="w-full py-2 border border-gray-200 hover:border-ira-accent text-gray-700 hover:bg-ira-accent hover:text-white transition-all duration-300 rounded text-xs font-bold text-center flex items-center justify-center gap-1"
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
