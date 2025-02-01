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
    <Card className="template-card group overflow-hidden bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300">
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </CardContent>
      <CardFooter className="px-6 pb-6">
        <Button 
          className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-md hover:shadow-lg transition-all duration-300" 
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