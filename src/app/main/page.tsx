import { CardTitle } from "@/src/components/ui/card";
import { MainSection } from "@/src/components/Main/MainSection";
import { TechCardsContainer } from "@/src/components/MainSection2/TechCardsContainer";

export default async function MainPage() {
    return (
        <main className="flex flex-col gap-6 p-4 ">

            <div className="border-t w-full max-w-4xl mx-auto "></div>
            <div className="w-full max-w-4xl  mx-auto " >
                <CardTitle>URL: /Home </CardTitle>
            </div>

            <MainSection />
            {/* Vous pouvez ajouter d'autres sections ici */}
            <div className="border-t w-full max-w-4xl mx-auto "></div>
            <CardTitle>SKILLS: /technologies-i-love-to-work-with </CardTitle>
            <TechCardsContainer />
            <div className="border-t w-full max-w-4xl mx-auto "></div>
        </main>
    )
}

// src/app/main/page.tsx


