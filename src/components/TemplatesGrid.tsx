import TemplateCard from "./TemplateCard";

const templates = [
  {
    title: "Agency Pro",
    description: "Modern and professional template perfect for creative agencies and businesses.",
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    demoUrl: "#",
  },
  {
    title: "Startup Landing",
    description: "Clean and minimal design for startups and SaaS products.",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    demoUrl: "#",
  },
  {
    title: "Portfolio Plus",
    description: "Showcase your work with this elegant portfolio template.",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    demoUrl: "#",
  },
  {
    title: "E-Commerce Start",
    description: "Perfect template for your online store with modern design.",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    demoUrl: "#",
  },
];

const TemplatesGrid = () => {
  return (
    <section id="templates" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Explore Our Templates
        </h2>
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