import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section"; // Re-added projects section
import { ExperienceSection } from "@/components/experience-section";
import { EducationSection } from "@/components/education-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

const skills = {
  "Programming Languages": ["Python", "JavaScript", "HTML5", "TypeScript", "C++"],
  "Frameworks/Libraries": ["React", "Node.js", "Next.js", "Tailwind CSS", "Redux"],
  "Tools": ["Git", "VS Code", "Postman", "ClickUp", "Figma", "Canva"],
  "Databases": ["SQL", "MySQL", "MongoDB", "Firebase", "Supabase"],
  "UI/UX & Design": ["UI/UX Design", "Responsive Design"]
};

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Engineering and Technology", 
    years: "Oct '21 — Jul '25",
    status: "Completed",
    description: "GPA: 3.26. Peshawar, Pakistan. Strong foundation in computer science principles and practical web development skills."
  },
  {
    degree: "FSC in Pre-Engineering",
    institution: "Concordia College",
    years: "Apr '20 — May '21",
    status: "Completed",
    description: "Nowshera, Pakistan. Specialized in pre-engineering fundamentals with strong performance in mathematics and programming."
  },
  {
    degree: "SSC",
    institution: "Army Public School (Zamzama)",
    years: "Apr '18 — Mar '19",
    status: "Completed",
    description: "Nowshera, Pakistan. Achieved excellent academic performance, demonstrating strong foundation in science and mathematics."
  },
];

const experience = [
  {
    role: "Web Developer - Intern",
    company: "Annopett",
    years: "2024",
    location: "Online",
    description: [
      "Built a role-based CRM dashboard platform in React with dedicated Admin, Client, and Employee panels",
      "Designed and implemented interactive data visualizations for real-time KPIs, analytics, and project tracking",
      "Delivered a fully responsive application with modern UI themes, task management features, and collaboration tools"
    ]
  },
  {
    role: "Frontend Developer",
    company: "Hoop",
    years: "2024",
    location: "Online",
    description: [
      "Applied modern UI/UX principles such as parallax scrolling and responsive layouts for engaging user experiences",
      "Developed component-based architecture with state management and converted design mockups into functional web applications",
      "Developed frontend for BookHive (online bookstore) and GreenWave Energy (corporate website) using React"
    ]
  }
];

const contact = {
  name: "Qanita Binte Younas",
  email: "qanitayounas973@gmail.com",
  phone: "+92-333-829-1355",
  location: "Pakistan",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection name={contact.name} title="Frontend Developer & Problem Solver" email={contact.email} phone={contact.phone} />
        <AboutSection />
        <SkillsSection skills={skills} />
        <ProjectsSection />
        <ExperienceSection experience={experience} />
        <EducationSection education={education} />
        <ContactSection contact={contact} />
      </main>
      <Footer />
    </div>
  );
}
