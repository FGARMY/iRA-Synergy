import { GraduationCap, Activity, Leaf, Landmark, Users, Star, Target, ShieldCheck, TrendingUp } from "lucide-react";

const focusAreas = [
  {
    id: "01",
    title: "Education Development",
    description: "Providing quality educational resources and programs to empower learners and educators.",
    icon: GraduationCap,
    color: "bg-focus-edu",
  },
  {
    id: "02",
    title: "Sports Promotion",
    description: "Promoting fitness, teamwork, and excellence through sports infrastructure and initiatives.",
    icon: Activity,
    color: "bg-focus-sports",
  },
  {
    id: "03",
    title: "Environmental Sustainability",
    description: "Supporting green initiatives and sustainable practices for a cleaner, healthier planet.",
    icon: Leaf,
    color: "bg-focus-env",
  },
  {
    id: "04",
    title: "Government Schemes Support",
    description: "Partnering with government departments to execute impactful development projects.",
    icon: Landmark,
    color: "bg-focus-gov",
  },
  {
    id: "05",
    title: "Community Empowerment",
    description: "Building stronger communities through awareness, inclusivity, and development programs.",
    icon: Users,
    color: "bg-focus-comm",
  },
  {
    id: "06",
    title: "Youth Development",
    description: "Nurturing young talent and inspiring the leaders of tomorrow.",
    icon: Star,
    color: "bg-focus-youth",
  },
];

export default function FocusAreas() {
  return (
    <section id="focus" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-ira-primary mb-4 flex items-center justify-center gap-4">
            <span className="w-12 h-0.5 bg-ira-primary hidden sm:block"></span>
            OUR FOCUS AREAS
            <span className="w-12 h-0.5 bg-ira-primary hidden sm:block"></span>
          </h2>
          <p className="text-lg text-gray-600 font-medium">Six Key Areas. One Stronger India.</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {focusAreas.map((area) => (
            <div key={area.id} className="group relative bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1">
              {/* Hexagon icon container simulation */}
              <div className="flex flex-col items-center pt-10 pb-6 px-6 relative z-10">
                <div className={`w-24 h-24 rounded-2xl rotate-45 ${area.color} flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <div className="-rotate-45">
                    <area.icon size={40} strokeWidth={1.5} />
                  </div>
                </div>
                
                <h3 className="text-4xl font-bold text-gray-200 mb-2">{area.id}</h3>
                <h4 className="text-xl font-bold text-ira-primary mb-4 text-center">{area.title}</h4>
                <p className="text-gray-600 text-center leading-relaxed">{area.description}</p>
              </div>
              
              {/* Decorative bottom line */}
              <div className={`h-1.5 w-full absolute bottom-0 left-0 ${area.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="bg-ira-primary rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative">
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay"></div>
          
          <div className="md:w-1/3 bg-ira-secondary p-8 flex items-center justify-center z-10">
            <div className="flex items-center gap-4 text-white">
              <Target size={48} className="opacity-80" />
              <div>
                <p className="text-sm font-medium tracking-wide text-white/80">Focused Today.</p>
                <p className="text-xl font-bold">Building a Better Tomorrow.</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3 p-8 flex flex-col sm:flex-row items-center justify-around gap-6 z-10 bg-gradient-to-r from-ira-primary to-[#052516]">
            <div className="flex items-center gap-3 text-white">
              <ShieldCheck className="text-ira-accent" size={32} />
              <span className="font-semibold text-lg">Sustainable Impact</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <Users className="text-ira-accent" size={32} />
              <span className="font-semibold text-lg">Stronger Communities</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <TrendingUp className="text-ira-accent" size={32} />
              <span className="font-semibold text-lg">Nationwide Growth</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
