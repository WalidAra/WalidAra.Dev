import { LuMenu } from "react-icons/lu";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const NavBar = () => {
  return (
    <header className="sticky top-0 z-50 rounded w-full max-w-4xl mx-auto flex items-center justify-between px-4 py-2 sm:p-6  border-b border-input  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <a href="#home" className="sm:hidden inline-block">
        <Button className="" variant={"outline"} size={"icon"}>
          <img className="size-6 aspect-square" src="/w.svg" alt="walid logo" />
        </Button>
      </a>

      <div className="sm:hidden inline-block">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              className="sm:hidden flex "
              variant={"outline"}
              size={"icon"}
            >
              <LuMenu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <nav className="py-4 px-2 grid gap-2">
              <SheetClose asChild>
                <a
                  className="text-muted-foreground hover:text-foreground duration-200 ease-in-out"
                  href="#home"
                >
                  Home
                </a>
              </SheetClose>
              <SheetClose asChild>
                <a
                  className="text-muted-foreground hover:text-foreground duration-200 ease-in-out"
                  href="#about"
                >
                  About me
                </a>
              </SheetClose>
              <SheetClose asChild>
                <a
                  className="text-muted-foreground hover:text-foreground duration-200 ease-in-out"
                  href="#education"
                >
                  Education
                </a>
              </SheetClose>
              <SheetClose asChild>
                <a
                  className="text-muted-foreground hover:text-foreground duration-200 ease-in-out"
                  href="#skills"
                >
                  Skills
                </a>
              </SheetClose>
              <SheetClose asChild>
                <a
                  className="text-muted-foreground hover:text-foreground duration-200 ease-in-out"
                  href="#projects"
                >
                  Projects
                </a>
              </SheetClose>
              <SheetClose asChild>
                <a
                  className="text-muted-foreground hover:text-foreground duration-200 ease-in-out"
                  href="#hakathons"
                >
                  Hakathons
                </a>
              </SheetClose>
              <SheetClose asChild>
                <a
                  className="text-muted-foreground hover:text-foreground duration-200 ease-in-out"
                  href="#contact"
                >
                  Contact
                </a>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      <div className="w-full h-full hidden sm:block flex-1 relative">
        {/* <h1 className="absolute left-2 top-1/2 -translate-y-1/2">Logo</h1> */}

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
