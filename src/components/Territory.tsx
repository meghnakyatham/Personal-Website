"use client";

import { motion } from "framer-motion";
import './Territory.css';

const territories = [
  "DESIGN",
  "PRODUCT",
  "SYSTEMS",
  "TECHNOLOGY"
];

export default function Territory() {
  return (
    <section className="territory-section container">
      <div className="grid-12">
        <div style={{ gridColumn: '1 / span 12' }}>
          <h2 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-secondary)', marginBottom: '5rem' }}>
            TERRITORY
          </h2>
          
          <div className="territory-list">
            {territories.map((t, i) => (
              <motion.div 
                key={t}
                className="territory-item"
                initial="initial"
                whileHover="hover"
              >
                <motion.h3 
                  className="territory-text"
                  variants={{
                    initial: { x: 0, opacity: 0.7 },
                    hover: { x: 40, opacity: 1 }
                  }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  {t}
                </motion.h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
