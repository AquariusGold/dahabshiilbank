"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
import styles from "./Careers.module.css";

export default function CareersPage() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // 1. Hero Split Text Setup
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const smoothHero = useSpring(heroProgress, { stiffness: 100, damping: 30 });
  const yourY = useTransform(smoothHero, [0, 1], ["0%", "-100%"]);
  const yourX = useTransform(smoothHero, [0, 1], ["0%", "-20%"]);
  const futureY = useTransform(smoothHero, [0, 1], ["0%", "100%"]);
  const futureX = useTransform(smoothHero, [0, 1], ["0%", "20%"]);
  const heroTextOpacity = useTransform(smoothHero, [0, 0.5], [0, 1]);
  const heroTextY = useTransform(smoothHero, [0, 0.5], [50, 0]);

  // 2. Parallax Guiding Force Setup
  const parallaxRef = useRef<HTMLElement>(null);
  const { scrollYProgress: parallaxProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"]
  });

  const smoothParallax = useSpring(parallaxProgress, { stiffness: 80, damping: 25 });
  const card1Y = useTransform(smoothParallax, [0, 1], ["50%", "-50%"]);
  const card2Y = useTransform(smoothParallax, [0, 1], ["100%", "-80%"]);
  const card3Y = useTransform(smoothParallax, [0, 1], ["150%", "-110%"]);

  // 3. Magnetic Hover Setup for CTA
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    // Magnetic pull math
    cursorX.set(distanceX * 0.3);
    cursorY.set(distanceY * 0.3);
  };

  const handlePointerLeave = () => {
    setIsHovered(false);
    cursorX.set(0);
    cursorY.set(0);
  };

  return (
    <main className={styles.main}>
      
      {/* 1. Open Doors Hero */}
      <section ref={heroRef} className={styles.heroSection}>
        <div className={styles.heroBg}>
          <Image 
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=2000"
            alt="Professionals"
            fill
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
        </div>

        <div className={styles.heroSticky}>
          <div className={styles.splitTextContainer}>
            <motion.h1 
              className={styles.splitWord} 
              style={{ y: yourY, x: yourX }}
            >
              YOUR
            </motion.h1>
            <motion.h1 
              className={styles.splitWord} 
              style={{ y: futureY, x: futureX }}
            >
              FUTURE
            </motion.h1>
          </div>
          
          <motion.div 
            className={styles.heroContent}
            style={{ opacity: heroTextOpacity, y: heroTextY }}
          >
            <p className={styles.heroLead}>
              Dahabshil Bank provides highly rewarding and dynamic career opportunities in the banking sector. We advocate in the development of human resources to cater to the growth of our employees.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. The Guiding Force Parallax */}
      <section ref={parallaxRef} className={styles.parallaxSection}>
        <div className={styles.parallaxTitle}>The Guiding Force to Success</div>
        
        <div className={styles.cardsContainer}>
          <motion.div className={styles.parallaxCard} style={{ y: card1Y, zIndex: 1 }}>
            <div className={styles.cardNumber}>01</div>
            <h2 className={styles.cardTitle}>Human Development</h2>
            <p className={styles.cardText}>
              We identify our employees as the leading indicator of the bank's success to the top. Your growth is our priority.
            </p>
          </motion.div>

          <motion.div className={styles.parallaxCard} style={{ y: card2Y, zIndex: 2 }}>
            <div className={styles.cardNumber}>02</div>
            <h2 className={styles.cardTitle}>Top Capabilities</h2>
            <p className={styles.cardText}>
              Dahabshil Bank is searching for qualified professionals with a bright attitude and driven ambition to serve as the guiding force toward success.
            </p>
          </motion.div>

          <motion.div className={styles.parallaxCard} style={{ y: card3Y, zIndex: 3 }}>
            <div className={styles.cardNumber}>03</div>
            <h2 className={styles.cardTitle}>Career Growth</h2>
            <p className={styles.cardText}>
              We offer opportunities to aspiring nations commencing their challenging careers as we present an excellent package of training, mentoring, and continuous growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. Magnetic Application Portal */}
      <section 
        className={styles.ctaSection}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        onPointerDown={handlePointerLeave} // reset on click
      >
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaHeading}>Ready to begin?</h2>
          
          <motion.a 
            ref={buttonRef}
            href="mailto:hr@dahabshilbank.com"
            className={`${styles.magneticButton} ${isHovered ? styles.hovered : ""}`}
            style={{ x: cursorX, y: cursorY }}
            onPointerEnter={() => setIsHovered(true)}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
          >
            <span className={styles.buttonLabel}>
              {isHovered ? "Email hr@dahabshilbank.com" : "Join the Family"}
            </span>
            <span className={styles.iconCircle}>
              {isHovered ? <Mail size={24} /> : <ArrowRight size={24} />}
            </span>
          </motion.a>
          
        </div>
      </section>

    </main>
  );
}
