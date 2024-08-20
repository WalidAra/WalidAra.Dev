import { LuMenu } from "react-icons/lu";
import { Button } from "../ui/button";

const NavBar = () => {
  return (
    <header className="sticky top-0 z-50 rounded w-full max-w-4xl mx-auto flex items-center p-6  border-b border-input  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full h-full bg-red-500 flex-1 relative">
        {/* <h1 className="absolute left-2 top-1/2 -translate-y-1/2">Logo</h1> */}

        <Button
          className="sm:hidden flex absolute right-2  top-1/2 -translate-y-1/2"
          variant={"ghost"}
          size={"icon"}
        >
          <LuMenu className="size-5" />
        </Button>
        <nav className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-4 text-sm lg:gap-6">
          <a
            className="transition-colors hover:text-foreground/80 text-foreground/60"
            href="#home"
          >
            Home
          </a>
          <a
            className="transition-colors hover:text-foreground/80 text-foreground/60"
            href="#about"
          >
            About
          </a>
          <a
            className="transition-colors hover:text-foreground/80 text-foreground/60"
            href="#education"
          >
            Education
          </a>
          <a
            className="transition-colors hover:text-foreground/80 text-foreground/60"
            href="#skills"
          >
            Skills
          </a>
          <a
            className="transition-colors hover:text-foreground/80 text-foreground/60"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="transition-colors hover:text-foreground/80 text-foreground/60"
            href="#hakathon"
          >
            Hakathons
          </a>
          <a
            className="transition-colors hover:text-foreground/80 text-foreground/60"
            href="#contact"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
