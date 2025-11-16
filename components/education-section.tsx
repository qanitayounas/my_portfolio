"use client";

import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface EducationSectionProps {
  education: {
    degree: string;
    institution: string;
    location?: string;
    duration: string;
    status?: string;
    description?: string;
    // Removed logo property as it's no longer used
  }[];
}

export function EducationSection({ education }: EducationSectionProps) {
  // The logic to update education details is now handled directly in app/page.tsx
  // This component will just render the provided education data.

  const getStatusColor = (status: string) => {
    if (status === "Completed") return "text-green-600";
    if (status === "Grade A1") return "text-blue-600";
    return "text-gray-600"; // Default color if status is not recognized
  };

  return (
    <section id="education" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-full text-sm font-medium text-slate-700 mb-4 shadow-sm">
            Academic Journey
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Education
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My academic background has provided me with a strong foundation in computer science and problem-solving.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-start gap-4">
                  {/* Replaced image with icon */}
                  <div className="w-16 h-16 bg-slate-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl text-gray-900 mb-1">{edu.degree}</CardTitle>
                    <p className="text-lg font-semibold text-slate-700 mb-2">{edu.institution}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-600 mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.duration}</span>
                      </div>
                      {edu.location && (
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{edu.location}</span>
                        </div>
                      )}
                      {edu.status && (
                        <div className="flex items-center gap-1">
                          <GraduationCap className="h-4 w-4" />
                          <span className={`font-medium ${getStatusColor(edu.status)}`}>{edu.status}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
