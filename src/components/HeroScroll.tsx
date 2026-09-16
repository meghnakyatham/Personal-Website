"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Name Animation Phase (0 to 0.3)
  const nameOpacity = useTransform(scrollYProgress, [0, 0.25, 0.3], [1, 1, 0]);
  const nameScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  const sahuX = useTransform(scrollYProgress, [0, 0.15], ["0%", "50%"]);
  const saswatOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  const saswatX = useTransform(scrollYProgress, [0, 0.15], ["-50%", "0%"]);

  // Designer Role Phase (0.3 to 0.5)
  const designerOpacity = useTransform(scrollYProgress, [0.3, 0.35, 0.45, 0.5], [0, 1, 1, 0]);
  const designerY = useTransform(scrollYProgress, [0.3, 0.5], [100, -100]);
  const designerScale = useTransform(scrollYProgress, [0.3, 0.5], [0.8, 1.1]);

  // Builder Role Phase (0.5 to 0.7)
  const builderOpacity = useTransform(scrollYProgress, [0.5, 0.55, 0.65, 0.7], [0, 1, 1, 0]);
  const builderY = useTransform(scrollYProgress, [0.5, 0.7], [100, -100]);
  const builderScale = useTransform(scrollYProgress, [0.5, 0.7], [0.8, 1.1]);

  // Technologist Role Phase (0.7 to 0.9)
  const techOpacity = useTransform(scrollYProgress, [0.7, 0.75, 0.85, 0.9], [0, 1, 1, 0]);
  const techY = useTransform(scrollYProgress, [0.7, 0.9], [100, -100]);
  const techScale = useTransform(scrollYProgress, [0.7, 0.9], [0.8, 1.1]);

  // Final statement phase (0.9 to 1.0)
  const statementOpacity = useTransform(scrollYProgress, [0.9, 0.95], [0, 1]);
  const statementY = useTransform(scrollYProgress, [0.9, 1.0], [50, 0]);

  return (
    <div ref={containerRef} style={{ height: "500vh", position: "relative" }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 44px" }}>
        
        {/* Name Sequence */}
        <motion.div 
          style={{ 
            opacity: nameOpacity, 
            scale: nameScale,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%"
          }}
        >
          <motion.h1 style={{ display: "flex", gap: "2vw", margin: 0, fontSize: "clamp(60px, 12vw, 180px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 0.9 }}>
            <motion.span style={{ opacity: saswatOpacity, x: saswatX, color: "var(--accent)" }}>SASWAT</motion.span>
            <motion.span style={{ x: sahuX }}>SAHU</motion.span>
          </motion.h1>
        </motion.div>

        {/* Roles Sequence */}
        <motion.h2 style={{ position: "absolute", opacity: designerOpacity, y: designerY, scale: designerScale, fontSize: "clamp(50px, 10vw, 150px)", fontWeight: 800, letterSpacing: "-0.04em", color: "var(--core)", margin: 0 }}>
          DESIGNER.
        </motion.h2>

        <motion.h2 style={{ position: "absolute", opacity: builderOpacity, y: builderY, scale: builderScale, fontSize: "clamp(50px, 10vw, 150px)", fontWeight: 800, letterSpacing: "-0.04em", color: "var(--core)", margin: 0 }}>
          BUILDER.
        </motion.h2>

        <motion.h2 style={{ position: "absolute", opacity: techOpacity, y: techY, scale: techScale, fontSize: "clamp(50px, 10vw, 150px)", fontWeight: 800, letterSpacing: "-0.04em", color: "var(--core)", margin: 0 }}>
          TECHNOLOGIST.
        </motion.h2>

        {/* Final Statement */}
        <motion.div style={{ position: "absolute", opacity: statementOpacity, y: statementY, textAlign: "center", maxWidth: "800px" }}>
          <p style={{ fontSize: "clamp(24px, 4vw, 40px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
            Co-founder &amp; CTO at <span style={{ color: "var(--accent)" }}>Trukky</span> — working across software, AI and the systems that move physical goods.
          </p>
        </motion.div>

      </div>
    </div>
  );
}
