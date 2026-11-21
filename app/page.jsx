import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import EducationSection from "@/components/sections/EducationSection";
import HackathonsSection from "@/components/sections/HackathonsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";
import FooterScene from "@/components/FooterScene";
import AskAI from "@/components/AskAI";
import SharedPhoto from "@/components/SharedPhoto";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080c0a] text-white/60">
      <SharedPhoto />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <HackathonsSection />
        <ContactSection />
      </main>
      <Footer />
      <AskAI />
    </div>
  );
}
