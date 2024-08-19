import Hero from "./components/template/hero";
import { TracingBeam } from "./components/ui/tracer";

function App() {
  return (
    <div className="w-full min-h-screen relative">
      <TracingBeam className=" p-10 m-auto">
        <main className="w-full">
          <Hero />
        </main>
      </TracingBeam>
    </div>
  );
}

export default App;