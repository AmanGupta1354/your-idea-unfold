import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import UploadSection from "@/components/UploadSection";
import StudyMaterials from "@/components/StudyMaterials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <UploadSection />
        <StudyMaterials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
