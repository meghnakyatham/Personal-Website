"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollHeading({ text, direction = "left" }: { text: string, direction?: "left" | "right" }) {
  const container = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  // If direction is left, moves from 50px to -50px, if right, -50px to 50px
  const x = useTransform(scrollYProgress, [0, 1], direction === "left" ? ["100px", "-100px"] : ["-100px", "100px"]);

  return (
    <div ref={container} style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
      <motion.h2 style={{ x }} className="huge-title">
        {text}
      </motion.h2>
    </div>
  );
}
