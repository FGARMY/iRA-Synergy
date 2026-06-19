import Link from "next/link";
import { ArrowRight, Building2, Recycle, Zap, HeartPulse, Dumbbell, Globe } from "lucide-react";
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
  return (
    <section id="solutions" className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header line */}
        <ScrollReveal>
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px bg-gray-300 w-12 md:w-24"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-ira-primary-dark tracking-wide uppercase">
              Our Solutions
            </h2>
            <div className="h-px bg-gray-300 w-12 md:w-24"></div>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, idx) => {
            const Icon = iconMap[solution.id] || Building2;
            return (
              <ScrollReveal key={solution.id} delay={idx * 50}>
                <div className="bg-white rounded border border-gray-200 p-8 text-center flex flex-col items-center h-full hover:shadow-lg hover:border-ira-accent transition-all group">
                  <div className="mb-5 text-ira-primary-dark group-hover:text-ira-accent transition-colors">
                    <Icon size={48} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 uppercase">
                    {solution.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-6 flex-grow leading-relaxed">
                    {solution.shortDescription}
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
    </section>
  );
}
