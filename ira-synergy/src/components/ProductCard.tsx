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
      className="group relative h-full bg-white rounded-lg sm:rounded-xl overflow-hidden border border-gray-200 hover:border-ira-primary/30 transition-all duration-300 hover:shadow-premium flex flex-col cursor-pointer"
    >
      {/* Image Section */}
      <div className="relative h-36 sm:h-52 bg-gray-50 overflow-hidden border-b border-gray-100">
        {product.images && product.images.length > 0 ? (
          <img
            src={product.images[0]}
            alt={`${product.name} — ${product.category} | iRA Synergy`}
            className="w-full h-full object-contain p-3 sm:p-4 transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <CatIcon size={56} className="text-gray-200" strokeWidth={1} />
          </div>
        )}

        {/* Badges Row */}
        <div className="absolute top-2 sm:top-3 left-2 sm:left-3 flex flex-wrap gap-1 sm:gap-1.5 z-10">
          {product.badge && (
            <span className={`px-1.5 sm:px-2 py-0.5 rounded text-[8px] sm:text-[10px] font-bold uppercase tracking-wide shadow-sm ${badgeStyles[product.badge] || "bg-ira-accent text-white"}`}>
              {product.badge}
            </span>
          )}
        </div>

        {/* Made in India flag - hidden on mobile */}
        <div className="absolute top-2 sm:top-3 right-2 sm:right-3 z-10 hidden sm:block">
          <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-white/90 backdrop-blur-sm border border-gray-200 shadow-sm">
            <Flag size={10} className="text-orange-500" />
            <span className="text-[9px] font-bold text-gray-700 uppercase tracking-wide">Make in India</span>
          </div>
        </div>

        {/* Category label at bottom of image */}
        <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 z-10">
          <span className="inline-flex items-center gap-1 px-1.5 sm:px-2 py-0.5 rounded text-[8px] sm:text-[10px] font-semibold bg-black/60 text-white backdrop-blur-sm">
            <CatIcon size={8} className="sm:w-[10px] sm:h-[10px]" />
            {product.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-2.5 sm:p-4 flex flex-col flex-grow">
        {/* Product Name */}
        <h3 className="text-xs sm:text-sm font-bold text-gray-900 leading-snug mb-1 sm:mb-2 line-clamp-2 group-hover:text-ira-primary transition-colors">
          {product.name}
        </h3>

        {/* Short description */}
        <p className="text-[10px] sm:text-xs text-gray-500 leading-relaxed mb-1 sm:mb-3 line-clamp-1 sm:line-clamp-2">
          {product.shortDescription}
        </p>

        {/* Price */}
        <div className="mt-auto pt-2 sm:pt-3 border-t border-gray-100">
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <div>
              <span className="text-[10px] sm:text-xs text-gray-400">Price</span>
              <p className="text-xs sm:text-sm font-bold text-ira-primary-dark">{product.price || "On Request"}</p>
            </div>
          </div>

          {/* CTA Buttons - simplified on mobile */}
          <div className="flex gap-1.5 sm:gap-2" onClick={(e) => e.stopPropagation()}>
            <Link
              href={`/products/${product.slug}`}
              className="flex-1 inline-flex items-center justify-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 sm:py-2 bg-ira-primary hover:bg-ira-primary-dark text-white text-[10px] sm:text-xs font-bold rounded transition-colors"
            >
              <ArrowRight size={10} className="sm:w-3 sm:h-3" />
              <span className="sm:hidden">Details</span>
              <span className="hidden sm:inline">View Details</span>
            </Link>
            <a
              href={`https://wa.me/${companyInfo.whatsapp}?text=${whatsappText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 rounded bg-[#25D366] hover:bg-[#20BD5A] text-white transition-colors flex-shrink-0"
              aria-label="WhatsApp Enquiry"
            >
              <MessageCircle size={12} className="sm:w-[14px] sm:h-[14px]" fill="white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
