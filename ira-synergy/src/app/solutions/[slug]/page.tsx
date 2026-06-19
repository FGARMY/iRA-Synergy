import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Shield, FileText, Download } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { solutions, getSolutionBySlug, getAllSolutionSlugs } from "@/data/solutions";
import { products } from "@/data/products";

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
    title: solution.title,
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

  const relatedProducts = solution.relatedProductSlugs
    .map((ps) => products.find((p) => p.slug === ps))
    .filter(Boolean);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-28">
        {/* Hero */}
        <div className={`${solution.color} relative overflow-hidden`}>
          <div className="absolute inset-0 pattern-grid opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <Breadcrumb
              items={[
                { label: "Solutions", href: "/solutions" },
                { label: solution.shortTitle },
              ]}
            />
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
              {solution.title}
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mb-8">
              {solution.description}
            </p>
            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              {solution.stats.map((stat, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/10">
                  <div className="text-2xl font-extrabold text-white font-mono-nums">{stat.value}</div>
                  <div className="text-xs text-white/60 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
                <p className="text-gray-600 leading-relaxed mb-10">
                  {solution.longDescription}
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                  {solution.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-ira-primary/3 border border-ira-primary/5">
                      <CheckCircle2 size={18} className="text-ira-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feat}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Use Cases</h2>
                <div className="space-y-3 mb-10">
                  {solution.useCases.map((uc, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-600">
                      <span className="w-2 h-2 rounded-full bg-ira-amber flex-shrink-0" />
                      {uc}
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              {/* Related Products */}
              {relatedProducts.length > 0 && (
                <ScrollReveal>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {relatedProducts.map((product) =>
                      product ? (
                        <Link
                          key={product.id}
                          href={`/products/${product.slug}`}
                          className="group flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-ira-primary/20 hover:shadow-md transition-all"
                        >
                          <div className="w-12 h-12 rounded-lg bg-ira-primary/5 flex items-center justify-center flex-shrink-0 group-hover:bg-ira-primary/10 transition-colors">
                            <FileText size={20} className="text-ira-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-gray-900 group-hover:text-ira-primary transition-colors truncate">
                              {product.name}
                            </p>
                            <p className="text-xs text-gray-500">{product.category}</p>
                          </div>
                          <ArrowRight size={16} className="text-gray-300 group-hover:text-ira-primary transition-colors" />
                        </Link>
                      ) : null
                    )}
                  </div>
                </ScrollReveal>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                {/* CTA Card */}
                <div className="gradient-primary rounded-2xl p-6 text-white relative overflow-hidden">
                  <div className="absolute inset-0 pattern-grid opacity-10" />
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold mb-2">Interested in this solution?</h3>
                    <p className="text-white/60 text-sm mb-6">
                      Get a free consultation and custom proposal for your project.
                    </p>
                    <Link href="/contact" className="btn-primary w-full text-center">
                      Request Consultation
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>

                {/* Certifications */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">
                    Certifications
                  </h3>
                  <div className="space-y-3">
                    {solution.certifications.map((cert, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Shield size={16} className="text-ira-accent" />
                        <span className="text-sm text-gray-700">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Download */}
                <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-ira-steel/10 text-ira-steel font-semibold hover:bg-ira-steel/20 transition-colors text-sm">
                  <Download size={16} />
                  Download Brochure (PDF)
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
