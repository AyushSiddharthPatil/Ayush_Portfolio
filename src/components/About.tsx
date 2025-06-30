
import React from 'react';
import { Card } from '@/components/ui/card';
import { Code, Star, User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate software developer with expertise in AI, machine learning, and full-stack development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">
                Building Tomorrow's Solutions Today
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Currently pursuing Bachelor of Technology in Software Engineering (Expected 2027), 
                I specialize in creating scalable solutions that integrate cutting-edge AI and machine 
                learning technologies with robust web development practices.
              </p>
              <p className="text-gray-600 leading-relaxed">
                My passion lies in developing user-centric applications that solve real-world problems 
                through innovative technology. I believe in the power of clean code, intuitive design, 
                and intelligent automation.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-orange-500">3</div>
                <div className="text-sm text-gray-600">AI Projects</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-orange-500">10</div>
                <div className="text-sm text-gray-600">Technologies</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Card className="p-6 border-l-4 border-orange-500 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Software Developer</h4>
                  <p className="text-gray-600 text-sm">
                    Proficient in Python, C++, JavaScript, and the MERN stack. Expert in Django and Flask frameworks.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-purple-500 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">AI & ML Specialist</h4>
                  <p className="text-gray-600 text-sm">
                    Experienced in machine learning algorithms, data analysis, and building intelligent systems.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <User className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Problem Solver</h4>
                  <p className="text-gray-600 text-sm">
                    Focused on creating user-centric solutions that address real-world challenges through technology.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
