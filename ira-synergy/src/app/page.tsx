import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import dynamic from "next/dynamic";

const Solutions = dynamic(() => import("@/components/Solutions"));
const StatsBanner = dynamic(() => import("@/components/StatsBanner"));
const FeaturedProducts = dynamic(() => import("@/components/FeaturedProducts"));
const Gallery = dynamic(() => import("@/components/Gallery"));
const BusinessInfo = dynamic(() => import("@/components/BusinessInfo"));
const TrustSection = dynamic(() => import("@/components/TrustSection"));

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <TrustSection />
        <Solutions />
        <StatsBanner />
        <FeaturedProducts />
        <Gallery />
        <BusinessInfo />
      </main>
      <Footer />
    </div>
  );
}
