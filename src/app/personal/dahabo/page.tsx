"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Crown, TrendingUp, Wallet, ShieldCheck, ArrowRight, ArrowUpRight } from "lucide-react";
import styles from "./DahaboHub.module.css";
import Image from "next/image";
import Link from "next/link";

export default function DahaboHubPage() {
  // 1. Hero Scroll
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgOpacity = useTransform(heroScroll, [0, 1], [0.8, 0.2]);

  return (
    <main className={styles.main}>
      
      {/* 1. The Gold Standard Hero */}
      <section className={styles.heroSection} ref={heroRef}>
        
        {/* High-fashion corporate portrait background */}
        <motion.div 
          className={styles.heroBg}
          style={{ opacity: bgOpacity }}
        >
           <Image 
            src="https://images.unsplash.com/photo-1599584083412-3101a61147b6?auto=format&fit=crop&q=80&w=2000"
            alt="Dahabo For Women - Empowerment"
            fill
            className={styles.bgImage}
            priority
          />
        </motion.div>
        
        {/* Deep navy to dark gold gradient overlay */}
        <div className={styles.heroOverlay} />

        {/* Abstract Gold Dust Particles (CSS managed) */}
        <div className={styles.goldDustContainer}>
          <div className={styles.dustParticle} style={{ top: '20%', left: '10%', animationDelay: '0s' }} />
          <div className={styles.dustParticle} style={{ top: '60%', left: '30%', animationDelay: '2s' }} />
          <div className={styles.dustParticle} style={{ top: '40%', left: '70%', animationDelay: '1s' }} />
          <div className={styles.dustParticle} style={{ top: '80%', left: '80%', animationDelay: '3s' }} />
        </div>

        <div className={styles.heroLayout}>
          <motion.div 
            className={styles.heroContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.badge}>Exclusive Corporate Banking</div>
            <h1 className={styles.title}>Dahabo<br/>for Women.</h1>
            <p className={styles.subtitle}>
              Dahabo—meaning "Gold" in Somali—translates the immense value we hold for our female clients. Experience tailor-made financial solutions designed exclusively to elevate your lifestyle, family, and business.
            </p>
            <div className={styles.ctaGroup}>
              <button 
                className={styles.primaryBtn}
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Account Types <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. The Value Proposition (Asymmetrical Split) */}
      <section className={styles.valueSection}>
        <div className={styles.valueGlow} />
        
        <div className={styles.valueLayout}>
          <div className={styles.valueLeft}>
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Real Value for<br/>Your Ambition.
            </motion.h2>
          </div>
          
          <div className={styles.valueRight}>
            <motion.div 
              className={styles.valueItem}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className={styles.valueIcon}><Crown size={28} /></div>
              <div>
                <h3>Exclusive Networking</h3>
                <p>Gain access to private corporate events and networking opportunities with other top-tier female executives and entrepreneurs.</p>
              </div>
            </motion.div>

            <motion.div 
              className={styles.valueItem}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className={styles.valueIcon}><ShieldCheck size={28} /></div>
              <div>
                <h3>Tailored Solutions</h3>
                <p>From staggered investment portfolios to premium day-to-day accounts, every product is structured around a woman's unique financial journey.</p>
              </div>
            </motion.div>

            <motion.div 
              className={styles.valueItem}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className={styles.valueIcon}><TrendingUp size={28} /></div>
              <div>
                <h3>Business Scaling</h3>
                <p>Direct priority access to Dahabshiil's corporate lending arm and Microdahab funding to aggressively scale your enterprises.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. The Exclusive Portfolio Grid (Navigational Cards) */}
      <section id="portfolio" className={styles.portfolioSection}>
        <div className={styles.portfolioHeader}>
          <h2>The Dahabo Portfolio</h2>
          <p>Select your exclusive tier of service.</p>
        </div>

        <div className={styles.portfolioGrid}>
          
          <Link href="/personal/dahabo/current-account" className={styles.portfolioCard}>
            <div className={styles.cardGlow} />
            <div className={styles.cardContent}>
              <div className={styles.cardHeader}>
                <Wallet size={32} className={styles.cardIcon} />
                <ArrowUpRight size={24} className={styles.cardArrow} />
              </div>
              <h3>Dahabo Current Account</h3>
              <p>Premium day-to-day banking with dedicated checkbook facilities, debit cards, and free monthly statements for seamless lifestyle management.</p>
            </div>
          </Link>

          <Link href="/personal/dahabo/saving-account" className={styles.portfolioCard}>
            <div className={styles.cardGlow} />
            <div className={styles.cardContent}>
              <div className={styles.cardHeader}>
                <TrendingUp size={32} className={styles.cardIcon} />
                <ArrowUpRight size={24} className={styles.cardArrow} />
              </div>
              <h3>Dahabo Savings Account</h3>
              <p>Secure, Sharia-compliant wealth accumulation structured to safely grow your family's future reserves.</p>
            </div>
          </Link>

          <Link href="#" className={styles.portfolioCard}>
            <div className={styles.cardGlow} />
            <div className={styles.cardContent}>
              <div className={styles.cardHeader}>
                <Crown size={32} className={styles.cardIcon} />
                <ArrowUpRight size={24} className={styles.cardArrow} />
              </div>
              <h3>Dahabo Islamic Investment</h3>
              <p>Advanced Murabaha and profit-sharing portfolios explicitly designed for female investors looking to scale corporate wealth.</p>
              <div className={styles.comingSoonBadge}>Coming Soon</div>
            </div>
          </Link>

          <Link href="#" className={styles.portfolioCard}>
            <div className={styles.cardGlow} />
            <div className={styles.cardContent}>
              <div className={styles.cardHeader}>
                <ShieldCheck size={32} className={styles.cardIcon} />
                <ArrowUpRight size={24} className={styles.cardArrow} />
              </div>
              <h3>Dahabo Fixed Deposit</h3>
              <p>Lock in high-yield, predetermined profit rates on your liquid capital with zero market volatility exposure.</p>
              <div className={styles.comingSoonBadge}>Coming Soon</div>
            </div>
          </Link>

        </div>
      </section>

    </main>
  );
}
