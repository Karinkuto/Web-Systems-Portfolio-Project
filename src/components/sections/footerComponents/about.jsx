import React from "react";
import { Twitter, Linkedin, Github, HandMetal, BookOpen } from "lucide-react";
import Button from "@/ui/button";
import LanguageCard from "@/sections/footerComponents/languageCard";
import { Accordion } from "@/ui/accordion";

export default function About() {
  const languages = [
    { name: "JavaScript", icon: "/js.svg" },
    { name: "HTML", icon: "/html.svg" },
    { name: "CSS", icon: "/css.svg" },
  ];

  const accordionItems = [
    {
      title: "Languages",
      content: (
        <div className="p-3 flex flex-wrap gap-3">
            {languages.map((lang) => (
              <LanguageCard key={lang.name} name={lang.name} icon={lang.icon} />
            ))}
          </div>
      ),
    },
    {
      title: "Frameworks",
      content: (
        <div className="p-3">
          <ul className="list-disc pl-5 text-cardContentText">
            <li>React</li>
            <li>Angular</li>
            <li>Vue</li>
            <li>Next.js</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Skills",
      content: (
        <div className="p-3">
          <ul className="list-disc pl-5 text-cardContentText">
            <li>UI/UX Design</li>
            <li>Responsive Design</li>
            <li>API Integration</li>
            <li>Database Management</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="flex items-center">
        <div className="max-w-2xl relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-cardTitle mb-4 leading-tight">
            About Myself
          </h1>
          <p className="text-lg text-cardContentText mb-8">
            I'm a software developer! I can help you build a product, feature or
            website. Look through some of my work and experience! If you like
            what you see and have a project you need coded, don't hesitate to
            contact me.
          </p>
          <div className="mb-2 text-primary font-semibold text-sm tracking-wide uppercase">
            Let's Connect
          </div>
          <div className="flex gap-5 text-2xl text-heroIcon mb-8">
            <a
              href="."
              aria-label="Twitter"
              className="hover:text-primary transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="."
              aria-label="LinkedIn"
              className="hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="."
              aria-label="Medium"
              className="hover:text-primary transition-colors"
            >
              <BookOpen className="w-6 h-6" />
            </a>
            <a
              href="."
              aria-label="GitHub"
              className="hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="."
              aria-label="Peace"
              className="hover:text-primary transition-colors"
            >
              <HandMetal className="w-6 h-6" />
            </a>
          </div>
          <Button>Get my resume</Button>
        </div>
      </div>
      <div className="flex items-center">
        <Accordion items={accordionItems} />
      </div>
    </div>
  );
}
