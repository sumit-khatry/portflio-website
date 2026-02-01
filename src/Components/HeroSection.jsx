import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm </span>
            <span className="opacity-0 text-primary animate-fade-in-delay-1">
              Sumit
            </span>
            <span className="opacity-0 text-gradient ml-2 animate-fade-in-delay-2">
              Khatri
            </span>
          </h1>

          <p className="opacity:0  text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto animate-fade-in-delay-3">
            I am a Fullstack Developer with experience in C#, .Net , React JS,
            SQL!. Looking forward to work with you!
          </p>
          <div className="opacity-0 animate-fade-in-delay-4 pt-4">
            <a herf="#Projects" className="cosmic-button ">
              View my work
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">
          Scroll
          <ArrowDown className="h-5 w-5 text-primary" />
        </span>
      </div>
    </section>
  );
};
