import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { PostProps } from "@/lib/definistions";

const mdxFilesDirectory = path.join(process.cwd(), "mdx-files");

export function getAllPostsMetadata(): PostProps[] {
  const files = fs.readdirSync(mdxFilesDirectory);
  const allMarkdownPosts = files.filter((file) => file.endsWith(".mdx"));

  const posts = allMarkdownPosts.map((filename) => {
    const content = fs.readFileSync(path.join(mdxFilesDirectory, filename), "utf8");
    const resultMatter = matter(content);
    return {
      title: resultMatter.data.title,
      category: resultMatter.data.category,
      stacks: resultMatter.data.stacks,
      series: resultMatter.data.series,
      postname: filename.replace(".mdx", ""),
      create_date: resultMatter.data.create_date,
      description: resultMatter.data.description,
    };
  });

  const sortedPosts = posts.sort((a, b) => {
    const dateA = a.create_date;
    const dataB = b.create_date;
    return dateA < dataB ? 1 : -1;
  });

  return sortedPosts;
}

export function getPostContent(postname: string) {
  const filePath = path.join(mdxFilesDirectory, `${postname}.mdx`);
  const file = fs.readFileSync(filePath, "utf8");

  const resultMatter = matter(file);
  return resultMatter;
}
