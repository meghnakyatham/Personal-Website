"use client";

import { motion } from "framer-motion";
import './Hero.css';

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const item = {
    hidden: { y: 40, opacity: 0, filter: 'blur(10px)' },
    show: { 
      y: 0, 
      opacity: 1, 
      filter: 'blur(0px)',
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    }
  };

  return (
    <section className="hero-section container">
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1 variants={item} className="hero-title">
          SAHU
        </motion.h1>
        
        <div className="grid-12 hero-content">
          <div style={{ gridColumn: '1 / span 12' }}>
            <motion.h2 variants={item} className="hero-name">SASWAT SAHU</motion.h2>
            <motion.p variants={item} className="hero-labels">DESIGNER / BUILDER / TECHNOLOGIST</motion.p>
            
            <motion.h3 variants={item} className="hero-statement">
              Building products, companies and technology for problems worth solving.
            </motion.h3>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
