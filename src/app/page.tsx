"use client";
import { useEffect } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import HeroGrid from "@/components/HeroGrid";
import RevealText from "@/components/RevealText";
import ScrollHeading from "@/components/ScrollHeading";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 80, damping: 20 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function Home() {
  useEffect(() => {
    const progress = document.getElementById("progress");
    const handleScroll = () => {
      const h = document.documentElement;
      if (progress) {
        progress.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100 + "%";
      }
    };
    window.addEventListener("scroll", handleScroll);

    const revealEls = document.querySelectorAll(".fade, .mask");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));

    const sections = document.querySelectorAll("main section, footer");
    const navLinks = document.querySelectorAll("#navList a");
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            navLinks.forEach((link) => {
              if (link instanceof HTMLElement) {
                link.classList.toggle("active", link.dataset.section === id);
              }
            });
          }
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((s) => spy.observe(s));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      io.disconnect();
      spy.disconnect();
    };
  }, []);

  return (
    <>
      <div className="progress" id="progress"></div>

      <header>
        <div className="nav-inner">
          <a href="#home" className="wordmark">
            <svg className="mark" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 3L21 20H3L12 3Z"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinejoin="round"
              />
            </svg>
            <span>SAHU</span>
          </a>
          <nav aria-label="Primary">
            <ul id="navList">
              <li>
                <a href="#work" data-section="work">
                  Work<span className="dot"></span>
                </a>
              </li>
              <li>
                <a href="#now" data-section="now">
                  Now<span className="dot"></span>
                </a>
              </li>
              <li>
                <a href="#ideas" data-section="ideas">
                  Ideas<span className="dot"></span>
                </a>
              </li>
              <li>
                <a href="#about" data-section="about">
                  About<span className="dot"></span>
                </a>
              </li>
              <li>
                <a href="#media" data-section="media">
                  Media<span className="dot"></span>
                </a>
              </li>
              <li>
                <a href="#contact" data-section="contact">
                  Contact<span className="dot"></span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="home">
        <HeroGrid />

        <section id="roles" className="wrap" style={{ padding: "0 20px", marginBottom: "100px" }}>
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="vibrant-grid"
          >
            <motion.div variants={fadeInUp} className="vibrant-card card-purple">
              <div>
                <span className="section-index">01</span>
                <h3 className="vibrant-title" style={{ marginTop: "16px" }}>Designer</h3>
              </div>
              <p className="vibrant-desc">Interfaces that don't get in the way. Great software is invisible.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="vibrant-card card-lime">
              <div>
                <span className="section-index">02</span>
                <h3 className="vibrant-title" style={{ marginTop: "16px" }}>Builder</h3>
              </div>
              <p className="vibrant-desc">Building the infrastructure of movement from the ground up.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="vibrant-card card-dark">
              <div>
                <span className="section-index">03</span>
                <h3 className="vibrant-title" style={{ marginTop: "16px" }}>Technologist</h3>
              </div>
              <p className="vibrant-desc">AI and forecasting applied to real-world physical constraints.</p>
            </motion.div>
          </motion.div>
        </section>

        <section id="focus" className="wrap" style={{ padding: "100px 20px", marginBottom: "100px", maxWidth: "1200px" }}>
          <div className="huge-title-container" style={{ marginBottom: "60px" }}>
            <span className="section-index">04 — THE DOMAIN</span>
          </div>
          <RevealText text="Building the infrastructure of movement. From leading engineering at Trukky to designing complex data pipelines, the core focus is always on creating resilient, scalable systems that can handle real-world physical constraints and unpredictable supply chains." />
        </section>

        <section id="work" className="section-floating">
          <motion.div 
            className="wrap"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="huge-title-container">
              <span className="section-index">02 — SELECTED WORK</span>
              <motion.h2 variants={fadeInUp} className="huge-title">WORK.</motion.h2>
            </div>

            <motion.div variants={fadeInUp} className="case">
              <div className="case-visual">
                <span className="case-num">01</span>
                <span className="tag-chip">Logistics · Freight-tech</span>
              </div>
              <div className="case-body">
                <div className="case-meta">2015 — Present · Co-founder &amp; CTO</div>
                <h3>Trukky</h3>
                <p>
                  The technology behind a freight and logistics platform connecting
                  shippers directly with drivers and fleet owners — cutting out layers
                  of brokerage between demand and supply.
                </p>
                <a className="case-link" href="#">
                  Read the case
                  <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
                    <path d="M1 6H17M17 6L12 1M17 6L12 11" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="case">
              <div className="case-visual">
                <span className="case-num">02</span>
                <span className="tag-chip">Product studio</span>
              </div>
              <div className="case-body">
                <div className="case-meta">Earlier · Co-founder</div>
                <h3>Maze Square</h3>
                <p>
                  A product studio building web and mobile products for clients
                  across retail, industrial and financial sectors.
                </p>
                <a className="case-link" href="#">
                  Read the case
                  <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
                    <path d="M1 6H17M17 6L12 1M17 6L12 11" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="case">
              <div className="case-visual">
                <span className="case-num">03</span>
                <span className="tag-chip">Design &amp; engineering</span>
              </div>
              <div className="case-body">
                <div className="case-meta">Earlier · Client work</div>
                <h3>Selected client work</h3>
                <p>
                  Ten years of product and engineering work with organizations
                  spanning manufacturing, auction houses and energy — building the
                  systems underneath the brand.
                </p>
                <a className="case-link" href="#">
                  Read the case
                  <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
                    <path d="M1 6H17M17 6L12 1M17 6L12 11" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </section>

        <section id="now" className="section-floating">
          <motion.div 
            className="wrap"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="huge-title-container">
              <span className="section-index">03 — NOW</span>
              <motion.h2 variants={fadeInUp} className="huge-title">NOW.</motion.h2>
            </div>
            <motion.div variants={fadeInUp}>
              <p className="now-text">
                Rebuilding how Trukky predicts demand and supply across routes —
                treating freight pricing as a live forecasting problem, not a
                fixed rate card.
              </p>
              <div className="now-meta">
                <span className="pulse"></span> Updated quarterly · last update September 2026
              </div>
            </motion.div>
          </motion.div>
        </section>

        <section id="ideas" className="section-floating">
          <motion.div 
            className="wrap"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="huge-title-container">
              <span className="section-index">04 — THOUGHTS</span>
              <motion.h2 variants={fadeInUp} className="huge-title">IDEAS.</motion.h2>
            </div>
            
            <motion.p variants={fadeInUp} className="medium-large-text">
              Nothing published yet. This space stays empty until there's a real piece worth putting here — not a placeholder post.
            </motion.p>
          </motion.div>
        </section>

        <section id="about" className="section-floating">
          <motion.div 
            className="wrap"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="huge-title-container">
              <span className="section-index">05 — BACKGROUND</span>
              <motion.h2 variants={fadeInUp} className="huge-title">ABOUT.</motion.h2>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "start" }}>
              <motion.div variants={fadeInUp} className="medium-large-text">
                Saswat Sahu is a designer, builder and technologist. His work sits at the intersection of software, data and physical systems.
              </motion.div>
              
              <div className="principles">
                <motion.div variants={fadeInUp} className="principle">
                  <h4>The work is the brand</h4>
                  <p>Reputation follows from what gets shipped, not from what gets said about it.</p>
                </motion.div>
                <motion.div variants={fadeInUp} className="principle">
                  <h4>Technology is the territory</h4>
                  <p>AI is one chapter of the work, not the whole identity.</p>
                </motion.div>
                <motion.div variants={fadeInUp} className="principle">
                  <h4>Companies stay independent</h4>
                  <p>Trukky and future ventures keep their own names and identities.</p>
                </motion.div>
                <motion.div variants={fadeInUp} className="principle">
                  <h4>Built for twenty years</h4>
                  <p>Decisions are made for the decade ahead, not the next viral post.</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer id="contact" className="section-floating" style={{ background: "var(--core)", color: "var(--surface)", marginBottom: 0, borderRadius: "40px 40px 0 0" }}>
        <motion.div 
          className="wrap"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <span className="section-index" style={{ color: "rgba(247,247,245,.6)" }}>06 — CONNECT</span>
          <motion.h2 variants={fadeInUp} className="huge-title" style={{ color: "var(--surface)" }}>LET'S TALK.</motion.h2>
          
          <motion.div variants={fadeInUp} className="contact-links">
            <a href="mailto:hi@sahu.io">hi@sahu.io</a>
            <a href="https://www.linkedin.com/in/saswatsahu/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="#" target="_blank" rel="noopener noreferrer">X / @sahu</a>
            <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="foot-bottom">
            <span>© 2026 Saswat Sahu. SAHU is his working name.</span>
            <span style={{ display: "flex", gap: "22px" }}>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms</a>
            </span>
          </motion.div>
        </motion.div>
      </footer>
    </>
  );
}
