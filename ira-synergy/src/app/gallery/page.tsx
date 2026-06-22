import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { solutions } from "@/data/solutions";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Gallery | iRA Synergy",
  description: "Explore our massive, real-world deployments of heavy infrastructure and sustainable smart city solutions.",
};

// Aggregate images for the Bento Grid
const getGalleryItems = () => {
  const items: Array<{ src: string; title: string; category: string; bentoSpan: string }> = [];

  // Solutions (Hero Items - Large Squares)
  solutions.forEach((s) => {
    if (s.image) {
      items.push({
        src: s.image,
        title: s.title,
        category: "Sector Deployment",
        bentoSpan: "col-span-2 row-span-2", // Big 2x2 block
      });
    }
  });

  // Products (Fillers - Wide, Tall, or Small Squares)
  products.forEach((p, idx) => {
    p.images.forEach((img, imgIdx) => {
      // Avoid duplicates
      if (!items.find(i => i.src === img)) {
        
        let span = "col-span-1 row-span-1"; // Standard 1x1 block
        
        if (imgIdx === 0 && idx % 4 === 0) {
          span = "col-span-2 row-span-1"; // Wide horizontal block
        } else if (imgIdx === 0 && idx % 3 === 0) {
          span = "col-span-1 row-span-2"; // Tall vertical block
        }

        items.push({
          src: img,
          title: p.name,
          category: p.category,
          bentoSpan: span,
        });
      }
    });
  });

  return items;
};

export default function GalleryPage() {
  const items = getGalleryItems();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      <main className="flex-grow pt-20 lg:pt-44 pb-32">
        
        {/* Minimalist Light Hero Section - UNTOUCHED HEADLINE AS REQUESTED */}
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 border-b border-gray-100 pb-12">
              <div className="max-w-4xl">
                <span className="text-ira-primary text-xs font-black tracking-[0.4em] uppercase mb-6 block">
                  Exhibition
                </span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] text-gray-900 uppercase">
                  Engineering <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-200 font-light">Scale.</span>
                </h1>
              </div>
              <div className="max-w-md">
                <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed">
                  A curated visual showcase of our industrial-grade deployments across India. Designed for high impact, engineered for absolute permanence.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Ultra-Modern Bento Box Layout */}
        <div className="max-w-[100rem] mx-auto px-2 sm:px-6 lg:px-8">
          {/* 
            Strict grid with auto-flow-dense to fill gaps perfectly.
            Tight gaps (gap-2) to create that modern, seamless look.
          */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[250px] md:auto-rows-[350px] gap-2 grid-flow-dense">
            {items.map((item, idx) => (
              <ScrollReveal 
                key={idx} 
                delay={(idx % 12) * 40} 
                className={`${item.bentoSpan}`}
              >
                <div className="group relative w-full h-full rounded-2xl overflow-hidden bg-gray-100 cursor-pointer">
                  
                  {/* The Image */}
                  <Image 
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />

                  {/* High-end gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Modern Corner Overlay Label */}
                  <div className="absolute bottom-4 left-4 opacity-0 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out z-10 pr-4">
                    <span className="block text-[9px] text-white/80 font-black uppercase tracking-widest mb-1 drop-shadow-md">
                      {item.category}
                    </span>
                    <h3 className="text-white text-base md:text-lg font-bold tracking-tight drop-shadow-lg leading-tight">
                      {item.title}
                    </h3>
                  </div>

                  {/* Top-Right Arrow Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center opacity-0 -translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out z-10">
                    <ArrowUpRight size={18} className="text-gray-900" />
                  </div>

                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </main>
      
      <Footer />
    </div>
  );
}
