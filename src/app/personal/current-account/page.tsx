"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { CheckCircle2, Globe, Smartphone, ShieldCheck, CreditCard, ArrowRight, Zap, RefreshCcw } from "lucide-react";
import styles from "./CurrentAccount.module.css";
import Image from "next/image";
import Link from "next/link";

export default function CurrentAccountPage() {
  // 1. Hero 3D Card Animation
  const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 50, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    // Calculate normalized mouse position from center (-0.5 to 0.5)
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth) - 0.5;
    const y = (clientY / innerHeight) - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

  // 2. Onboarding Timeline Scroll Math
  const timelineRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });

  const timelineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <main className={styles.main} onMouseMove={handleMouseMove}>
      
      {/* 1. Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <motion.div 
            className={styles.heroText}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className={styles.badge}>Personal Current Account</div>
            <h1 className={styles.title}>Everyday Control.<br/>Designed Just For You.</h1>
            <p className={styles.subtitle}>
              Manage your day-to-day transactions without obstacles, supported by our welcoming staff and cutting-edge digital tools.
            </p>
            <div className={styles.ctaGroup}>
              <Link href="/contact" className={styles.primaryBtn}>
                Apply Online <ArrowRight size={20} />
              </Link>
              <button 
                className={styles.secondaryBtn}
                onClick={() => document.getElementById('requirements')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Requirements
              </button>
            </div>
          </motion.div>

          {/* 3D Floating Debit Card */}
          <motion.div 
            className={styles.heroVisual}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          >
            <div className={styles.cardGlow} />
            <motion.div 
              className={styles.debitCard}
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              {/* Using a placeholder gradient for the card artwork to look premium */}
              <div className={styles.cardTexture}>
                <div className={styles.cardChip} />
                <div className={styles.cardLogo}>Dahabshiil Bank</div>
                <div className={styles.cardName}>JOHN DOE</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Power Features Bento Box */}
      <section className={styles.bentoSection}>
        <div className={styles.sectionHeader}>
          <h2>Power Features</h2>
          <p>Everything you need for seamless financial management.</p>
        </div>

        <div className={styles.bentoGrid}>
          
          {/* Box 1: Global Currencies (Large Square) */}
          <motion.div 
            className={`${styles.bentoBox} ${styles.boxLarge}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.boxIcon}><Globe size={32} /></div>
            <h3>Global Currencies</h3>
            <p>Maintain your wealth in multiple currencies. Support for US Dollars (USD) and Swiss Francs seamlessly integrated into one account.</p>
          </motion.div>

          {/* Box 2: Digital Command (Tall Rectangle) */}
          <motion.div 
            className={`${styles.bentoBox} ${styles.boxTall}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className={styles.tallVisual}>
              <Smartphone size={80} className={styles.wireframePhone} />
              <Zap size={30} className={styles.floatElement} />
            </div>
            <h3>Digital Command</h3>
            <p>Full access to E-Banking, mobile apps, SMS alerts, and instant online utility payments from the palm of your hand.</p>
          </motion.div>

          {/* Box 3: Zero Limits (Small Rectangle) */}
          <motion.div 
            className={`${styles.bentoBox} ${styles.boxSmall}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.boxIcon}><RefreshCcw size={28} /></div>
            <h3>Zero Friction</h3>
            <p>Free monthly statements and instant account-to-account internal transfers.</p>
          </motion.div>

          {/* Box 4: Total Control (Wide Rectangle) */}
          <motion.div 
            className={`${styles.bentoBox} ${styles.boxWide}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.boxIcon}><ShieldCheck size={28} /></div>
            <div className={styles.wideContent}>
              <h3>Total Security Control</h3>
              <p>Instantly stop cheques or block lost debit cards directly through your online portal. Your funds are protected by industry-leading security protocols.</p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 3. Frictionless Onboarding (Sticky Timeline) */}
      <section id="requirements" className={styles.timelineSection} ref={timelineRef}>
        
        <div className={styles.timelineSticky}>
          <div className={styles.timelineHeader}>
            <h2>Ready to open your account?</h2>
            <p>Review the simple requirements below to begin.</p>
            <Link href="/contact" className={styles.solidBtn}>Start Application</Link>
          </div>
        </div>

        <div className={styles.timelineContent}>
          {/* Tracking Line Background */}
          <div className={styles.trackBg} />
          {/* Glowing Animated Progress Line */}
          <motion.div className={styles.trackProgress} style={{ height: timelineHeight }} />

          {/* Milestone 1 */}
          <div className={styles.milestone}>
            <div className={styles.milestoneDot}><CheckCircle2 size={24} /></div>
            <div className={styles.milestoneBox}>
              <h3>01. Identification</h3>
              <p>A valid Passport or National ID. If the applicant is a minor (under 18), the account must be opened and operated by a legal Guardian.</p>
            </div>
          </div>

          {/* Milestone 2 */}
          <div className={styles.milestone}>
            <div className={styles.milestoneDot}><CheckCircle2 size={24} /></div>
            <div className={styles.milestoneBox}>
              <h3>02. Photographs</h3>
              <p>Two recent passport-sized photographs for identity verification purposes.</p>
            </div>
          </div>

          {/* Milestone 3 */}
          <div className={styles.milestone}>
            <div className={styles.milestoneDot}><CheckCircle2 size={24} /></div>
            <div className={styles.milestoneBox}>
              <h3>03. Justification</h3>
              <p>Standard documentation to justify current income and verify your residential address.</p>
            </div>
          </div>

          {/* Milestone 4 */}
          <div className={styles.milestone}>
            <div className={styles.milestoneDot}><CheckCircle2 size={24} /></div>
            <div className={styles.milestoneBox}>
              <h3>04. KYC Completion</h3>
              <p>Standard Know Your Customer (KYC) forms must be completed in-branch or online prior to account activation.</p>
            </div>
          </div>

        </div>

      </section>

    </main>
  );
}
