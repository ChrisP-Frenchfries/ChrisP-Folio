// src/lib/posts.ts

import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface PostData {
    title: string;
    date: string;
    preview: string;
    content: string;
    [key: string]: any;
}

export function getPostData(slug: string): PostData {
    const postsDir = path.join(process.cwd(), "src/posts");
    const filePath = path.join(postsDir, `${slug}.mdx`); // ou .md selon votre extension
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);
    return {
        ...data,
        content,
    };
}

export function getAllPosts(): { slug: string; data: any }[] {
    const postsDir = path.join(process.cwd(), "src/posts");
    const fileNames = fs.readdirSync(postsDir);
    return fileNames.map((fileName) => {
        const slug = fileName.replace(/\.mdx?$/, "");
        const filePath = path.join(postsDir, fileName);
        const fileContents = fs.readFileSync(filePath, "utf8");
        const { data } = matter(fileContents);
        return { slug, data };
    });
}