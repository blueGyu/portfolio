import Markdown from "markdown-to-jsx";
import { getAllPostsMetadata, getPostContent } from "@/utils/getMdFileData";

export async function generateStaticProps() {
  const sortedAllPostsMetadata = getAllPostsMetadata();
  return sortedAllPostsMetadata.map((post) => {
    return { category: post.category, postname: post.postname };
  });
}

export async function generateMetadata({
  params,
}: {
  params: { category: string; postname: string };
}) {
  const { postname } = params;
  const title = postname ? postname : "bluegyu`s portfolio";
  return {
    title,
  };
}

export default function PostPage({
  params,
}: {
  params: { category: string; postname: string };
}) {
  const { postname } = params;
  const post = getPostContent(postname);
  return (
    <>
      <article className="prose">
        <Markdown>{post.content}</Markdown>
      </article>
    </>
  );
}
