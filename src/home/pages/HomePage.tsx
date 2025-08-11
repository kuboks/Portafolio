import { useActiveSection } from "@/hooks/use-active-section";
import { Navigation } from "@/home/components/navigation";
import { Contact } from "../components/Contact";
import { AboutMe } from "../components/AboutMe";
import { ExperienceSection } from "../components/ExperienceSection";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/hero-section";
import { ProjectsSection } from "../components/projects-section";
import { SkillsSection } from "../components/skills-section";

export const HomePages = () => {
    const { activeSection, scrollToSection } = useActiveSection()

  return (
    <div>
        <Navigation activeSection={activeSection} onSectionClick={scrollToSection} />

        <HeroSection onSectionClick={scrollToSection} />

        {/* About Section */}
        <AboutMe/>

        {/*  */}
        <SkillsSection />

        {/*  */}
        <ProjectsSection />
    
        {/*  */}
        <ExperienceSection />

        {/* Contact Section */}
        <Contact />

        {/* Footer */}
        <Footer />
    </div>
  );
}