"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { 
  Banknote, 
  CreditCard, 
  Smartphone, 
  ClipboardCheck, 
  ArrowRight, 
  CheckCircle2, 
  FileText,
  User,
  MapPin,
  TrendingUp,
  ChevronRight,
  Image as ImageIcon
} from "lucide-react";
import styles from "./DahaboCurrent.module.css";
import NextImage from "next/image";
import Link from "next/link";

export default function DahaboCurrentAccountPage() {
  // 1. Hero Scroll
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgOpacity = useTransform(heroScroll, [0, 1], [0.8, 0.2]);

  // 2. Interactive Card Tilt (for Dual Currency Visualizer)
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <main className={styles.main}>
      
      {/* 1. Daily Gold Hero */}
      <section className={styles.heroSection} ref={heroRef}>
        <motion.div 
          className={styles.heroBg}
          style={{ opacity: bgOpacity }}
        >
           <NextImage 
            src="https://images.unsplash.com/photo-1599584083412-3101a61147b6?auto=format&fit=crop&q=80&w=2000"
            alt="Dahabo Professional"
            fill
            className={styles.bgImage}
            priority
          />
        </motion.div>
        <div className={styles.heroOverlay} />

        <div className={styles.heroLayout}>
          <motion.div 
            className={styles.heroContent}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.badge}>Dahabo Exclusivity</div>
            <h1 className={styles.title}>Dahabo<br/>Current Account.</h1>
            <p className={styles.subtitle}>
              The premium standard for daily financial management. A tailored gateway to currency flexibility, secure digital transactions, and exclusive Dahabo benefits designed for the modern woman.
            </p>
            <div className={styles.ctaGroup}>
              <Link href="/contact" className={styles.primaryBtn}>
                Apply for Account <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Feature & Multi-Currency Section */}
      <section className={styles.featuresSection}>
        <div className={styles.featuresLayout}>
          
          <div className={styles.featuresInfo}>
            <motion.div 
              className={styles.featureTitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2>Functional Elegance</h2>
              <p>Experience seamless multi-currency banking with a suite of premium features designed to keep your business and personal life moving.</p>
            </motion.div>

            <div className={styles.featureList}>
              {[
                { icon: <CreditCard />, title: "Premium Debit Card", text: "Global access to your funds with an exclusive Dahabo-styled debit card." },
                { icon: <Banknote />, title: "Currency Flexibility", text: "Operate your account in both Somaliland Shillings (SLSH) and USD." },
                { icon: <Smartphone />, title: "E-Banking & SMS", text: "24/7 digital access with real-time SMS alerts for every transaction." },
                { icon: <ClipboardCheck />, title: "Free Statements", text: "Complimentary monthly statements to track your financial growth." }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  className={styles.featureItem}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className={styles.featureIcon}>{item.icon}</div>
                  <div className={styles.featureText}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div 
            className={styles.visualizerContainer}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div 
              className={styles.cardStack}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            >
              {/* USD CARD */}
              <div className={styles.glassCardPrimary}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardLogo}>DAHABO</div>
                  <div className={styles.cardCurrency}>USD</div>
                </div>
                <div className={styles.cardChip} />
                <div className={styles.cardInfo}>
                  <div className={styles.cardNumber}>**** **** **** 8820</div>
                  <div className={styles.cardName}>FAWZIA ALLIN</div>
                </div>
              </div>

              {/* SLSH CARD (Offset) */}
              <div className={styles.glassCardSecondary}>
                 <div className={styles.cardHeader}>
                  <div className={styles.cardLogo}>DAHABO</div>
                  <div className={styles.cardCurrency}>SLSH</div>
                </div>
                 <div className={styles.cardInfo}>
                  <p>Multi-Currency Utility</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 3. Interactive Requirements "Vault" */}
      <section className={styles.vaultSection}>
        <div className={styles.vaultHeader}>
          <h2>Requirement Vault</h2>
          <p>The necessary keys to unlock your Dahabo experience.</p>
        </div>

        <div className={styles.vaultGrid}>
          {[
            { id: "ID", icon: <User />, title: "Identification", text: "Valid Passport or National ID card." },
            { id: "Inc", icon: <TrendingUp />, title: "Income", text: "Proof of income justification (Salary/Business)." },
            { id: "Photo", icon: <ImageIcon />, title: "Registry", text: "Two recent passport-sized photographs." },
            { id: "Loc", icon: <MapPin />, title: "Residency", text: "Official address justification or utility bill." }
          ].map((req, i) => (
            <motion.div 
              key={i}
              className={styles.vaultBox}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className={styles.vaultIcon}>{req.icon}</div>
              <h3>{req.title}</h3>
              <div className={styles.vaultLine} />
              <p>{req.text}</p>
              <div className={styles.vaultGlow} />
            </motion.div>
          ))}
        </div>

        <div className={styles.bottomCta}>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={styles.kycBanner}
          >
            <CheckCircle2 className={styles.kycIcon} size={20} />
            <span>KYC requirements must be completed before account activation.</span>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
