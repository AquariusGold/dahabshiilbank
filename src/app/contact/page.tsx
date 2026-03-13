"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Phone, Mail, Clock, MessageSquare, Twitter, Facebook, ExternalLink, MapPin, HelpCircle } from "lucide-react";
import Link from "next/link";
import styles from "./Contact.module.css";

export default function ContactPage() {
  // 1. Interactive Background Setup
  const containerRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for background parallax
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Map subtle background shift to cursor position
  const bgX = useTransform(smoothX, [0, 1920], ["-2%", "2%"]);
  const bgY = useTransform(smoothY, [0, 1080], ["-2%", "2%"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    // Only track if we have client coordinates
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  // 2. Form State
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  // Animation variants for floating cards
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 80, damping: 15 } }
  };

  return (
    <main 
      className={styles.main} 
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Map Background */}
      <motion.div 
        className={styles.mapBackground}
        style={{ x: bgX, y: bgY }}
      />
      <div className={styles.overlay} />

      <div className={styles.contentWrapper}>
        
        {/* Header Section */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className={styles.title}>LET'S CONNECT</h1>
          <p className={styles.subtitle}>Call, write or email. We’d love to hear from you.</p>
          
          <div className={styles.heroActions}>
            <Link href="/our-branches" className={styles.actionPillHero}>
              <MapPin size={20} /> Find a Branch
            </Link>
            <Link href="/faq" className={styles.actionPillHero}>
              <HelpCircle size={20} /> Help Center & FAQs
            </Link>
          </div>
        </motion.div>

        {/* Global Connection Hub (Layout Grid) */}
        <div className={styles.hubGrid}>
          
          {/* Left Column: Direct Contact Methods */}
          <motion.div 
            className={styles.methodsColumn}
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {/* Phone Card */}
            <motion.div className={styles.glassCard} variants={cardVariants}>
              <div className={styles.cardHeader}>
                <div className={styles.iconCircle}><Phone size={24} /></div>
                <h2 className={styles.cardTitle}>By Phone</h2>
              </div>
              <div className={styles.cardBody}>
                <a href="tel:+25265300002" className={styles.hugeNumber}>+252 65 300 002</a>
                <p className={styles.cardNotice}>If calling from outside Somaliland, please note the time difference (UTC +3).</p>
                
                <div className={styles.hoursRibbon}>
                  <Clock size={16} />
                  <span>Sat - Thu: 7:30 AM to 6:00 PM</span>
                </div>
              </div>
            </motion.div>

            {/* Email Card */}
            <motion.div className={styles.glassCard} variants={cardVariants}>
              <div className={styles.cardHeader}>
                <div className={styles.iconCircle}><Mail size={24} /></div>
                <h2 className={styles.cardTitle}>By Email</h2>
              </div>
              <div className={styles.cardBody}>
                <a href="mailto:Info@dahabshilbank.com" className={styles.hugeEmail}>
                  Info@dahabshilbank.com
                </a>
              </div>
            </motion.div>

            {/* Links & Socials Pack */}
            <motion.div className={styles.linksPack} variants={cardVariants}>
              <a href="#" className={styles.socialPill}>
                <Twitter size={20} /> <span className={styles.pillText}>Twitter</span>
              </a>
              <a href="#" className={styles.socialPill}>
                <Facebook size={20} /> <span className={styles.pillText}>Facebook</span>
              </a>
              <a href="#" className={styles.actionPill}>
                <MessageSquare size={18} /> <span className={styles.pillText}>Complaints Procedure</span>
              </a>
              <a href="#" className={styles.actionPill}>
                <ExternalLink size={18} /> <span className={styles.pillText}>General Enquiries</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive Inquiry Form */}
          <motion.div 
            className={styles.formColumn}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
          >
            <div className={styles.glassForm}>
              <h3 className={styles.formTitle}>Send an Inquiry</h3>
              
              <form className={styles.minimalForm} onSubmit={(e) => e.preventDefault()}>
                
                {/* Floating Label Input Group: Name */}
                <div className={`${styles.inputGroup} ${focusedInput === 'name' ? styles.focused : ''}`}>
                  <label htmlFor="name" className={styles.floatingLabel}>Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className={styles.minimalInput}
                    onFocus={() => setFocusedInput('name')}
                    onBlur={(e) => setFocusedInput(e.target.value ? 'name' : null)}
                  />
                  <div className={styles.inputLine} />
                </div>

                {/* Floating Label Input Group: Email */}
                <div className={`${styles.inputGroup} ${focusedInput === 'email' ? styles.focused : ''}`}>
                  <label htmlFor="email" className={styles.floatingLabel}>Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className={styles.minimalInput}
                    onFocus={() => setFocusedInput('email')}
                    onBlur={(e) => setFocusedInput(e.target.value ? 'email' : null)}
                  />
                  <div className={styles.inputLine} />
                </div>

                {/* Floating Label Input Group: Message */}
                <div className={`${styles.inputGroup} ${focusedInput === 'message' ? styles.focused : ''} ${styles.textareaGroup}`}>
                  <label htmlFor="message" className={styles.floatingLabel}>Your Message</label>
                  <textarea 
                    id="message" 
                    className={styles.minimalTextarea}
                    rows={4}
                    onFocus={() => setFocusedInput('message')}
                    onBlur={(e) => setFocusedInput(e.target.value ? 'message' : null)}
                  />
                  <div className={styles.inputLine} />
                </div>

                <button type="submit" className={styles.liquidSubmitBtn}>
                  <span className={styles.btnText}>Send Message</span>
                  <div className={styles.liquidFill} />
                </button>

              </form>
            </div>
          </motion.div>
          
        </div>
      </div>
    </main>
  );
}
