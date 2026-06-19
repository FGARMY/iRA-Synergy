import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import StatsBar from "./StatsBar";

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex flex-col justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 z-0">
        {/* Main bg image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero/hero-bg.png')" }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-ira-dark/95 via-ira-primary/90 to-ira-primary/70" />
        {/* Pattern overlay */}
        <div className="absolute inset-0 pattern-grid opacity-30" />
        {/* Ambient glow */}
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-ira-secondary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-ira-steel/8 rounded-full blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass text-white mb-8 text-sm font-medium tracking-wide animate-fade-in-down">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-ira-accent opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-ira-accent" />
            </span>
            Building a Smarter, Cleaner & Sustainable India
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.08] mb-6 tracking-tight animate-fade-in-up">
            Innovative Solutions for{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-ira-accent to-ira-amber-light">
                Infrastructure
              </span>
            </span>{" "}
            &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ira-steel-light to-ira-accent">
              Sustainability
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed animate-fade-in-up delay-200">
            Partnering with government and communities to execute impactful development
            projects — from smart city infrastructure to renewable energy solutions.
            Transforming ideas into sustainable infrastructure for a stronger tomorrow.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
            <Link href="/solutions" className="btn-primary text-base !py-4 !px-8">
              Explore Solutions
              <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="btn-secondary text-base !py-4 !px-8">
              Request Consultation
            </Link>
          </div>

          {/* Trust badges inline */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-12 animate-fade-in-up delay-500">
            {["ISO 9001 Certified", "GeM Registered", "Make in India", "MSME"].map((badge) => (
              <div key={badge} className="flex items-center gap-2 text-white/60 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-ira-accent" />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Bar at bottom */}
      <StatsBar />

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full z-10">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 40L48 36C96 32 192 24 288 28C384 32 480 48 576 52C672 56 768 48 864 40C960 32 1056 24 1152 28C1248 32 1344 48 1392 56L1440 64V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0V40Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
