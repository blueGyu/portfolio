import type { PostProps } from "@/lib/definistions";
import Link from "next/link";

export default function PostCard(post: PostProps) {
  return (
    <div className="border p-5 rounded-md">
      <Link href={`/blog/${post.postname}`}>
        <div className="text-sm">{post.series}</div>
        <div className="text-2xl">{post.title}</div>
        <StackBadge stacks={post.stacks} />
        <div className="leading-tight text-balance">{post.description}</div>
      </Link>
    </div>
  );
}

function StackBadge({ stacks }: { stacks: string[] }) {
  const badgeColor = (stack: string) => {
    switch (stack) {
      case "Next.js": {
        return "bg-next text-white";
      }
      case "TS": {
        return "bg-ts text-white";
      }
      case "JS": {
        return "bg-js text-black";
      }
      default: {
        return "";
      }
    }
  };

  return (
    <div className="flex space-x-1.5 my-1.5">
      {stacks.map((stack, stackIndex) => {
        return (
          <div
            key={stackIndex}
            className={`text-sm px-1 ${badgeColor(stack)} rounded-sm`}
          >
            {stack}
          </div>
        );
      })}
    </div>
  );
}
