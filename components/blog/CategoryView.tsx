"use client";

import { PostProps } from "@/lib/definistions";
import { useState, MouseEvent as ReactMouseEvent, useEffect } from "react";
import DropdownMenu from "./DropdownMenu";
import PostCard from "./PostCard";

export default function CategoryView({ posts }: { posts: PostProps[] }) {
  const categories: string[] = posts.reduce((acc: string[], item: PostProps) => {
    if (!acc.includes(item.category)) {
      acc.push(item.category);
    }
    return acc;
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategory = (event: ReactMouseEvent) => {
    const targetCategory = event.currentTarget.getAttribute("data-category")!;
    console.log(targetCategory);
    setSelectedCategory(targetCategory);
  };

  const filteredPosts = selectedCategory === "all" ? posts : posts.filter((post) => post.category === selectedCategory);

  return (
    <main className="space-y-5 py-5">
      <DropdownMenu selectedCategory={selectedCategory} categories={categories} onClick={handleCategory} />
      <div className="grid grid-cols-2 gap-5">
        {filteredPosts.map((post, postIndex) => {
          return <PostCard key={postIndex} {...post} />;
        })}
      </div>
    </main>
  );
}
