"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
  Briefcase, 
  Smartphone, 
  Landmark, 
  MessageSquare, 
  CheckCircle2, 
  ArrowRight,
  ChevronRight,
  TrendingUp,
  Globe,
  Wallet,
  Monitor,
  Zap,
  Users,
  CreditCard,
  FileText
} from "lucide-react";
import styles from "./SoleProprietor.module.css";
import Image from "next/image";
import Link from "next/link";

export default function SoleProprietorPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 1. Hero Text Reveal
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(heroScroll, [0, 0.5], [1, 0]);
  const heroScale = useTransform(heroScroll, [0, 0.5], [1, 0.95]);

  // 2. State for Toolkit Interactivity
  const [activeTool, setActiveTool] = useState<number | null>(null);

  const toolkit = [
    { 
      id: 0, 
      icon: <Monitor size={32} />, 
      title: "E-Commerce Ready", 
      desc: "Connect your store to the world with our integrated payment gateways and Mastercard support.",
      detail: "Ready to scale?"
    },
    { 
      id: 1, 
      icon: <CreditCard size={32} />, 
      title: "POS Integration", 
      desc: "High-performance POS machines for seamless card acquiring and instant settlements.",
      detail: "Transaction Success"
    },
    { 
      id: 2, 
      icon: <FileText size={32} />, 
      title: "Digital Checkbook", 
      desc: "Manage your payments with a 50-lead digital checkbook facility for professional control.",
      detail: "Secure Issuance"
    },
    { 
      id: 3, 
      icon: <Globe size={32} />, 
      title: "Global Remittance", 
      desc: "Convenient incoming & outgoing payments through Swift and domestic remittance channels.",
      detail: "Borderless Cashflow"
    }
  ];

  return (
    <main className={styles.main} ref={containerRef}>
      
      {/* 1. Entrepreneurial Ambition Hero */}
      <section className={styles.heroSection} ref={heroRef}>
        <motion.div 
          className={styles.heroBg}
          style={{ opacity: heroOpacity, scale: heroScale }}
        >
           <Image 
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=2000" // Professional workspace with entrepreneurial energy
            alt="Somali Entrepreneur Success"
            fill
            className={styles.bgImage}
            priority
          />
        </motion.div>
        <div className={styles.heroOverlay} />

        <div className={styles.heroLayout}>
          <motion.div 
            className={styles.heroContent}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className={styles.badge}>Dahabshil Business</div>
            <h1 className={styles.title}>Empowering<br/>Your Vision.</h1>
            <p className={styles.subtitle}>
              Run your business with absolute efficiency. The Sole Proprietor Business Account is your all-in-one engine for local success and global expansion.
            </p>
            <div className={styles.ctaGroup}>
              <Link href="/contact">
                <button className={styles.primaryBtn}>
                  Open Business Account <ArrowRight size={20} />
                </button>
              </Link>
              <Link href="#toolkit" className={styles.secondaryBtn}>
                Explore Toolkit
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. The Business Toolkit (High-Interaction Grid) */}
      <section id="toolkit" className={styles.toolkitSection}>
        <div className={styles.sectionHeader}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            The Growth Toolkit
          </motion.h2>
          <p>Every tool you need to manage capital, payments, and commerce in one professional suite.</p>
        </div>

        <div className={styles.toolkitGrid}>
          {toolkit.map((tool, i) => (
            <motion.div 
              key={tool.id}
              className={`${styles.toolCard} ${activeTool === i ? styles.toolCardActive : ""}`}
              onMouseEnter={() => setActiveTool(i)}
              onMouseLeave={() => setActiveTool(null)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={styles.toolIconOverflow}>{tool.icon}</div>
              <div className={styles.toolHeader}>
                <div className={styles.toolIcon}>{tool.icon}</div>
                <h3>{tool.title}</h3>
              </div>
              <p>{tool.desc}</p>
              
              <AnimatePresence>
                {activeTool === i && (
                  <motion.div 
                    className={styles.toolAction}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <div className={styles.successMarker}>
                       <Zap size={14} /> <span>{tool.detail}</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className={styles.cardGlow} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Support Ecosystem Section */}
      <section className={styles.supportSection}>
        <div className={styles.supportLayout}>
          <div className={styles.supportImg}>
            <Image 
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=1000" // Professional relationship manager
              alt="Dahabshil Relationship Manager"
              width={600}
              height={800}
              className={styles.managerPhoto}
            />
            <div className={styles.managerFloatingCard}>
              <div className={styles.managerInfo}>
                <div className={styles.statusDot} />
                <span>Active Advisor available</span>
              </div>
            </div>
          </div>

          <div className={styles.supportContent}>
            <div className={styles.badge}>Your Success Partner</div>
            <h2>Beyond Banking.<br/>Assigned Mentorship.</h2>
            <p>Every Sole Proprietor is assigned a dedicated Relationship Manager who understands your industry and your local challenges.</p>
            
            <div className={styles.supportGrid}>
              <div className={styles.supportItem}>
                <div className={styles.supIcon}><MessageSquare /></div>
                <div>
                  <h4>24/7 Live Chat</h4>
                  <p>Real-time support through our website and WhatsApp for business.</p>
                </div>
              </div>
              <div className={styles.supportItem}>
                <div className={styles.supIcon}><Users /></div>
                <div>
                  <h4>Business Workshops</h4>
                  <p>Free access to economic updates and entrepreneur forums.</p>
                </div>
              </div>
              <div className={styles.supportItem}>
                <div className={styles.supIcon}><TrendingUp /></div>
                <div>
                  <h4>Trade Financing</h4>
                  <p>Expert advice on LC, Bank Guarantees, and exports.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Professional Requirements Matrix */}
      <section className={styles.reqSection}>
        <div className={styles.reqHeader}>
          <h2>Ready to Launch?</h2>
          <p>The keys to your professional account are just a few steps away.</p>
        </div>

        <div className={styles.reqGrid}>
          {[
            { title: "Personal Proof", items: ["National ID or Passport", "Two Passport Photos"] },
            { title: "Business Proof", items: ["Memorandum of Association", "Valid Business License"] },
            { title: "Legal & Location", items: ["Physical Business Address", "Source of Income declaration"] }
          ].map((cluster, i) => (
            <motion.div 
              key={i}
              className={styles.reqBox}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <h3>{cluster.title}</h3>
              <ul className={styles.reqList}>
                {cluster.items.map((item, j) => (
                  <li key={j}>
                    <CheckCircle2 size={16} className={styles.checkIcon} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className={styles.footerCta}>
            <Link href="/contact" className={styles.ctaLink}>
              Book a Business Consultation <ChevronRight size={20} />
            </Link>
        </div>
      </section>

    </main>
  );
}
