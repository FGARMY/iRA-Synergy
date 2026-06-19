import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import StatsBanner from "@/components/StatsBanner";
import FeaturedProducts from "@/components/FeaturedProducts";
import Gallery from "@/components/Gallery";
import BusinessInfo from "@/components/BusinessInfo";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
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
