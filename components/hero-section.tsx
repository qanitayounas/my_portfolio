"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface HeroSectionProps {
  name: string;
  title: string;
  email: string;
  phone: string;
}

const ChevronDownIcon = () => (
  <svg className="h-6 w-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
  </svg>
);

const GitHubIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 ..." />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328 ..." />
  </svg>
);

const MailIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const DownloadIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

export function HeroSection({ name, title, email, phone }: HeroSectionProps) {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["Frontend Developer", "Problem Solver", "Computer Science Graduate"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center pt-20 px-6 bg-gradient-to-br from-slate-50 via-white to-gray-50"
    >
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-full text-sm font-medium text-slate-700">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              Available for opportunities
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
                {name}
              </span>
            </h1>

            <div className="text-2xl lg:text-3xl text-gray-600 h-12">
              <span className="font-medium">{roles[currentRole]}</span>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Passionate about creating innovative web solutions and solving complex problems through code. A recent Computer Science graduate from UET Peshawar with expertise in modern web technologies and UI/UX design.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={handleDownloadResume}
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-xl font-medium flex items-center justify-center"
            >
              <DownloadIcon />
              <span className="ml-2">Download Resume</span>
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={scrollToContact}
              className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3 rounded-xl font-medium flex items-center justify-center"
            >
              <MailIcon />
              <span className="ml-2">Get In Touch</span>
            </Button>
          </div>

          {/* GitHub & LinkedIn Icons */}
          <div className="flex items-center gap-4 pt-4">
            <a
              href="https://github.com/qanitayounas"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-gray-600 hover:text-white hover:bg-gray-800 transition"
            >
              <GitHubIcon />
            </a>

            <a
              href="https://www.linkedin.com/in/qanita-binte-younas-450360310/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-gray-600 hover:text-white hover:bg-blue-700 transition"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative lg:justify-self-end">
          <div className="relative w-80 h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 rounded-3xl transform rotate-6"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl transform rotate-3"></div>
            <div className="relative w-full h-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              <Image
                src="/user.jpg"
                alt={name}
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Chevron Down */}
      <div className="text-center mt-16 animate-bounce">
        <ChevronDownIcon />
      </div>
    </section>
  );
}
