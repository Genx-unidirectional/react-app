"use client";
import { useEffect, useRef, useState } from "react";
import Wrapper from "./Wrapper";
import { Reorder } from "framer-motion";
import { cn } from "@/lib/utils";
const ask = ["hope you find this", "let me know", "fundamental truths"];
type Props = {
  words?: string[];
  className?: string;
};
function TypeEffect({ words = ask, className }: Props) {
  const refContainer = useRef<HTMLHeadingElement>(null);
  const [text, setText] = useState("");
  const wordAdder = async (word: string) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setText((text) => text + word);
        resolve("done");
      }, 200);
    });
  };

  const wordRemover = async (num: number) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setText((text) => text.substring(0, num - 1));
        resolve("done2");
      }, 100);
    });
  };
  const sentenceAdder = async (str: string) => {
    for (let b = 0; b < str.length; b++) {
      await wordAdder(str[b]);
    }
  };

  const sentenceRemover = async (str: string) => {
    for (let c = str.length; c > 0; c--) {
      await wordRemover(c);
    }
  };
  const awaiter = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("done main");
      }, 2000);
    });
  };

  const writer = async (arr: string[]) => {
    while (true) {
      for (let i = 0; i < arr.length; i++) {
        await sentenceAdder(arr[i]);
        await awaiter();
        await sentenceRemover(arr[i]);
      }
    }
  };

  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      writer(words);
    }
    return () => {
      ignore = true;
    };
  }, []);
  return (
    <h1
      ref={refContainer}
      className={cn(
        "md:text-5xl text-3xl bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent font-bold",
        className
      )}
    >
      {text}
      <span className="text-cyan-400 font-bold animate-pulse">|</span>
    </h1>
  );
}
export default TypeEffect;
