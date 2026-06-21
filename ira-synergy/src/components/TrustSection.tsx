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

export default function TrustSection() {
  return (
    <section className="bg-ira-surface relative overflow-hidden pb-12 pt-4">
      <div className="absolute inset-0 gradient-mesh" />



      {/* Partner Marquee - Edge to Edge */}
      <div className="border-y border-gray-100 shadow-sm overflow-hidden py-10 bg-white relative z-10">
        <ScrollReveal>
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-wider text-gray-400 text-center">
              Our Esteemed Clients
            </p>
          </div>
          
          <div className="relative overflow-hidden flex group">
            <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap items-center" style={{ animationDuration: '60s' }}>
              {[...Array(46)].map((_, i) => i + 1).concat([...Array(46)].map((_, i) => i + 1)).map((num, idx) => (
                <div key={`client-${idx}`} className="mx-8 flex items-center justify-center w-32 h-20 flex-shrink-0 transition-transform duration-300 hover:scale-110">
                  <img src={`/images/clients/client-${num}.jpg`} alt={`Client ${num}`} className="max-w-full max-h-full object-contain mix-blend-multiply" />
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
