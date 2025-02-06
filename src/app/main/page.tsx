import { Card, CardHeader, CardTitle } from "@/src/components/ui/card";

import { MainSection } from "@/src/components/Main/MainSection";
export default async function MainPage() {
    return (
        <main className="flex flex-col gap-6 p-4">
            <Card>
                <CardHeader>
                    <CardTitle>URL: / projects </CardTitle>
                </CardHeader>
            </Card>
            <MainSection />
            {/* Vous pouvez ajouter d'autres sections ici */}
        </main>
    )
}

// src/app/main/page.tsx


