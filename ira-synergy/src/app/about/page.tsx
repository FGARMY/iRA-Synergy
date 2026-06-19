import type { Metadata } from "next";
import { ShieldCheck, Lightbulb, Leaf, Users, Handshake, Award, Target, Eye, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTABanner from "@/components/CTABanner";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CountUp from "@/components/ui/CountUp";
import { companyInfo, coreValues, teamMembers, companyStats } from "@/data/company";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about iRA Synergy Private Limited — our mission, vision, core values, and the team building sustainable infrastructure across India.",
};

const valueIcons: Record<string, React.ElementType> = {
  ShieldCheck, Lightbulb, Leaf, Users, Handshake, Award,
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-28">
        {/* Hero */}
        <section className="gradient-primary relative overflow-hidden py-20 md:py-28">
          <div className="absolute inset-0 pattern-grid opacity-10" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-white mb-6 text-sm">
                <span className="w-2 h-2 rounded-full bg-ira-accent" />
                About iRA Synergy
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                Building a Smarter, Cleaner &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-ira-accent to-ira-amber-light">
                  Sustainable India
                </span>
              </h1>
              <p className="text-lg text-white/70 leading-relaxed">
                {companyInfo.description}
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ScrollReveal variant="left">
                <div className="bg-ira-surface rounded-2xl p-8 border border-gray-100 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-ira-primary/10 flex items-center justify-center mb-6">
                    <Target size={28} className="text-ira-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                  <p className="text-gray-600 leading-relaxed">
                    To provide innovative, high-quality infrastructure and sustainability solutions that empower
                    communities, support government initiatives, and drive sustainable development across India.
                    We strive to make cutting-edge technology accessible and affordable for public institutions.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal variant="right">
                <div className="bg-ira-surface rounded-2xl p-8 border border-gray-100 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-ira-amber/10 flex items-center justify-center mb-6">
                    <Eye size={28} className="text-ira-amber" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                  <p className="text-gray-600 leading-relaxed">
                    To become India&apos;s most trusted platform for infrastructure solutions — enabling
                    every municipality, school, and community to access world-class sustainable technology.
                    We envision a future where every public space is smart, clean, and resource-efficient.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section-padding bg-ira-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="section-header">
                <div className="section-label bg-ira-primary/5 text-ira-primary">
                  <span className="w-2 h-2 rounded-full bg-ira-accent" />
                  What Drives Us
                </div>
                <h2 className="section-title text-gray-900">Our Core Values</h2>
                <p className="section-subtitle">
                  The principles that guide our actions and define our culture.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreValues.map((value, idx) => {
                const Icon = valueIcons[value.icon] || Heart;
                return (
                  <ScrollReveal key={value.id} delay={idx * 100}>
                    <div className="group bg-white rounded-2xl p-7 glass-card card-hover card-border-glow h-full">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500"
                        style={{ backgroundColor: `${value.color}15` }}
                      >
                        <Icon size={28} style={{ color: value.color }} />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{value.description}</p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="section-header">
                <h2 className="section-title text-gray-900">Leadership</h2>
              </div>
            </ScrollReveal>

            <div className="max-w-md mx-auto">
              {teamMembers.map((member) => (
                <ScrollReveal key={member.id}>
                  <div className="bg-white rounded-2xl p-8 text-center glass-card">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-ira-primary to-ira-secondary flex items-center justify-center text-white text-3xl font-bold mb-5">
                      {member.name.charAt(0)}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-ira-primary font-semibold text-sm mb-4">{member.role}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
