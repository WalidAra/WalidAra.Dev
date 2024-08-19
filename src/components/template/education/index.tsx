import { ResumeCard } from "./components/ResumeCard";
import UHBCLogo from "@/assets/uhbc-logo.jpg";

const Education = () => {
  return (
    <section className="w-full my-10">
      <div className="flex w-full flex-col gap-2">
        <h2 className="text-2xl font-bold">About Me</h2>
        <div>
          <ResumeCard
            key={"Hassiba Ben Bouali University"}
            href={"https://www.univ-chlef.dz/uc/"}
            logoUrl={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBqkwALIth5PpK57NNC70zt4q9XrJwCtNrIA&s"
            }
            altText={"Hassiba Ben Bouali University"}
            title={"Hassiba Ben Bouali University"}
            subtitle={"Bachelor’s Degree in Computer Science"}
            period={`June 2021 - June 2024`}
          />
          <ResumeCard
            key={"Hassiba Ben Bouali University"}
            href={"https://www.univ-chlef.dz/uc/"}
            logoUrl={UHBCLogo}
            altText={"Hassiba Ben Bouali University"}
            title={"Hassiba Ben Bouali University"}
            subtitle={"Future Master Student in Computer Science"}
            period={`Expected: June 2024 - June 2026`}
          />
        </div>
      </div>
    </section>
  );
}

export default Education