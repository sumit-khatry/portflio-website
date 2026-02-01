import { useEffect, useState } from "react";
import { cn } from "../lib/Utils";
import { X, Menu } from "lucide-react";
const navItems = [
  {
    name: "Home",
    href: "#hero",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <nav
        className={cn(
          "fixed w-full z-40 transition-all duration-300",
          isScrolled
            ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
            : "py-5",
        )}
      >
        <div className="container flex item-center justify-between">
          <a
            href="#hero"
            className="text-xl font-bold text-primary flex items-center"
          >
            <span className="relative z-10">
              <span className="text-glow text-foreground"> Sumit's</span>{" "}
              Portfolio
            </span>
          </a>
          {/* desktop nav */}

          <div className="hidden md:flex space-x-8">
            {navItems.map((item, key) => (
              <a
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                href={item.href}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* mobilernav */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden z-50 p-2 text-foreground"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div
            className={cn(
              "inset-0 fixed bg-background/95 backgrop-blur-md md:hidden z-20 flex flex-col items-center justify-center",
              "transition-al duration-300 ",
              isMenuOpen
                ? "opacity-100 pointer-events-auto"
                : "pointer-events-none opacity:0",
            )}
          >
            <div className="flex flex-col space-y-8 text-xl">
              {navItems.map((item, key) => (
                <a
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  key={key}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
