"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { TrendingUp, ShieldCheck, Building2, ArrowRight, BarChart3, Gem, Landmark } from "lucide-react";
import styles from "./RealEstate.module.css";
import Image from "next/image";
import Link from "next/link";

export default function RealEstateFinancePage() {
  // 1. Hero Scroll
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgOpacity = useTransform(heroScroll, [0, 1], [0.8, 0.2]);
  
  // 2. Portfolio Chart Scroll
  const chartRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: chartScroll } = useScroll({ target: chartRef, offset: ["start 80%", "center center"] });
  const chartHeight1 = useTransform(chartScroll, [0, 1], ["0%", "40%"]);
  const chartHeight2 = useTransform(chartScroll, [0, 1], ["0%", "65%"]);
  const chartHeight3 = useTransform(chartScroll, [0, 1], ["0%", "95%"]);

  // Tooltip State for the Chart
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);

  return (
    <main className={styles.main}>
      
      {/* 1. Investment Ambition Hero */}
      <section className={styles.heroSection} ref={heroRef}>
        
        {/* Sweeping Dark Cityscape Background */}
        <motion.div 
          className={styles.heroBg}
          style={{ opacity: bgOpacity }}
        >
           <Image 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
            alt="Modern Luxury Real Estate Development"
            fill
            className={styles.bgImage}
            priority
          />
        </motion.div>
        <div className={styles.heroOverlay} />

        <div className={styles.heroLayout}>
          <div className={styles.heroTitles}>
            <motion.h1 
              className={styles.titleLeft}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Dream Big.
            </motion.h1>
            <motion.h1 
              className={styles.titleRight}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              Worry Less.
            </motion.h1>
          </div>
          
          <motion.div 
            className={styles.heroSubText}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className={styles.subtitle}>
              Dahabshiil Bank is the first in Somaliland to provide dedicated real estate investment banking. Build your portfolio and scale your wealth with our transparent, 100% Sharia-compliant financing.
            </p>
            <div className={styles.ctaGroup}>
              <Link href="/contact" className={styles.primaryBtn}>
                Start Investing <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Portfolio Growth Visualizer (Interactive SVG Dashboard) */}
      <section className={styles.visualizerSection}>
        <div className={styles.visHeader}>
          <h2>Visualize Your Growth</h2>
          <p>Real estate investment banking designed to map out and execute your long-term wealth generation strategy.</p>
        </div>

        <div className={styles.visDashboard}>
          <div className={styles.chartContainer} ref={chartRef}>
            
            {/* The SVG Growth Grid */}
            <div className={styles.chartGrid}>
              <div className={styles.gridLine} />
              <div className={styles.gridLine} />
              <div className={styles.gridLine} />
              <div className={styles.gridLine} />
            </div>

            {/* Simulated Animated Bar Chart */}
            <div className={styles.barsArea}>
              
              {/* Bar 1: Land Acquisition */}
              <div 
                className={styles.barWrapper}
                onMouseEnter={() => setActiveTooltip(1)}
                onMouseLeave={() => setActiveTooltip(null)}
              >
                <div className={styles.barBg}>
                  <motion.div className={styles.barFill} style={{ height: chartHeight1 }} />
                </div>
                <div className={styles.barLabel}>Phase 01</div>
                
                <AnimatePresence>
                  {activeTooltip === 1 && (
                    <motion.div 
                      className={styles.tooltip}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                    >
                      <h4>Land Acquisition</h4>
                      <p>Financing the primary purchase of strategic commercial or residential plots.</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bar 2: Construction */}
              <div 
                className={styles.barWrapper}
                onMouseEnter={() => setActiveTooltip(2)}
                onMouseLeave={() => setActiveTooltip(null)}
              >
                <div className={styles.barBg}>
                  <motion.div className={styles.barFill} style={{ height: chartHeight2, background: "rgba(0, 174, 239, 0.8)" }} />
                </div>
                <div className={styles.barLabel}>Phase 02</div>
                
                <AnimatePresence>
                  {activeTooltip === 2 && (
                    <motion.div 
                      className={styles.tooltip}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                    >
                      <h4>Asset Construction</h4>
                      <p>Capital deployment for multi-unit property development and infrastructure.</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bar 3: Yield Generation */}
              <div 
                className={styles.barWrapper}
                onMouseEnter={() => setActiveTooltip(3)}
                onMouseLeave={() => setActiveTooltip(null)}
              >
                <div className={styles.barBg}>
                  <motion.div className={styles.barFill} style={{ height: chartHeight3, background: "var(--color-cyan)" }} />
                </div>
                <div className={styles.barLabel}>Phase 03</div>
                
                <AnimatePresence>
                  {activeTooltip === 3 && (
                    <motion.div 
                      className={styles.tooltip}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                    >
                      <h4>Yield Generation</h4>
                      <p>Realizing returns on your completed properties over a long-term Murabaha scale.</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>

          </div>

          <div className={styles.visSidebar}>
            <div className={styles.sidebarIcon}><BarChart3 size={32} /></div>
            <h3>Data-Driven Decisions.</h3>
            <p>Our corporate relationship managers provide in-depth market analysis and bespoke ROI projections before you commit to significant property developments.</p>
            <button className={styles.secondaryBtn}>Download Investment Prospectus</button>
          </div>

        </div>
      </section>

      {/* 3. Why Invest With Us (Bento Box Grid) */}
      <section className={styles.bentoSection}>
        <div className={styles.bentoHeader}>
          <h2>Why Partner With DBI?</h2>
          <p>We are more than just a lender; we are your strategic investment partner.</p>
        </div>

        <div className={styles.bentoGrid}>
          
          <motion.div 
            className={`${styles.bentoCard} ${styles.boxLarge}`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.cardHeader}>
              <Landmark size={40} className={styles.cardIcon} />
              <h3>The Pioneer Bank</h3>
            </div>
            <p className={styles.cardText}>
              We are incredibly proud to be the absolute first bank in Somaliland to provide a dedicated Real Estate Investment Banking division. You gain the advantage of our first-mover market penetration and unmatched developer networks.
            </p>
            <div className={styles.abstractGraphic}>
              {/* Simulated geometric pulse */}
              <div className={styles.pulseCircle} />
              <div className={styles.pulseCircle} style={{ animationDelay: "1s" }} />
            </div>
          </motion.div>

          <motion.div 
            className={`${styles.bentoCard} ${styles.boxSmall}`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ShieldCheck size={32} className={styles.cardIcon} />
            <h3>Pure Murabaha</h3>
            <p className={styles.cardText}>Zero compound interest eating into your precious ROI. We buy, we sell back at a fixed profit, you generate wealth securely.</p>
          </motion.div>

          <motion.div 
            className={`${styles.bentoCard} ${styles.boxSmall}`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Gem size={32} className={styles.cardIcon} />
            <h3>Scale Your Budget</h3>
            <p className={styles.cardText}>Worried your budget is not enough for that multi-unit development? We custom-finance ambitious projects to bridge your capital gap.</p>
          </motion.div>

        </div>
      </section>

      {/* Re-using the CTA styling from our overall brand */}
      <section className={styles.bottomCtaSection}>
        <div className={styles.bottomCtaContent}>
          <h2>Ready to build your portfolio?</h2>
          <p>Book a consultation with our Real Estate Investment team today.</p>
          <Link href="/contact" className={styles.primaryBtnInverse}>
            Contact Corporate Division
          </Link>
        </div>
      </section>

    </main>
  );
}
