
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, Search, Star } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Amazon Price Detector",
      description: "An intelligent price monitoring system that tracks Amazon product prices and alerts users about price drops using web scraping and machine learning.",
      technologies: ["Python", "Beautiful Soup", "Machine Learning", "Data Analysis"],
      icon: Search,
      color: "from-orange-400 to-red-400",
      status: "Featured Project",
      codeUrl: "https://github.com/AyushSiddharthPatil/Amazon-Tracker.git"
    },
    {
      title: "AI-Powered Chat Application",
      description: "A real-time chat application integrated with AI capabilities for smart responses and natural language processing.",
      technologies: ["React", "Node.js", "AI/ML", "WebSocket"],
      icon: Star,
      color: "from-purple-400 to-pink-400",
      status: "In Development"
    },
    {
      title: "Full Stack E-Commerce Platform",
      description: "A complete e-commerce solution with user authentication, payment integration, and inventory management.",
      technologies: ["MERN Stack", "Stripe API", "JWT", "MongoDB"],
      icon: Code,
      color: "from-blue-400 to-cyan-400",
      status: "Completed"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Recent Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing innovative solutions that demonstrate expertise in AI, web development, and problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className={`h-48 bg-gradient-to-r ${project.color} flex items-center justify-center`}>
                <project.icon className="w-16 h-16 text-white" />
              </div>
              
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-orange-500 bg-orange-50 px-2 py-1 rounded-full">
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button variant="outline" size="sm" className="text-xs">
                    View Demo
                  </Button>
                  {project.codeUrl ? (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="text-xs"
                      onClick={() => window.open(project.codeUrl, '_blank')}
                    >
                      <Code className="w-3 h-3 mr-1" />
                      Code
                    </Button>
                  ) : (
                    <Button variant="outline" size="sm" className="text-xs">
                      <Code className="w-3 h-3 mr-1" />
                      Code
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Interested in seeing more of my work?
          </p>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
