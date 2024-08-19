const AboutMe = () => {
  return (
    <section className="w-full my-10">
      <div className="flex w-full flex-col gap-2">
        <h2 className="text-2xl font-bold">About Me</h2>

        <p className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
          My journey as a computer science student began at the University of
          Chlef in late 2021. Driven by a passion for software engineering, I
          aspire to build scalable SaaS solutions and make a meaningful impact
          in the tech industry. I hold a degree in computer science and am eager
          to collaborate with forward-thinking tech companies. My experience
          includes participating in hackathons and contributing to the{" "}
          <span className="font-semibold text-foreground">InfoBrains</span>{" "}
          Scientific Club, where I honed my skills and worked alongside talented
          peers.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
