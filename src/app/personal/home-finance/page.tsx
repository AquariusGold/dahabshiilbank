"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Home, Building, CheckCircle, ArrowRight, ShieldCheck, MapPin, Handshake } from "lucide-react";
import styles from "./HomeFinance.module.css";
import Image from "next/image";
import Link from "next/link";

export default function HomeFinancePage() {
  // 1. Zoom Parallax for Architectural Hero
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const bgOpacity = useTransform(scrollYProgress, [0, 1], [0.6, 0.2]);

  // 2. Interactive Property Portfolios Tab State
  const [activeTab, setActiveTab] = useState<"residential" | "commercial">("residential");

  return (
    <main className={styles.main}>
      
      {/* 1. Architectural Dream Hero */}
      <section className={styles.heroSection} ref={heroRef}>
        
        {/* Parallax Zoom Background */}
        <motion.div 
          className={styles.heroBg}
          style={{ scale: bgScale, opacity: bgOpacity }}
        >
           <Image 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000"
            alt="Modern Architecture Home"
            fill
            className={styles.bgImage}
            priority
          />
        </motion.div>
        <div className={styles.heroOverlay} />

        <div className={styles.heroLayout}>
          <motion.div 
            className={styles.heroText}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className={styles.badge}>Dahabshiil Bank Real Estate</div>
            <h1 className={styles.title}>Bespoke Financing.<br/>For Your Dream Property.</h1>
            <p className={styles.subtitle}>
              Moving away from limited 'off-the-shelf' mortgages, we provide transparent, custom-tailored Islamic financial packages to make your dream home or commercial property a reality.
            </p>
            <div className={styles.ctaGroup}>
              <button 
                className={styles.primaryBtn}
                onClick={() => document.getElementById('portfolios')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Options <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Transparent Advantage Grid */}
      <section className={styles.advantageSection}>
        <div className={styles.advantageHeader}>
          <h2>The Dahabshiil Advantage</h2>
          <p>We are the go-to partner for trusted real estate financing in Somaliland.</p>
        </div>

        <div className={styles.advantageGrid}>
          
          <motion.div 
            className={styles.advCard}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.advIcon}><Handshake size={32} /></div>
            <h3>Bespoke, Not Boxed</h3>
            <p>We do not offer rigid 'off-the-shelf' mortgages. Every financial package is completely bespoke and tailored mathematically to your specific income, goals, and property choice.</p>
          </motion.div>

          <motion.div 
            className={styles.advCard}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className={styles.advIcon}><ShieldCheck size={32} /></div>
            <h3>100% Sharia-Compliant</h3>
            <p>Our property financing is rooted strictly in Islamic Finance principles, ensuring ethical, risk-sharing agreements without the burden of compounding interest.</p>
          </motion.div>

          <motion.div 
            className={styles.advCard}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className={styles.advIcon}><MapPin size={32} /></div>
            <h3>Local Market Experts</h3>
            <p>We leverage our deep roots in Somaliland to provide unparalleled professional expertise. We know the neighborhoods, the developers, and the commercial zones better than anyone.</p>
          </motion.div>

          <motion.div 
            className={styles.advCard}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className={styles.advIcon}><CheckCircle size={32} /></div>
            <h3>Total Transparency</h3>
            <p>We deliver real value through straightforward packages. You will know your exact predetermined profit margin and fixed buying price before you ever sign a mandate.</p>
          </motion.div>

        </div>
      </section>

      {/* 3. Interactive Property Portfolios (Tabs) */}
      <section id="portfolios" className={styles.portfolioSection}>
        <div className={styles.portHeader}>
          <h2>Financing Portfolios</h2>
          <p>Select a financing category to see how we structure our deals.</p>
        </div>

        {/* Tab Switcher */}
        <div className={styles.tabContainer}>
          <div className={styles.tabTrack}>
            <button 
              className={`${styles.tabBtn} ${activeTab === "residential" ? styles.tabActive : ""}`}
              onClick={() => setActiveTab("residential")}
            >
              <Home size={18} /> Residential Home
            </button>
            <button 
              className={`${styles.tabBtn} ${activeTab === "commercial" ? styles.tabActive : ""}`}
              onClick={() => setActiveTab("commercial")}
            >
              <Building size={18} /> Commercial Property
            </button>
            
            {/* Animated Tab Indicator Background */}
            <motion.div 
              className={styles.tabIndicator}
              layoutId="activeTabIndicator"
              initial={false}
              animate={{
                x: activeTab === "residential" ? "0%" : "100%",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>
        </div>

        {/* Tab Content Crossfade Area */}
        <div className={styles.tabContentArea}>
          <AnimatePresence mode="wait">
            
            {activeTab === "residential" && (
              <motion.div 
                key="residential"
                className={styles.portfolioPanel}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.panelImageWrapper}>
                  <Image 
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000"
                    alt="Family Home"
                    fill
                    className={styles.panelImage}
                  />
                </div>
                <div className={styles.panelText}>
                  <h3>Personal Home Finance</h3>
                  <p>Home is where the heart is. Whether you are buying your first family home, upgrading to a larger estate, or purchasing land to build yourself, we structure Murabaha agreements that fit your household income.</p>
                  <ul className={styles.panelList}>
                    <li><CheckCircle size={16} className={styles.listIcon}/> Long-term repayment flexibility</li>
                    <li><CheckCircle size={16} className={styles.listIcon}/> Financing for both ready-built and land</li>
                    <li><CheckCircle size={16} className={styles.listIcon}/> Zero hidden fees or late-payment compound interest</li>
                  </ul>
                  <Link href="/contact" className={styles.applyBtn}>Apply for Home Finance</Link>
                </div>
              </motion.div>
            )}

            {activeTab === "commercial" && (
              <motion.div 
                key="commercial"
                className={styles.portfolioPanel}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.panelImageWrapper}>
                  <Image 
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000"
                    alt="Commercial Building"
                    fill
                    className={styles.panelImage}
                  />
                </div>
                <div className={styles.panelText}>
                  <h3>Commercial Property Finance</h3>
                  <p>If you are searching to buy commercial real estate to scale your business, Dahabshiil provides heavy-duty financing for storefronts, office buildings, and commercial developments.</p>
                  <ul className={styles.panelList}>
                    <li><CheckCircle size={16} className={styles.listIcon}/> Scalable packages for large commercial zones</li>
                    <li><CheckCircle size={16} className={styles.listIcon}/> Structured around your projected business revenue</li>
                    <li><CheckCircle size={16} className={styles.listIcon}/> Dedicated corporate relationship managers</li>
                  </ul>
                  <Link href="/contact" className={styles.applyBtn}>Contact Corporate Sales</Link>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </section>

    </main>
  );
}
