"use client"

import Link from "next/link";
import { Card } from "@/src/components/ui/card";
import Image from "next/image";
import { useSetAtom } from "jotai";
import { chatToggle } from "../MySim/atoms";

type ProjectCardProps = {
    href: string;
    imageUrl: string;
    title: string;
    description: string;
    tech: string;
    chat: boolean;
}

export function ProjectCard({ href, imageUrl, title, description, tech, chat }: ProjectCardProps) {


    const setToggleChat = useSetAtom(chatToggle)

    const handleClick = () => {
        if (chat) {
            setToggleChat((prev) => !prev); // Basculer la valeur boolean de l'atome
        }
    };

    return (
        <Link href={href}
            onClick={handleClick}>
            <Card className="overflow-hidden p-3 hover:shadow-lg transition-shadow cursor-pointer aspect-[4/1]">
                <div className="flex h-full">
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
                    <div className="w-2/4 pl-4 flex flex-col justify-center">
                        <h3 className="text-lg font-semibold">{title}</h3>
                        <p className="text-sm text-muted-foreground">{description}</p>
                    </div>

                    <div className="w-1/4 h-full top-0 right-0">
                        <Image
                            src={tech}
                            alt="technologies"
                            className="w-auto h-full object-cover"
                            width={100}
                            height={100}
                        />
                    </div>
                </div>
            </Card>
        </Link >
    );
}