import { getAllPostsMetadata } from "@/utils/getMdFileData";
import CategoryView from "@/components/blog/CategoryView";

export default function BlogPage() {
  const allPostsMetadata = getAllPostsMetadata();

  return <CategoryView posts={allPostsMetadata} />;
}
