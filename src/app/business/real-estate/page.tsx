"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from "framer-motion";
import { 
  Building, 
  LayoutGrid, 
  TrendingUp, 
  Compass, 
  Landmark, 
  Briefcase,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Lock,
  ExternalLink,
  MapPin,
  Building2
} from "lucide-react";
import styles from "./BusinessRealEstateFinance.module.css";
import Image from "next/image";
import Link from "next/link";

// 1. Prime Portfolio Visualizer Component
function PortfolioVisualizer() {
  const [activeSector, setActiveSector] = useState(0);
  
  const sectors = [
    { 
      title: "Commercial Retail", 
      icon: <Building2 size={32} />, 
      img: "https://images.unsplash.com/photo-1555633514-abcee6a33881?auto=format&fit=crop&q=80&w=800",
      metrics: ["Murabaha Tenure: Up to 10 Years", "LTV: Dynamic to Valuation", "Flexible Drawdowns"]
    },
    { 
      title: "Corporate Offices", 
      icon: <LayoutGrid size={32} />, 
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
      metrics: ["Ijara MT: Long-term lease", "Fixed Repayment Schedules", "Equity Release Options"]
    },
    { 
      title: "Residential Development", 
      icon: <Compass size={32} />, 
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      metrics: ["Project Working Capital", "Phase-based Financing", "Pre-sale Management Support"]
    }
  ];

  return (
    <div className={styles.portfolioContainer}>
      <div className={styles.portfolioNav}>
        {sectors.map((sector, i) => (
          <button 
            key={i} 
            className={activeSector === i ? styles.activeNav : ""}
            onClick={() => setActiveSector(i)}
          >
            {sector.icon}
            <span>{sector.title}</span>
          </button>
        ))}
      </div>

      <div className={styles.portfolioDisplay}>
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeSector}
            className={styles.displayCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className={styles.displayImage}>
              <Image src={sectors[activeSector].img} alt={sectors[activeSector].title} fill />
              <div className={styles.imageOverlay} />
            </div>
            <div className={styles.displayText}>
              <h3>{sectors[activeSector].title}</h3>
              <div className={styles.metricsGrid}>
                {sectors[activeSector].metrics.map((m, idx) => (
                  <div key={idx} className={styles.metricItem}>
                    <CheckCircle2 size={16} color="var(--color-gold)" />
                    <span>{m}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className={styles.secondaryBtn}>
                Learn More <ChevronRight size={16} />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

// 2. Project Yield Simulator
function YieldSimulator() {
  const [valuation, setValuation] = useState(1000000);
  const yieldPercent = 0.08; // 8% yield example
  
  return (
    <div className={styles.calcBox}>
       <div className={styles.calcHeader}>
          <TrendingUp className={styles.spinIcon} />
          <h3>Project Yield Simulator</h3>
       </div>
       
       <div className={styles.calcInputs}>
          <div className={styles.inputGroup}>
             <label>Project Managed Valuation ($)</label>
             <input 
              type="range" 
              min="500000" 
              max="10000000" 
              step="100000" 
              value={valuation}
              onChange={(e) => setValuation(parseInt(e.target.value))}
             />
             <span className={styles.valDisplay}>${valuation.toLocaleString()}</span>
          </div>
       </div>

       <div className={styles.calcResults}>
          <div className={styles.resItem}>
             <p>Estimated Annual Yield Potential</p>
             <h4>${(valuation * yieldPercent).toLocaleString()}</h4>
          </div>
          <motion.div 
            className={styles.yieldVelocity}
            animate={{ width: `${Math.min(100, (valuation / 10000000) * 100)}%` }}
          >
             ROI Velocity: High Growth
          </motion.div>
       </div>
    </div>
  );
}

export default function BusinessRealEstateFinancePage() {
  const { scrollYProgress } = useScroll();
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const skylineY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <main className={styles.main}>
      
      {/* 1. Visionary Skyline Hero */}
      <section className={styles.heroSection}>
        <motion.div className={styles.heroLayout} style={{ opacity: titleOpacity }}>
           <div className={styles.badge}>Dahabshil Developments</div>
           <h1 className={styles.title}>Build Beyond<br/>Boundaries.</h1>
           <p className={styles.subtitle}>
              Scale your real estate portfolio with Dahabshil&apos;s sophisticated Sharia-compliant financing. From retail hubs to residential developments, we architect your prosperity.
           </p>
           <div className={styles.ctaGroup}>
              <Link href="/contact" className={styles.primaryBtn}>
                Architect Your Future <Building size={20} />
              </Link>
           </div>
        </motion.div>

        <motion.div className={styles.skylineMedia} style={{ y: skylineY }}>
           <Image 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" // Modern glass skyscrapers
            alt="Business Real Estate"
            fill
            className={styles.heroImg}
            priority
          />
           <div className={styles.heroOverlay} />
        </motion.div>
      </section>

      {/* 2. Prime Portfolio Visualizer */}
      <section className={styles.visualizerSection}>
         <div className={styles.sectionHeader}>
            <h2>Prime Portfolio.</h2>
            <p>Select your sector to view Dahabshil&apos;s custom commercial financing framework.</p>
         </div>
         <PortfolioVisualizer />
      </section>

      {/* 3. ROI & Yield Simulator Section */}
      <section className={styles.calcSection}>
         <div className={styles.calcLayout}>
            <div className={styles.calcText}>
               <div className={styles.badge}>Capital Efficiency</div>
               <h2>The Velocity of Growth.</h2>
               <p>We provide the liquidity to accelerate your development cycles. Our yield-focused financing ensures your capital works as hard as your vision.</p>
               
               <div className={styles.featureGrid}>
                  <div className={styles.fItem}>
                     <Landmark color="var(--color-gold)" />
                     <span>Murabaha Land Acquisition</span>
                  </div>
                  <div className={styles.fItem}>
                     <Landmark color="var(--color-gold)" />
                     <span>Diminishing Musharakah Equity</span>
                  </div>
               </div>
            </div>
            <YieldSimulator />
         </div>
      </section>

      {/* 4. Development Pulse Timeline */}
      <section className={styles.pulseSection}>
         <div className={styles.pulseLayout}>
            <div className={styles.sectionHeader}>
               <h2>Development Pulse</h2>
               <p>A Sharia-compliant journey from acquisition to portfolio scaling.</p>
            </div>
            
            <div className={styles.timeline}>
               {[
                 { stage: "Acquisition", icon: <MapPin />, desc: "Secure prime land with rapid Murabaha financing." },
                 { stage: "Construction", icon: <Building />, desc: "Phased capital drawdowns for materials and labor." },
                 { stage: "Transition", icon: <ExternalLink />, desc: "Seamless movement to long-term Ijara leasing models." },
                 { stage: "Portfolio", icon: <LayoutGrid />, desc: "Growth-locked reinvestment strategies for your next project." }
               ].map((item, i) => (
                 <motion.div 
                  key={i} 
                  className={styles.timelineItem}
                  whileHover={{ x: 10 }}
                 >
                    <div className={styles.timeIcon}>{item.icon}</div>
                    <div className={styles.timeContent}>
                       <h4>{item.stage}</h4>
                       <p>{item.desc}</p>
                    </div>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. Contact CTA */}
      <section className={styles.finalCta}>
         <div className={styles.ctaBox}>
            <h2>Ready to redefine the skyline?</h2>
            <p>Connect with our Real Estate Investment specialists.</p>
            <Link href="mailto:Invest@dahabshilbank.com" className={styles.emailLink}>
               Invest@dahabshilbank.com
            </Link>
         </div>
      </section>

    </main>
  );
}
