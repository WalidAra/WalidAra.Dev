import React from 'react'

const MyProjects = () => {
  return (
    <section className="w-full py-6 flex flex-col gap-6">
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

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
        
      </div>
    </section>
  );
}

export default MyProjects