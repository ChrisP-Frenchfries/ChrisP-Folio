import Link from "next/link";
import { Card } from "@/src/components/ui/card";
import Image from "next/image";

type ProjectCardProps = {
    href: string;
    imageUrl: string;
    title: string;
    description: string;
}

export function ProjectCard({ href, imageUrl, title, description }: ProjectCardProps) {
    return (
        <Link href={href}>
            <Card className="overflow-hidden p-3 hover:shadow-lg transition-shadow cursor-pointer aspect-[4/1]">
                <div className="flex h-full">
                    {/* Image en carré à gauche */}
                    <div className="w-1/4 h-full">
                        <Image
                            src={imageUrl}
                            alt={title}
                            className="w-full h-full object-cover"
                            width={100}
                            height={100}
                        />
                    </div>
                    {/* Zone texte à droite */}
                    <div className="w-3/4 pl-4 flex flex-col justify-center">
                        <h3 className="text-lg font-semibold">{title}</h3>
                        <p className="text-sm text-muted-foreground">{description}</p>
                    </div>
                </div>
            </Card>
        </Link>
    );
}