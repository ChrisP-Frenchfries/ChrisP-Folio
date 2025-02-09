// src/app/blog/page.tsx

import { getAllPosts } from "@/src/lib/posts";
import Link from "next/link";

export default function BlogIndexPage() {
    const posts = getAllPosts();

    return (
        <section className="max-w-4xl mx-auto py-8">
            {posts.map(({ slug, data }) => (
                <div key={slug} className="border-b py-4">
                    <h2 className="text-xl font-bold">
                        <Link href={`/blog/${slug}`}>{data.title}</Link>
                    </h2>
                    <p className="text-sm text-gray-500">{data.date}</p>
                    <p className="mt-2 text-gray-700">{data.preview}</p>
                </div>
            ))}
        </section>
    );
}

<BlogIndexPage />