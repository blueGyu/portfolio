"use client";

import { KeyboardArrowUp } from "@mui/icons-material";
import { useEffect, useState } from "react";

export default function MoveToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPositionY = window.scrollY;
      if (scrollPositionY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMove = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setShowButton(false);
  };

  return (
    <div className="fixed right-6 bottom-6">
      {showButton && (
        <button className="w-11 h-11 bg-purple-500 rounded-full text-white" onClick={handleMove}>
          <KeyboardArrowUp />
        </button>
      )}
    </div>
  );
}
