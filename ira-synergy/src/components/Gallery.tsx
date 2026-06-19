import ScrollReveal from "./ui/ScrollReveal";

const galleryImages = [
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=400",
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=400",
  "https://images.unsplash.com/photo-1525921472535-715bd844f2d7?q=80&w=400",
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=400",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=400",
  "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=400",
  "https://images.unsplash.com/photo-1519389953867-2e205e5ce5ba?q=80&w=400",
  "https://images.unsplash.com/photo-1427504494785-3b9ca204ce38?q=80&w=400",
  "https://images.unsplash.com/photo-1492538368651-71f66299b800?q=80&w=400",
  "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=400",
  "https://images.unsplash.com/photo-1606761568499-6d2451b08c66?q=80&w=400",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=400",
  "https://images.unsplash.com/photo-1558021212-51ab78c1b562?q=80&w=400",
  "https://images.unsplash.com/photo-1610484826967-09c5720778c7?q=80&w=400",
  "https://images.unsplash.com/photo-1511629091441-eea97ece80f5?q=80&w=400",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=400",
  "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=400"
];

export default function Gallery() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-[90rem] mx-auto px-2 sm:px-4 lg:px-8 flex flex-col gap-8">
        
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-sm font-bold text-gray-900 uppercase inline-block relative">
              CAMPUS GALLERY
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-ira-primary rounded-full"></span>
            </h2>
            <p className="text-xs text-gray-500 mt-4 max-w-2xl mx-auto px-4">
              A glimpse into our massive scale of educational infrastructure and campus development projects across the country.
            </p>
          </div>
        </ScrollReveal>

        {/* Masonry Layout Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 sm:gap-4 space-y-3 sm:space-y-4">
          {galleryImages.map((src, idx) => (
            <ScrollReveal key={idx} delay={(idx % 4) * 50}>
              <div className="relative group overflow-hidden bg-gray-100 rounded-xl cursor-pointer break-inside-avoid">
                <div className="absolute inset-0 bg-ira-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-300 rounded-xl" />
                <img 
                  src={src} 
                  alt={`Campus facility ${idx + 1}`}
                  className="w-full h-auto object-cover rounded-xl group-hover:scale-[1.03] transition-transform duration-700 ease-in-out"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
        
      </div>
    </section>
  );
}
