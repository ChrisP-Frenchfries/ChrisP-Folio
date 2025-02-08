
import { Card } from "@/src/components/ui/card";
import { ProjectCard } from "./ProjectCard";
import { JobCard } from "./JobCard";


export function MainSection() {
    // Exemple de données (à remplacer par vos données réelles éventuellement)
    const projects = [
        {
            href: "/projects/1",
            imageUrl: "/images/project1.jpg",
            title: "Projet 1",
            description: "Une courte description du projet 1.",
        },
        {
            href: "/projects/2",
            imageUrl: "/images/project2.jpg",
            title: "Projet 2",
            description: "Une courte description du projet 2.",
        },
        {
            href: "/projects/3",
            imageUrl: "/images/project3.jpg",
            title: "Projet 3",
            description: "Une courte description du projet 3.",
        },
    ];

    const jobs = [
        {
            href: "/jobs/1",
            imageUrl: "/images/job1.jpg",
            title: "cometdesign",
            description: "super description.",
        },
        {
            href: "/jobs/2",
            imageUrl: "/images/job2.jpg",
            title: "Job 2",
            description: "Description courte pour le Job 2.",
        },
        {
            href: "/jobs/3",
            imageUrl: "/images/job3.jpg",
            title: "Job 3",
            description: "Description courte pour le Job 3.",
        },
        {
            href: "/jobs/4",
            imageUrl: "/images/job4.jpg",
            title: "Job 4",
            description: "Description courte pour le Job 4.",
        },
    ];

    return (
        <div className="w-full max-w-4xl mx-auto">
            <div className="flex gap-4">
                {/* Section Projets (7/12 de largeur) */}
                <Card className="w-7/12 overflow-hidden p-4">
                    <h2 className="text-xl font-bold mb-4">Mes Projets</h2>
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