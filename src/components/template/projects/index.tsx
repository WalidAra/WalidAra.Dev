import ProjectCard from "./components/ProjectCard";
import { FaGithub } from "react-icons/fa";
import LearnTok from '@/assets/profile.webp'
import DataViewPro from '@/assets/Screenshot from 2024-08-20 15-45-42.webp'
import FortressPassManager from '@/assets/design.webp'
import SyncChat from '@/assets/sync.webp'

type Project = {
  url: string;
  name: string;
  date: string;
  description: string;
  technologies: string[];
  links: {
    name: string;
    icon: React.ReactNode;
    url: string;
  }[];
  bg?: string;
  delay: number;
  object:string
};

const MyProjects = () => {
  const projects: Project[] = [
    {
      url: LearnTok,
      name: "LearnTok",
      date: "June 2023 - June 2024",
      description:
        "I built an educational platform inspired by TikTok, focusing on user engagement. Using GPT-3.5, I created an asynchronous task to detect hate speech and implemented a recommendation system to tailor content based on user preferences.",
      technologies: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        "https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png",
        "https://cdn.worldvectorlogo.com/logos/prisma-3.svg",
      ],
      links: [
        {
          name: "Source",
          icon: <FaGithub />,
          url: "https://github.com/WalidAra/LearnTok",
        },
      ],
      bg: "bg-gradient-to-r to-indigo-400 from-indigo-700",
      delay: 0.2,
      object: "object-fill",
    },
    {
      url: DataViewPro,
      name: "Data view pro",
      date: "June 2024 - July 2024",
      description:
        "I developed a web app that displays metadata from MySQL, PostgreSQL, and MongoDB databases. It features secure user authentication, encrypted storage for connection strings, and a user-friendly interface for accessing and modifying database data.",
      technologies: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        "https://cdn.worldvectorlogo.com/logos/prisma-3.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      ],
      links: [
        {
          name: "Source",
          icon: <FaGithub />,
          url: "https://github.com/WalidAra/data-view-pro-app",
        },
      ],
      bg: "bg-gradient-to-r from-pink-500 to-orange-500",
      delay: 0.23,
      object: "object-fill",
    },
    {
      url: SyncChat,
      name: "Sync chat",
      date: "June 2024 - August 2024",
      description:
        "I built a real-time chat app with instant messaging for private and group chats. Using Socket.io, I integrated real-time communication and collaborated with a teammate to design responsive, high-performance features.",
      technologies: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
        "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        "https://cdn.worldvectorlogo.com/logos/prisma-3.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      ],
      links: [
        {
          name: "Source",
          icon: <FaGithub />,
          url: "https://github.com/WalidAra/sync-chat",
        },
      ],
      bg: "bg-custom-radial",
      delay: 0.24,
      object: "object-cover",
    },
    {
      url: FortressPassManager,
      name: "Fortress pass manager",
      date: "August 2024 - August 2024",
      description:
        "I designed a mobile app for secure password management, using AES-256 encryption for data protection and following best practices for secure storage of user credentials.",
      technologies: [
        "https://cdn.icon-icons.com/icons2/2389/PNG/512/expo_logo_icon_145293.png",
        "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        "https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png",
        "https://cdn.worldvectorlogo.com/logos/prisma-3.svg",
      ],
      links: [
        {
          name: "Source",
          icon: <FaGithub />,
          url: "https://github.com/WalidAra/Fortress-pass-manager",
        },
      ],
      bg: "bg-gradient-to-r from-pink-600 to-purple-800 ",
      delay: 0.25,
      object: "object-cover",
    },
  ];

  return (
    <section id="projects" className="w-full py-6 flex flex-col gap-6">
      <div className="space-y-2 w-full text-center m-auto">
        <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
          My Projects
        </div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Check out my latest work
        </h2>
        <p className="text-muted-foreground w-[70%] m-auto md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          I've worked on a variety of projects, from simple websites to complex
          web applications. Here are a few of my favorites.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] p-2 mx-auto">
        {projects.map((project) => (
          <ProjectCard  key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
};

export default MyProjects;
