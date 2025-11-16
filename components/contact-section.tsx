"use client";

import { Card, CardContent } from "@/components/ui/card";

const MailIcon = () => (
  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const MapPinIcon = () => (
  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const MessageCircleIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

interface ContactSectionProps {
  contact: {
    name: string;
    email: string;
    phone: string;
    location: string;
  };
}

export function ContactSection({ contact }: ContactSectionProps) {
  const contactInfo = [
    {
      icon: MailIcon,
      title: "Email",
      value: contact.email,
      link: `mailto:${contact.email}`,
      description: "Send me an email anytime"
    },
    {
      icon: PhoneIcon,
      title: "Phone",
      value: contact.phone,
      link: `tel:${contact.phone.replace(/[^+\d]/g, '')}`,
      description: "Call me for urgent matters"
    },
    {
      icon: MapPinIcon,
      title: "Location",
      value: contact.location,
      link: "#",
      description: "Available for local meetings"
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-slate-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full text-sm font-medium text-slate-700 mb-4 shadow-sm">
            <MessageCircleIcon />
            <span className="ml-2">Get In Touch</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Contact Information</h3>
            <p className="text-gray-600 text-center mb-8">
              Feel free to reach out through any of these channels. I typically respond within 24 hours.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                      <a 
                        href={info.link}
                        className="text-slate-600 hover:text-slate-900 transition-colors duration-200 font-medium"
                      >
                        {info.value}
                      </a>
                      <p className="text-sm text-gray-500 mt-1">{info.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
