// src/app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function generateStaticParams() {
    const postsDir = path.join(process.cwd(), "src/posts");
    const files = fs.readdirSync(postsDir);
    return files.map((file) => ({
        slug: file.replace(/\.mdx?$/, ""),
    }));
}

export default async function BlogPostPage({
    params,
}: {
    params: { slug: string };
}) {
    const { slug } = params;
    const filePath = path.join(process.cwd(), "src/posts", `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
        notFound();
    }

    const source = fs.readFileSync(filePath, "utf8");
    const { content, data } = matter(source);

    // Ici, puisque Next.js 13 avec MDX gère le rendu des .mdx automatiquement,
    // vous pouvez importer le fichier MDX et l’afficher directement.
    // Une solution courante est d’utiliser la fonction `compileMDX` ou d'importer dynamiquement le composant.
    // Pour simplifier, vous pouvez renommer votre fichier en .mdx et utiliser un import dynamique :
    const MDXContent = (await import(`../../../posts/${slug}.mdx`)).default;

    return (
        <article className="prose mx-auto">
            <h1>{data.title}</h1>
            <p className="text-sm text-gray-500">{data.date}</p>
            <MDXContent />
        </article>
    );
}