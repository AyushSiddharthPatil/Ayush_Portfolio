
import React from 'react';
import { Button } from '@/components/ui/button';
import { Star, Code, User } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Hi! I Am <br />
              <span className="text-orange-500">Ayush</span> <br />
              Patil
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              Software Developer and AI enthusiast passionate about building scalable solutions with cutting-edge technology.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <Button 
              onClick={() => scrollToSection('portfolio')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium"
            >
              View Work
            </Button>
            <Button 
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-2 border-gray-300 hover:border-orange-500 px-8 py-3 rounded-lg"
            >
              Contact Me
            </Button>
          </div>

          <div className="flex items-center gap-6 pt-4">
            <div className="flex items-center gap-2">
              <Star className="text-orange-500 w-5 h-5" />
              <span className="text-sm text-gray-600">AI & ML Expert</span>
            </div>
            <div className="flex items-center gap-2">
              <Code className="text-orange-500 w-5 h-5" />
              <span className="text-sm text-gray-600">Full Stack Developer</span>
            </div>
          </div>
        </div>

        <div className="relative lg:flex justify-center hidden">
          <div className="relative">
            <div className="w-80 h-80 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full flex items-center justify-center">
              <User className="w-40 h-40 text-white" />
            </div>
            
            {/* Floating cards */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 animate-bounce">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Code className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-medium">Python</div>
                  <div className="text-xs text-gray-500">Expert Level</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 animate-pulse">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm font-medium">AI Projects</div>
                  <div className="text-xs text-gray-500">5+ Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
