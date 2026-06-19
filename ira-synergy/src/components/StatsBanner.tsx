import Link from "next/link";
import { ArrowRight, Award, CheckCircle2, MapPin, Smile } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";

export default function StatsBanner() {
  return (
    <section className="bg-ira-primary-dark py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* Stats Items */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10 flex-grow">
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-2xl lg:text-3xl font-bold text-white leading-none mb-1">10+</div>
                  <div className="text-xs text-gray-300">Years of Experience</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-2xl lg:text-3xl font-bold text-white leading-none mb-1">500+</div>
                  <div className="text-xs text-gray-300">Successful Projects</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-2xl lg:text-3xl font-bold text-white leading-none mb-1">25+</div>
                  <div className="text-xs text-gray-300">States Covered</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Smile className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-2xl lg:text-3xl font-bold text-white leading-none mb-1">1000+</div>
                  <div className="text-xs text-gray-300">Happy Clients</div>
                </div>
              </div>

            </div>

            {/* CTA Side */}
            <div className="bg-ira-primary/30 p-4 rounded-lg flex flex-col items-center lg:items-start lg:w-72 flex-shrink-0">
              <p className="text-white font-semibold text-sm mb-3 text-center lg:text-left">
                Transforming Ideas into Sustainable Infrastructure
              </p>
              <Link href="/about" className="bg-ira-accent hover:bg-ira-accent-light transition-colors text-white text-xs font-bold px-4 py-2 rounded flex items-center gap-2">
                KNOW MORE ABOUT US
                <ArrowRight size={14} />
              </Link>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
