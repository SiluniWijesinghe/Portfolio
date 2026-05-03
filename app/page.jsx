import Navbar          from "@/components/sections/Navbar";
import HeroSection     from "@/components/sections/HeroSection";
import AboutSection    from "@/components/sections/AboutSection";
import SkillsSection   from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection  from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0f0d] text-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <footer className="border-t border-white/5 py-6 text-center text-white/20 text-xs">
        © {new Date().getFullYear()} Siluni Wijesinghe · Built with Next.js
      </footer>
    </div>
  );
}
