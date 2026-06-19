import type { Metadata } from "next";
import Link from "next/link";
import { School, Recycle, Sun, HeartPulse, Dumbbell, Building2, ArrowRight, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTABanner from "@/components/CTABanner";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { solutions } from "@/data/solutions";

export const metadata: Metadata = {
  title: "Solutions",
  description: "End-to-end infrastructure and sustainability solutions — smart schools, waste management, renewable energy, public health, fitness, and smart city projects.",
};

const iconMap: Record<string, React.ElementType> = {
  School, Recycle, Sun, HeartPulse, Dumbbell, Building2,
};

export default function SolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Solutions" }]} />

          <ScrollReveal>
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                Our Solutions
              </h1>
              <p className="text-lg text-gray-500 max-w-2xl">
                End-to-end infrastructure and sustainability solutions for government, institutions, and communities across India.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {solutions.map((solution, idx) => {
              const Icon = iconMap[solution.icon] || Building2;
              return (
                <ScrollReveal key={solution.id} delay={idx * 100}>
                  <Link href={`/solutions/${solution.slug}`} className="group block h-full">
                    <div className="h-full bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-premium card-hover">
                      {/* Color bar */}
                      <div className={`h-2 w-full ${solution.color}`} />
                      <div className="p-8">
                        <div className="flex items-start gap-5 mb-5">
                          <div className={`w-16 h-16 rounded-2xl ${solution.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                            <Icon size={32} className="text-white" strokeWidth={1.5} />
                          </div>
                          <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-ira-primary transition-colors">
                              {solution.title}
                            </h2>
                            <div className="flex gap-3">
                              {solution.stats.slice(0, 2).map((stat, i) => (
                                <span key={i} className="text-xs text-gray-400 font-medium">
                                  {stat.value} {stat.label}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                          {solution.description}
                        </p>

                        <div className="grid grid-cols-2 gap-2 mb-6">
                          {solution.features.slice(0, 4).map((feat, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs text-gray-600">
                              <CheckCircle2 size={13} className="text-ira-accent flex-shrink-0" />
                              <span className="line-clamp-1">{feat}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center gap-2 text-ira-primary font-semibold text-sm group-hover:gap-3 transition-all">
                          Explore Solution
                          <ArrowRight size={16} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        <CTABanner />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
