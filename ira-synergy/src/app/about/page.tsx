import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, Lightbulb, Leaf, Users, Handshake, Award, Target, Eye, Heart, Shield, FileCheck, Building2, Rocket, Briefcase, Package, MapPin, Flag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTABanner from "@/components/CTABanner";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CountUp from "@/components/ui/CountUp";
import { companyInfo, certifications, coreValues, companyStats, platforms } from "@/data/company";

export const metadata: Metadata = {
  title: "About | iRA Synergy - Heavy Infrastructure",
  description: "Learn about iRA Synergy Private Limited — our massive infrastructure projects, government partnerships, and corporate vision.",
};

const valueIcons: Record<string, React.ElementType> = {
  ShieldCheck, Lightbulb, Leaf, Users, Handshake, Award,
};

const certIcons: Record<string, React.ElementType> = {
  Shield, Leaf, FileCheck, Building2, Rocket, Award, ShieldCheck
};

const statIcons: Record<string, React.ElementType> = {
  Briefcase, Package, MapPin, Flag
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      <main className="flex-grow pt-24">
        
        {/* Cinematic Hero Section */}
        <section className="relative w-full h-[60vh] md:h-[80vh] min-h-[500px]">
          <Image 
            src="https://images.unsplash.com/photo-1541888086925-0c13d4cc5410?auto=format&fit=crop&q=80"
            alt="Heavy Infrastructure Development"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
          
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="max-w-5xl px-4">
              <ScrollReveal>
                <span className="text-ira-primary font-bold tracking-[0.4em] uppercase mb-6 block text-sm md:text-base">
                  Corporate Profile
                </span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tight mb-8">
                  Pioneering India's <br/> Infrastructure Evolution.
                </h1>
                <p className="text-lg md:text-2xl text-gray-300 font-light max-w-3xl mx-auto">
                  {companyInfo.mission}
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Expansive Corporate Story */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
              
              <div className="lg:w-1/3">
                <ScrollReveal variant="left">
                  <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight sticky top-32">
                    Who <br className="hidden lg:block"/> We Are.
                  </h2>
                </ScrollReveal>
              </div>

              <div className="lg:w-2/3 space-y-8 text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                <ScrollReveal>
                  <p className="first-letter:text-7xl first-letter:font-black first-letter:text-ira-primary first-letter:mr-3 first-letter:float-left">
                    {companyInfo.storyParagraph1}
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={100}>
                  <p>{companyInfo.storyParagraph2}</p>
                </ScrollReveal>
                <ScrollReveal delay={200}>
                  <p>{companyInfo.storyParagraph3}</p>
                </ScrollReveal>
              </div>

            </div>
          </div>
        </section>

        {/* The Scale of Synergy (Dark Numbers Block) */}
        <section className="py-24 bg-[#050505] text-white border-y border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <span className="text-ira-primary font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Our Impact</span>
                <h2 className="text-4xl md:text-5xl font-black">The Scale of Synergy</h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 divide-x divide-white/10">
              {companyStats.map((stat, idx) => {
                const Icon = statIcons[stat.icon] || Target;
                return (
                  <ScrollReveal key={stat.id} delay={idx * 100} className="text-center px-4">
                    <div className="flex justify-center mb-6">
                      <Icon className="text-gray-500" size={32} />
                    </div>
                    <div className="text-5xl md:text-7xl font-black text-white mb-2 tracking-tighter">
                      <CountUp end={stat.value} duration={2.5} />
                      <span className="text-ira-primary">{stat.suffix}</span>
                    </div>
                    <p className="text-sm md:text-base text-gray-400 font-bold uppercase tracking-widest">{stat.label}</p>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* Directors' Vision */}
        <section className="py-24 md:py-32 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {companyInfo.directors?.map((director, index) => (
              <div key={index} className="bg-white rounded-[3rem] shadow-xl border border-gray-100 overflow-hidden">
                <div className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                  
                  {/* Director Image */}
                  <div className="lg:w-2/5 relative h-[400px] lg:h-[600px]">
                    <Image 
                      src={director.image} 
                      alt={director.name}
                      fill
                      className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-8 left-8 text-white">
                      <p className="text-3xl font-black mb-1">{director.name}</p>
                      <p className="text-ira-primary font-bold tracking-widest uppercase text-sm">{director.title}</p>
                    </div>
                  </div>

                  {/* Quote Content */}
                  <div className="lg:w-3/5 p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-center">
                    <ScrollReveal>
                      <span className="text-7xl sm:text-9xl text-gray-200 leading-none block h-12 sm:h-20 font-serif">"</span>
                      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 leading-tight mb-6 sm:mb-8">
                        {director.quote}
                      </h3>
                      <div className="w-16 sm:w-20 h-1 bg-ira-primary mb-6 sm:mb-8" />
                      <p className="text-sm sm:text-base text-gray-500 font-medium">
                        At iRA Synergy, we don't just supply equipment. We act as strategic engineering partners for India's largest civic and corporate entities, ensuring that every rupee invested yields a generation of value.
                      </p>
                    </ScrollReveal>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Trust & Compliance Grid */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 border-b border-gray-100 pb-4">
              <div className="max-w-2xl">
                <ScrollReveal>
                  <span className="text-ira-primary font-bold tracking-[0.3em] uppercase text-xs mb-2 block">Compliance</span>
                  <h2 className="text-3xl font-black text-gray-900">Certified Reliability.</h2>
                </ScrollReveal>
              </div>
              <div className="max-w-md">
                <ScrollReveal delay={100}>
                  <p className="text-sm text-gray-500">
                    Our operations adhere to the strictest international and domestic quality standards, ensuring absolute compliance for government procurement.
                  </p>
                </ScrollReveal>
              </div>
            </div>
            <ScrollReveal delay={200}>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-3 sm:gap-4 items-center justify-items-center py-2">
                {[
                  "gmp-quality.png",
                  "ICE.png",
                  "images.jpg",
                  "mh-logo.jpeg",
                  "msme-zed.jpeg",
                  "nabl-india-seeklogo.png",
                  "newNS.png",
                  "ohsas-iso-18001.png",
                  "qa-certificate.jpeg",
                  "08_client.png",
                  "45001.jpeg",
                  "1673846.jpg",
                  "CVC.png",
                  "gem-logo.png"
                ].map((logo, index) => (
                  <div key={index} className="w-full flex items-center justify-center bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow aspect-square relative overflow-hidden group">
                    <Image 
                      src={`/images/brands/${logo}`} 
                      alt={`Compliance Certificate ${index + 1}`} 
                      fill
                      className="object-contain p-3 mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Platforms We Are Available On */}
            <div className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 border-b border-gray-100 pb-4">
              <div className="max-w-2xl">
                <ScrollReveal>
                  <span className="text-ira-primary font-bold tracking-[0.3em] uppercase text-xs mb-2 block">Availability</span>
                  <h2 className="text-2xl md:text-3xl font-black text-gray-900">Platforms we are available on.</h2>
                </ScrollReveal>
              </div>
            </div>
            
            <ScrollReveal delay={200}>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-8 py-2">
                {[
                  "1 (1).jpeg",
                  "1 (2).jpeg",
                  "1 (3).jpeg",
                ].map((logo, index) => (
                  <div key={`platform-${index}`} className="w-32 sm:w-48 flex items-center justify-center bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow aspect-[4/3] relative overflow-hidden group">
                    <Image 
                      src={`/images/brands/${logo}`} 
                      alt={`Available Platform ${index + 1}`} 
                      fill
                      className="object-contain p-3 mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </ScrollReveal>

          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
