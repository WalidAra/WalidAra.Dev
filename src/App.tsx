import { DockNav } from "./components/container/DockNav";
import NavBar from "./components/container/NavBar";
import AboutMe from "./components/template/about";
import Contact from "./components/template/contact";
import Education from "./components/template/education";
import Hakathons from "./components/template/hakathons";
import Hero from "./components/template/hero";
import MyProjects from "./components/template/projects";
import Skills from "./components/template/skills";
import { TracingBeam } from "./components/ui/tracer";

function App() {
  return (
    <div className="w-full  min-h-screen relative">
      <NavBar />

      <TracingBeam className=" sm:p-10  m-auto">
        <main className="w-full">
          <Hero />
          <AboutMe />
          <Education />
          <Skills />
          <MyProjects />
          <Hakathons />
          <Contact />
        </main>
      </TracingBeam>
      <DockNav />
    </div>
  );
}

export default App;
