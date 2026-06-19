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
    <section className="section-padding bg-ira-surface relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="section-header">
            <div className="section-label bg-ira-accent/10 text-ira-primary">
              <span className="w-2 h-2 rounded-full bg-ira-accent" />
              Why Choose Us
            </div>
            <h2 className="section-title text-gray-900">
              Trusted by Government & Industry
            </h2>
            <p className="section-subtitle">
              Certified, compliant, and recognized — we deliver quality you can count on.
            </p>
          </div>
        </ScrollReveal>

        {/* Certifications Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {certifications.map((cert, idx) => {
            const Icon = iconMap[cert.icon] || Shield;
            return (
              <ScrollReveal key={cert.id} delay={idx * 80}>
                <div className="group bg-white rounded-xl p-6 text-center glass-card card-hover h-full">
                  <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-ira-primary/10 to-ira-secondary/10 flex items-center justify-center mb-4 group-hover:from-ira-primary group-hover:to-ira-secondary transition-all duration-500">
                    <Icon
                      size={28}
                      className="text-ira-primary group-hover:text-white transition-colors duration-500"
                    />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1">{cert.shortName}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{cert.name}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Partner Marquee */}
        <ScrollReveal>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-50">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 text-center">
                Government & Institutional Partnerships
              </p>
            </div>
            <div className="relative overflow-hidden py-6">
              <div className="flex animate-marquee whitespace-nowrap">
                {[...partners, ...partners].map((partner, idx) => (
                  <div
                    key={idx}
                    className="mx-8 flex items-center gap-2 text-gray-400 hover:text-ira-primary transition-colors flex-shrink-0"
                  >
                    <div className="w-2 h-2 rounded-full bg-ira-accent/40" />
                    <span className="text-sm font-semibold whitespace-nowrap">{partner}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Trust stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            {
              icon: "🏛️",
              title: "Government Approved",
              description: "Registered on GeM, MSME, and Startup India platforms for direct government procurement.",
            },
            {
              icon: "🔒",
              title: "Quality Certified",
              description: "ISO 9001:2015 and ISO 14001:2015 certified — ensuring consistent quality and environmental responsibility.",
            },
            {
              icon: "🇮🇳",
              title: "100% Make in India",
              description: "All products are designed, manufactured, and assembled in India — supporting Atmanirbhar Bharat.",
            },
          ].map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 150}>
              <div className="bg-white rounded-xl p-6 glass-card card-hover h-full">
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
