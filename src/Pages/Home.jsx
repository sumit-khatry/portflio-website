import { Navbar } from "../Components/NavBar";
import { StarBackground } from "../Components/StarBackground";
import { ThemeToggle } from "../Components/ThemeToggle";

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
      {/* Footer */}
    </div>
  );
};
