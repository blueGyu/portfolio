import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPostsMetadata, getPostContent } from "@/utils/getMdxFileData";
import PostImage from "@/components/mdx/PostImage";
import Library from "@/components/mdx/Library";
import Code from "@/components/mdx/Code";
import type { ComponentProps } from "react";
import { PostProps } from "@/lib/definistions";
import MoveToTop from "@/components/blog/MoveToTop";

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
    <div className="flex flex-col justify-center items-center py-10 px-[100px]">
      <article className="prose max-w-none">
        <MDXRemote source={post.content} components={components} />
      </article>
      <div className="w-full border h-px bg-black my-10" />
      <div className="flex w-full">
        {oldPostIndex <= allPostsMetadata.length - 1 && currentIndex !== allPostsMetadata.length - 1 && (
          <a className="mr-auto" href={`/blog/${allPostsMetadata[oldPostIndex].postname}`}>
            <div className="border rounded p-5 hover:bg-zinc-400">
              이전글<p className="text-lg font-semibold">{allPostsMetadata[oldPostIndex].title}</p>
            </div>
          </a>
        )}
        {recentPostIndex >= 0 && currentIndex !== 0 && (
          <a className="ml-auto" href={`/blog/${allPostsMetadata[recentPostIndex].postname}`}>
            <div className="border rounded p-5 text-end hover:bg-zinc-400">
              다음글<p className="text-lg font-semibold">{allPostsMetadata[recentPostIndex].title}</p>
            </div>
          </a>
        )}
      </div>
      <MoveToTop />
    </div>
  );
}
