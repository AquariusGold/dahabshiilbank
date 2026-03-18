"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { TrendingUp, ShieldCheck, Smartphone, CheckCircle, ArrowRight, Lock, Key, Settings, Target, CreditCard } from "lucide-react";
import styles from "./SavingAccount.module.css";
import Link from "next/link";

export default function SavingAccountPage() {
  // 1. Hero Particle System State
  const [particles, setParticles] = useState<Array<{id: number, x: number, delay: number, size: number, duration: number}>>([]);
  const [isHoveringHero, setIsHoveringHero] = useState(false);

  useEffect(() => {
    // Generate static abstract "growth" particles
    const generatedParticles = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage x-position
      delay: Math.random() * 5,
      size: Math.random() * 15 + 5,
      duration: Math.random() * 5 + 3
    }));
    setParticles(generatedParticles);
  }, []);

  // 2. Vault Requirements Scroll Trigger
  const vaultRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: vaultRef,
    offset: ["start 80%", "center center"]
  });

  return (
    <main className={styles.main}>
      
      {/* 1. Future Growth Hero */}
      <section 
        className={styles.heroSection}
        onMouseEnter={() => setIsHoveringHero(true)}
        onMouseLeave={() => setIsHoveringHero(false)}
      >
        <div className={styles.heroContent}>
          <motion.div 
            className={styles.heroText}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className={styles.badge}>Personal Saving Account</div>
            <h1 className={styles.title}>Secure Your Future.<br/>Watch It Grow.</h1>
            <p className={styles.subtitle}>
              A 100% Sharia-compliant facility designed to help you safely store and grow your funds for life's biggest milestones—a wedding, a new vehicle, or that dream vacation.
            </p>
            <div className={styles.ctaGroup}>
              <Link href="/contact" className={styles.primaryBtn}>
                Start Saving Today <ArrowRight size={20} />
              </Link>
              <button 
                className={styles.secondaryBtn}
                onClick={() => document.getElementById('vault-requirements')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Requirements
              </button>
            </div>
          </motion.div>

          {/* Abstract Growth Visual (Particles) */}
          <div className={styles.heroVisual}>
            <div className={styles.visualContainer}>
              <div className={styles.growthChart}>
                {/* Stylized Abstract Chart Line */}
                <svg viewBox="0 0 100 100" className={styles.chartSvg}>
                  <motion.path 
                    d="M 0 100 Q 20 80 40 70 T 70 40 T 100 0" 
                    fill="transparent" 
                    stroke="var(--color-cyan)" 
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                  {/* Fill gradient */}
                  <motion.path 
                    d="M 0 100 Q 20 80 40 70 T 70 40 T 100 0 L 100 100 L 0 100 Z" 
                    fill="url(#growthGradient)" 
                    opacity="0.2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                    transition={{ delay: 1, duration: 1 }}
                  />
                  <defs>
                    <linearGradient id="growthGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--color-cyan)" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Floating Wealth Particles */}
              {particles.map((p) => (
                <motion.div
                  key={p.id}
                  className={styles.particle}
                  style={{
                    left: `${p.x}%`,
                    width: p.size,
                    height: p.size,
                  }}
                  animate={{ 
                    y: ['120%', '-20%'],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: isHoveringHero ? p.duration * 0.5 : p.duration, // Speed up on hover
                    delay: p.delay,
                    ease: "linear"
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Focus Grid (Features) */}
      <section className={styles.gridSection}>
        <div className={styles.sectionHeader}>
          <h2>Tools for Growth</h2>
          <p>Everything you need to easily manage your savings safely.</p>
        </div>

        <div className={styles.focusGrid}>
          
          <div className={styles.gridItem}>
            <div className={styles.gridIcon}><TrendingUp size={32} /></div>
            <h3>Sharia-Compliant</h3>
            <p>100% adherence to Islamic banking principles. Store your additional funds safely and ethically with complete peace of mind.</p>
          </div>

          <div className={styles.gridItem}>
            <div className={styles.gridIcon}><CreditCard size={32} /></div>
            <h3>Cheque & Debit Access</h3>
            <p>Full flexibility when you need it. Both cheque book facilities and a dedicated debit card are included with your savings account.</p>
          </div>

          <div className={styles.gridItem}>
            <div className={styles.gridIcon}><Smartphone size={32} /></div>
            <h3>Digital Banking</h3>
            <p>Track your financial growth in real-time. Full E-banking access, SMS banking alerts, and online utility payments.</p>
          </div>

          <div className={styles.gridItem}>
            <div className={styles.gridIcon}><ShieldCheck size={32} /></div>
            <h3>Ironclad Security</h3>
            <p>Your future is safe. Enjoy free monthly statements and the ability to instantly stop a lost card directly via your online portal.</p>
          </div>

        </div>
      </section>

      {/* 3. The Secure Vault (Requirements) */}
      <section id="vault-requirements" className={styles.vaultSection} ref={vaultRef}>
        <div className={styles.vaultContainer}>
          
          <div className={styles.vaultHeader}>
            <Lock size={48} className={styles.lockIcon} />
            <h2>Unlock Your Account</h2>
            <p>Standard security requirements to protect your identity.</p>
          </div>

          <div className={styles.vaultGrid}>
            
            <motion.div 
              className={styles.vaultBlock}
              style={{ opacity: scrollYProgress, y: useTransform(scrollYProgress, [0, 1], [50, 0]) }}
            >
              <div className={styles.blockHeader}>
                <Key size={24} className={styles.blockIcon} />
                <span className={styles.blockStep}>Requirement 01</span>
              </div>
              <h3 className={styles.blockTitle}>Identification</h3>
              <p>A valid Passport or National ID. If the applicant is a minor (under 18), the account must be opened and operated by a legal Guardian.</p>
            </motion.div>

            <motion.div 
              className={styles.vaultBlock}
              style={{ opacity: scrollYProgress, y: useTransform(scrollYProgress, [0, 1], [100, 0]) }}
            >
              <div className={styles.blockHeader}>
                <Settings size={24} className={styles.blockIcon} />
                <span className={styles.blockStep}>Requirement 02</span>
              </div>
              <h3 className={styles.blockTitle}>Justification</h3>
              <p>Standard documentation to justify current income and verify your residential address.</p>
            </motion.div>

            <motion.div 
              className={styles.vaultBlock}
              style={{ opacity: scrollYProgress, y: useTransform(scrollYProgress, [0, 1], [150, 0]) }}
            >
              <div className={styles.blockHeader}>
                <Target size={24} className={styles.blockIcon} />
                <span className={styles.blockStep}>Requirement 03</span>
              </div>
              <h3 className={styles.blockTitle}>Photographs</h3>
              <p>Two recent passport-sized photographs for identity verification purposes.</p>
            </motion.div>

             <motion.div 
              className={styles.vaultBlock}
              style={{ opacity: scrollYProgress, y: useTransform(scrollYProgress, [0, 1], [200, 0]) }}
            >
              <div className={styles.blockHeader}>
                <ShieldCheck size={24} className={styles.blockIcon} />
                <span className={styles.blockStep}>Requirement 04</span>
              </div>
              <h3 className={styles.blockTitle}>KYC Norms</h3>
              <p>Standard Know Your Customer (KYC) compliance forms must be completed prior to account activation.</p>
            </motion.div>

          </div>

        </div>
      </section>

    </main>
  );
}
