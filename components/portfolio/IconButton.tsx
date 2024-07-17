"use client";

import { GitHub, EmailOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const iconMap = {
  GitHub,
  EmailOutlined,
};

interface IconButtonProps {
  icon: keyof typeof iconMap;
  id: string;
  comment: string;
  popupSide: "left" | "right";
}

export default function IconButton({ id, icon, comment, popupSide }: IconButtonProps) {
  const [isCopied, setIsCopied] = useState(false);
  const UsedIcon = iconMap[icon];

  const handleCopy = () => {
    const comment = document.getElementById(id)!.innerText;
    navigator.clipboard.writeText(comment);
    setIsCopied(true);

    const timeoutId = setTimeout(() => {
      setIsCopied(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  };

  return (
    <div className="relative">
      {!isCopied ? (
        <div
          id="icon_button"
          className="flex justify-center items-center w-20 h-11 bg-zinc-400 rounded-lg"
          onClick={handleCopy}
        >
          <UsedIcon fontSize="large" className="text-zinc-700" />
          <span id={id} className="hidden">
            {comment}
          </span>
        </div>
      ) : (
        <motion.div
          className="flex justify-center items-center w-20 h-11"
          animate={{
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          copyied
        </motion.div>
      )}
    </div>
  );
}
