import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="hero-gradient min-h-[60vh] flex items-center justify-center text-white px-4 mt-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          "Free & Beautiful Website Templates for Everyone!"
        </h1>
        <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Explore our curated collection of stunning, production-ready
          templates. Built with modern tech stacks, optimized for performance,
          and completely free for your next project.
        </p>
        <Button
          className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6"
          onClick={() => {
            const templatesSection = document.getElementById("templates");
            templatesSection?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Explore Templates
        </Button>
      </div>
    </div>
  );
};

export default Hero;
