"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface SkillsSectionProps {
  skills: {
    Languages: string[];
    "Technical Skills": string[];
    Tools: string[];
  };
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 90, icon: "🟨" },
        { name: "Python", level: 80, icon: "🐍" },
        { name: "TypeScript", level: 85, icon: "💙" },
        { name: "HTML5/CSS", level: 95, icon: "🌐" },
        { name: "C++", level: 80, icon: "⚡" }
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React", level: 90, icon: "⚛️" },
        { name: "Next.js", level: 85, icon: "▲" },
        { name: "Node.js", level: 80, icon: "🟢" },
        { name: "Tailwind CSS", level: 92, icon: "🎨" },
        { name: "Redux", level: 80, icon: "📦" }
      ]
    },
    {
      title: "Databases & Tools",
      skills: [
        { name: "MongoDB", level: 80, icon: "🍃" },
        { name: "MySQL", level: 85, icon: "🐬" },
        { name: "Git & GitHub", level: 92, icon: "🐙" },
        { name: "Figma", level: 85, icon: "🎨" },
        { name: "Postman", level: 85, icon: "📮" }
      ]
    }
  ];

  const technologies = [
    { name: "React", category: "Framework" },
    { name: "Next.js", category: "Framework" },
    { name: "Node.js", category: "Runtime" },
    { name: "TypeScript", category: "Language" },
    { name: "MongoDB", category: "Database" },
    { name: "MySQL", category: "Database" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Redux", category: "State" },
    { name: "Figma", category: "Design" },
    { name: "Git", category: "Version Control" },
    { name: "Postman", category: "Tools" },
    { name: "Firebase", category: "Backend" }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-slate-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full text-sm font-medium text-slate-700 mb-4 shadow-sm">
            Skills & Expertise
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Technical Proficiency
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills and the tools I use to build modern web applications
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-center text-gray-900">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-3 font-medium text-gray-900">
                        <span className="text-lg">{skill.icon}</span>
                        {skill.name}
                      </span>
                      <span className="text-sm font-semibold text-slate-600">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2 bg-gray-200" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 font-medium transition-all duration-200 hover:shadow-md"
              >
                <span className="mr-2">{tech.name}</span>
                <span className="text-xs text-slate-500">({tech.category})</span>
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
