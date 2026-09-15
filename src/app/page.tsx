"use client";
import { useEffect } from "react";
import Head from "next/head";

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
        <div className="wrap hero">
          <div className="hero-eyebrow">SASWAT SAHU — IDEAS · TECH · PEOPLE</div>
          <h1>
            <span className="line">
              <span>BUILD WHAT</span>
            </span>
            <span className="line">
              <span>SHOULD EXIST.</span>
            </span>
          </h1>
          <div className="hero-sub">
            <p className="hero-role">
              Designer, builder and technologist. Co-founder &amp; CTO at Trukky —
              working across software, AI and the systems that move physical goods.
            </p>
            <div className="hero-current">
              <span className="label">Currently building</span>
              <a href="#work" className="item">
                Trukky → freight, rebuilt around demand &amp; supply prediction
              </a>
            </div>
          </div>
        </div>

        <section id="focus" className="focus" style={{ paddingBottom: '100px' }}>
          <div className="wrap">
            <div className="big-label">
              <span className="index fade">01 — The Domain</span>
              <div className="mask">
                <h2>
                  Systems &amp;<br />
                  Scale.
                </h2>
              </div>
            </div>
            
            <div className="focus-list fade" style={{ display: 'flex', flexDirection: 'column', gap: '40px', marginTop: '60px', maxWidth: '900px' }}>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '20px', borderTop: '1px solid var(--line)', paddingTop: '30px' }}>
                <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--accent)', letterSpacing: '0.05em' }}>SOFTWARE &amp; ARCHITECTURE</span>
                <div>
                  <h3 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '14px', lineHeight: 1.1 }}>Building the infrastructure of movement.</h3>
                  <p style={{ fontSize: '16px', color: '#5B5A54', maxWidth: '60ch' }}>
                    From leading engineering at Trukky to designing complex data pipelines, the core focus is always on creating resilient, scalable systems that can handle real-world physical constraints and unpredictable supply chains.
                  </p>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '20px', borderTop: '1px solid var(--line)', paddingTop: '30px' }}>
                <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--accent)', letterSpacing: '0.05em' }}>PRODUCT &amp; DESIGN</span>
                <div>
                  <h3 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '14px', lineHeight: 1.1 }}>Interfaces that don't get in the way.</h3>
                  <p style={{ fontSize: '16px', color: '#5B5A54', maxWidth: '60ch' }}>
                    A decade of moving between deep technical architecture and front-end product design. Great software is invisible; it removes friction from the user rather than adding operational overhead.
                  </p>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '20px', borderTop: '1px solid var(--line)', paddingTop: '30px', borderBottom: '1px solid var(--line)', paddingBottom: '40px' }}>
                <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--accent)', letterSpacing: '0.05em' }}>AI &amp; FORECASTING</span>
                <div>
                  <h3 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '14px', lineHeight: 1.1 }}>Intelligence applied to physical logistics.</h3>
                  <p style={{ fontSize: '16px', color: '#5B5A54', maxWidth: '60ch' }}>
                    Moving beyond conversational AI to predictive systems. Treating freight pricing and route optimization as live forecasting problems, reducing empty miles and improving driver utilization.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section id="work" className="work">
          <div className="wrap">
            <div className="big-label">
              <span className="index fade">02 — Selected work</span>
              <div className="mask">
                <h2>WORK</h2>
              </div>
            </div>
          </div>

          <div className="case fade">
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
                  <path
                    d="M1 6H17M17 6L12 1M17 6L12 11"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="case fade">
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
                  <path
                    d="M1 6H17M17 6L12 1M17 6L12 11"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="case fade">
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
                  <path
                    d="M1 6H17M17 6L12 1M17 6L12 11"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>

        <section id="now" className="now">
          <div className="wrap">
            <div className="now-inner">
              <span className="index fade" style={{ display: "block" }}>
                03 — Now
              </span>
              <div className="fade">
                <p className="now-text">
                  Rebuilding how Trukky predicts demand and supply across routes —
                  treating freight pricing as a live forecasting problem, not a
                  fixed rate card.
                </p>
                <div className="now-meta">
                  <span className="pulse"></span> Updated quarterly · last update
                  September 2026
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="ideas" className="empty-block">
          <div className="wrap">
            <div className="big-label" style={{ paddingTop: 0 }}>
              <span className="index fade">04 — Ideas</span>
              <div className="mask">
                <h2>IDEAS</h2>
              </div>
            </div>
            <p className="empty-note fade">
              Nothing published yet. This space stays empty until there's a real
              piece worth putting here — not a placeholder post.
            </p>
          </div>
        </section>

        <section id="about" className="about">
          <div className="wrap">
            <div className="big-label" style={{ paddingTop: 0 }}>
              <span className="index fade">05 — About</span>
              <div className="mask">
                <h2>ABOUT</h2>
              </div>
            </div>
            <div className="about-grid">
              <div className="about-body fade">
                <p>
                  Saswat Sahu is a designer, builder and technologist — co-founder
                  and CTO of Trukky, a logistics platform rebuilding how freight
                  gets priced and moved across India.
                </p>
                <p>
                  His work sits at the intersection of software, data and physical
                  systems: ten years spent moving between design, full-stack
                  engineering and product leadership, building for organizations
                  ranging from early-stage startups to established manufacturers.
                </p>
                <p>
                  SAHU is the public name for that body of work — a single, durable
                  identity rather than a rotating cast of company brands.
                </p>
              </div>
              <div className="principles fade">
                <div className="principle">
                  <h4>The work is the brand</h4>
                  <p>
                    Reputation follows from what gets shipped, not from what gets
                    said about it.
                  </p>
                </div>
                <div className="principle">
                  <h4>Technology is the territory</h4>
                  <p>
                    AI is one chapter of the work, not the whole identity.
                  </p>
                </div>
                <div className="principle">
                  <h4>Companies stay independent</h4>
                  <p>
                    Trukky and future ventures keep their own names and
                    identities.
                  </p>
                </div>
                <div className="principle">
                  <h4>Built for twenty years</h4>
                  <p>
                    Decisions are made for the decade ahead, not the next viral
                    post.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="media" className="empty-block">
          <div className="wrap">
            <div className="big-label" style={{ paddingTop: 0 }}>
              <span className="index fade">06 — Media</span>
              <div className="mask">
                <h2>MEDIA</h2>
              </div>
            </div>
            <p className="empty-note fade">
              Nothing to list yet. This page fills in as real interviews, talks or
              coverage happen — never manufactured to look active.
            </p>
          </div>
        </section>
      </main>

      <footer id="contact">
        <div className="wrap">
          <span className="index fade" style={{ color: "rgba(247,247,245,.6)" }}>
            07 — Contact
          </span>
          <h2 className="contact-head fade">Let's talk.</h2>
          <div className="contact-links fade">
            <a href="mailto:hi@sahu.io">hi@sahu.io</a>
            <a href="https://www.linkedin.com/in/saswatsahu/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">X / @sahu</a>
            <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
          <div className="foot-bottom">
            <span>© 2026 Saswat Sahu. SAHU is his working name.</span>
            <span style={{ display: "flex", gap: "22px" }}>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms</a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
