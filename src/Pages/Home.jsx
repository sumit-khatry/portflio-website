import { Navbar } from "../Components/NavBar";
import { StarBackground } from "../Components/StarBackground";
import { ThemeToggle } from "../Components/ThemeToggle";
import { HeroSection } from "../Components/HeroSection";
import { ABoutSection } from "../Components/AboutSection";
import { SkillSection } from "../Components/SkillSection";
import { ProjectSection } from "../Components/ProjectSection";
export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* them toggle */}
      <ThemeToggle />
      {/* background effect */}
      <StarBackground />
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection></HeroSection>
        <ABoutSection />
        <SkillSection />
        <ProjectSection />
      </main>
      {/* Footer */}
    </div>
  );
};
