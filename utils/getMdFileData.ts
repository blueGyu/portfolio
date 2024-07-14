import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { PostProps } from "@/lib/definistions";

const mdFilesDirectory = path.join(process.cwd(), "md-files");

export function getAllPostsMetadata(): PostProps[] {
  const files = fs.readdirSync(mdFilesDirectory);
  const allMarkdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = allMarkdownPosts.map((filename) => {
    const content = fs.readFileSync(
      path.join(mdFilesDirectory, filename),
      "utf8"
    );
    const resultMatter = matter(content);
    return {
      title: resultMatter.data.title,
      category: resultMatter.data.category,
      stacks: resultMatter.data.stacks,
      series: resultMatter.data.series,
      postname: filename.replace(".md", ""),
      create_date: resultMatter.data.create_date,
      description: resultMatter.data.description,
    };
  });

  const sortedPosts = posts.sort((a, b) => {
    const titleA = a.title;
    const titleB = b.title;
    return titleA > titleB ? 1 : -1;
  });

  return sortedPosts;
}

export function getPostContent(postname: string) {
  const filePath = path.join(mdFilesDirectory, `${postname}.md`);
  const file = fs.readFileSync(filePath, "utf8");

  const resultMatter = matter(file);
  return resultMatter;
}
