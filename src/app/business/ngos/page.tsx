"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useSpring, useMotionValue } from "framer-motion";
import { 
  Heart, 
  Globe, 
  ShieldCheck, 
  Activity, 
  FileCheck, 
  ArrowRight,
  ChevronRight,
  TrendingUp,
  History,
  Lock,
  MessageSquare,
  DollarSign,
  Coins
} from "lucide-react";
import styles from "./NGOAccount.module.css";
import Image from "next/image";
import Link from "next/link";

// 1. Aid Flow Particle Component
function AidFlowVisualizer() {
  const [currency, setCurrency] = useState<"USD" | "LC">("USD");
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<{ top: string; duration: number; delay: number }[]>([]);

  useEffect(() => {
    // Generate particles on client side only to prevent hydration error
    const newParticles = [...Array(20)].map(() => ({
      top: `${Math.random() * 100}%`,
      duration: 2 + Math.random() * 3,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className={styles.flowContainer} ref={containerRef}>
      <div className={styles.flowControls}>
        <button 
          className={currency === "USD" ? styles.activeCurrency : ""} 
          onClick={() => setCurrency("USD")}
        >
          <DollarSign size={16} /> Global Donor (USD)
        </button>
        <div className={styles.flowArrow}><ArrowRight size={20} /></div>
        <button 
          className={currency === "LC" ? styles.activeCurrency : ""} 
          onClick={() => setCurrency("LC")}
        >
          <Coins size={16} /> Local Impact (LC)
        </button>
      </div>

      <div className={styles.particleStream}>
        {/* Generative particles based on currency */}
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className={styles.particle}
            initial={{ left: "-5%", top: p.top, opacity: 0 }}
            animate={{ 
              left: "105%",
              opacity: [0, 1, 1, 0],
              backgroundColor: currency === "USD" ? "#00AEEF" : "#D4AF37"
            }}
            transition={{ 
              duration: p.duration, 
              repeat: Infinity, 
              delay: p.delay,
              ease: "linear"
            }}
          />
        ))}
        <div className={styles.nodeDonor}>DONOR</div>
        <div className={styles.nodeImpact}>IMPACT</div>
      </div>
      
      <p className={styles.flowDesc}>
        {currency === "USD" 
          ? "Securing international aid through the largest global networks with 100% transparency."
          : "Instant conversion into local currency to fuel rapid-response humanitarian efforts."}
      </p>
    </div>
  );
}

// 2. Audit Trail Visualizer (Scroll-linked)
function AuditTrail() {
  const constraintsRef = useRef(null);
  
  const steps = [
    { title: "Initiation", desc: "Donor authorizes funds via secure portal." },
    { title: "Verification", desc: "Dahabshil checks compliance & sanctions." },
    { title: "Routing", desc: "Optimized global pathing for speed." },
    { title: "Settlement", desc: "Real-time delivery to site coordinators." },
    { title: "Reporting", desc: "Automated statement generated for donors." }
  ];

  return (
    <div className={styles.auditContainer}>
      <div className={styles.timeline}>
        {steps.map((step, i) => (
          <motion.div 
            key={i} 
            className={styles.auditStep}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className={styles.stepMarker}>
              <div className={styles.markerInner} />
            </div>
            <div className={styles.stepContent}>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          </motion.div>
        ))}
        <div className={styles.lineGlow} />
      </div>
    </div>
  );
}

export default function NGOAccountPage() {
  const heroRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  // Parallax shifts
  const x1 = useTransform(mouseX, [0, 1920], [-20, 20]);
  const y1 = useTransform(mouseY, [0, 1080], [-20, 20]);
  const x2 = useTransform(mouseX, [0, 1920], [-40, 40]);
  const y2 = useTransform(mouseY, [0, 1080], [-40, 40]);

  return (
    <main className={styles.main}>
      
      {/* 1. Aid Horizon Hero (Parallax) */}
      <section className={styles.heroSection} onMouseMove={handleMouseMove}>
        <motion.div className={styles.heroParallaxBg} style={{ x: x1, y: y1 }}>
           <Image 
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=2000" // Humanitarian spirit/Impact
            alt="NGO Impact"
            fill
            className={styles.heroImage}
            priority
          />
        </motion.div>
        <div className={styles.heroOverlay} />

        <div className={styles.heroContentLayout}>
          <motion.div 
            className={styles.heroText}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            style={{ x: x2, y: y2 }}
          >
            <div className={styles.badge}>Dahabshil Humanitarian</div>
            <h1 className={styles.title}>Financing Change.<br/>Protecting Impact.</h1>
            <p className={styles.subtitle}>
              A banking ecosystem built for the unique challenges of global and local NGOs. Transparent, secure, and ready for rapid response.
            </p>
            <div className={styles.ctaGroup}>
              <Link href="/contact">
                <button className={styles.primaryBtn}>
                  Open NGO Account <ArrowRight size={20} />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Interactive Aid Flow */}
      <section className={styles.flowSection}>
        <div className={styles.sectionHeader}>
          <h2>Aid in Motion.</h2>
          <p>Visualize the transition from global donors to local project impact.</p>
        </div>
        <AidFlowVisualizer />
      </section>

      {/* 3. Transparency & Audit Trailing */}
      <section className={styles.transparencySection}>
        <div className={styles.transparencyLayout}>
           <div className={styles.transText}>
              <div className={styles.badge}>Trust Architecture</div>
              <h2>100% Traceability.</h2>
              <p>Your donors require absolute clarity. Our automated reporting systems ensure every cent is accounted for in real-time.</p>
              
              <div className={styles.featureGrid}>
                <div className={styles.fItem}>
                   <ShieldCheck color="var(--color-cyan)" />
                   <span>Sanctions Screening</span>
                </div>
                <div className={styles.fItem}>
                   <Activity color="var(--color-cyan)" />
                   <span>Real-time Monitoring</span>
                </div>
                <div className={styles.fItem}>
                   <History color="var(--color-cyan)" />
                   <span>Archive Preservation</span>
                </div>
              </div>
           </div>

           <AuditTrail />
        </div>
      </section>

      {/* 4. Requirement Blueprint */}
      <section className={styles.reqSection}>
        <div className={styles.reqHeader}>
          <h2>Humanitarian Onboarding</h2>
          <p>Launch your mission with the correct compliance foundation.</p>
        </div>

        <div className={styles.blueprintGrid}>
           {[
             { title: "Legal Status", items: ["NGO Registration Certificate", "Constitution / Bylaws"] },
             { title: "Authority", items: ["Board Resolution", "Operation Mandate"] },
             { title: "Governance", items: ["List of Directors", "Signatory Identification"] },
             { title: "Purpose", items: ["Physical Office Proof", "Source of Funding declaration"] }
           ].map((item, i) => (
             <motion.div 
               key={i} 
               className={styles.blueprintCard}
               whileHover={{ y: -10, borderColor: "var(--color-cyan)" }}
             >
               <div className={styles.markerCheck}><FileCheck size={16} /></div>
               <h3>{item.title}</h3>
               <ul>
                 {item.items.map((doc, j) => (
                   <li key={j}>{doc}</li>
                 ))}
               </ul>
             </motion.div>
           ))}
        </div>

        <div className={styles.footerInfo}>
           <p>Can&apos;t find specific documentation? Our NGO specialists are here to help.</p>
           <Link href="mailto:Info@dahabshilbank.com" className={styles.emailBtn}>
              Info@dahabshilbank.com
           </Link>
        </div>
      </section>

    </main>
  );
}
