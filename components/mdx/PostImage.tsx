import Image from "next/image";
import { ReactNode } from "react";

interface PostImageProps {
  imgPath: string;
  imgAlt: string;
  linkUrl: string;
  children: ReactNode;
}

export default function PostImage({ imgPath, imgAlt, linkUrl, children }: PostImageProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <a href={linkUrl} target="_blank" rel="noopener noreferrer">
        <Image
          className="my-2.5"
          width={500}
          height={500}
          src={imgPath}
          alt={imgAlt}
          style={{ width: "auto", height: "auto" }}
          priority
        />
      </a>
      {children}
    </div>
  );
}
