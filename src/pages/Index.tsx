import Hero from "@/components/Hero";
import TemplatesGrid from "@/components/TemplatesGrid";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <Hero />
        <TemplatesGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;