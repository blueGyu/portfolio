"use client";

import {
  MouseEvent as ReactMouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { motion, Variants } from "framer-motion";
import { ExpandMoreRounded } from "@mui/icons-material";

interface CategoryButtonProps {
  selectedCategory: string;
  categories: string[];
  onClick: (event: ReactMouseEvent<HTMLLIElement>) => void;
}

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export default function DropdownMenu({
  selectedCategory,
  categories,
  onClick,
}: CategoryButtonProps) {
  const [isOpened, setIsOpened] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleOutsideClose = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpened(false);
    }
  };

  const handleMenuWrap = (event: ReactMouseEvent) => {
    event.preventDefault();
    setIsOpened(!isOpened);
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClose);

    return () => {
      return document.removeEventListener("click", handleOutsideClose);
    };
  }, []);

  return (
    <div className="flex justify-end">
      <motion.div
        id="menu_wrap"
        className="relative"
        ref={menuRef}
        onClick={handleMenuWrap}
        initial={false}
        animate={isOpened ? "open" : "closed"}
      >
        <motion.div
          className="flex justify-between w-52 border rounded-md py-2.5 pl-3 pr-2 capitalize"
          whileTap={{ scale: 0.97 }}
        >
          {selectedCategory}
          <motion.div
            variants={{
              open: { rotate: 180 },
              closed: { rotate: 0 },
            }}
            transition={{ duration: 0.2 }}
            style={{ originY: 0.55 }}
          >
            <ExpandMoreRounded />
          </motion.div>
        </motion.div>
        <motion.ul
          className="absolute top-14 left-0 z-10 w-52 border rounded-md bg-zinc-50"
          variants={{
            open: {
              clipPath: "inset(0% 0% 0% 0%)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05,
              },
            },
            closed: {
              // clipPath: "inset(10% 50% 90% 50% round 6px)",
              clipPath: "inset(0% 0% 110% 0%)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.2,
              },
            },
          }}
          style={{
            pointerEvents: isOpened ? "auto" : "none",
          }}
        >
          <motion.li
            className="capitalize w-full py-2.5 pl-3 pr-2"
            variants={itemVariants}
            onClick={onClick}
            data-category="all"
          >
            all
          </motion.li>
          {categories.map((category, index) => (
            <motion.li
              key={index}
              className="capitalize py-2.5 pl-3 pr-2"
              variants={itemVariants}
              onClick={onClick}
              data-category={category}
            >
              {category}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
}
