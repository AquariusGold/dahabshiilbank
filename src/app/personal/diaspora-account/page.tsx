"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Globe, Plane, Building, Send, ShieldCheck, ArrowRight, Laptop, FileSignature, Fingerprint } from "lucide-react";
import styles from "./Diaspora.module.css";
import Link from "next/link";

export default function DiasporaAccountPage() {
  // 1. Scroll hooks for animated background elements
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <main className={styles.main} ref={containerRef}>
      
      {/* Dynamic Parallax Background Map */}
      <motion.div className={styles.bgMap} style={{ y: bgY }} />

      {/* 1. Global Bridge Hero */}
      <section className={styles.heroSection}>
        <div className={styles.heroLayout}>
          
          <motion.div 
            className={styles.heroText}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className={styles.badge}>Diaspora Account</div>
            <h1 className={styles.title}>Your Home<br/>Away From Home.</h1>
            <p className={styles.subtitle}>
              Seamless cross-border banking, investment, and fast remittance services tailored exclusively for Somalis anywhere in the world.
            </p>
            <div className={styles.ctaGroup}>
              <Link href="/contact" className={styles.primaryBtn}>
                Open Diaspora Account <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>

          <div className={styles.heroVisual}>
            {/* Interactive Wireframe Globe using pure CSS/SVG animation */}
            <div className={styles.globeContainer}>
              <Globe size={300} strokeWidth={0.5} className={styles.wireframeGlobe} />
              <div className={styles.globeGlow} />

              {/* Remittance Beams (SVG animations) */}
              <svg className={styles.beamsOverlay} viewBox="0 0 400 400">
                <motion.line 
                  x1="0" y1="50" x2="200" y2="200" 
                  stroke="var(--color-cyan)" strokeWidth="2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.5 }}
                />
                <motion.line 
                  x1="400" y1="100" x2="200" y2="200" 
                  stroke="var(--color-cyan)" strokeWidth="3"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1.5 }}
                />
                <motion.line 
                  x1="100" y1="400" x2="200" y2="200" 
                  stroke="rgba(255, 255, 255, 0.8)" strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 2.5 }}
                />
              </svg>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Cross-Border Features (Staggered Scroll Cards) */}
      <section className={styles.featuresSection}>
        <div className={styles.featuresHeader}>
          <h2>Banking Without Borders</h2>
          <p>Premium features designed to connect your life abroad to your roots back home.</p>
        </div>

        <div className={styles.featuresList}>
          
          {/* Feature 1 */}
          <motion.div 
            className={styles.featureCard}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <div className={styles.featIconBox}><Send size={40} /></div>
            <div className={styles.featContent}>
              <h3>Zero-Friction Remittances</h3>
              <p>Direct integration with Dahabshiil Money Transfer. Instantly send funds to family or your own local accounts back home with near-zero transfer fees and preferential exchange rates.</p>
            </div>
          </motion.div>

          {/* Feature 2 */}
          <motion.div 
            className={styles.featureCard}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
          >
            <div className={styles.featIconBox}><ShieldCheck size={40} /></div>
            <div className={styles.featContent}>
              <h3>Multi-Currency Holding</h3>
              <p>Hedge against volatility by managing your wealth across multiple currencies simultaneously. Hold and transfer USD, EUR, GBP, or Shillings all from one unified dashboard.</p>
            </div>
          </motion.div>

          {/* Feature 3 */}
          <motion.div 
            className={styles.featureCard}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.4 }}
          >
            <div className={styles.featIconBox}><Building size={40} /></div>
            <div className={styles.featContent}>
              <h3>Invest Back Home</h3>
              <p>We provide Diaspora account holders exclusive, fast-tracked access to our Real Estate and Business Financing programs to easily invest in the booming East African markets remotely.</p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 3. Remote Onboarding Matrix */}
      <section className={styles.onboardingSection}>
        <div className={styles.onboardingHeader}>
          <Plane size={48} className={styles.headerIcon} />
          <h2>100% Remote Onboarding</h2>
          <p>You shouldn't have to fly home to open a bank account. Our digital KYC matrix gets you set up in three secure steps.</p>
        </div>

        <div className={styles.matrixContainer}>
          {/* The connecting dashed line */}
          <div className={styles.matrixLine} />
          
          {/* Step 1 */}
          <motion.div 
            className={styles.matrixStep}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.stepIconBox}><Laptop size={32} /></div>
            <div className={styles.stepNum}>01</div>
            <h3>Digital Application</h3>
            <p>Fill out our secure online application form from any device, anywhere in the world.</p>
          </motion.div>

          {/* Step 2 */}
          <motion.div 
            className={styles.matrixStep}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.stepIconBox}><Fingerprint size={32} /></div>
            <div className={styles.stepNum}>02</div>
            <h3>Remote KYC Verification</h3>
            <p>Upload a copy of your valid Passport or Residence ID. Our compliance team verifies it digitally within 24 hours.</p>
          </motion.div>

          {/* Step 3 */}
          <motion.div 
            className={styles.matrixStep}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className={styles.stepIconBox}><FileSignature size={32} /></div>
            <div className={styles.stepNum}>03</div>
            <h3>Account Activation</h3>
            <p>Sign your mandate electronically. Your multi-currency account numbers and E-banking access are issued instantly.</p>
          </motion.div>

        </div>
      </section>

    </main>
  );
}
