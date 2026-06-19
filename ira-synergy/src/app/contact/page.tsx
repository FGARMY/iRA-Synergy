import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with iRA Synergy for infrastructure and sustainability solutions. Request a consultation, get a quote, or discuss your project requirements.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
