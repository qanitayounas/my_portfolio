"use client";

import { useState } from "react";
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  githubUrl: string;
  demoUrl?: string;
}

export function ProjectsSection() {
  const projects: Project[] = [
    {
      title: "HealBot - AI Virtual Therapist",
      description:
        "A Final Year Project (FYP) - AI-powered personalized virtual therapist providing therapeutic support for insomnia and OCD. Built with Python, OpenAI GPT-3.5-turbo, ChromaDB, and React. Features document processing, emergency detection, and secure API management.",
      githubUrl: "https://github.com/qanitayounas/HealBot"
    },
    {
      title: "CRM Dashboard",
      description:
        "A responsive and interactive frontend for a CRM dashboard platform to manage customer relationships and track sales. Built with React and Tailwind CSS, featuring dynamic charts, tables, and intuitive UI components for efficient data management."
    },
    {
      title: "AI-FashionBot",
      description:
        "A Flask-based AI chatbot acting as a Virtual Fashion Designer, delivering personalized outfit ideas and style suggestions. Built with Flask, LangChain, OpenAI GPT-4o-mini, MongoDB, and Tailwind CSS.",
      githubUrl: "https://github.com/qanitayounas/fashion_bot"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-full text-sm font-medium text-slate-700 mb-4">
            Portfolio
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A selection of my recent work showcasing expertise in web development, AI, and UI/UX
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="w-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-gray-900">{project.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
              </CardContent>

              <CardFooter className="pt-0">
                <div className="flex gap-3 w-full">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-slate-300 text-slate-700 hover:bg-slate-50"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
