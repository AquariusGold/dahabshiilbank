"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, useInView } from "framer-motion";
import { Users, Sprout, HandCoins, ArrowRight, ExternalLink } from "lucide-react";
import styles from "./Microfinance.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

// Animated Counter Component
function AnimatedCounter({ from, to, duration = 2, suffix = "" }: { from: number, to: number, duration?: number, suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const motionValue = useMotionValue(from);
  const springValue = useSpring(motionValue, { duration: duration * 1000, bounce: 0 });

  useEffect(() => {
    if (isInView) {
      motionValue.set(to);
    }
  }, [isInView, motionValue, to]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat('en-US').format(Math.floor(latest)) + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>{from}{suffix}</span>;
}


export default function MicrofinancePage() {
  // 1. Hero Scroll
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgOpacity = useTransform(heroScroll, [0, 1], [0.8, 0.2]);

  return (
    <main className={styles.main}>
      
      {/* 1. Empowerment Engine Hero */}
      <section className={styles.heroSection} ref={heroRef}>
        
        {/* Warm, human-centric background */}
        <motion.div 
          className={styles.heroBg}
          style={{ opacity: bgOpacity }}
        >
           <Image 
            src="https://images.unsplash.com/photo-1599584083412-3101a61147b6?auto=format&fit=crop&q=80&w=2000"
            alt="Somali Muslim Woman Entrepreneur"
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
            transition={{ duration: 0.8 }}
          >
            <div className={styles.badge}>Microdahab Division</div>
            <h1 className={styles.title}>Empowering<br/>Local Ambition.</h1>
            <p className={styles.subtitle}>
              Introducing Microdahab: Our dedicated microfinance division engineered to provide accessible, Sharia-compliant capital to small businesses, grassroots entrepreneurs, and women-led initiatives across the region.
            </p>
            <div className={styles.ctaGroup}>
              <Link href="/contact" className={styles.primaryBtn}>
                Visit Microdahab Portal <ExternalLink size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Impact Metrics (Animated Data Banner) */}
      <section className={styles.metricsSection}>
        <div className={styles.metricsGrid}>
          
          <div className={styles.metricItem}>
            <div className={styles.metricValue}>
              <AnimatedCounter from={0} to={50} suffix="k+" />
            </div>
            <div className={styles.metricLabel}>Small Businesses Funded</div>
          </div>

          <div className={styles.metricDivider} />

          <div className={styles.metricItem}>
            <div className={styles.metricValue}>
              <AnimatedCounter from={0} to={100} suffix="%" />
            </div>
            <div className={styles.metricLabel}>Sharia-Compliant</div>
          </div>

          <div className={styles.metricDivider} />

          <div className={styles.metricItem}>
            <div className={styles.metricValue}>
              <AnimatedCounter from={100} to={0} suffix="" />
            </div>
            <div className={styles.metricLabel}>Hidden Fees</div>
          </div>

        </div>
      </section>

      {/* 3. Core Pillars (Staggered Grid) */}
      <section className={styles.pillarsSection}>
        <div className={styles.pillarsHeader}>
          <h2>The Pillars of Microdahab</h2>
          <p>We believe that when local businesses thrive, the entire community prospers.</p>
        </div>

        <div className={styles.pillarsGrid}>
          
          <motion.div 
            className={styles.pillarCard}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.cardHeader}>
              <div className={styles.iconBox}><HandCoins size={32} /></div>
              <h3>Financial Inclusion</h3>
            </div>
            <p>Banking the unbanked. We provide vital first-time capital to vendors, artisans, and small-scale farmers who are traditionally overlooked by commercial lending.</p>
          </motion.div>

          <motion.div 
            className={styles.pillarCard}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className={styles.cardHeader}>
              <div className={styles.iconBox}><Users size={32} /></div>
              <h3>Women's Empowerment</h3>
            </div>
            <p>A significant portion of our micro-funds are dedicated specifically to women-led initiatives, supporting the financial independence of mothers and female entrepreneurs.</p>
          </motion.div>

          <motion.div 
            className={styles.pillarCard}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className={styles.cardHeader}>
              <div className={styles.iconBox}><Sprout size={32} /></div>
              <h3>Community Growth</h3>
            </div>
            <p>By providing ethical, profit-sharing Murabaha capital at the grassroots level, we ensure wealth circulates and multiplies within the local community economy.</p>
          </motion.div>

        </div>
      </section>

    </main>
  );
}
