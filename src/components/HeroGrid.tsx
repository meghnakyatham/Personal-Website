"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroGrid() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Name animations: starts in center overlapping, ends normally spaced
  const saswatX = useTransform(scrollYProgress, [0, 1], [150, 0]);
  const saswatOpacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 0.8, 1]);
  const sahuX = useTransform(scrollYProgress, [0, 1], [-150, 0]);
  
  // Fade out floating elements on scroll
  const tagsOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <section ref={containerRef} style={{ height: "150vh", position: "relative" }}>
      {/* Sticky container holds visuals while scrolling through 150vh */}
      <div style={{ position: "sticky", top: 0, height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <div className="wrap" style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative", width: "100%" }}>
            
            {/* Floating Aesthetic Elements */}
            <motion.div 
              style={{ position: 'absolute', top: '-60px', left: '10%', opacity: tagsOpacity }}
            >
              <motion.div
                animate={{ y: [0, -15, 0], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                style={{ fontSize: '13px', letterSpacing: '0.08em', fontWeight: 600, color: 'var(--accent)' }}
              >
                DESIGNER &amp; TECHNOLOGIST
              </motion.div>
            </motion.div>

            <motion.div 
              style={{ position: 'absolute', bottom: '-80px', right: '15%', opacity: tagsOpacity }}
            >
              <motion.div
                animate={{ y: [0, 15, 0], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                style={{ fontSize: '13px', letterSpacing: '0.08em', fontWeight: 600, color: 'var(--accent)' }}
              >
                BASED IN INDIA
              </motion.div>
            </motion.div>

            <motion.div 
              style={{ position: 'absolute', top: '10px', right: '5%', opacity: tagsOpacity }}
            >
              <motion.div
                animate={{ y: [0, -10, 0], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
                style={{ fontSize: '12px', letterSpacing: '0.08em', fontWeight: 600, color: 'var(--accent)' }}
              >
                BUILDING TRUKKY
              </motion.div>
            </motion.div>

            <motion.h1 style={{ 
              fontSize: "clamp(50px, 10vw, 150px)", 
              fontWeight: 800, 
              letterSpacing: "-0.04em", 
              margin: 0, 
              lineHeight: 0.9,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "24px",
              zIndex: 10
            }}>
              <motion.span 
                style={{ 
                  color: "var(--accent)", 
                  opacity: saswatOpacity,
                  x: saswatX,
                  zIndex: 1,
                  display: "inline-block"
                }}
              >
                SASWAT
              </motion.span>
              <motion.span 
                style={{ 
                  x: sahuX,
                  zIndex: 2,
                  display: "inline-block"
                }}
              >
                SAHU
              </motion.span>
            </motion.h1>
          </div>

        </div>
      </div>
    </section>
  );
}
