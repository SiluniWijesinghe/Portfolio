import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080c0a] text-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <footer className="border-t border-white/5 py-8 px-6 xl:px-0">
        <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between gap-3">
          <p className="text-white/15 text-xs">
            © {new Date().getFullYear()} Siluni Wijesinghe
          </p>
          <p className="text-white/15 text-xs">Built with Next.js · Deployed on Vercel</p>
        </div>
      </footer>
    </div>
  );
}
