"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, MessageCircle, Send, Shield, Flag, Building2, Zap, Recycle, HeartPulse, Dumbbell, GraduationCap, CheckCircle2 } from "lucide-react";
import { type Product } from "@/types";
import { companyInfo } from "@/data/company";

const categoryIcons: Record<string, React.ElementType> = {
  "Smart City": Building2,
  "Renewable Energy": Zap,
  "Waste Management": Recycle,
  "Public Health": HeartPulse,
  "Fitness": Dumbbell,
  "Education": GraduationCap,
};

const badgeStyles: Record<string, string> = {
  "GeM Listed": "bg-blue-600 text-white",
  "Government Approved": "bg-ira-primary-dark text-white",
  "Best Seller": "bg-ira-accent text-white",
  "New": "bg-amber-500 text-white",
  "Eco-Certified": "bg-emerald-600 text-white",
  "Smart City": "bg-cat-smartcity text-white",
};

export default function ProductCard({ product }: { product: Product }) {
  const router = useRouter();
  const CatIcon = categoryIcons[product.category] || Building2;
  const topSpecs = product.specs.slice(0, 3);

  const whatsappText = encodeURIComponent(
    `Hi iRA Synergy, I'm interested in "${product.name}" (${product.category}). Please share details and pricing.`
  );

  return (
    <div 
      onClick={() => router.push(`/products/${product.slug}`)}
      className="group relative h-full bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-ira-primary/30 transition-all duration-300 hover:shadow-premium flex flex-col cursor-pointer"
    >
      {/* Image Section */}
      <div className="relative h-52 bg-gray-50 overflow-hidden border-b border-gray-100">
        {product.images && product.images.length > 0 ? (
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <CatIcon size={56} className="text-gray-200" strokeWidth={1} />
          </div>
        )}

        {/* Badges Row */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          {product.badge && (
            <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide shadow-sm ${badgeStyles[product.badge] || "bg-ira-accent text-white"}`}>
              {product.badge}
            </span>
          )}
          {product.certifications.includes("GeM Listed") && !product.badge?.includes("GeM") && (
            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide bg-blue-600 text-white shadow-sm">
              GeM Registered
            </span>
          )}
        </div>

        {/* Made in India flag */}
        <div className="absolute top-3 right-3 z-10">
          <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-white/90 backdrop-blur-sm border border-gray-200 shadow-sm">
            <Flag size={10} className="text-orange-500" />
            <span className="text-[9px] font-bold text-gray-700 uppercase tracking-wide">Make in India</span>
          </div>
        </div>

        {/* Category label at bottom of image */}
        <div className="absolute bottom-3 left-3 z-10">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-black/60 text-white backdrop-blur-sm">
            <CatIcon size={10} />
            {product.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Product Name */}
        <h3 className="text-sm font-bold text-gray-900 leading-snug mb-2 line-clamp-2 group-hover:text-ira-primary transition-colors">
          {product.name}
        </h3>

        {/* Short description */}
        <p className="text-xs text-gray-500 leading-relaxed mb-3 line-clamp-2">
          {product.shortDescription}
        </p>

        {/* Key Specs */}
        <div className="space-y-1.5 mb-4">
          {topSpecs.map((spec, i) => (
            <div key={i} className="flex items-center gap-2">
              <CheckCircle2 size={12} className="text-ira-accent flex-shrink-0" />
              <span className="text-[11px] text-gray-600">
                <span className="font-semibold text-gray-700">{spec.label}:</span> {spec.value}
              </span>
            </div>
          ))}
        </div>

        {/* Price */}
        <div className="mt-auto pt-3 border-t border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div>
              <span className="text-xs text-gray-400">Price</span>
              <p className="text-sm font-bold text-ira-primary-dark">{product.price || "On Request"}</p>
            </div>
            {product.inStock && (
              <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                ✓ In Stock
              </span>
            )}
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
            <Link
              href={`/contact?product=${encodeURIComponent(product.name)}`}
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-ira-primary hover:bg-ira-primary-dark text-white text-xs font-bold rounded transition-colors"
            >
              <Send size={12} />
              Send Enquiry
            </Link>
            <Link
              href={`/products/${product.slug}`}
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold rounded transition-colors"
            >
              View Details
              <ArrowRight size={12} />
            </Link>
            <a
              href={`https://wa.me/${companyInfo.whatsapp}?text=${whatsappText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded bg-[#25D366] hover:bg-[#20BD5A] text-white transition-colors flex-shrink-0"
              aria-label="WhatsApp Enquiry"
            >
              <MessageCircle size={14} fill="white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
