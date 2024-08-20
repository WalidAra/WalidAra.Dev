import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Skills = () => {
  const mySkills = [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Expo",
      icon: "https://cdn.icon-icons.com/icons2/2389/PNG/512/expo_logo_icon_145293.png",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Redis",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "Tailwind",
      icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "Redux Toolkit",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    },
    {
      name: "Zustand",
      icon: "https://raw.githubusercontent.com/pmndrs/zustand/main/examples/demo/public/logo512.png",
    },
    {
      name: "Firebase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
    {
      name: "Supabase",
      icon: "https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png",
    },
    {
      name: "Prisma",
      icon: "https://cdn.worldvectorlogo.com/logos/prisma-2.svg",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
  ];
  return (
    <section id="skills" className="w-full my-10">
      <div className="flex w-full flex-col gap-3">
        <h2 className="text-2xl font-bold">My Skills</h2>
        <div className="w-full flex justify-center flex-wrap gap-4">
          <TooltipProvider delayDuration={1} >
            {mySkills.map((skill) => (
              <Tooltip>
                <TooltipTrigger>
                  <div className="flex flex-col bg-secondary border border-accent p-2 rounded-md items-center justify-center gap-2">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="h-10 w-10"
                    />
                    {/* <p className="text-center text-sm">{skill.name}</p> */}
                  </div>
                </TooltipTrigger>
                <TooltipContent className="bg-foreground text-white" >
                  <p> {skill.name} </p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
};

export default Skills;
