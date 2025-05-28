import Link from "next/link";
import { Card } from "@/src/components/ui/card";
import Image from "next/image.js";

type JobCardProps = {
    href: string;
    imageUrl: string;
    title: string;
    description: string;
    tech: string;

};

export function JobCard({ href, imageUrl, title, description, tech }: JobCardProps) {
    return (
        <Link href={href}>
            <Card className="overflow-hidden p-3 hover:shadow-lg transition-shadow cursor-pointer aspect-[4/1] relative">
                <div className="flex h-full ">
                    {/* Image en carré à gauche */}
                    <div className="w-1/4 h-full">
                        <Image
                            src={imageUrl}
                            alt={title}
                            className="w-auto h-full object-cover"
                            width={100}
                            height={100}
                        />
                    </div>
                    {/* Zone texte à droite */}
                    <div className="w-3/4 pl-4 flex flex-col justify-center">
                        <h3 className="text-lg font-semibold">{title}</h3>
                        <p className="text-sm text-muted-foreground">{description}</p>
                    </div>

                    <div className="w-1/4 h-1/4 absolute top-0 right-0">
                        <Image
                            src={tech}
                            alt="technologies"
                            className="w-auto h-full object-cover mt-2 ml-2"
                            width={100}
                            height={100}
                        />
                    </div>

                </div>
            </Card>
        </Link >
    );
}