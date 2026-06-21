"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Search, Zap, Recycle, Building2, HeartPulse, Dumbbell, GraduationCap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CategoryFilter from "@/components/ui/CategoryFilter";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { products, productCategories } from "@/data/products";

const categoryIcons: Record<string, React.ElementType> = {
  "Smart City": Building2,
  "Renewable Energy": Zap,
  "Waste Management": Recycle,
  "Public Health": HeartPulse,
  "Fitness": Dumbbell,
  "Education": GraduationCap,
};

const categoryColors: Record<string, string> = {
  "Smart City": "bg-cat-smartcity",
  "Renewable Energy": "bg-cat-renewable",
  "Waste Management": "bg-cat-waste",
  "Public Health": "bg-cat-health",
  "Fitness": "bg-cat-fitness",
  "Education": "bg-cat-education",
};

export default function ProductsCatalog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = products.filter((p) => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Products & Equipment
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl">
              Browse our complete catalog of {products.length}+ products across {productCategories.length} categories.
              All products are designed, manufactured, and assembled in India.
            </p>
          </div>

          {/* Search + Filters */}
          <div className="flex flex-col gap-4 mb-10">
            <div className="relative max-w-md">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:border-ira-primary focus:ring-2 focus:ring-ira-primary/10 outline-none transition-all"
              />
            </div>
            <CategoryFilter
              categories={productCategories}
              active={activeCategory}
              onChange={setActiveCategory}
            />
          </div>

          {/* Results count */}
          <p className="text-sm text-gray-400 mb-6">
            Showing {filtered.length} product{filtered.length !== 1 ? "s" : ""}
            {activeCategory !== "All" && ` in ${activeCategory}`}
          </p>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product, idx) => {
              const CatIcon = categoryIcons[product.category] || Building2;
              const catColor = categoryColors[product.category] || "bg-gray-600";

              return (
                <ScrollReveal key={product.id} delay={Math.min(idx * 50, 400)}>
                  <Link href={`/products/${product.slug}`} className="group block h-full">
                    <div className="relative h-full bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-premium card-hover">
                      <div className={`relative h-40 ${product.images && product.images.length > 0 ? "bg-white" : catColor} flex items-center justify-center overflow-hidden`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent" />
                        <div className="absolute inset-0 pattern-grid opacity-20" />
                        {product.images && product.images.length > 0 ? (
                          <img 
                            src={product.images[0]} 
                            alt={product.name} 
                            className="w-full h-full object-contain p-2 relative z-10"
                          />
                        ) : (
                          <CatIcon size={48} className="text-white/25 relative z-10" strokeWidth={1} />
                        )}
                        {product.badge && (
                          <span className="absolute top-3 left-3 z-20 px-2.5 py-0.5 rounded-full text-xs font-bold bg-ira-accent text-white shadow-md">
                            {product.badge}
                          </span>
                        )}
                        <span className="absolute bottom-3 left-3 z-20 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-black/50 text-white backdrop-blur-sm">
                          {product.category}
                        </span>
                      </div>
                      <div className="p-4">
                        <h3 className="text-sm font-bold text-gray-900 mb-1.5 group-hover:text-ira-primary transition-colors line-clamp-2 leading-snug">
                          {product.name}
                        </h3>
                        <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 mb-3">
                          {product.shortDescription}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-400">{product.certifications[0]}</span>
                          <span className="flex items-center gap-1 text-ira-primary text-xs font-semibold">
                            View <ArrowRight size={12} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">No products found matching your criteria.</p>
              <button
                onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
                className="mt-4 text-ira-primary font-semibold hover:underline"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
