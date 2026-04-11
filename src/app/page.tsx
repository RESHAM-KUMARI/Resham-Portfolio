
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';

export default function HomePage() {
  return (
    <>
      <section id="home">
        <HeroSection />
      </section>
      
      <section id="about">
        <AboutSection />
      </section>
      
      <section id="skills">
        <SkillsSection />
      </section>

      <section id="projects">
        <ProjectsSection />
      </section>
      
      <section id="contact">
        <ContactSection />
      </section>
    </>
  );
}
