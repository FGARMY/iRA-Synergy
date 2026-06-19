import ScrollReveal from "./ui/ScrollReveal";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800",
    alt: "Students walking on college campus",
  },
  {
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800",
    alt: "Graduation celebration at university",
  },
  {
    src: "https://images.unsplash.com/photo-1525921472535-715bd844f2d7?q=80&w=800",
    alt: "Modern college library interior",
  },
  {
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800",
    alt: "Students attending a lecture",
  },
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800",
    alt: "Empty classroom with desks",
  },
  {
    src: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800",
    alt: "Classic university campus building",
  },
];

export default function Gallery() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
        
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-sm font-bold text-gray-900 uppercase inline-block relative">
              CAMPUS GALLERY
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-ira-primary rounded-full"></span>
            </h2>
            <p className="text-xs text-gray-500 mt-4 max-w-2xl mx-auto">
              A glimpse into our educational infrastructure and campus development projects.
            </p>
          </div>
        </ScrollReveal>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {galleryImages.map((image, idx) => (
            <ScrollReveal key={idx} delay={idx * 100}>
              <div className="relative group overflow-hidden rounded-xl aspect-[4/3] bg-gray-100 cursor-pointer">
                <div className="absolute inset-0 bg-ira-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-300" />
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
        
      </div>
    </section>
  );
}
