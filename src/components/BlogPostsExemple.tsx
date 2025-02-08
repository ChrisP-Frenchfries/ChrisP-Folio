"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export interface BlogPost {
    id: string;
    date: string;
    title: string;
    slug: string;
    preview: string;
}

interface BlogPostListProps {
    posts: BlogPost[];
}

export const BlogPostList: React.FC<BlogPostListProps> = ({ posts }) => {
    const [hoveredPost, setHoveredPost] = useState<BlogPost | null>(null);

    return (
        <div className="w-full max-w-4xl mx-auto space-y-8">
            {/* On place le onMouseLeave sur le container global afin que le hover reste actif 
          quand la souris passe de la liste à la preview */}
            <div className="flex space-x-8" onMouseLeave={() => setHoveredPost(null)}>
                {/* Colonne de la liste des posts (7/12) */}
                <div className="w-7/12">
                    {posts.map((post) => (
                        <div
                            key={post.id}
                            className="p-4 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer border-b border-gray-200 dark:border-gray-700"
                            onMouseEnter={() => setHoveredPost(post)}
                        >
                            <div className="flex items-center">
                                <span className="text-sm text-gray-500 dark:text-gray-400 mr-4">
                                    {post.date}
                                </span>
                                <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
                                    {post.title}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Colonne de l'aperçu (5/12) */}
                <div className="w-5/12">
                    {hoveredPost && (
                        <Card className="border shadow hover:shadow-md transition-all">
                            <CardHeader>
                                <CardTitle>{hoveredPost.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    {hoveredPost.preview}
                                </p>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </div>
            <div>
                <a
                    href="/blog"
                    className="text-dark dark:text-blue-400 hover:underline transition-colors duration-200"
                >
                    Voir tous les articles &rarr;
                </a>
            </div>
        </div>
    );
};

// Exemple d'utilisation avec des données simulées
const samplePosts: BlogPost[] = [
    {
        id: "1",
        date: "16 Déc 2024",
        title: "Intégration MDX avec Next.js",
        slug: "integration-mdx-nextjs",
        preview:
            "Apprenez à intégrer des fichiers MDX dans votre application Next.js pour créer des articles interactifs et optimisés pour le SEO.",
    },
    {
        id: "2",
        date: "18 Déc 2024",
        title: "Styling avec Tailwind CSS",
        slug: "styling-tailwind-css",
        preview:
            "Découvrez comment Tailwind CSS permet de concevoir des interfaces modernes grâce à ses classes utilitaires rapides et performantes.",
    },
    {
        id: "3",
        date: "15 Déc 2024",
        title: "Optimisation SEO avec Next.js",
        slug: "optimisation-seo-nextjs",
        preview:
            "Des techniques et astuces pour améliorer le référencement naturel de vos pages et booster votre visibilité en ligne.",
    },
];

export default function BlogPostsExample() {
    return <BlogPostList posts={samplePosts} />;
}