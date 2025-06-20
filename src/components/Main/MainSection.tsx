
import { Card } from "@/src/components/ui/card";
import { ProjectCard } from "./ProjectCard";
import { JobCard } from "./JobCard";


export function MainSection() {
    {/* Exemple de données (à remplacer par vos données réelles éventuellement)/liéer a une BDD.
        je place la data ici par simplicité */}
    const projects = [
        {
            href: "#",
            imageUrl: "/images/ai-avatar.webp",
            title: "Who Am I AI",
            description: "An interactive AI avatar that can answer questions about your background, experiences, and resume.",
            tech: "/images/click.jpg",
            chat: true
        },
        {
            href: "/projects/2",
            imageUrl: "/images/baby-app.svg",
            title: "How to Dress Baby at Night",
            description: "A mobile app that recommends how to dress your baby for the night.",
            tech: "/images/tech2.avif",
            chat: false
        },

        {
            href: "/projects/3",
            imageUrl: "/images/ocr-app.svg",
            title: "OCR Accounting App",
            description: "An AI-powered accounting application with Optical Character Recognition.",
            tech: "/images/tech4.png",
            chat: false
        },
    ];

    const jobs = [
        {
            href: "https://cometedesign.com/",
            imageUrl: "/images/cometedesign.png",
            title: "Comete Design",
            description: "Creation of web and mobile applications.",
            tech: "/images/tech-comete.png",
        },
        {
            href: "https://dams-tattoo.vercel.app/",
            imageUrl: "/images/le-maquis.png",
            title: "Le Maquis",
            description: "Showcase and portfolio for a tattoo studio.",
            tech: "/images/tech-maquis.png",
        },
        {
            href: "/jobs/3",
            imageUrl: "/images/atelier-crimson.jpg",
            title: "Atelier Crimson",
            description: "Next interface for a Shopify website designed for a maker",
            tech: "/images/tech-crimson.png",
        },
        {
            href: "/jobs/4",
            imageUrl: "/images/forge-wood.png",
            title: "ForgeAndWood",
            description: "Commercial site for an artistic blacksmith.",
            tech: "/images/tech-forge.png",
        }

    ];

    return (
        <div className="w-full max-w-4xl mx-auto ">
            <div className="flex gap-4">
                {/* Section Projets (7/12 de largeur) */}
                <Card className="w-7/12 overflow-hidden p-4 card-y">
                    <h2 className="text-xl font-bold mb-4">My Projects</h2>
                    <div className="flex flex-col gap-3">
                        {projects.map((project, idx) => (
                            <ProjectCard key={idx} {...project} />
                        ))}
                    </div>
                </Card>

                {/* Section Jobs englobant les cartes job (5/12 de largeur) */}
                <Card className="w-5/12 overflow-hidden p-4">
                    <h2 className="text-xl font-bold mb-4">Jobs</h2>
                    <div className="flex flex-col gap-3">
                        {jobs.map((job, idx) => (
                            <JobCard key={idx} {...job} />
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    );
}