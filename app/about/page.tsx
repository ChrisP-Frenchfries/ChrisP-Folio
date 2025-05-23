import { MainSection } from "@/src/components/Main/MainSection";
import { CardTitle } from "@/src/components/ui/card";

export default function Page() {
    return (
        <main className="flex flex-col gap-6 p-4 ">
            <div className="border-t w-full max-w-4xl mx-auto "></div>
            <div className="w-full max-w-4xl  mx-auto " >
                <CardTitle>URL: /About </CardTitle>
            </div>
            <MainSection />
            {/* Vous pouvez ajouter d'autres sections ici */}
            <div className="border-t w-full max-w-4xl mx-auto "></div>
        </main>
    )
}