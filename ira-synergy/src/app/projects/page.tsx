import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, TrendingUp, Quote } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTABanner from "@/components/CTABanner";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects & Case Studies",
  description: "See our real-world impact — case studies of infrastructure and sustainability projects across India with measurable results.",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Projects & Case Studies
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl">
              Real-world impact across India — measurable results that transform communities and infrastructure.
            </p>
          </div>

          <div className="space-y-8 mb-20">
            {projects.map((project, idx) => (
              <ScrollReveal key={project.id} delay={idx * 100}>
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-premium transition-shadow">
                  <div className="grid grid-cols-1 lg:grid-cols-5">
                    {/* Image / Visual */}
                    <div className="lg:col-span-2 gradient-primary relative min-h-[250px] flex items-end overflow-hidden">
                      <div className="absolute inset-0 pattern-grid opacity-20" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="relative z-10 p-8 w-full">
                        <span className="inline-flex px-3 py-1 rounded-full text-xs font-bold bg-ira-accent text-white mb-3">
                          {project.category}
                        </span>
                        <h2 className="text-xl font-bold text-white mb-2 leading-snug">
                          {project.title}
                        </h2>
                        <div className="flex items-center gap-1.5 text-white/70 text-sm">
                          <MapPin size={14} />
                          {project.location}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-3 p-8">
                      <p className="text-sm text-gray-400 font-medium mb-1">Client: {project.client}</p>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Impact Metrics */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        {project.impact.map((imp, i) => (
                          <div key={i} className="bg-ira-primary/5 rounded-xl p-4 text-center">
                            <div className="text-xl font-extrabold text-ira-primary font-mono-nums">{imp.value}</div>
                            <div className="text-xs text-gray-500 mt-1">{imp.metric}</div>
                          </div>
                        ))}
                      </div>

                      {/* Testimonial */}
                      {project.testimonial && (
                        <blockquote className="border-l-3 border-ira-accent pl-5 py-2 bg-gray-50 rounded-r-xl mb-6">
                          <p className="text-sm text-gray-600 italic leading-relaxed line-clamp-3">
                            &ldquo;{project.testimonial.quote}&rdquo;
                          </p>
                          <cite className="text-xs text-gray-400 not-italic mt-2 block">
                            — {project.testimonial.author}, {project.testimonial.role}
                          </cite>
                        </blockquote>
                      )}

                      {/* Products used */}
                      <div className="flex flex-wrap gap-2">
                        {project.productsUsed.map((prod, i) => (
                          <span key={i} className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                            {prod}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <CTABanner />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
