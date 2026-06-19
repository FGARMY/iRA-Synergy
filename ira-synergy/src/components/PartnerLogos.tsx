import ScrollReveal from "./ui/ScrollReveal";
import { Building2, Recycle, MapPin, Zap, Dumbbell, MonitorSmartphone } from "lucide-react";

export default function PartnerLogos() {
  // Since we don't have the actual logo image files, we'll mock them with icons and text
  // that roughly match the visual weight of the logos in the mockup.
  const partners = [
    { name: "Smart City", desc: "MISSION TRANSFORMATION", icon: Building2, color: "text-blue-800" },
    { name: "Swachh Bharat", desc: "एक कदम स्वच्छता की ओर", icon: Recycle, color: "text-green-700" },
    { name: "Make in India", desc: "", icon: MapPin, color: "text-orange-600" },
    { name: "Ministry of New", desc: "& Renewable Energy", icon: Zap, color: "text-orange-700" },
    { name: "FIT INDIA", desc: "", icon: Dumbbell, color: "text-red-700" },
    { name: "Digital India", desc: "Power To Empower", icon: MonitorSmartphone, color: "text-red-600" },
  ];

  return (
    <section className="py-12 border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:justify-between">
            {partners.map((partner, i) => (
              <div key={i} className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                <partner.icon size={32} className={partner.color} />
                <div className="flex flex-col">
                  <span className={`text-sm font-extrabold leading-none ${partner.color}`}>
                    {partner.name}
                  </span>
                  {partner.desc && (
                    <span className="text-[9px] font-semibold text-gray-500 mt-1 uppercase tracking-wider">
                      {partner.desc}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
