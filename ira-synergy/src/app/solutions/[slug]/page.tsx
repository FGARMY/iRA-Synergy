import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Shield, PlayCircle, BookOpen, Atom, Microscope, Building, Settings } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { solutions, getSolutionBySlug, getAllSolutionSlugs } from "@/data/solutions";
import { products } from "@/data/products";

const indicatorColors: Record<string, string> = {
  "bg-blue-900": "bg-blue-600",
  "bg-green-700": "bg-green-600",
  "bg-amber-600": "bg-amber-500",
  "bg-rose-600": "bg-rose-500",
  "bg-teal-600": "bg-teal-500",
  "bg-indigo-700": "bg-indigo-600",
};


export async function generateStaticParams() {
  return getAllSolutionSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) return {};
  return {
    title: `${solution.title} | iRA Synergy`,
    description: solution.description,
  };
}

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) notFound();

  // Find related products
  const relatedProducts = solution.relatedProductSlugs
    .map((ps) => products.find((p) => p.slug === ps))
    .filter(Boolean);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow pt-28">
        
        {/* Custom Premium Hero with Dynamic Theme */}
        <div className={`relative overflow-hidden ${solution.color} text-white`}>
          <div className="absolute inset-0 pattern-grid opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-transparent" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <Breadcrumb
                items={[
                  { label: "Solutions", href: "/solutions" },
                  { label: solution.shortTitle },
                ]}
              />
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight mt-6">
                {solution.title.split(" ").slice(0, -1).join(" ")}{" "}
                <span className="text-white/80">{solution.title.split(" ").slice(-1)}</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-10 leading-relaxed">
                {solution.longDescription}
              </p>
              
              {/* Stats Row */}
              <div className="flex flex-wrap gap-4 sm:gap-8 mb-8">
                {solution.stats.map((stat, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-3xl font-extrabold text-white">{stat.value}</span>
                    <span className="text-sm text-white/70 uppercase tracking-wide">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Hero Image / Graphic */}
            <div className="flex-1 w-full max-w-lg hidden md:block">
              <div className="relative aspect-square rounded-full bg-white/5 border border-white/10 p-8 shadow-2xl flex items-center justify-center">
                 <div className="absolute inset-0 rounded-full border-4 border-dashed border-white/20 animate-spin-slow"></div>
                 <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl">
                    <Image 
                      src={solution.image}
                      alt={solution.title}
                      fill
                      className="object-cover"
                      priority
                    />
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Explanation Section */}
        <section className="py-20 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Experience the Future</h2>
              <p className="text-gray-600 text-lg">
                Watch how our integrated {solution.shortTitle} solutions revolutionize the landscape, providing sustainable and innovative infrastructure.
              </p>
            </div>
            
            <ScrollReveal>
              <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-gray-900 aspect-video ring-4 ring-gray-50">
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&rel=0" // Using a placeholder video link
                  title={`${solution.title} Overview`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Deep Dive Zig-Zag Product Layout */}
        <section className="py-24 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Products</h2>
              <div className={`w-24 h-1 ${indicatorColors[solution.color] || 'bg-ira-primary'} mx-auto rounded-full`}></div>
            </div>

            <div className="space-y-32">
              {relatedProducts.map((product, index) => {
                if (!product) return null;
                const isEven = index % 2 === 0;
                return (
                  <ScrollReveal key={product.id}>
                    <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                      {/* Image Side */}
                      <div className="w-full lg:w-1/2">
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl group">
                          <Image 
                            src={product.images[0]} 
                            alt={product.name} 
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </div>
                      
                      {/* Text Side */}
                      <div className="w-full lg:w-1/2 space-y-6">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-ira-primary/10 text-ira-primary text-xs font-bold uppercase tracking-wider">
                          {product.badge || product.category}
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900">{product.name}</h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                          {product.description}
                        </p>
                        
                        <div className="pt-4">
                          <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Key Features</h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {product.features.slice(0, 4).map((feat, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle2 size={18} className="text-ira-accent mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-gray-700 leading-tight">{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="pt-6">
                          <Link href={`/products/${product.slug}`} className="inline-flex items-center gap-2 px-6 py-3 bg-ira-primary text-white rounded-lg font-semibold hover:bg-ira-primary-dark transition-colors shadow-md hover:shadow-lg">
                            View Full Details
                            <ArrowRight size={18} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Certifications and CTA Banner */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`${solution.color} rounded-3xl p-8 md:p-16 relative overflow-hidden shadow-2xl text-white`}>
              <div className="absolute inset-0 pattern-grid opacity-20" />
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
                <div className="max-w-2xl">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to upgrade your infrastructure?</h2>
                  <p className="text-white/80 text-lg mb-8">
                    Get a comprehensive audit and custom proposal for your project. Our setups are fully compliant with all relevant industry standards.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {solution.certifications.map((cert, i) => (
                      <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                        <Shield size={16} className="text-white/90" />
                        <span className="text-sm font-medium">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-shrink-0 w-full lg:w-auto">
                  <Link href="/contact" className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-xl">
                    Request a Proposal
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
