import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface TemplateCardProps {
  title: string;
  description: string;
  imageUrl: string;
  demoUrl: string;
}

const TemplateCard = ({ title, description, imageUrl, demoUrl }: TemplateCardProps) => {
  return (
    <Card className="template-card overflow-hidden glass-morphism will-change-transform">
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-56 object-cover will-change-transform"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-3 text-gradient">{title}</h3>
          <p className="text-gray-400 leading-relaxed">{description}</p>
        </div>
      </CardContent>
      <CardFooter className="px-6 pb-6">
        <Button 
          className="w-full bg-white/10 hover:bg-white/20 text-white shadow-md transition-colors duration-200" 
          asChild
        >
          <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
            View Template <ExternalLink size={16} />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TemplateCard;