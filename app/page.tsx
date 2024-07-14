"use client";

import { useState, useMemo, useEffect } from "react";
import type { ComponentProps } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { MotionProps } from "framer-motion";
import { Black_Han_Sans } from "next/font/google";
import { getDisassembled, getAssembled } from "@/utils/hangul";

const blackHanSans = Black_Han_Sans({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const [isOpened, setIsOpened] = useState(true);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const animatedText = useMemo(() => ["보라빛일몰", "애니메이션", "자바스크립트", "좋아하는", "프론트엔드개발자"], []);
  const handleAnimationEnd = () => {
    setCurrentTextIndex((prevIndex) => {
      if (prevIndex === animatedText.length - 1) {
        setIsOpened(false);
        return prevIndex;
      } else {
        return prevIndex + 1;
      }
    });
  };

  return (
    <motion.div className={`${blackHanSans.className} flex flex-col justify-center h-[calc(100vh-80px)] py-5 `}>
      <motion.div className="text-[9rem] leading-none text-center">안녕하세요.</motion.div>
      <AnimatePresence>
        {isOpened && (
          <motion.div
            id="likes"
            className="flex justify-center items-center"
            initial={{ clipPath: "inset(50% 0% 50% 0%)", height: "0" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)", height: "auto" }}
            exit={{ clipPath: "inset(50% 0% 50% 0%)", height: "0" }}
          >
            <TextTyping
              className="text-9xl"
              text={animatedText[currentTextIndex]}
              onAnimationEnd={handleAnimationEnd}
            />
            <motion.div
              className="text-9xl"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              _
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div className="text-[9rem] leading-none text-center">이성규입니다.</motion.div>
    </motion.div>
  );
}

type CombinedProps = ComponentProps<"div"> & MotionProps;
interface ChildProps extends CombinedProps {
  text: string;
  onAnimationEnd: () => void;
}

function TextTyping({ text, onAnimationEnd, ...props }: ChildProps) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const disassambled = getDisassembled(text);
    const splitText = disassambled
      .map(({ char, chosung, jungsung, jongsung }, charIndex) => {
        if (chosung && jungsung && jongsung) {
          const assembleWithoutJongsung = getAssembled({ chosung, jungsung });
          return [
            { index: charIndex, char: chosung },
            { index: charIndex, char: assembleWithoutJongsung },
            { index: charIndex, char },
          ];
        } else if (chosung && jungsung && !jongsung) {
          return [
            { index: charIndex, char: chosung },
            { index: charIndex, char },
          ];
        } else {
          return [{ index: charIndex, char: chosung }];
        }
      })
      .flat();

    let textIndex = 0;
    let textCount = 1;
    let willDispayText = "";
    let process = "typing";
    const intervalId = setInterval(() => {
      const { index, char } = splitText[textIndex];
      if (process === "typing") {
        if (textIndex < splitText.length && textCount === index) {
          willDispayText = willDispayText.substring(0, textCount) + char;
        } else {
          textCount = index;
          willDispayText += char;
        }
        textIndex++;
        setDisplayedText(willDispayText);

        if (textIndex === splitText.length) {
          textIndex = splitText.length - 1;
          const timeoutId = setTimeout(() => {
            process = "erasing";
            clearTimeout(timeoutId);
          }, 2000);
        }
      } else {
        willDispayText = willDispayText.substring(0, index);
        textIndex--;
        setDisplayedText(willDispayText);
        if (textIndex === -1) {
          textIndex = 0;
          onAnimationEnd();
        }
      }
    }, 70);

    return () => clearInterval(intervalId);
  }, [text, onAnimationEnd]);

  return <motion.div {...props}>{displayedText}</motion.div>;
}
