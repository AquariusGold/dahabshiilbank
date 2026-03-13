"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { 
  Globe, 
  Lock, 
  ShoppingCart, 
  Activity, 
  Plane, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  CreditCard,
  Wifi
} from "lucide-react";
import styles from "./MastercardDetail.module.css";
import Image from "next/image";
import Link from "next/link";

export default function MastercardDetailPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 1. Scroll-Linked 3D Rotation
  // As the user scrolls from 0 to 0.4, rotate the card 180 degrees
  const rotateY = useTransform(scrollYProgress, [0, 0.4], [0, 180]);
  const cardScale = useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 1.2, 1]);
  const cardTranslateY = useTransform(scrollYProgress, [0, 0.4], [0, 50]);

  // 2. Chip Pulse Ring Animation (repeating)
  const pulseVariants = {
    animate: {
      scale: [1, 3],
      opacity: [0.6, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeOut"
      }
    }
  };

  return (
    <main className={styles.main} ref={containerRef}>
      
      {/* 1. The Global Pulse Hero */}
      <section className={styles.heroSection}>
        <div className={styles.heroLayout}>
          <motion.div 
            className={styles.heroText}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className={styles.badge}>Innovation in Motion</div>
            <h1 className={styles.title}>The Key to<br/>the World.</h1>
            <p className={styles.subtitle}>
              In collaboration with Mastercard, we bring the largest global ATM network to your pocket. Safer, faster, and infinitely more flexible.
            </p>
            <div className={styles.ctaGroup}>
              <Link href="/contact">
                <button className={styles.primaryBtn}>
                  Get Your Card Now <ArrowRight size={20} />
                </button>
              </Link>
            </div>
          </motion.div>

          {/* 3D Rotating Card Visual */}
          <div className={styles.cardContainer}>
            <motion.div 
              className={styles.card3D}
              style={{ 
                rotateY, 
                scale: cardScale,
                y: cardTranslateY,
                transformStyle: "preserve-3d" 
              }}
            >
              {/* Card FRONT */}
              <div className={`${styles.cardFace} ${styles.cardFront}`}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardBrand}>DBI</div>
                  <div className={styles.contactless}><Wifi size={24} /></div>
                </div>
                
                {/* Pulsing Chip */}
                <div className={styles.chipContainer}>
                  <div className={styles.cardChip} />
                  <motion.div className={styles.pulseRing} variants={pulseVariants} animate="animate" />
                  <motion.div className={styles.pulseRing} variants={pulseVariants} animate="animate" transition={{ delay: 1 }} />
                </div>

                <div className={styles.cardNumbers}>
                  <span>****</span>
                  <span>****</span>
                  <span>****</span>
                  <span>8820</span>
                </div>

                <div className={styles.cardFooter}>
                  <div className={styles.holderName}>PREMIUM MEMBER</div>
                  <div className={styles.mastercardLogo}>
                    <div className={styles.circleRed} />
                    <div className={styles.circleYellow} />
                  </div>
                </div>
              </div>

              {/* Card BACK */}
              <div className={`${styles.cardFace} ${styles.cardBack}`}>
                <div className={styles.magStripe} />
                <div className={styles.cvvContainer}>
                  <div className={styles.signaturePad} />
                  <div className={styles.cvvCode}>820</div>
                </div>
                <div className={styles.backInfo}>
                  <p>Authorized Signature • Not Transferable</p>
                  <p>DBI International Support: +252 65 300 002</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. The Benefit Orbs (Interactive Feature Grid) */}
      <section className={styles.benefitsSection}>
        <div className={styles.benefitsHeader}>
          <h2>Engineered for Excellence</h2>
          <p>Hover over the spheres to explore the core pillars of the DBI Mastercard experience.</p>
        </div>

        <div className={styles.orbGrid}>
          {/* Orb 1: Acceptance */}
          <motion.div 
            className={styles.orbWrapper} 
            whileHover="hover"
          >
            <div className={styles.orb}>
              <Globe className={styles.orbIcon} size={40} />
              <div className={styles.orbGlow} />
            </div>
            <motion.div 
              className={styles.orbContent}
              variants={{ hover: { opacity: 1, y: 0 }, initial: { opacity: 0, y: 10 } }}
              initial="initial"
            >
              <h3>Pure Acceptance</h3>
              <p>Accepted at over 35 million merchant locations world-wide, from London to Mogadishu.</p>
            </motion.div>
          </motion.div>

          {/* Orb 2: Access */}
          <motion.div 
            className={styles.orbWrapper}
            whileHover="hover"
          >
            <div className={styles.orb}>
              <Activity className={styles.orbIcon} size={40} />
              <div className={styles.orbGlow} style={{ background: 'radial-gradient(circle, rgba(0, 174, 239, 0.4) 0%, transparent 70%)' }} />
            </div>
            <motion.div 
              className={styles.orbContent}
              variants={{ hover: { opacity: 1, y: 0 }, initial: { opacity: 0, y: 10 } }}
              initial="initial"
            >
              <h3>Global Access</h3>
              <p>Cash access at over 2.1 million ATMs globally. Your money is never out of reach.</p>
            </motion.div>
          </motion.div>

          {/* Orb 3: Security */}
          <motion.div 
            className={styles.orbWrapper}
            whileHover="hover"
          >
            <div className={styles.orb}>
              <ShieldCheck className={styles.orbIcon} size={40} />
              <div className={styles.orbGlow} style={{ background: 'radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, transparent 70%)' }} />
            </div>
            <motion.div 
              className={styles.orbContent}
              variants={{ hover: { opacity: 1, y: 0 }, initial: { opacity: 0, y: 10 } }}
              initial="initial"
            >
              <h3>Deep Security</h3>
              <p>Enhanced EMV chip technology and real-time SMS monitoring for every transaction.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. Matrix of Possibility (Bento-Grid Features) */}
      <section className={styles.matrixSection}>
        <div className={styles.matrixLayout}>
          <div className={styles.matrixMain}>
             <h2>Countless Features.<br/>One Interface.</h2>
             <p>The DBI Mastercard is more than plastic. It&apos;s a digital-first financial instrument equipped for the modern age.</p>
          </div>
          
          <div className={styles.featureBento}>
            <div className={styles.bentoLarge}>
              <ShoppingCart className={styles.bentoIcon} />
              <h4>E-Commerce Ready</h4>
              <p>Seamlessly shop at Amazon, AliExpress, and local vendors with high-success transaction processing.</p>
            </div>
            <div className={styles.bentoSmall}>
              <Plane className={styles.bentoIcon} />
              <h4>Travel Comfort</h4>
              <p>Automated currency conversion at mid-market rates.</p>
            </div>
            <div className={styles.bentoSmall}>
              <Lock className={styles.bentoIcon} />
              <h4>Total Control</h4>
              <p>Freeze or unfreeze your card instantly via the DBI Banking App.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Requirements Section */}
      <section className={styles.reqSection}>
        <div className={styles.reqBox}>
           <div className={styles.reqTitle}>
              <CheckCircle2 size={32} color="var(--color-cyan)" />
              <h2>Join the Network</h2>
           </div>
           <p>Opening your world is simple. All you need is an active Dahabshil Account and the ambition to go further.</p>
           <Link href="/contact" className={styles.secondaryBtn}>
              Contact Representative <ChevronRight size={20} />
           </Link>
        </div>
      </section>

    </main>
  );
}

// Additional missing imports
import { ChevronRight } from "lucide-react";
