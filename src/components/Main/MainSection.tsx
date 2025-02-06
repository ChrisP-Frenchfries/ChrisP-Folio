import { Card } from "@/src/components/ui/card";

export function MainSection() {
    return (
        <div className="w-full max-w-4xl mx-auto aspect-square">
            <div className="flex h-full gap-4">
                {/* Grande carte à 66% de largeur contenant la liste de projets */}
                <Card className="w-2/3 overflow-hidden p-4">
                    <h2 className="text-xl font-bold mb-4">Mes Projets</h2>
                    <div className="flex flex-col gap-3 overflow-auto">
                        <Card className="p-3">Projet 1</Card>
                        <Card className="p-3">Projet 2</Card>
                        <Card className="p-3">Projet 3</Card>
                        {/* Ajoutez d'autres cartes de projet au besoin */}
                    </div>
                </Card>

                {/* Colonne de 3 cartes à 33% de largeur */}
                <div className="w-1/3 flex flex-col gap-4">
                    <Card className="flex-1 overflow-hidden p-4">Card 1</Card>
                    <Card className="flex-1 overflow-hidden p-4">Card 2</Card>
                    <Card className="flex-1 overflow-hidden p-4">Card 3</Card>
                </div>
            </div>
        </div>
    );
}