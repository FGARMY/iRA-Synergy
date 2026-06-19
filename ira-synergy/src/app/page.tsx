import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FocusAreas from "@/components/FocusAreas";
import Solutions from "@/components/Solutions";
import Products from "@/components/Products";
import TrustSection from "@/components/TrustSection";
import CaseStudiesPreview from "@/components/CaseStudiesPreview";
import CTABanner from "@/components/CTABanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FocusAreas />
        <Solutions />
        <Products />
        <CaseStudiesPreview />
        <TrustSection />
        <CTABanner />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
