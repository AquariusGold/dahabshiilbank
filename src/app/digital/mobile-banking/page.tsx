"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Smartphone, 
  Repeat, 
  ArrowRightLeft, 
  FileText,
  ChevronRight,
  WifiHigh,
  ShieldCheck,
  Clock
} from "lucide-react";
import styles from "./MobileBanking.module.css";
import Link from "next/link";

// 1. Invisible Network Hero
function AmbientHero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax for the massive background text
  const yBgText = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const yFgText = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacityFg = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section className={styles.heroSection} ref={containerRef}>
       {/* Background Parallax Typography */}
       <motion.div className={styles.bgTypography} style={{ y: yBgText }}>
          ANYWHERE
       </motion.div>

       <div className={styles.heroLayout}>
          <motion.div 
            className={styles.heroContent}
            style={{ y: yFgText, opacity: opacityFg }}
          >
             <div className={styles.badge}><WifiHigh size={14} /> Ambient Connectivity</div>
             <h1 className={styles.title}>The Bank That<br/>Travels With You.</h1>
             <p className={styles.subtitle}>
               Execute financial transactions seamlessly from your mobile device. Access balances, pay bills, and transfer funds instantly—without ever visiting a branch.
             </p>
          </motion.div>

          {/* Stable 2D Device representation with ambient glow */}
          <div className={styles.heroVisual}>
             <div className={styles.ambientDevice}>
                <div className={styles.ambientScreen}>
                   <Smartphone size={48} className={styles.deviceIcon} />
                   <span>Connected</span>
                </div>
                {/* Continuous CSS Pulse */}
                <div className={styles.devicePulse} />
             </div>
          </div>
       </div>
    </section>
  );
}

// 2. Always-On Ledger (Bento Grid)
function LedgerGrid() {
  const features = [
    { title: "Instant Balances", icon: <FileText size={24}/>, desc: "Check balances on accounts and view your transaction history instantly." },
    { title: "Auto Payments", icon: <Repeat size={24}/>, desc: "Pay bills automatically each month with our easy-to-set-up auto payment system." },
    { title: "Fund Transfers", icon: <ArrowRightLeft size={24}/>, desc: "Transfer funds securely between your accounts without needing to visit a branch." },
    { title: "24/7 Access", icon: <Clock size={24}/>, desc: "Access your account around the clock. Your finances never sleep." },
  ];

  return (
    <div className={styles.gridContainer}>
      {features.map((feature, i) => (
        <div key={i} className={styles.gridBox}>
           <div className={styles.gbScanline} />
           <div className={styles.gbHeader}>
              <div className={styles.gbIcon}>{feature.icon}</div>
              <h3>{feature.title}</h3>
           </div>
           <p>{feature.desc}</p>
        </div>
      ))}
    </div>
  );
}

// 3. The Seamless Journey (Horizontal Scroll)
function JourneySection() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"]); // 3 panels, so we shift by 2/3

  const panels = [
    { 
      step: "01", title: "Setup in Seconds", 
      desc: "Register your device securely without branch paperwork. Instant verification directly through your existing account.",
      icon: <ShieldCheck size={64} />
    },
    { 
      step: "02", title: "Tap to Pay", 
      desc: "Clear your utility bills instantly. Set up recurring payments so you never miss a due date again.",
      icon: <Repeat size={64} />
    },
    { 
      step: "03", title: "Global Movement", 
      desc: "Send money across the room or across the globe. Seamless integration with all Dahabshil services.",
      icon: <ArrowRightLeft size={64} />
    }
  ];

  return (
    <section ref={targetRef} className={styles.journeyWrapper}>
       <div className={styles.journeySticky}>
          <div className={styles.journeyHeader}>
            <h2 className={styles.jhTitle}>The Seamless Journey</h2>
            <p className={styles.jhSubtitle}>Scroll to follow the transaction lifecycle.</p>
          </div>
          
          <motion.div style={{ x }} className={styles.journeyTrack}>
             {panels.map((panel, i) => (
               <div key={i} className={styles.journeyPanel}>
                  <div className={styles.jpIcon}>{panel.icon}</div>
                  <div className={styles.jpContent}>
                     <span className={styles.jpStep}>{panel.step}</span>
                     <h3>{panel.title}</h3>
                     <p>{panel.desc}</p>
                  </div>
               </div>
             ))}
          </motion.div>
       </div>
    </section>
  );
}

export default function MobileBankingPage() {
  return (
    <main className={styles.main}>
      
      {/* 1. Ambient Hero */}
      <AmbientHero />

      {/* 2. Bento Grid Section */}
      <section className={styles.ledgerSection}>
         <div className={styles.sectionHeader}>
            <h2>The Always-On Ledger</h2>
            <p>Everything you need to manage your day-to-day finances.</p>
         </div>
         <LedgerGrid />
      </section>

      {/* 3. Horizontal Scroll Journey */}
      <JourneySection />

      {/* 4. The Horizon Footer */}
      <section className={styles.footerSection}>
         <div className={styles.footerContent}>
            <h2 className={styles.footerTitle}>Start your journey.</h2>
            <p className={styles.footerText}>
              If you do not have an existing account with Dahabshil Bank, you can apply online through our secure E-banking portal.
            </p>
            <div className={styles.footerActions}>
               <Link href="/contact" className={styles.pillBtn}>
                  Apply Online <ChevronRight size={20} />
               </Link>
               <Link href="/digital/internet-banking" className={styles.textBtn}>
                  Sign in to E-banking
               </Link>
            </div>
         </div>
      </section>

    </main>
  );
}
