"use client";

import Link from "next/link";
import { Black_Han_Sans } from "next/font/google";
import { motion } from "framer-motion";

const blackHanSans = Black_Han_Sans({ subsets: ["latin"], weight: "400" });

export default function Header() {
  return (
    <header className={`${blackHanSans.className} flex items-center justify-between h-20`}>
      <div>
        <Link href={"/"}>
          <h1 id="logo" className="text-4xl">
            BLUEGYU
          </h1>
        </Link>
      </div>
      <div className="flex">
        <nav>
          <ul className="flex space-x-8">
            <NavigationTag href="/portfolio" tagName="portfolio" />
            <NavigationTag href="/blog" tagName="blog" />
          </ul>
        </nav>
      </div>
    </header>
  );
}

function NavigationTag({ href, tagName }: { href: string; tagName: string }) {
  return (
    <motion.li whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}>
      <Link href={href} className="p-2 capitalize font-bold">
        {tagName}
      </Link>
    </motion.li>
  );
}
