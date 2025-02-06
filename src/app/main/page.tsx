import { Card, CardHeader, CardTitle } from "@/src/components/ui/card";

import { MainSection } from "@/src/components/Main/MainSection";
import { Section } from "lucide-react";
export default async function MainPage() {
    return (
        <main className="flex flex-col gap-6 p-4">

            <div className="w-full max-w-4xl  mx-auto">
                <CardTitle>URL: /Home </CardTitle>
            </div>

            <MainSection />
            {/* Vous pouvez ajouter d'autres sections ici */}
        </main>
    )
}

// src/app/main/page.tsx


