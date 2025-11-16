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
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.435-.103.25-.129.599-.129.948v5.422h-3.554s.05-8.798 0-9.714h3.554v1.375c.427-.659 1.191-1.595 2.897-1.595 2.117 0 3.704 1.385 3.704 4.362v5.572zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.956.769-1.71 1.959-1.71 1.189 0 1.917.754 1.948 1.71 0 .951-.759 1.71-1.992 1.71zm1.581 11.597H3.635V9.538h3.283v10.914zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
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
            {[
              { href: "https://github.com/qanitayounas", icon: <GitHubIcon />, bg: "hover:bg-gray-800" },
              { href: "https://www.linkedin.com/in/qanita-binte-younas-450360310/", icon: <LinkedInIcon />, bg: "hover:bg-blue-700" }
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full text-gray-600 hover:text-white transition ${item.bg} flex items-center justify-center`}
              >
                {item.icon}
              </a>
            ))}
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