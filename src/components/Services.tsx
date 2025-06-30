
import React from 'react';
import { Card } from '@/components/ui/card';
import { Code, Star, Search, Palette } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Building scalable web applications using MERN stack, Django, and Flask frameworks.",
      skills: ["React", "Node.js", "MongoDB", "Django", "Flask"],
      color: "orange"
    },
    {
      icon: Star,
      title: "AI & Machine Learning",
      description: "Developing intelligent systems and ML models for data-driven solutions.",
      skills: ["Python", "TensorFlow", "Scikit-learn", "Data Analysis"],
      color: "purple"
    },
    {
      icon: Search,
      title: "Web Scraping & Automation",
      description: "Creating automated solutions for data extraction and price monitoring.",
      skills: ["Beautiful Soup", "Selenium", "APIs", "Data Processing"],
      color: "blue"
    },
    {
      icon: Palette,
      title: "Software Architecture",
      description: "Designing robust and maintainable software solutions with best practices.",
      skills: ["System Design", "Database Design", "API Development"],
      color: "green"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      orange: "bg-orange-100 text-orange-600 border-orange-500",
      purple: "bg-purple-100 text-purple-600 border-purple-500",
      blue: "bg-blue-100 text-blue-600 border-blue-500",
      green: "bg-green-100 text-green-600 border-green-500"
    };
    return colors[color as keyof typeof colors] || colors.orange;
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">My Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive software development services focused on creating innovative solutions with cutting-edge technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-l-transparent hover:border-l-orange-500">
              <div className="space-y-6">
                <div className={`w-16 h-16 rounded-lg flex items-center justify-center ${getColorClasses(service.color)}`}>
                  <service.icon className="w-8 h-8" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {service.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Ready to bring your ideas to life with cutting-edge technology?
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Let's Work Together
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
