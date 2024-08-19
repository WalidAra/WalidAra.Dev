import AboutMe from "./components/template/about";
import Education from "./components/template/education";
import Hero from "./components/template/hero";
import MyProjects from "./components/template/projects";
import Skills from "./components/template/skills";
import { TracingBeam } from "./components/ui/tracer";

function App() {
  return (
    <div className="w-full min-h-screen relative">
      <TracingBeam className=" p-10 m-auto">
        <main className="w-full">
          <Hero />
          <AboutMe />
          <Education />
          <Skills />
          <MyProjects />
        </main>
      </TracingBeam>
    </div>
  );
}

export default App;