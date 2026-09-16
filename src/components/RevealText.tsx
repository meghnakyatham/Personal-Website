"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function RevealText({ text }: { text: string }) {
  const container = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 90%", "start 30%"]
  });

  const words = text.split(" ");

  return (
    <div ref={container} className="reveal-text-container">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        
        return <Word key={i} word={word} progress={scrollYProgress} range={[start, end]} />;
      })}
    </div>
  );
}

function Word({ word, progress, range }: { word: string, progress: any, range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.4, 1]);
  return (
    <motion.span style={{ opacity }} className="reveal-word">
      {word}
    </motion.span>
  );
}
