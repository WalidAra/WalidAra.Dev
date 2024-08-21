import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";

const Hakathons = () => {
  const hackathons = [
    {
      avatar:
        "https://i.pinimg.com/originals/58/c8/40/58c840666765cbc47737dac09b84781e.jpg",
      name: "Hackathon Lagouat",
      description:
        "Joined a 24-hour coding challenge, rapidly prototyping solutions with fellow developers and expanding my network.",
      date: "08 2023 - 06 2024",
      location: "Chlef, Algeria",
    },
    {
      avatar:
        "https://scontent.fcfk1-1.fna.fbcdn.net/v/t39.30808-6/394187098_813613037433253_7438680495828770553_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEzCFmw6gNNDrrZkrCul3gI4c7INlJzAVLhzsg2UnMBUiEKww7MYTq9S8By1adEF8K7kxq_umhp8L89dFt1NtS5&_nc_ohc=WfrFIN5HSqEQ7kNvgHAjBsi&_nc_ht=scontent.fcfk1-1.fna&oh=00_AYAsIcU80GXKfuVgHH_--AW95TaGqfnHpKv0pGWskaUbfQ&oe=66CA7E1C",
      name: "ALCPC problem solving compeition",
      description:
        "Participated in a 8-hour in problem solving compeition and solved 10 problems out of 12.",
      date: "07 2022 - 07 2022",
      location: "oued souf, Algeria",
    },
  ];

  return (
    <section id="hakathon" className="w-full py-6 flex flex-col gap-6">
      <div className="space-y-2 w-full text-center m-auto">
        <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
          Hakathons
        </div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Innovate and Collaborate{" "}
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
                <Avatar className="border-foreground border" >
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
