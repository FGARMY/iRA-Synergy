import { School, Recycle, Sun, HeartPulse, Dumbbell, Building2, Shield, Leaf, Settings, Users } from "lucide-react";

const solutions = [
  { id: 1, title: "Smart School Infrastructure", icon: School },
  { id: 2, title: "Waste Management Systems", icon: Recycle },
  { id: 3, title: "Renewable Energy Solutions", icon: Sun },
  { id: 4, title: "Public Health & Hygiene Solutions", icon: HeartPulse },
  { id: 5, title: "Fitness & Play Equipment", icon: Dumbbell },
  { id: 6, title: "Smart City & CSR Projects", icon: Building2 },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-ira-primary rounded-3xl p-1 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          
          <div className="bg-ira-primary/95 rounded-[1.4rem] p-8 md:p-12 relative z-10 backdrop-blur-sm">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white flex items-center justify-center gap-4">
                <span className="w-4 h-4 rounded-full bg-ira-accent"></span>
                <span className="border-b-2 border-ira-secondary pb-2">OUR SOLUTIONS</span>
                <span className="w-4 h-4 rounded-full bg-ira-accent"></span>
              </h2>
            </div>

            {/* Icons Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
              {solutions.map((solution) => (
                <div key={solution.id} className="flex flex-col items-center group cursor-pointer">
                  <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:bg-ira-accent transition-all duration-300">
                    <solution.icon size={40} className="text-ira-primary group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-white text-center font-medium leading-tight group-hover:text-ira-accent transition-colors">
                    {solution.title}
                  </h3>
                </div>
              ))}
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-ira-secondary to-transparent mb-12 opacity-50"></div>

            {/* Services Banner */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-12 text-white">
              {['Government Supply', 'Installation', 'Service', 'Maintenance'].map((service, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-ira-accent flex items-center justify-center text-ira-primary">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="font-semibold text-lg">{service}</span>
                </div>
              ))}
            </div>

            {/* White Footer Card inside the Green Box */}
            <div className="bg-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 shadow-inner">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 w-full md:w-3/4">
                <div className="flex flex-col items-center text-center">
                  <Shield size={32} className="text-ira-primary mb-2" />
                  <span className="font-semibold text-gray-800 text-sm">Quality Assured</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Leaf size={32} className="text-ira-primary mb-2" />
                  <span className="font-semibold text-gray-800 text-sm">Eco-Friendly Solutions</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Settings size={32} className="text-ira-primary mb-2" />
                  <span className="font-semibold text-gray-800 text-sm">Reliable Performance</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Users size={32} className="text-ira-primary mb-2" />
                  <span className="font-semibold text-gray-800 text-sm">Committed to Nation Building</span>
                </div>
              </div>
              
              <div className="w-full md:w-1/4 flex items-center justify-center md:justify-end gap-4 border-t md:border-t-0 md:border-l border-gray-200 pt-6 md:pt-0 md:pl-8">
                {/* QR Code Placeholder */}
                <div className="w-20 h-20 bg-gray-100 border-2 border-gray-300 p-1 rounded">
                  <div className="w-full h-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg')] bg-cover"></div>
                </div>
                <p className="text-sm font-medium text-gray-600 max-w-[120px]">Transforming Ideas into Sustainable Infrastructure</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
