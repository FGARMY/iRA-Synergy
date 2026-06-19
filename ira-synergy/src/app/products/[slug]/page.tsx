import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Shield, FileText, ShoppingCart, Download, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { products, getProductBySlug, getAllProductSlugs } from "@/data/products";
import { companyInfo } from "@/data/company";

export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const relatedProducts = product.relatedProductSlugs
    .map((ps) => products.find((p) => p.slug === ps))
    .filter(Boolean);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Products", href: "/products" },
              { label: product.name },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Product Image */}
            <ScrollReveal variant="left">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl aspect-square flex items-center justify-center relative overflow-hidden border border-gray-100">
                <div className="absolute inset-0 pattern-grid opacity-30" />
                {product.badge && (
                  <span className="absolute top-6 left-6 z-10 px-4 py-1.5 rounded-full text-sm font-bold bg-ira-accent text-white shadow-lg">
                    {product.badge}
                  </span>
                )}
                <div className="text-center relative z-10">
                  <ShoppingCart size={80} className="text-gray-300 mx-auto mb-4" strokeWidth={1} />
                  <p className="text-sm text-gray-400">Product Image</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Product Info */}
            <ScrollReveal variant="right">
              <div>
                <span className="inline-flex px-3 py-1 rounded-full text-xs font-bold bg-ira-primary/10 text-ira-primary mb-4">
                  {product.category}
                </span>
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
                  {product.name}
                </h1>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {product.description}
                </p>

                {/* Key features */}
                <div className="space-y-3 mb-8">
                  {product.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-ira-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/contact" className="btn-primary">
                    Request Quote
                    <ArrowRight size={16} />
                  </Link>
                  <a href={`tel:${companyInfo.phone}`} className="btn-outline">
                    <Phone size={16} />
                    Call Us
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Specs Table */}
          <ScrollReveal>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-16">
              <div className="px-8 py-5 border-b border-gray-100 bg-gray-50">
                <h2 className="text-xl font-bold text-gray-900">Technical Specifications</h2>
              </div>
              <div className="divide-y divide-gray-50">
                {product.specs.map((spec, i) => (
                  <div key={i} className="flex items-center px-8 py-4 hover:bg-gray-50 transition-colors">
                    <span className="w-1/3 text-sm font-semibold text-gray-500">{spec.label}</span>
                    <span className="w-2/3 text-sm text-gray-900 font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Certifications */}
          <ScrollReveal>
            <div className="mb-16">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Certifications & Compliance</h2>
              <div className="flex flex-wrap gap-3">
                {product.certifications.map((cert, i) => (
                  <div key={i} className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-ira-primary/5 border border-ira-primary/10">
                    <Shield size={16} className="text-ira-accent" />
                    <span className="text-sm font-medium text-gray-800">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <ScrollReveal>
              <h2 className="text-xl font-bold text-gray-900 mb-6">Related Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {relatedProducts.map((rp) =>
                  rp ? (
                    <Link
                      key={rp.id}
                      href={`/products/${rp.slug}`}
                      className="group flex items-center gap-4 p-5 rounded-xl bg-white border border-gray-100 hover:border-ira-primary/20 hover:shadow-md transition-all"
                    >
                      <div className="w-12 h-12 rounded-lg bg-ira-primary/5 flex items-center justify-center flex-shrink-0">
                        <FileText size={20} className="text-ira-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-900 group-hover:text-ira-primary transition-colors truncate">
                          {rp.name}
                        </p>
                        <p className="text-xs text-gray-500">{rp.category}</p>
                      </div>
                      <ArrowRight size={16} className="text-gray-300 group-hover:text-ira-primary" />
                    </Link>
                  ) : null
                )}
              </div>
            </ScrollReveal>
          )}
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
