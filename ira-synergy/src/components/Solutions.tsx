import Link from "next/link";
import { School, Recycle, Sun, HeartPulse, Dumbbell, Building2, ArrowRight, CheckCircle2 } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";
import { solutions } from "@/data/solutions";

const iconMap: Record<string, React.ElementType> = {
  School,
  Recycle,
  Sun,
  HeartPulse,
  Dumbbell,
  Building2,
};

const services = ["Government Supply", "Installation", "Service & AMC", "Maintenance"];

export default function Solutions() {
  return (
    <section id="solutions" className="section-padding bg-ira-surface relative">
      <div className="absolute inset-0 pattern-topo" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="section-header">
            <div className="section-label bg-ira-primary/10 text-ira-primary">
              <span className="w-2 h-2 rounded-full bg-ira-accent" />
              What We Deliver
            </div>
            <h2 className="section-title text-gray-900">Our Solutions</h2>
            <p className="section-subtitle">
              End-to-end infrastructure and sustainability solutions for government,
              institutions, and communities across India.
            </p>
          </div>
        </ScrollReveal>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {solutions.map((solution, idx) => {
            const Icon = iconMap[solution.icon] || Building2;
            return (
              <ScrollReveal key={solution.id} delay={idx * 100}>
                <Link
                  href={`/solutions/${solution.slug}`}
                  className="group block h-full"
                >
                  <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-premium card-hover border border-gray-100">
                    {/* Top gradient bar */}
                    <div className={`h-1.5 w-full ${solution.color}`} />

                    <div className="p-7">
                      {/* Icon + Title */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-14 h-14 rounded-xl ${solution.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                          <Icon size={28} className="text-white" strokeWidth={1.5} />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 group-hover:text-ira-primary transition-colors leading-tight">
                            {solution.shortTitle}
                          </h3>
                          <p className="text-xs text-gray-400 mt-1 font-medium uppercase tracking-wider">
                            {solution.stats[0]?.value} {solution.stats[0]?.label}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3">
                        {solution.description}
                      </p>

                      {/* Features preview */}
                      <div className="space-y-2 mb-6">
                        {solution.features.slice(0, 3).map((feat, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-gray-600">
                            <CheckCircle2 size={14} className="text-ira-accent flex-shrink-0" />
                            <span className="line-clamp-1">{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center gap-2 text-ira-primary font-semibold text-sm group-hover:gap-3 transition-all">
                        Learn More
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Services bar */}
        <ScrollReveal>
          <div className="gradient-primary rounded-2xl p-8 shadow-premium-lg relative overflow-hidden">
            <div className="absolute inset-0 pattern-grid opacity-10" />
            <div className="relative z-10">
              <p className="text-center text-white/60 text-sm font-medium tracking-wider uppercase mb-6">
                Our Service Commitment
              </p>
              <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
                {services.map((service) => (
                  <div key={service} className="flex items-center gap-3 text-white">
                    <div className="w-6 h-6 rounded-full bg-ira-accent flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-semibold text-lg">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
