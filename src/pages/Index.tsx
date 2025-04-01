
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import FeaturesSection from "@/components/FeaturesSection";
import ContentSection from "@/components/ContentSection";
import TestimonialSection from "@/components/TestimonialSection";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <CategorySection />
        <FeaturesSection />
        <ContentSection />
        <TestimonialSection />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
