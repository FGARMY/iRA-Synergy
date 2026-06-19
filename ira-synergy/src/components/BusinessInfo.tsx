import Link from "next/link";
import { ArrowRight, ChevronRight, Landmark, Hospital, Building, HandHeart, GraduationCap, Factory, Lightbulb, ShieldAlert, Award, Wrench, Settings, Leaf, ShieldCheck, MapPin, Shield, Headset, Building2, CheckCircle } from "lucide-react";
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
              <div className="flex sm:flex-wrap gap-2 sm:gap-2.5 overflow-x-auto sm:overflow-visible pb-2 sm:pb-0 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
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
              <div className="flex sm:flex-wrap gap-2 sm:gap-2.5 overflow-x-auto sm:overflow-visible pb-2 sm:pb-0 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
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

              <div className="flex-1 mt-2">
                <div className="grid grid-cols-2 gap-3 sm:gap-4 h-[280px] sm:h-full min-h-[240px]">
                  {displayProjects.map((project, i) => (
                    <Link href="/projects" key={i} className="relative group overflow-hidden rounded-xl shadow-sm border border-gray-200/50 block w-full h-full">
                      <img 
                        src={project.images && project.images.length > 0 ? project.images[0] : "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=400"}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A3D24]/90 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="absolute inset-0 p-3 sm:p-4 flex flex-col justify-end">
                        <h4 className="text-white text-xs sm:text-sm font-bold leading-tight line-clamp-2 drop-shadow-md group-hover:text-green-300 transition-colors">
                          {project.title.split('—')[0]}
                        </h4>
                        <p className="text-white/80 text-[10px] sm:text-xs mt-1.5 flex items-center gap-1 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                          <MapPin size={10} className="text-green-400" />
                          {project.state}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* ROW 2: Green Features Banner (Desktop Only) */}
        <div className="hidden md:block">
          <ScrollReveal delay={100}>
            <div className="bg-[#f4fbf4] rounded-xl border border-[#e8f5e8] py-6 px-8 flex items-center justify-between gap-4 divide-x divide-gray-200/50 shadow-sm">
              
              <div className="flex items-center gap-4 flex-1 pr-4">
                <Leaf size={32} strokeWidth={1.5} className="text-ira-primary flex-shrink-0" />
                <div>
                  <h3 className="text-sm font-bold text-gray-900 uppercase">SUSTAINABLE SOLUTIONS</h3>
                  <p className="text-xs text-gray-600">Eco-friendly products for<br/>a better tomorrow</p>
                </div>
              </div>

              <div className="flex items-center gap-4 flex-1 px-6">
                <ShieldCheck size={32} strokeWidth={1.5} className="text-ira-primary flex-shrink-0" />
                <div>
                  <h3 className="text-sm font-bold text-gray-900 uppercase">QUALITY ASSURANCE</h3>
                  <p className="text-xs text-gray-600">Tested. Trusted.<br/>Built to last.</p>
                </div>
              </div>

              <div className="flex items-center gap-4 flex-1 px-6">
                <Headset size={32} strokeWidth={1.5} className="text-ira-primary flex-shrink-0" />
                <div>
                  <h3 className="text-sm font-bold text-gray-900 uppercase">END-TO-END SUPPORT</h3>
                  <p className="text-xs text-gray-600">From consultation to<br/>maintenance</p>
                </div>
              </div>

              <div className="flex items-center gap-4 flex-1 pl-6">
                <CheckCircle size={32} strokeWidth={1.5} className="text-ira-primary flex-shrink-0" />
                <div>
                  <h3 className="text-sm font-bold text-gray-900 uppercase">MAKE IN INDIA</h3>
                  <p className="text-xs text-gray-600">Proudly designed &<br/>manufactured in India</p>
                </div>
              </div>

            </div>
          </ScrollReveal>
        </div>

        {/* ROW 3: Partners & Initiatives */}
        <ScrollReveal delay={200}>
          <div className="bg-white rounded-xl border border-gray-100 p-4 sm:p-8 shadow-[0_2px_10px_rgba(0,0,0,0.02)] overflow-hidden">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-sm font-bold text-gray-900 uppercase inline-block relative">
                OUR PARTNERS & INITIATIVES
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-ira-primary rounded-full"></span>
              </h2>
            </div>
            <div className="w-full flex justify-center mt-4">
              <img 
                src="/images/partner-logos-strip.jpg" 
                alt="Government Initiatives and Partners" 
                className="w-[110%] sm:w-full max-w-[1200px] h-auto object-contain mix-blend-multiply"
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
