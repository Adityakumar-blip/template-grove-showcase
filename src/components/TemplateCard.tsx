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
    <Card className="template-card overflow-hidden">
      <CardContent className="p-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover hover:opacity-90 transition-opacity"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </CardContent>
      <CardFooter className="px-6 pb-6">
        <Button className="w-full" asChild>
          <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            View Template <ExternalLink size={16} />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TemplateCard;