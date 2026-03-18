"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, animate } from "framer-motion";
import { Car, Key, ShieldCheck, ArrowRight, Gauge, Calculator } from "lucide-react";
import styles from "./CarFinance.module.css";
import Image from "next/image";
import Link from "next/link";

export default function CarFinancePage() {
  // 1. Parallax Scroll Math for Hero Car Image
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const carY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const carScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  // 2. Interactive Murabaha Calculator State
  const [carValue, setCarValue] = useState(30000);
  const [profitMargin, setProfitMargin] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // Animated numbers for the calculator UI
  const animatedProfit = useRef(null);
  const animatedTotal = useRef(null);

  useEffect(() => {
    // Standard Murabaha calculation (e.g., flat 15% profit margin for illustration)
    const calculatedProfit = carValue * 0.15;
    const calculatedTotal = carValue + calculatedProfit;

    setProfitMargin(calculatedProfit);
    setTotalPrice(calculatedTotal);

    // Animate the DOM nodes dynamically for smooth counting effect
    if (animatedProfit.current) {
      animate(0, calculatedProfit, {
        duration: 0.5,
        onUpdate: (latest) => {
          if (animatedProfit.current) (animatedProfit.current as HTMLElement).textContent = `$${latest.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
        }
      });
    }

    if (animatedTotal.current) {
      animate(0, calculatedTotal, {
        duration: 0.5,
        onUpdate: (latest) => {
          if (animatedTotal.current) (animatedTotal.current as HTMLElement).textContent = `$${latest.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
        }
      });
    }
  }, [carValue]);

  return (
    <main className={styles.main}>
      
      {/* 1. Drive Your Ambition Hero */}
      <section className={styles.heroSection} ref={heroRef}>
        
        {/* Parallax Car Background Image */}
        <motion.div 
          className={styles.heroBgImage}
          style={{ y: carY, scale: carScale }}
        >
          {/* We use a high-end dark car image from unsplash as a placeholder */}
          <div className={styles.imageOverlay} />
          <Image 
            src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=2000"
            alt="Luxury SUV"
            fill
            className={styles.carImage}
            priority
          />
        </motion.div>

        <div className={styles.heroContent}>
          <motion.div 
            className={styles.heroText}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className={styles.badge}>Personal Car Finance</div>
            <h1 className={styles.title}>Let the car you drive<br/>speak for you.</h1>
            <p className={styles.subtitle}>
              From buying your dream car to building your credit, our tailor-made Sharia-compliant facilities give you the flexibility to finance your dreams.
            </p>
            <div className={styles.ctaGroup}>
              <button 
                className={styles.primaryBtn}
                onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Calculate Financing <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Interactive Murabaha Calculator Visualizer */}
      <section id="calculator" className={styles.calculatorSection}>
        <div className={styles.calcHeader}>
          <h2>Transparent Murabaha Financing</h2>
          <p>Unlike compounding interest loans, DBI buys the car you want and sells it back to you at the exact buying price plus a predetermined, fixed profit. Zero hidden costs.</p>
        </div>

        <div className={styles.calcDashboard}>
          
          <div className={styles.calcControls}>
            <div className={styles.sliderHeader}>
              <h3>Your Dream Car Value</h3>
              <span className={styles.sliderValue}>${carValue.toLocaleString()}</span>
            </div>
            
            <input 
              type="range" 
              className={styles.rangeSlider}
              min="10000" 
              max="150000" 
              step="5000"
              value={carValue}
              onChange={(e) => setCarValue(Number(e.target.value))}
            />
            
            <div className={styles.sliderLabels}>
              <span>$10k</span>
              <span>$150k+</span>
            </div>

            <div className={styles.abstractScale}>
              <div className={styles.scaleIconBox}><Calculator size={24} /></div>
              <p>Move the slider to see how transparent our fixed-profit margin is applied to your purchase.</p>
            </div>
          </div>

          <div className={styles.calcResults}>
            
            <div className={styles.resultRow}>
              <div>
                <h4>Bank Purchase Price</h4>
                <p>The exact cost we pay the dealer.</p>
              </div>
              <div className={styles.priceTag}>${carValue.toLocaleString()}</div>
            </div>

            <div className={styles.mathDivider}>
              <div className={styles.plusSign}>+</div>
              <div className={styles.line} />
            </div>

            <div className={styles.resultRow}>
              <div>
                <h4>Predetermined Profit</h4>
                <p>Our flat, transparent margin (Murabaha).</p>
              </div>
              <div className={styles.priceTag} ref={animatedProfit}>$0</div>
            </div>

            <div className={styles.totalRow}>
              <div>
                <h3>Your Fixed Buying Price</h3>
                <p>Divided into comfortable monthly installments.</p>
              </div>
              <div className={styles.totalTag} ref={animatedTotal}>$0</div>
            </div>

            <Link href="/contact" className={styles.applyBtn}>Start Auto Application</Link>

          </div>

        </div>
      </section>

      {/* 3. The 3-Step Journey (Staggered Cards) */}
      <section className={styles.journeySection}>
        <div className={styles.journeyHeader}>
          <h2>Keys in Hand.<br/>Three Simple Steps.</h2>
        </div>

        <div className={styles.journeyGrid}>
          
          <motion.div 
            className={styles.journeyCard}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <div className={styles.stepNumber}>01</div>
            <div className={styles.cardIcon}><Car size={40} /></div>
            <h3>You Choose</h3>
            <p>Pick your dream vehicle from any recognized, bank-approved automotive dealership in your region.</p>
          </motion.div>

          <motion.div 
            className={styles.journeyCard}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
          >
            <div className={styles.stepNumber}>02</div>
            <div className={styles.cardIcon}><ShieldCheck size={40} /></div>
            <h3>We Buy</h3>
            <p>Dahabshiil Bank purchases the vehicle outright from the dealer in cash using your approved application details.</p>
          </motion.div>

          <motion.div 
            className={styles.journeyCard}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.4 }}
          >
            <div className={styles.stepNumber}>03</div>
            <div className={styles.cardIcon}><Key size={40} /></div>
            <h3>You Drive</h3>
            <p>We sell the car directly back to you at the fixed cost, structured into easy, zero-compounding monthly installments.</p>
          </motion.div>

        </div>
      </section>

    </main>
  );
}
