import { FC } from "react";
import { TechCard } from "@/src/components/MainSection2/TechCard";

export const TechCardsContainer: FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-row items-center justify-around gap-4">
      <TechCard
        image="/images/next-react.png"
        alt="Next/react"
        title="Next/React"
        description="My Main Framwork"
      />
      <TechCard
        image="/images/TS.png"
        alt="TypeScript"
        title="TypeScript"
        description="and ZOD for validation"
      />
      <TechCard
        image="/images/TailwindCSS.png"
        alt="Type Script"
        title="TailwindCSS"
        description="shadcn/ui ♥"
      />
      <TechCard
        image="/images/TailwindCSS.png"
        alt="Type Script"
        title="PostgreSQL"
        description="with Supabase and Prisma"
      />
    </div>
  );
};