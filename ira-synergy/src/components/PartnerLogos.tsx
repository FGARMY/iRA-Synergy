import ScrollReveal from "./ui/ScrollReveal";
import { Building2, Recycle, MapPin, Zap, Dumbbell, MonitorSmartphone } from "lucide-react";

export default function PartnerLogos() {
  // Since we don't have the actual logo image files, we'll mock them with icons and text
  // that roughly match the visual weight of the logos in the mockup.
  const partners = [
    { src: "/images/partners/smart-city.jpg", alt: "Smart City" },
    { src: "/images/partners/logo2.jpg", alt: "Partner Logo 2" },
    { src: "/images/partners/logo3.jpg", alt: "Partner Logo 3" },
    { src: "/images/partners/swachh-bharat.jpg", alt: "Swachh Bharat" },
    { src: "/images/partners/mnre.jpg", alt: "Ministry of New and Renewable Energy" },
    { src: "/images/partners/fit-india.jpg", alt: "Fit India" },
    { src: "/images/partners/digital-india.jpg", alt: "Digital India" },
  ];

  return (
    <section className="py-12 border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:justify-between">
            {partners.map((partner, i) => (
              <div key={i} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100 mix-blend-multiply">
                <img 
                  src={partner.src} 
                  alt={partner.alt} 
                  className="h-12 w-auto object-contain mix-blend-multiply" 
                />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
