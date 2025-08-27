import Header from "@/components/Header";
import ProfileSection from "@/components/ProfileSection";
import Navigation from "@/components/Navigation";
import PoemSection from "@/components/PoemSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ProfileSection />
      <Navigation />
      <PoemSection />
      <Footer />
    </div>
  );
};

export default Index;