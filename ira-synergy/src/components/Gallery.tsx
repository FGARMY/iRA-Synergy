import ScrollReveal from "./ui/ScrollReveal";

const galleryImages = [
  "https://images.unsplash.com/photo-1509391366360-1200fa26bd96?q=80&w=600", // Solar power
  "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=600", // Smart city
  "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=600", // EV charging
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600", // Outdoor gym/park
  "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=600", // Public building/hospital
  "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=600", // Recycling / Waste
  "https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=600", // Water/Eco
  "https://images.unsplash.com/photo-1518599904199-0ca897819ddb?q=80&w=600"  // Smart lighting
];

const bentoClasses = [
  "col-span-2 md:col-span-2 md:row-span-2", // Large top left
  "col-span-1 md:col-span-1 md:row-span-1", // Small
  "col-span-1 md:col-span-1 md:row-span-2", // Tall right
  "col-span-1 md:col-span-1 md:row-span-1", // Small
  "col-span-2 md:col-span-2 md:row-span-1", // Wide middle
  "col-span-1 md:col-span-1 md:row-span-1", // Small
  "col-span-1 md:col-span-1 md:row-span-1", // Small
  "col-span-2 md:col-span-4 md:row-span-1 md:h-[300px]", // Panorama bottom
];

export default function Gallery() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
        
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-sm font-bold text-gray-900 uppercase inline-block relative">
              INFRASTRUCTURE GALLERY
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-ira-primary rounded-full"></span>
            </h2>
            <p className="text-xs text-gray-500 mt-4 max-w-2xl mx-auto px-4">
              A glimpse into our massive scale of smart city development, sustainable energy solutions, and public infrastructure projects.
            </p>
          </div>
        </ScrollReveal>

        {/* Asymmetric Bento Box Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] md:auto-rows-[220px] grid-flow-dense gap-3 sm:gap-4">
          {galleryImages.map((src, idx) => (
            <ScrollReveal key={idx} delay={(idx % 4) * 50} className={`relative group overflow-hidden bg-gray-100 rounded-xl cursor-pointer ${bentoClasses[idx] || ""}`}>
              <div className="absolute inset-0 bg-ira-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-300" />
              <img 
                src={src} 
                alt={`Infrastructure facility ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-in-out"
                loading="lazy"
              />
            </ScrollReveal>
          ))}
        </div>
        
      </div>
    </section>
  );
}
