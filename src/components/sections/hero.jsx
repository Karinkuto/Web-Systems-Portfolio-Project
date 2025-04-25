import { Twitter, Linkedin, Github, HandMetal, BookOpen } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex flex-col justify-center min-h-screen w-full px-0 overflow-x-hidden">
      <div className="absolute inset-0 w-full h-full bg-white z-0 rounded-bl-[64px] md:rounded-bl-[120px]" aria-hidden="true" />
      <img
        src="/header-bg.svg"
        alt="Background"
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0 w-full h-full object-cover p-4 md:p-0 z-0 rounded-bl-[64px] md:rounded-bl-[120px]"
        draggable="false"
      />
      <div className="max-w-2xl mx-auto py-24 md:py-0 relative z-10 px-4 md:px-0">
        <h1 className="text-4xl md:text-5xl font-bold text-cardTitle mb-4 leading-tight">
          I’m Alexandra.<br />Glad to see you!
        </h1>
        <p className="text-lg text-cardContentText mb-8">
          I’m a software developer! I can help you build a product, feature or website. Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hesitate to contact me.
        </p>
        <div className="mb-2 text-primary font-semibold text-sm tracking-wide uppercase">Let’s Connect</div>
        <div className="flex gap-5 text-2xl text-heroIcon">
          <a href="#" aria-label="Twitter" className="hover:text-primary transition-colors"><Twitter className="w-6 h-6" /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-primary transition-colors"><Linkedin className="w-6 h-6" /></a>
          <a href="#" aria-label="Medium" className="hover:text-primary transition-colors"><BookOpen className="w-6 h-6" /></a>
          <a href="#" aria-label="GitHub" className="hover:text-primary transition-colors"><Github className="w-6 h-6" /></a>
          <a href="#" aria-label="Peace" className="hover:text-primary transition-colors"><HandMetal className="w-6 h-6" /></a>
        </div>
      </div>
    </section>
  );
}