"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useSpring, useMotionValue } from "framer-motion";
import { 
  Factory, 
  Settings, 
  Zap, 
  Cpu, 
  ClipboardCheck, 
  Ruler,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Lock,
  Search,
  HardHat,
  Activity
} from "lucide-react";
import styles from "./IndustrialFinance.module.css";
import Image from "next/image";
import Link from "next/link";

// 1. Production Engine Visualizer Component
function ProductionEngine() {
  const [activeStage, setActiveStage] = useState(0);
  
  const stages = [
    { 
      title: "Core Machinery", 
      icon: <Cpu size={32} />, 
      impact: "+150% Throughput",
      desc: "Financing for CNC machines, lathes, and high-precision milling equipment." 
    },
    { 
      title: "Assembly Lines", 
      icon: <Activity size={32} />, 
      impact: "-40% Manual Labor",
      desc: "Integrated conveyor systems and automated packaging solutions." 
    },
    { 
      title: "Power & Infrastructure", 
      icon: <Zap size={32} />, 
      impact: "99.9% Uptime",
      desc: "Industrial generators, transformers, and large-scale solar arrays." 
    }
  ];

  return (
    <div className={styles.engineArena}>
      <div className={styles.engineControls}>
        {stages.map((stage, i) => (
          <motion.div 
            key={i}
            className={`${styles.controlNode} ${activeStage === i ? styles.activeNode : ""}`}
            onClick={() => setActiveStage(i)}
            whileHover={{ scale: 1.05 }}
          >
            <div className={styles.nodeIcon}>{stage.icon}</div>
            <div className={styles.nodeText}>
              <h4>{stage.title}</h4>
              <p>{stage.impact}</p>
            </div>
            {activeStage === i && (
              <motion.div 
                layoutId="activeGlow" 
                className={styles.nodeGlow}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </motion.div>
        ))}
      </div>

      <div className={styles.engineDisplay}>
         <AnimatePresence mode="wait">
            <motion.div 
              key={activeStage}
              className={styles.displayContent}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
               <div className={styles.displayHeader}>
                  <div className={styles.badge}>Murabaha Structure</div>
                  <h3>{stages[activeStage].title}</h3>
               </div>
               <p className={styles.displayDesc}>{stages[activeStage].desc}</p>
               <div className={styles.financeBar}>
                  <div className={styles.barMain}>
                     <span className={styles.barLabel}>Bank Cost</span>
                     <div className={styles.barFill} />
                  </div>
                  <div className={styles.barProfit}>
                     <span className={styles.barLabel}>Profit Margin</span>
                     <div className={styles.barFillProfit} />
                  </div>
               </div>
               <div className={styles.murabahaInfo}>
                  Transparent Sharia-compliant cost-plus-profit transparency for primary industrial assets.
               </div>
            </motion.div>
         </AnimatePresence>
      </div>
    </div>
  );
}

// 2. Efficiency Estimator Calculator
function EfficiencyEstimator() {
  const [capacity, setCapacity] = useState(5000);
  
  return (
    <div className={styles.calcBox}>
       <div className={styles.calcHeader}>
          <Settings className={styles.spinIcon} />
          <h3>Payback Horizon Estimator</h3>
       </div>
       
       <div className={styles.calcInputs}>
          <div className={styles.inputGroup}>
             <label>Target Monthly Units</label>
             <input 
              type="range" 
              min="1000" 
              max="50000" 
              step="1000" 
              value={capacity}
              onChange={(e) => setCapacity(parseInt(e.target.value))}
             />
             <span className={styles.valDisplay}>{capacity.toLocaleString()} Units</span>
          </div>
       </div>

       <div className={styles.calcResults}>
          <div className={styles.resItem}>
             <p>Projected Monthly Revenue Delta</p>
             <h4>+${(capacity * 0.45).toLocaleString()}</h4>
          </div>
          <motion.div 
            className={styles.horizonBar}
            animate={{ width: `${Math.min(100, (capacity / 50000) * 100)}%` }}
          >
             Estimated ROI Accelerated
          </motion.div>
       </div>
    </div>
  );
}

export default function IndustrialFinancePage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const gearRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <main className={styles.main}>
      
      {/* 1. Forging Future Hero */}
      <section className={styles.heroSection}>
        <div className={styles.heroMedia}>
           <Image 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000" // High-tech engineering factory
            alt="Dahabshil Industrial Finance"
            fill
            className={styles.heroImg}
            priority
          />
        </div>
        <div className={styles.heroOverlay} />
        
        {/* Animated Background Gear */}
        <motion.div 
          className={styles.bgGear}
          style={{ rotate: gearRotate }}
        >
          <Settings size={600} strokeWidth={0.5} opacity={0.05} />
        </motion.div>

        <div className={styles.heroLayout}>
           <motion.div 
            className={styles.heroContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
           >
              <div className={styles.badge}><HardHat size={14} /> Industrial Strength</div>
              <h1 className={styles.title}>Heavy Industry.<br/>Light Capital.</h1>
              <p className={styles.subtitle}>
                Fuel your manufacturing expansion with Sharia-compliant Industrial Finance. Precision Murabaha solutions for machinery, production lines, and infrastructure.
              </p>
              <div className={styles.ctaGroup}>
                <button className={styles.primaryBtn}>
                  Start Production <Settings size={20} className={styles.btnIcon} />
                </button>
              </div>
           </motion.div>
        </div>
      </section>

      {/* 2. Production Engine Visualizer */}
      <section className={styles.engineSection}>
         <div className={styles.sectionHeader}>
            <h2>The Production Engine.</h2>
            <p>Select a core component to see how Dahabshil fuels your industrial capacity.</p>
         </div>
         <ProductionEngine />
      </section>

      {/* 3. ROI & Estimator Section */}
      <section className={styles.calcSection}>
         <div className={styles.calcLayout}>
            <div className={styles.calcText}>
               <div className={styles.badge}>ROI Acceleration</div>
               <h2>Scale with Efficiency.</h2>
               <p>We don&apos;t just finance machinery; we finance your growth trajectory. Use our estimator to see the potential impact of modernization.</p>
               
               <div className={styles.featureGrid}>
                  <div className={styles.fItem}>
                     <div className={styles.fIcon}><Zap /></div>
                     <span>Energy Modernization Grants</span>
                  </div>
                  <div className={styles.fItem}>
                     <div className={styles.fIcon}><Ruler /></div>
                     <span>Technical Feasibility Support</span>
                  </div>
               </div>
            </div>
            <EfficiencyEstimator />
         </div>
      </section>

      {/* 4. Building the Blueprint (Requirements) */}
      <section className={styles.blueprintSection}>
         <div className={styles.blueprintCard}>
            <div className={styles.bpHeader}>
               <ClipboardCheck size={40} color="var(--color-amber)" />
               <h2>Industrial Blueprint</h2>
            </div>
            
            <div className={styles.bpTable}>
               {[
                 { req: "Technical Specification", val: "Machinery proforma with specs & production capacity." },
                 { req: "Industrial License", val: "Valid certification for intended manufacturing activity." },
                 { req: "Feasibility Study", val: "Brief 12-month production and cashflow projection." },
                 { req: "Entity Registration", val: "LTD or Partnership documentation of the borrowing entity." }
               ].map((item, i) => (
                 <div key={i} className={styles.bpRow}>
                   <div className={styles.bpDot} />
                   <div className={styles.bpLabel}>{item.req}</div>
                   <div className={styles.bpValue}>{item.val}</div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. Final CTA */}
      <section className={styles.finalCta}>
         <div className={styles.ctaBox}>
            <Image 
              src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=600" // Professional Workshop
              alt="Industrial Specialist"
              width={100}
              height={100}
              className={styles.avatar}
            />
            <h2>Talk to our Heavy Industry Team.</h2>
            <p>Our specialists understand the specific needs of manufacturing in the region.</p>
            <Link href="mailto:Industrial@dahabshilbank.com" className={styles.emailBtn}>
               Contact the Engine Room
            </Link>
         </div>
      </section>

    </main>
  );
}
