import AvatarCircles from "@/components/magicui/avatar-circles";
import BlurFade from "@/components/magicui/blur-fade";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
};

type Props = {
  project: Project;
};

const ProjectCard = ({
  project: {
    date,
    description,
    links,
    name,
    technologies,
    url,
    bg = "bg-secondary",
    delay,
  },
}: Props) => {
  return (
    <BlurFade delay={delay} inView>
      <Card
        className={
          "flex flex-col  overflow-hidden  max-w-80  border hover:shadow-lg transition-all duration-300 ease-out h-full"
        }
      >
        <div className={`p-2 ${bg}`}>
          <img
            src={url}
            alt={name}
            width={500}
            height={300}
            className="h-40 w-full overflow-hidden object-cover object-top"
          />
        </div>
        <CardHeader className="px-2 p-2">
          <div className="space-y-1">
            <CardTitle className="mt-1 text-base">{name}</CardTitle>
            <time className="font-sans text-xs">{date}</time>
            <div className="hidden font-sans text-xs underline print:visible"></div>
            <CardDescription className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
              {description}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="mt-auto  flex flex-col py-0 px-2">
          <AvatarCircles avatarUrls={technologies} />
        </CardContent>
        <CardFooter className="flex items-center justify-start gap-2 p-2">
          {links.map((link) => (
            <a href={link.url} target="_blank">
              <div className="items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px]">
                {link.icon}
                {link.name}
              </div>
            </a>
          ))}
        </CardFooter>
      </Card>
    </BlurFade>
  );
};

export default ProjectCard;
