import TemplateCard from "./TemplateCard";

const templates = [
  {
    title: "Agency Pro",
    description: "Modern and professional template perfect for creative agencies and businesses. Built with the latest design trends.",
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    demoUrl: "#",
  },
  {
    title: "Startup Landing",
    description: "Clean and minimal design for startups and SaaS products. Optimized for conversions and engagement.",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    demoUrl: "#",
  },
  {
    title: "Portfolio Plus",
    description: "Showcase your work with this elegant portfolio template. Perfect for creatives and professionals.",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    demoUrl: "#",
  },
  {
    title: "E-Commerce Start",
    description: "Perfect template for your online store with modern design. Includes product layouts and cart functionality.",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    demoUrl: "#",
  },
];

const TemplatesGrid = () => {
  return (
    <section id="templates" className="py-24 px-4 bg-background/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Explore Our Templates
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose from our collection of beautiful, responsive landing page templates designed to help you launch faster.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <TemplateCard key={index} {...template} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TemplatesGrid;