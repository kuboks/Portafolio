import { Navigation } from "@/home/components/navigation"
import { useActiveSection } from "@/hooks/use-active-section"

import { HeroSection } from "@/home/components/hero-section"
import { ProjectsSection } from "@/home/components/projects-section"
import { SkillsSection } from "@/home/components/skills-section"
import { ExperienceSection } from "@/home/components/ExperienceSection"
import { AboutMe } from "../components/AboutMe"
import { Contact } from "../components/Contact"
import { Footer } from "../components/Footer"

export const HomeLayout = () => {
    const { activeSection, scrollToSection } = useActiveSection()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
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