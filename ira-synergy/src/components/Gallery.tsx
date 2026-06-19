import ScrollReveal from "./ui/ScrollReveal";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1509391366360-1200fa26bd96?q=80&w=800", label: "SOLAR FARMS" },
  { src: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=800", label: "SMART CITIES" },
  { src: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=800", label: "EV INFRASTRUCTURE" },
  { src: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800", label: "PUBLIC HOSPITALS" },
  { src: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=800", label: "WATER TREATMENT" },
  { src: "https://images.unsplash.com/photo-1518599904199-0ca897819ddb?q=80&w=800", label: "HIGH MAST LIGHTING" }
];

export default function Gallery() {
  return (
    <section className="py-16 bg-[#0a0a0a] border-y-8 border-ira-primary">
      <div className="max-w-[100rem] mx-auto px-0 sm:px-6 lg:px-8 flex flex-col gap-10">
        
        <ScrollReveal>
          <div className="text-center px-4">
            <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-widest inline-block relative">
              HEAVY INFRASTRUCTURE
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-[3px] bg-ira-primary"></span>
            </h2>
            <p className="text-xs md:text-sm text-gray-400 mt-6 max-w-3xl mx-auto font-medium uppercase tracking-wider">
              Industrial-grade smart city development and robust public infrastructure engineered for scale.
            </p>
          </div>
        </ScrollReveal>

        {/* Industrial Sliding Panel Accordion */}
        <div className="flex w-full h-[400px] md:h-[600px] overflow-hidden bg-[#111] border-y border-gray-800 sm:border sm:border-gray-800 p-1 sm:p-2 gap-1 sm:gap-2">
          {galleryImages.map((item, idx) => (
            <div 
              key={idx} 
              className="relative flex-1 hover:flex-[4] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer overflow-hidden group border border-gray-800 bg-black"
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-transparent transition-colors duration-500 z-10" />
              
              <img 
                src={item.src} 
                alt={item.label}
                className="absolute inset-0 w-full h-full object-cover min-w-[300px] opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                loading="lazy"
              />

              {/* Industrial Label Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-20 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <div className="w-2 h-2 bg-ira-primary" />
                  <h3 className="text-white font-bold tracking-widest text-xs md:text-sm uppercase whitespace-nowrap">
                    {item.label}
                  </h3>
                </div>
              </div>

              {/* Vertical Text when collapsed */}
              <div className="absolute inset-0 flex items-center justify-center z-20 group-hover:opacity-0 transition-opacity duration-300">
                <span className="text-gray-400 font-bold tracking-widest text-[10px] md:text-xs uppercase -rotate-90 whitespace-nowrap drop-shadow-md">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
