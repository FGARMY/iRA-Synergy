"use client";

import { useRef, useEffect } from "react";
import { Shield, Award, Building2, Rocket, FileCheck, Leaf } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";
import { certifications } from "@/data/company";

const iconMap: Record<string, React.ElementType> = {
  Shield,
  Award,
  Building2,
  Rocket,
  FileCheck,
  Leaf,
};

const partners = [
  "Government of India",
  "Smart Cities Mission",
  "Swachh Bharat Mission",
  "NITI Aayog",
  "GeM Portal",
  "Make in India",
  "Startup India",
  "MSME",
];

const partnerLogos = [
  "https://commons.wikimedia.org/wiki/Special:FilePath/Tata_logo.svg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Mahindra_Rise_New_Logo.svg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Larsen-%26-Toubro-Logo.svg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Reliance_Industries_Logo.svg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Adani_Group_logo.svg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Godrej_Logo.svg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Infosys_logo.svg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Wipro_Primary_Logo_Color_RGB.svg"
];

export default function TrustSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const containerCenter = container.getBoundingClientRect().left + container.offsetWidth / 2;
        const items = container.querySelectorAll('.client-logo-wrapper');
        
        items.forEach((item) => {
          const rect = item.getBoundingClientRect();
          const itemCenter = rect.left + rect.width / 2;
          const distance = Math.abs(containerCenter - itemCenter);
          const maxDistance = container.offsetWidth / 2;
          
          // scale between 0.6 at edges and 1.5 at center
          let scale = 1.5 - (distance / maxDistance) * 0.9;
          if (scale < 0.6) scale = 0.6;
          
          // Apply scale to image to avoid changing layout width
          const img = item.querySelector('img');
          if (img) {
            img.style.transform = `scale(${scale})`;
          }
        });
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="bg-ira-surface relative overflow-hidden pb-12 pt-4">
      <div className="absolute inset-0 gradient-mesh" />

      {/* Partner Marquee - Edge to Edge */}
      <div className="border-y border-gray-100 shadow-sm overflow-hidden py-6 sm:py-10 bg-white relative z-10" ref={containerRef}>
        <ScrollReveal>
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-wider text-gray-400 text-center">
              Our Esteemed Clients
            </p>
          </div>
          
          {/* Added CSS mask for fading edges and smooth entry/exit */}
          <div 
            className="relative overflow-hidden flex group"
            style={{ maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)' }}
          >
            <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap items-center py-8 sm:py-12" style={{ animationDuration: '40s' }}>
              {partnerLogos.concat(partnerLogos).concat(partnerLogos).concat(partnerLogos).map((logoUrl, idx) => (
                <div key={`client-${idx}`} className="client-logo-wrapper mx-10 sm:mx-20 flex items-center justify-center w-20 h-12 sm:w-28 sm:h-16 flex-shrink-0 cursor-pointer">
                  <img 
                    src={logoUrl} 
                    alt={`Partner ${idx}`} 
                    className="max-w-full max-h-full object-contain mix-blend-multiply will-change-transform opacity-80 hover:opacity-100 transition-opacity" 
                  />
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
