"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
  Laptop, 
  Globe, 
  ShieldCheck, 
  Key, 
  ArrowRightLeft, 
  Briefcase,
  Monitor,
  Lock,
  ChevronRight,
  Shield,
  Fingerprint,
  CheckCircle2
} from "lucide-react";
import styles from "./InternetBanking.module.css";
import Image from "next/image";
import Link from "next/link";

// 1. Interactive Laptop Hero
function CommandCenterHero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Laptop opens as you scroll down
  const lidRotateX = useTransform(scrollYProgress, [0, 0.4], [80, 0]);
  const laptopZ = useTransform(scrollYProgress, [0, 0.5], [-200, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <section className={styles.heroSection} ref={containerRef}>
      <div className={styles.heroSticky}>
        <motion.div 
          className={styles.heroContent}
          style={{ opacity: textOpacity }}
        >
          <div className={styles.badge}><Monitor size={16} /> Enterprise Gateway</div>
          <h1 className={styles.title}>Total Control.<br/><span className={styles.textCyan}>Infinite Reach.</span></h1>
          <p className={styles.subtitle}>
            Dahabshil Internet Banking provides a comprehensive, secure environment to manage your enterprise and personal wealth from any desktop.
          </p>
        </motion.div>

        <div className={styles.laptopStage}>
           <motion.div 
            className={styles.laptopWrapper}
            style={{ translateZ: laptopZ, rotateX: 10, transformStyle: "preserve-3d" }}
           >
              {/* Laptop Base (Keyboard area) */}
              <div className={styles.laptopBase}>
                 <div className={styles.keyboard} />
                 <div className={styles.trackpad} />
              </div>

              {/* Laptop Lid (Screen) */}
              <motion.div 
                className={styles.laptopLid}
                style={{ rotateX: lidRotateX, transformOrigin: "bottom center" }}
              >
                 <div className={styles.screenBezel}>
                    <div className={styles.screenContent}>
                       {/* Abstract Dashboard UI */}
                       <div className={styles.dashHeader}>
                          <div className={styles.dashLogo}>DBI Control</div>
                          <div className={styles.dashUser} />
                       </div>
                       <div className={styles.dashBody}>
                          <div className={styles.dashSidebar}>
                             <div className={styles.dashItem} />
                             <div className={styles.dashItem} />
                             <div className={styles.dashItem} />
                          </div>
                          <div className={styles.dashMain}>
                             <div className={styles.dashChart}>
                                <svg viewBox="0 0 100 50" className={styles.sparkline}>
                                   <path d="M0,40 Q10,20 20,30 T40,10 T60,25 T80,5 T100,15" fill="none" stroke="var(--color-cyan)" strokeWidth="2" />
                                </svg>
                             </div>
                             <div className={styles.dashGrid}>
                                <div className={styles.dashStat} />
                                <div className={styles.dashStat} />
                                <div className={styles.dashStat} />
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </motion.div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}

// 2. Global Operations Map
function GlobalOperations() {
  // SVG coordinates for map nodes
  const nodes = [
    { x: 45, y: 40, name: "London" },
    { x: 55, y: 55, name: "Dubai" },
    { x: 53, y: 65, name: "Mogadishu" },
    { x: 75, y: 45, name: "Hong Kong" },
    { x: 25, y: 45, name: "New York" }
  ];

  return (
    <div className={styles.mapContainer}>
       <div className={styles.mapText}>
          <h2>Global Trade Facilitation.</h2>
          <p>Banks accept deposits and lend them to business owners. Bank loans facilitate trade. Our internet banking connects your operations globally, seamlessly integrating with your e-Dahab account.</p>
       </div>
       
       <div className={styles.mapVisual}>
          <Image 
            src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
            alt="World Map"
            fill
            className={styles.worldImg}
          />
          <svg className={styles.mapOverlay} viewBox="0 0 100 100" preserveAspectRatio="none">
             {/* Lines */}
             <path d="M53,65 Q50,60 55,55" className={styles.dataLine} />
             <path d="M53,65 Q45,55 45,40" className={styles.dataLine} />
             <path d="M55,55 Q65,40 75,45" className={styles.dataLine} />
             <path d="M45,40 Q35,30 25,45" className={styles.dataLine} />
             
             {/* Nodes */}
             {nodes.map((n, i) => (
                <circle key={i} cx={n.x} cy={n.y} r="1" className={styles.nodePoint} />
             ))}
          </svg>
       </div>
    </div>
  );
}

// 3. Enterprise Tools Grid
function EnterpriseTools() {
  const tools = [
    { title: "e-Dahab Integration", icon: <ArrowRightLeft />, desc: "Instantly deposit and withdraw funds directly from your e-Dahab account." },
    { title: "Business Transfers", icon: <Briefcase />, desc: "Execute high-volume B2B transfers to enhance enterprise growth." },
    { title: "Secure OTP System", icon: <Key />, desc: "Dynamic One-Time Passwords required for secure session logins." },
    { title: "Real-time Auditing", icon: <ShieldCheck />, desc: "Comprehensive transaction logs and printable statements." }
  ];

  return (
    <div className={styles.toolsGrid}>
       {tools.map((tool, i) => (
          <div key={i} className={styles.toolCard}>
             <div className={styles.tIcon}>{tool.icon}</div>
             <div className={styles.tContent}>
                <h3>{tool.title}</h3>
                <p>{tool.desc}</p>
             </div>
             <div className={styles.tGlow} />
          </div>
       ))}
    </div>
  );
}

// 4. Secure Gateway CTA
function SecureGateway() {
  return (
    <div className={styles.gatewayBox}>
       <div className={styles.gateInfo}>
          <Shield className={styles.shieldIcon} size={48} />
          <h2>The Secure<br/>Gateway.</h2>
          <p>We prioritize your security. Monitor accounts remotely with confidence, backed by our dual SMS alert and OTP authentication system.</p>
          <ul className={styles.secList}>
             <li><CheckCircle2 size={16} /> End-to-end 256-bit encryption</li>
             <li><CheckCircle2 size={16} /> Device authorization protocols</li>
             <li><CheckCircle2 size={16} /> Suspicious activity lockouts</li>
          </ul>
       </div>
       
       <div className={styles.gateMockup}>
          <div className={styles.loginPanel}>
             <div className={styles.lpHeader}>
                <Lock size={20} />
                <span>Secure E-Banking</span>
             </div>
             <div className={styles.lpBody}>
                <div className={styles.lpInput}>Corporate ID</div>
                <div className={styles.lpInput}>Password</div>
                <button className={styles.lpBtn}>
                   Sign In <ChevronRight size={16} />
                </button>
                <div className={styles.lpFooter}>
                   <span>Don&apos;t have an account?</span>
                   <Link href="/contact" className={styles.lpLink}>Apply online</Link>
                </div>
             </div>
          </div>
       </div>
    </div>
  );
}

export default function InternetBankingPage() {
  return (
    <main className={styles.main}>
      
      {/* 1. Command Center Hero */}
      <CommandCenterHero />

      {/* 2. Global Operations Section */}
      <section className={styles.mapSection}>
         <GlobalOperations />
      </section>

      {/* 3. Enterprise Tools Section */}
      <section className={styles.toolsSection}>
         <div className={styles.sectionHeader}>
            <div className={styles.badge}>Control Panel</div>
            <h2>Enterprise-Grade Tools.</h2>
         </div>
         <EnterpriseTools />
      </section>

      {/* 4. Secure Gateway CTA */}
      <section className={styles.gatewaySection}>
         <SecureGateway />
      </section>

      {/* 5. Help Footer */}
      <section className={styles.helpSection}>
         <p>Can&apos;t find what you&apos;re looking for?</p>
         <Link href="mailto:Info@dahabshilbank.com" className={styles.emailBtn}>
            Email Info@dahabshilbank.com
         </Link>
      </section>

    </main>
  );
}
