"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { 
  ShieldCheck, 
  Leaf, 
  Coins, 
  Lock, 
  ArrowRight, 
  CheckCircle2, 
  CreditCard,
  Smartphone,
  TrendingUp,
  Award,
  FileText
} from "lucide-react";
import styles from "./DahaboSaving.module.css";
import Image from "next/image";
import Link from "next/link";

export default function DahaboSavingAccountPage() {
  // 1. Hero Scroll
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgOpacity = useTransform(heroScroll, [0, 1], [0.8, 0.2]);

  // 2. Growth Chart Animation
  const chartRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: chartProgress } = useScroll({
    target: chartRef,
    offset: ["start end", "end center"]
  });

  const pathLength = useSpring(chartProgress, { stiffness: 50, damping: 20 });

  return (
    <main className={styles.main}>
      
      {/* 1. Secure Legacy Hero */}
      <section className={styles.heroSection} ref={heroRef}>
        <motion.div 
          className={styles.heroBg}
          style={{ opacity: bgOpacity }}
        >
           <Image 
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=2000" // A serene, professional Somali woman in a modern setting
            alt="Dahabo Security & Peace"
            fill
            className={styles.bgImage}
            priority
          />
        </motion.div>
        <div className={styles.heroOverlay} />

        <div className={styles.heroLayout}>
          <motion.div 
            className={styles.heroContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className={styles.badge}>Future Prosperity</div>
            <h1 className={styles.title}>Dahabo<br/>Saving Account.</h1>
            <p className={styles.subtitle}>
              Cultivate your future with absolute security. A Sharia-compliant sanctuary for your capital, designed to provide peace of mind and family prosperity for generations to come.
            </p>
            <div className={styles.ctaGroup}>
              <Link href="/contact" className={styles.primaryBtn}>
                Start Saving Today <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Wealth Accumulation Visualizer */}
      <section className={styles.visualizerSection} ref={chartRef}>
        <div className={styles.visLayout}>
          <div className={styles.visText}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>Visualize Your Growth</h2>
              <p>Watch your wealth flourish in a Sharia-compliant environment where security meets long-term prosperity.</p>
            </motion.div>
            
            <div className={styles.visHighlights}>
              <div className={styles.highItem}>
                <div className={styles.highIcon}><ShieldCheck size={24} /></div>
                <span>100% Capital Protection</span>
              </div>
              <div className={styles.highItem}>
                <div className={styles.highIcon}><TrendingUp size={24} /></div>
                <span>Sharia-Compliant Profits</span>
              </div>
            </div>
          </div>

          <div className={styles.chartContainer}>
            <svg viewBox="0 0 400 200" className={styles.growthSvg}>
              {/* Animated Path */}
              <motion.path
                d="M 0 180 Q 100 170, 150 120 T 300 60 T 400 20"
                stroke="url(#goldGradient)"
                strokeWidth="4"
                fill="transparent"
                style={{ pathLength: chartProgress }}
              />
              <defs>
                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--color-dahabo-gold)" />
                  <stop offset="100%" stopColor="var(--color-dahabo-gold-light)" />
                </linearGradient>
              </defs>
              {/* Pulsing end point */}
              <motion.circle 
                cx="400" 
                cy="20" 
                r="6" 
                fill="var(--color-dahabo-gold)"
                initial={{ opacity: 0 }}
                style={{ opacity: chartProgress }}
              />
            </svg>
            
            <div className={styles.chartLabels}>
              <motion.div className={styles.labelItem} style={{ bottom: '10%', left: '10%' }}>Security</motion.div>
              <motion.div className={styles.labelItem} style={{ bottom: '40%', left: '40%' }}>Liquidity</motion.div>
              <motion.div className={styles.labelItem} style={{ bottom: '80%', left: '75%' }}>Prosperity</motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Features & Requirements Grid */}
      <section className={styles.detailsSection}>
        <div className={styles.detailsLayout}>
          
          <div className={styles.featuresPanel}>
            <div className={styles.panelHeader}>
              <Award className={styles.panelIcon} size={32} />
              <h3>Premium Features</h3>
            </div>
            <div className={styles.featureGrid}>
               <div className={styles.glassFeature}>
                  <CreditCard className={styles.featIcon} />
                  <span>Dahabo Debit Card</span>
               </div>
               <div className={styles.glassFeature}>
                  <Smartphone className={styles.featIcon} />
                  <span>Intuitive E-Banking</span>
               </div>
               <div className={styles.glassFeature}>
                  <CheckCircle2 className={styles.featIcon} />
                  <span>SMS Real-time Alerts</span>
               </div>
               <div className={styles.glassFeature}>
                  <FileText className={styles.featIcon} />
                  <span>Free Monthly Statements</span>
               </div>
            </div>
          </div>

          <div className={styles.requirementsPanel}>
            <div className={styles.panelHeader}>
              <Lock className={styles.panelIcon} size={32} />
              <h3>Onboarding Checklist</h3>
            </div>
            <ul className={styles.checkList}>
              <li>
                <div className={styles.checkBullet} />
                <div className={styles.checkText}>
                  <strong>Valid Identification</strong>
                  <p>Passport or National ID Card.</p>
                </div>
              </li>
              <li>
                <div className={styles.checkBullet} />
                <div className={styles.checkText}>
                  <strong>Visual Registry</strong>
                  <p>Two recent passport photographs.</p>
                </div>
              </li>
              <li>
                <div className={styles.checkBullet} />
                <div className={styles.checkText}>
                  <strong>Income Source</strong>
                  <p>Proof of Salary or Business ownership.</p>
                </div>
              </li>
              <li>
                <div className={styles.checkBullet} />
                <div className={styles.checkText}>
                  <strong>Address Proof</strong>
                  <p>Utility bill or official residency document.</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className={styles.bottomDisclaimer}>
            <CheckCircle2 size={16} />
            <p>All Dahabo accounts are 100% Sharia-Compliant and subject to DBI standard KYC protocols.</p>
        </div>
      </section>

    </main>
  );
}

// Helper for the spring animation
import { useSpring } from "framer-motion";
