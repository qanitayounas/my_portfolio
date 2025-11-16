"use client";

import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ExperienceItem {
  title: string;
  company: string;
  years: string;
  location: string;
  description: string[];
}

interface ExperienceSectionProps {
  experience: ExperienceItem[];
}

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-full text-sm font-medium text-slate-700 mb-4">
            Professional Journey
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">My professional background and work experience</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experience.map((exp, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-slate-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl text-gray-900">{exp.title}</CardTitle>
                    <p className="text-lg font-semibold text-slate-700 mb-2">{exp.company}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.years}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3 text-gray-600">
                      <span className="w-2 h-2 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
