"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { 
  Zap, 
  Globe, 
  ShoppingBag, 
  Receipt, 
  QrCode, 
  ArrowRight,
  ShieldCheck,
  Smartphone,
  CheckCircle2,
  LockKeyhole,
  Wallet,
  ArrowUpRight
} from "lucide-react";
import styles from "./DahabPlus.module.css";
import Image from "next/image";
import Link from "next/link";

// 1. Interactive 3D Device Hero
function InteractiveDeviceHero() {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const rx = useTransform(mouseY, [-500, 500], [10, -10]);
  const ry = useTransform(mouseX, [-500, 500], [-10, 10]);

  return (
    <section className={styles.heroSection} onMouseMove={handleMouseMove} ref={containerRef}>
      <div className={styles.heroLayout}>
        
        {/* Text Content */}
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.badge}><Zap size={16} /> The Instant Hub</div>
          <h1 className={styles.title}>All-in-One.<br/><span className={styles.textYellow}>One for All.</span></h1>
          <p className={styles.subtitle}>
            DahabPlus is the fast and flexible solution for your digital life. 
            Send money, pay bills, and shop instantly—all from the palm of your hand.
          </p>
          <div className={styles.downloadGroup}>
            <button className={styles.appStoreBtn}>
               <Image src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" width={140} height={42} />
            </button>
            <button className={styles.playStoreBtn}>
               <Image src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" width={140} height={42} />
            </button>
          </div>
        </motion.div>

        {/* 3D Device Container */}
        <div className={styles.deviceContainer}>
           <motion.div 
            className={styles.deviceWrapper}
            style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
           >
              {/* Phone Mockup Body (CSS ONLY) */}
              <div className={styles.phoneBody}>
                 <div className={styles.phoneScreen}>
                    {/* Simulated Screen Content - DahabPlus Dashboard */}
                    <div className={styles.simHeader}>
                       <span>Good Morning</span>
                       <strong>User</strong>
                    </div>
                    <div className={styles.simBalance}>
                       <span>Total Balance</span>
                       <h2>$12,750.00</h2>
                    </div>
                    <div className={styles.simGrid}>
                       <div className={styles.simBtn} style={{ background: 'rgba(241, 198, 26, 0.15)', color: 'var(--color-yellow)' }}>
                         <Globe size={20}/>Send
                       </div>
                       <div className={styles.simBtn}>
                         <Receipt size={20}/>Bills
                       </div>
                       <div className={styles.simBtn}>
                         <ShoppingBag size={20}/>Shop
                       </div>
                    </div>
                    <div className={styles.simActivity}>
                       <div style={{ fontSize: '12px', opacity: 0.5, marginBottom: '10px' }}>Recent Activites</div>
                       {[1, 2].map(i => (
                         <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', marginBottom: '8px' }}>
                           <span style={{ fontSize: '11px' }}>Global Transfer</span>
                           <span style={{ fontSize: '11px', fontWeight: 700 }}>$200.00</span>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>

              {/* Floating Nodes */}
              <motion.div className={`${styles.floatNode} ${styles.n1}`} style={{ translateZ: 50 }}>
                 <Globe color="var(--color-yellow)" /><span>Global Remittance</span>
              </motion.div>
              <motion.div className={`${styles.floatNode} ${styles.n2}`} style={{ translateZ: 80 }}>
                 <Wallet color="var(--color-yellow)" /><span>Digital Wallet</span>
              </motion.div>
              <motion.div className={`${styles.floatNode} ${styles.n3}`} style={{ translateZ: 30 }}>
                 <ShoppingBag color="var(--color-yellow)" /><span>Smart Retail</span>
              </motion.div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}

// 2. Connectivity Grid
function FeatureGrid() {
  const cards = [
    { title: "One-Click Payments", icon: <Zap />, desc: "Settle your utilities and everyday bills with a single tap, anywhere in the world." },
    { title: "Universal Transfers", icon: <Globe />, desc: "Leverage Dahabshiil's global network for near-instant, secure fund movement." },
    { title: "Smart Shopping", icon: <ShoppingBag />, desc: "Pay at physical retailers or online stores directly from your DahabPlus wallet." },
    { title: "Bank-Grade Security", icon: <ShieldCheck />, desc: "Multi-factor authentication and end-to-end encryption for every transaction." },
    { title: "Financial Control", icon: <LockKeyhole />, desc: "Real-time tracking of all your spending and balance history across accounts." },
    { title: "Unified Ecosystem", icon: <Smartphone />, desc: "Connecting personal banking, business tools, and retail in one app." }
  ];

  return (
    <section className={styles.featureSection}>
       <div className={styles.sectionHeader}>
          <div className={styles.badge}>App Capabilities</div>
          <h2>Everything you need.<br/>Nothing you don&apos;t.</h2>
       </div>
       <div className={styles.gridContainer}>
          {cards.map((card, i) => (
            <motion.div 
              key={i} 
              className={styles.featureCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
               {card.icon}
               <h3>{card.title}</h3>
               <p>{card.desc}</p>
            </motion.div>
          ))}
       </div>
    </section>
  );
}

export default function DahabPlusPage() {
  return (
    <main className={styles.main}>
      <InteractiveDeviceHero />
      
      <section className={styles.integrationSection}>
         <div className={styles.hubLayout}>
            <div className={styles.hubContent}>
               <h2>Unified Legacy.<br/>Digital Frontier.</h2>
               <p>Dahabshiil money transfer now with an easier, faster, and more flexible solution. Built for the modern user.</p>
               <div className={styles.hubList}>
                  <div className={styles.hubItem}><CheckCircle2 size={24} /> <span>Trusted by millions worldwide</span></div>
                  <div className={styles.hubItem}><CheckCircle2 size={24} /> <span>Regulated and Secure architecture</span></div>
                  <div className={styles.hubItem}><CheckCircle2 size={24} /> <span>24/7 International support Hub</span></div>
               </div>
            </div>
            <div className={styles.hubVisual}>
               <motion.div 
                 className={styles.simBalance}
                 whileHover={{ scale: 1.05 }}
                 style={{ maxWidth: '400px', margin: '0 auto' }}
               >
                  <span>Connect Your Future</span>
                  <h2>DahabPlus Portal</h2>
                  <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                    <span>Active Sessions: 4</span>
                    <strong>Secure <ShieldCheck size={14} style={{ display: 'inline', verticalAlign: 'middle' }} /></strong>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      <FeatureGrid />

      {/* Download Section */}
      <section className={styles.downloadSection}>
         <div className={styles.dBox}>
            <div className={styles.dText}>
               <h2>Join the Ecosystem.</h2>
               <p>Dahabshiil DahabPlus is available on all major app stores. Scan the code to get started instantly.</p>
               <div className={styles.qrArea}>
                  <div className={styles.qrCode}>
                     <QrCode size={60} color="#000" />
                  </div>
                  <span>Scan to download DahabPlus directly</span>
               </div>
               <div className={styles.downloadGroup}>
                 <button className={styles.appStoreBtn}>
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" width={140} height={42} />
                 </button>
                 <button className={styles.playStoreBtn}>
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" width={140} height={42} />
                 </button>
               </div>
            </div>
            
            <div className={styles.dMockupGroup}>
               <div className={styles.dPhoneLeft} />
               <div className={styles.dPhoneRight} />
            </div>
         </div>
      </section>
    </main>
  );
}
