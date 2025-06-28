import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export default function ProjectCard({ 
  title, 
  description, 
  image, 
  technologies,
  liveUrl,
  githubUrl 
}: ProjectCardProps) {
  return (
    <Card className="bg-scorpion-gray border-scorpion-light-gray hover:border-scorpion-yellow transition-all duration-300 group overflow-hidden">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-6">
        <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span 
              key={tech}
              className="bg-scorpion-yellow text-black px-2 py-1 rounded text-sm font-semibold"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-3">
          {liveUrl && (
            <Button
              variant="ghost"
              size="sm"
              className="text-scorpion-yellow hover:text-white p-0"
              onClick={() => window.open(liveUrl, '_blank')}
            >
              <ExternalLink className="mr-1 h-4 w-4" />
              Live Demo
            </Button>
          )}
          {githubUrl && (
            <Button
              variant="ghost"
              size="sm"
              className="text-scorpion-yellow hover:text-white p-0"
              onClick={() => window.open(githubUrl, '_blank')}
            >
              <Github className="mr-1 h-4 w-4" />
              Code
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
