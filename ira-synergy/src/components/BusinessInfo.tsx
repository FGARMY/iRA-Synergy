import Link from "next/link";
import { ArrowRight, ChevronRight, Landmark, Hospital, Building, HandHeart, GraduationCap, Factory, Lightbulb, ShieldAlert, Award, Wrench, Settings, Leaf, ShieldCheck, MapPin, Shield, Headset, Building2 } from "lucide-react";
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
  { name: "Government Supply", icon: Shield },
  { name: "Made in India", icon: Lightbulb },
  { name: "Installation Support", icon: Settings },
  { name: "Reliable Performance", icon: ShieldCheck },
  { name: "Annual Maintenance", icon: Wrench }, 
  { name: "Quality Assured", icon: Award },
  { name: "Eco-Friendly Solutions", icon: ShieldCheck },
  { name: "AMC Support", icon: Settings },
];

export default function BusinessInfo() {
  const displayProjects = projects.slice(0, 4);

  return (
    <section className="py-12 bg-[#fafafa]">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6">
        
        {/* ROW 1: Three Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1.5fr] gap-6">
          
          {/* Card 1: Industries We Serve */}
          <ScrollReveal>
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] h-full">
              <h2 className="text-sm font-bold text-gray-900 uppercase mb-6 flex items-center gap-4">
                INDUSTRIES WE SERVE
              </h2>
              <div className="flex sm:flex-wrap gap-2 sm:gap-2.5 overflow-x-auto sm:overflow-visible hide-scrollbar pb-2 sm:pb-0 snap-x">
                {industries.map((ind, i) => (
                  <div key={i} className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-full hover:bg-ira-primary/5 hover:border-ira-primary/20 transition-colors cursor-default snap-start flex-shrink-0">
                    <ind.icon size={14} strokeWidth={2} className="text-ira-primary flex-shrink-0" />
                    <span className="text-[10px] sm:text-[11px] font-semibold text-gray-700 whitespace-nowrap">{ind.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Why Choose Us */}
          <ScrollReveal delay={100}>
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] h-full">
              <h2 className="text-sm font-bold text-gray-900 uppercase mb-6 flex items-center gap-4">
                WHY CHOOSE US
              </h2>
              <div className="flex sm:flex-wrap gap-2 sm:gap-2.5 overflow-x-auto sm:overflow-visible hide-scrollbar pb-2 sm:pb-0 snap-x">
                {features.map((feat, i) => (
                  <div key={i} className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-full hover:bg-ira-primary/5 hover:border-ira-primary/20 transition-colors cursor-default snap-start flex-shrink-0">
                    <feat.icon size={14} strokeWidth={2} className="text-ira-primary flex-shrink-0" />
                    <span className="text-[10px] sm:text-[11px] font-semibold text-gray-700 whitespace-nowrap">{feat.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Card 3: Our Projects */}
          <ScrollReveal delay={200}>
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] h-full flex flex-col">
              <div className="flex items-center justify-between gap-4 mb-6">
                <h2 className="text-sm font-bold text-gray-900 uppercase flex-shrink-0">
                  OUR PROJECTS
                </h2>
                <Link href="/projects" className="text-xs font-bold text-ira-primary hover:text-ira-primary-dark transition-colors flex items-center gap-1 border border-ira-primary/20 px-3 py-1.5 rounded-full">
                  VIEW ALL PROJECTS
                  <ArrowRight size={14} />
                </Link>
              </div>

              <div className="relative group flex-1 flex flex-col justify-center">
                <div className="flex gap-4 overflow-x-auto snap-x hide-scrollbar pb-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  {displayProjects.map((project, i) => (
                    <div key={i} className="snap-start shrink-0 w-[160px] flex flex-col bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm">
                      <div className="h-28 bg-gray-100 relative group-hover:shadow-md transition-shadow">
                         <img 
                           src={project.images && project.images.length > 0 ? project.images[0] : "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=400"}
                           alt={project.title}
                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                         />
                      </div>
                      <div className="p-3 flex flex-col flex-1 bg-white">
                        <h4 className="text-[11px] font-bold text-gray-900 leading-tight mb-1 text-center line-clamp-2">
                          {project.title.split('—')[0]} {/* Simplified title for small card */}
                        </h4>
                        <p className="text-[10px] text-gray-500 text-center line-clamp-1 mt-auto">
                          {project.state}
                        </p>
                      </div>
                    </div>
                  ))}
                  <div className="snap-start shrink-0 flex items-center justify-center pl-2 pr-4">
                     <button className="w-8 h-8 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-600 hover:text-ira-primary hover:border-ira-primary transition-colors">
                       <ChevronRight size={18} />
                     </button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* ROW 2: Green Features Banner */}
        <ScrollReveal delay={100}>
          <div className="bg-[#f4fbf4] rounded-xl border border-[#e8f5e8] py-6 px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 md:divide-x divide-gray-200/50 shadow-sm">
            
            <div className="flex items-center gap-4 flex-1 md:pr-4">
              <Leaf size={32} strokeWidth={1.5} className="text-ira-primary flex-shrink-0" />
              <div>
                <h3 className="text-sm font-bold text-gray-900 uppercase">SUSTAINABLE SOLUTIONS</h3>
                <p className="text-xs text-gray-600">Eco-friendly products for<br/>a better tomorrow</p>
              </div>
            </div>

            <div className="flex items-center gap-4 flex-1 md:px-6">
              <ShieldCheck size={32} strokeWidth={1.5} className="text-ira-primary flex-shrink-0" />
              <div>
                <h3 className="text-sm font-bold text-gray-900 uppercase">QUALITY ASSURANCE</h3>
                <p className="text-xs text-gray-600">Tested. Trusted.<br/>Built to last.</p>
              </div>
            </div>

            <div className="flex items-center gap-4 flex-1 md:px-6">
              <Headset size={32} strokeWidth={1.5} className="text-ira-primary flex-shrink-0" />
              <div>
                <h3 className="text-sm font-bold text-gray-900 uppercase">END-TO-END SUPPORT</h3>
                <p className="text-xs text-gray-600">From consultation to<br/>maintenance</p>
              </div>
            </div>

            <div className="flex items-center gap-4 flex-1 md:pl-6">
              <MapPin size={32} strokeWidth={1.5} className="text-ira-primary flex-shrink-0" />
              <div>
                <h3 className="text-sm font-bold text-gray-900 uppercase">MAKE IN INDIA</h3>
                <p className="text-xs text-gray-600">Proudly designed &<br/>manufactured in India</p>
              </div>
            </div>

          </div>
        </ScrollReveal>

        {/* ROW 3: Partners & Initiatives */}
        <ScrollReveal delay={200}>
          <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            <div className="text-center mb-8">
              <h2 className="text-sm font-bold text-gray-900 uppercase inline-block relative">
                OUR PARTNERS & INITIATIVES
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-ira-primary rounded-full"></span>
              </h2>
            </div>
            <div className="w-full flex justify-center">
              <img 
                src="/images/partner-logos-strip.jpg" 
                alt="Government Initiatives and Partners" 
                className="w-full max-w-[1000px] h-auto object-contain mix-blend-multiply opacity-90"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* ROW 4: CTA Banner */}
        <ScrollReveal delay={300}>
          <div className="bg-[#f4fbf4] rounded-xl border border-[#e8f5e8] p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                <Building2 size={24} className="text-ira-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900">Building Smarter. Cleaner. Stronger Communities.</h3>
                <p className="text-xs text-gray-600 mt-1">Let's work together for a sustainable and developed India.</p>
              </div>
            </div>
            
            <Link href="/contact" className="bg-[#1a4a23] hover:bg-[#0f2e15] text-white px-6 py-2.5 rounded text-xs font-bold transition-colors whitespace-nowrap flex items-center gap-2">
              GET IN TOUCH
              <ArrowRight size={14} />
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
