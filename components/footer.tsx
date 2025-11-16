"use client";

import { Button } from "@/components/ui/button";

const GitHubIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.435-.103.25-.129.599-.129.948v5.422h-3.554s.05-8.798 0-9.714h3.554v1.375c.427-.659 1.191-1.595 2.897-1.595 2.117 0 3.704 1.385 3.704 4.362v5.572zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.956.769-1.71 1.959-1.71 1.189 0 1.917.754 1.948 1.71 0 .951-.759 1.71-1.992 1.71zm1.581 11.597H3.635V9.538h3.283v10.914zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const MailIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const HeartIcon = () => (
  <svg className="h-4 w-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);

const ArrowUpIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m0 0l4 4m10-4v12m0 0l4-4m0 0l-4-4" />
  </svg>
);

export function Footer() {
  const socialLinks = [
    { icon: GitHubIcon, href: "https://github.com/qanitayounas", label: "GitHub" },
    { icon: LinkedInIcon, href: "https://www.linkedin.com/in/qanita-binte-younas-450360310/", label: "LinkedIn" },
    { icon: MailIcon, href: "mailto:qanitayounas973@gmail.com", label: "Email" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                <span className="text-slate-900 font-bold text-lg">QY</span>
              </div>
              <span className="font-semibold text-xl">Qanita Binte Younas</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Frontend Developer passionate about creating innovative web solutions and solving complex problems through code.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Connect</h3>
            <div className="space-y-2">
              <p className="text-slate-400 text-sm">qanitayounas973@gmail.com</p>
              <p className="text-slate-400 text-sm">+92-333-829-1355</p>
              <p className="text-slate-400 text-sm">Pakistan</p>
            </div>
            <div className="flex gap-3 pt-2">
              {socialLinks.map((link, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="border-slate-700 text-slate-400 hover:text-white hover:border-white bg-transparent"
                  asChild
                >
                  <a href={link.href} aria-label={link.label} target="_blank" rel="noopener noreferrer">
                    <link.icon />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm flex items-center gap-1">
            Made with <HeartIcon /> by Qanita Binte Younas
          </p>
          <div className="flex items-center gap-4">
            <p className="text-slate-500 text-xs">
              © {new Date().getFullYear()} All rights reserved.
            </p>
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-slate-400 hover:text-white"
            >
              <ArrowUpIcon />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
