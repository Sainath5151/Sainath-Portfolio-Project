import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Bug, GalleryVertical, Mail } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Dramatic background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-scorpion-dark via-scorpion-darker to-black">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-scorpion-dark via-transparent to-scorpion-dark opacity-80" />
      </div>
      
      <div className="relative z-10 text-center px-6 animate-fade-in">
        <div className="glass-effect p-12 rounded-2xl max-w-4xl mx-auto">
          <div className="mb-6">
            <Bug className="h-24 w-24 text-scorpion-yellow mb-4 mx-auto animate-glow" />
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 text-shadow">
            Welcome to <span className="text-scorpion-yellow">Sainath's Portfolio</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-medium max-w-2xl mx-auto">
            Unveiling creativity, skill, and excellence through innovative design and development
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/portfolio">
              <Button className="bg-scorpion-yellow text-black px-8 py-4 text-lg font-bold rounded-xl shadow-lg hover:bg-scorpion-yellow-dark transition-all duration-300 transform hover:scale-105">
                <GalleryVertical className="mr-2 h-5 w-5" />
                Explore My GalleryVertical
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                variant="outline" 
                className="border-2 border-scorpion-yellow text-scorpion-yellow px-8 py-4 text-lg font-bold rounded-xl hover:bg-scorpion-yellow hover:text-black transition-all duration-300"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
