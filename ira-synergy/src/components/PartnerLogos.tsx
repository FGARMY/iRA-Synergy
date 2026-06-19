import ScrollReveal from "./ui/ScrollReveal";

export default function PartnerLogos() {
  return (
    <section className="py-10 border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <ScrollReveal>
          <img 
            src="/images/partner-logos-strip.jpg" 
            alt="Government Initiatives and Partners" 
            className="w-full max-w-5xl h-auto object-contain"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
