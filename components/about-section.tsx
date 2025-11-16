"use client";

import { Code2, Lightbulb, Target, Users, Palette } from 'lucide-react'; // Import Palette icon
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  const highlights = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Proficient in modern web technologies including React, Node.js, and responsive design",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Creative approach to complex technical challenges with innovative solutions",
      color: "from-amber-500 to-amber-600"
    },
    {
      icon: Palette,
      title: "UI/UX Design", 
      description: "Creating intuitive and engaging user experiences with modern design principles",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Strong team player with excellent communication and collaborative skills",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const stats = [
    { number: "4+", label: "Projects Completed" },
    { number: "2+", label: "Years of Experience" },
    { number: "10+", label: "Technologies" },
    { number: "100%", label: "Dedication" }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-full text-sm font-medium text-slate-700 mb-4">
            About Me
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Crafting Digital Solutions
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-6">
            <div className="prose prose-lg">
              <p className="text-gray-600 leading-relaxed">
                I'm a Computer Science graduate from the University of Engineering and Technology with a strong foundation in web development and problem-solving. My approach combines technical expertise with a keen eye for UI/UX design.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I specialize in building responsive web applications using modern frameworks like React, Node.js, and Next.js. My experience includes developing role-based dashboards, implementing interactive visualizations, and creating engaging user experiences.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I'm passionate about clean, maintainable code and collaborative development. I continuously explore new technologies and enjoy contributing to projects that make a real impact in the developer community.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
