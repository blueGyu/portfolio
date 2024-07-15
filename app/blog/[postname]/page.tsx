import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPostsMetadata, getPostContent } from "@/utils/getMdxFileData";
import PostImage from "@/components/mdx/PostImage";
import Library from "@/components/mdx/Library";
import Code from "@/components/mdx/Code";
import type { ComponentProps } from "react";
import { PostProps } from "@/lib/definistions";

const allPostsMetadata: PostProps[] = getAllPostsMetadata();
export async function generateStaticProps() {
  // const allPostsMetadata = getAllPostsMetadata();
  return allPostsMetadata.map((post) => {
    return { category: post.category, postname: post.postname };
  });
}

export async function generateMetadata({ params }: { params: { category: string; postname: string } }) {
  const { postname } = params;
  const title = postname ? postname : "bluegyu`s portfolio";
  return {
    title,
  };
}

const components = {
  a: (props: ComponentProps<"a">) => (
    <a {...props} target="blank">
      {props.children}
    </a>
  ),
  PostImage,
  Library,
  Code,
};

export default function PostPage({ params }: { params: { category: string; postname: string } }) {
  const { postname } = params;
  const post = getPostContent(postname);

  const currentIndex = allPostsMetadata.findIndex((post) => post.postname === postname);
  const recentPostIndex = currentIndex - 1 > 0 ? currentIndex - 1 : 0;
  const oldPostIndex = currentIndex + 1 < allPostsMetadata.length - 1 ? currentIndex + 1 : allPostsMetadata.length - 1;

  return (
    <div className="flex flex-col justify-center items-center py-5">
      <article className="prose py-5 max-w-[840px]">
        <MDXRemote source={post.content} components={components} />
      </article>
      <div className="flex justify-between min-w-[840px]">
        <div>
          {oldPostIndex <= allPostsMetadata.length - 1 && currentIndex !== allPostsMetadata.length - 1 && (
            <a href={`/blog/${allPostsMetadata[oldPostIndex].postname}`}>
              이전글<p>{allPostsMetadata[oldPostIndex].title}</p>
            </a>
          )}
        </div>
        <div>
          {recentPostIndex >= 0 && currentIndex !== 0 && (
            <a href={`/blog/${allPostsMetadata[recentPostIndex].postname}`}>
              다음글<p>{allPostsMetadata[recentPostIndex].title}</p>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
