import Link from "next/link";
import { Card } from "@/src/components/ui/card";
import CardImageHoverEffect from "../CardCover/CardImageHoverEffect.tsx";

type JobCardProps = {
    href: string;
    imageUrl: string;
    title: string;
    description: string;
    imgHover: string;
};

export function JobCard({ href, imageUrl, title, description,imgHover }: JobCardProps) {
    return (
        <Link href={href}>
            <CardImageHoverEffect 
                    targetClassName="card-y"
                    imageUrl={imgHover}
                  >
            <Card className="overflow-hidden p-3 hover:shadow-lg transition-shadow cursor-pointer aspect-[4/1]">
                <div className="flex h-full">
                    {/* Image en carré à gauche */}
                    <div className="w-1/4 h-full">
                        <img
                            src={imageUrl}
                            alt={title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Zone texte à droite */}
                    <div className="w-3/4 pl-4 flex flex-col justify-center">
                        <h3 className="text-lg font-semibold">{title}</h3>
                        <p className="text-sm text-muted-foreground">{description}</p>
                    </div>
                </div>
            </Card>
            </CardImageHoverEffect>
        </Link>
    );
}