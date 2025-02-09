// src/app/blog/[slug]/page.tsx

import { notFound } from "next/navigation";
import { getAllPosts, getPostData } from "@/src/lib/posts";
import { compileMDX } from "next-mdx-remote/rsc";
import React from "react";

// Définition de l'interface des métadonnées attendues
interface Frontmatter {
    title: string;
    date: string;
    preview?: string;
}

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({
    params,
}: {
    params: { slug: string };
}) {
    const { slug } = params;
    const post = getPostData(slug);

    if (!post) {
        notFound();
    }

    // Syntaxe générique pour typer le frontmatter
    const mdxResult = await compileMDX<Frontmatter>({
        source: post.content,
        components: {},
    });

    // Ici, la valeur mdxResult correspond déjà au composant MDX compilé.
    // Pour satisfaire TypeScript, nous castons explicitement ce résultat en React.ComponentType.
    const MDXComponent = mdxResult as unknown as React.ComponentType<any>;

    // Typez le frontmatter pour faciliter son utilisation dans le JSX
    const frontmatter = mdxResult.frontmatter as Frontmatter;

    return (
        <article className="prose mx-auto">
            <h1>{frontmatter.title}</h1>
            <p className="text-sm text-gray-500">{frontmatter.date}</p>
            <MDXComponent />
        </article>
    );
}