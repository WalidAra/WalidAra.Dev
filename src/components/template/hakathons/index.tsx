import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";

const Hakathons = () => {
  const hackathons = [
    {
      avatar: "https://github.com/shadcn.png",
      name: "Hackathon Lagouat",
      description:
        "Joined a 24-hour coding challenge, rapidly prototyping solutions with fellow developers and expanding my network.",
      date: "08 2023 - 06 2024",
      location: "Chlef, Algeria",
    },
    {
      avatar: "https://example.com/avatar2.png",
      name: "Tech Innovators Hackathon",
      description:
        "Participated in a 48-hour event focused on developing innovative solutions for smart cities.",
      date: "03 2023 - 03 2023",
      location: "Algiers, Algeria",
    },
    {
      avatar: "https://example.com/avatar3.png",
      name: "AI for Good Hackathon",
      description:
        "Collaborated on AI-driven projects aimed at solving social and environmental challenges.",
      date: "11 2022 - 11 2022",
      location: "Oran, Algeria",
    },
  ];

  return (
    <section className="w-full py-6 flex flex-col gap-6">
      <div className="space-y-2 w-full text-center m-auto">
        <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
          Hakathons
        </div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          fighting is fun
        </h2>
        <p className="text-muted-foreground w-[70%] m-auto md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          i did participate in Hakathons for fun and also to get more into
          network
        </p>
      </div>

      <div className="w-full flex flex-col gap-4">
        {hackathons.map((hackathon, index: number) => (
          <div
            key={index}
            className="border-b border-dashed border-muted-foreground"
          >
            <div className="w-full flex items-start gap-2 p-4 border-x border-border border-t">
              <div>
                <Avatar>
                  <AvatarImage src={hackathon.avatar} alt={hackathon.name} />
                  <AvatarFallback>
                    {hackathon.name.split(" ")[0]}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="flex-1 flex items-start justify-between gap-2">
                <div className="flex-1">
                  <div className="w-full flex justify-between">
                    <h3 className="font-semibold text-sm">{hackathon.name}</h3>
                    <div>
                      <p className="text-muted-foreground text-sm">
                        {hackathon.date}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {hackathon.location}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground sm:max-w-[70%]">
                    {hackathon.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}{" "}
      </div>
    </section>
  );
};

export default Hakathons;
