import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Landmark, Hospital, Building, HandHeart, GraduationCap, Factory, Lightbulb, ShieldAlert, Award, Wrench, Settings, CheckCircle2, Leaf, ShieldCheck, MapPin } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";
import { projects } from "@/data/projects";

const industries = [
  { name: "Government Departments", icon: Landmark },
  { name: "Hospitals & Health Institutions", icon: Hospital },
  { name: "Municipal Corporations", icon: Building },
  { name: "CSR Foundations", icon: HandHeart },
  { name: "Schools & Universities", icon: GraduationCap },
  { name: "Industrial Parks", icon: Factory },
  { name: "Smart City Projects", icon: Lightbulb },
  { name: "Defence & Disaster Management", icon: ShieldAlert },
];

const features = [
  { name: "Government Supply", icon: Landmark },
  { name: "Made in India", icon: MapPin },
  { name: "Installation Support", icon: Wrench },
  { name: "Reliable Performance", icon: Settings },
  { name: "Annual Maintenance", icon: Wrench }, // Using wrench for maintenance
  { name: "Quality Assured", icon: Award },
  { name: "Eco-Friendly Solutions", icon: Leaf },
  { name: "AMC Support", icon: ShieldCheck },
];

export default function BusinessInfo() {
  const displayProjects = projects.slice(0, 4); // Show first 4 in the mini slider

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* INDUSTRIES WE SERVE */}
          <div className="w-full lg:w-1/3">
            <ScrollReveal>
              <h2 className="text-sm font-bold text-gray-900 uppercase mb-4 md:mb-8 flex items-center gap-4">
                INDUSTRIES WE SERVE
                <div className="h-px bg-gray-300 flex-grow"></div>
              </h2>
              <div className="flex gap-4 overflow-x-auto snap-x hide-scrollbar pb-4 md:pb-0 md:grid md:grid-cols-2 md:gap-y-6 md:gap-x-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {industries.map((ind, i) => (
                  <div key={i} className="snap-start shrink-0 w-[100px] md:w-auto flex flex-col gap-2">
                    <div className="w-10 h-10 rounded bg-gray-50 flex items-center justify-center md:bg-transparent md:w-auto md:h-auto md:justify-start">
                      <ind.icon size={20} strokeWidth={1.5} className="text-ira-primary-dark" />
                    </div>
                    <span className="text-[10px] md:text-xs font-semibold text-gray-700 leading-tight">{ind.name}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* WHY CHOOSE US */}
          <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
            <ScrollReveal delay={100}>
              <h2 className="text-sm font-bold text-gray-900 uppercase mb-4 md:mb-8 flex items-center gap-4">
                WHY CHOOSE US
                <div className="h-px bg-gray-300 flex-grow"></div>
              </h2>
              <div className="flex gap-4 overflow-x-auto snap-x hide-scrollbar pb-4 md:pb-0 md:grid md:grid-cols-2 md:gap-y-6 md:gap-x-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {features.map((feat, i) => (
                  <div key={i} className="snap-start shrink-0 w-[120px] md:w-auto flex items-center gap-2 bg-gray-50 md:bg-transparent px-3 py-2 md:p-0 rounded">
                    <feat.icon size={16} strokeWidth={1.5} className="text-ira-accent flex-shrink-0" />
                    <span className="text-[10px] md:text-xs font-semibold text-gray-700 leading-tight whitespace-nowrap md:whitespace-normal">{feat.name}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* OUR PROJECTS */}
          <div className="w-full lg:w-1/3">
            <ScrollReveal delay={200}>
              <div className="flex items-center justify-between gap-4 mb-8">
                <h2 className="text-sm font-bold text-gray-900 uppercase flex-shrink-0">
                  OUR PROJECTS
                </h2>
                <div className="h-px bg-gray-300 flex-grow hidden sm:block"></div>
                <Link href="/projects" className="text-[10px] font-bold text-ira-primary-dark hover:text-ira-accent transition-colors flex items-center gap-1 flex-shrink-0">
                  VIEW ALL PROJECTS
                  <ArrowRight size={12} />
                </Link>
              </div>

              <div className="relative group">
                <div className="flex gap-4 overflow-x-auto snap-x hide-scrollbar pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  {displayProjects.map((project, i) => (
                    <div key={i} className="snap-start shrink-0 w-[140px] flex flex-col">
                      <div className="h-24 bg-gray-200 mb-3 rounded overflow-hidden relative group-hover:shadow-md transition-shadow">
                         <div className="absolute inset-0 bg-ira-primary/10 group-hover:bg-transparent transition-colors z-10" />
                         <img 
                           src={project.images && project.images.length > 0 ? project.images[0] : "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=400"}
                           alt={project.title}
                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                         />
                      </div>
                      <h4 className="text-[11px] font-bold text-gray-900 leading-tight mb-1 text-center line-clamp-2">
                        {project.title}
                      </h4>
                      <p className="text-[10px] text-gray-500 text-center line-clamp-1">
                        {project.location}
                      </p>
                    </div>
                  ))}
                </div>
                
                {/* Dots indicator (mocked) */}
                <div className="flex justify-center gap-1.5 mt-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-ira-primary-dark"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
