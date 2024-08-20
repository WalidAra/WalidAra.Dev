import ShimmerButton from "@/components/magicui/shimmer-button";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const Hero = () => {
  return (
    <section id="home" className="w-full relative">
      <div className="h-[50rem] w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <div className="flex flex-col space-y-6 justify-center items-center">
          <TextGenerateEffect
            duration={0.5}
            className="text-4xl sm:text-7xl text-center font-bold"
            words={"Hi, I'm Walid 👋, a software engineer"}
          />

          <p className="text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400 z-20">
            Every great algorithm and coding masterpiece is born from a
            compelling narrative
          </p>

          <div className="w-full justify-center  flex items-center">
            <a  target="_blank" href="https://drive.google.com/file/d/1n2cJxnrZg9FIaJeo-ZRyiyaVtJ_swAwL/view?usp=sharing">
              <ShimmerButton className="shadow-2xl py-2 px-4">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Download CV
                </span>
              </ShimmerButton>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
