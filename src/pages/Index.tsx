
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import FeaturesSection from "@/components/FeaturesSection";
import ExercisesSection from "@/components/ExercisesSection";
import MonitoringSection from "@/components/MonitoringSection";
import TestimonialSection from "@/components/TestimonialSection";
import ArticlePreviewSection from "@/components/ArticlePreviewSection";
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
        <ExercisesSection />
        <MonitoringSection />
        <ArticlePreviewSection />
        <TestimonialSection />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
