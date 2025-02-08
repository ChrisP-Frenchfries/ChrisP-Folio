import { FC } from "react";
import { TechCard } from "@/src/components/MainSection2/TechCard";

export const TechCardsContainer: FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-row items-center justify-around gap-4">
      <TechCard
        image="/images/tech1.png"
        alt="Tech 1"
        title="Tech 1"
        description="Description pour Tech 1"
      />
      <TechCard
        image="/images/tech2.png"
        alt="Tech 2"
        title="Tech 2"
        description="Description pour Tech 2"
      />
      <TechCard
        image="/images/tech3.png"
        alt="Tech 3"
        title="Tech 3"
        description="Description pour Tech 3"
      />
    </div>
  );
};