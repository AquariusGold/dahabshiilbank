"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useSpring, useMotionValue } from "framer-motion";
import { 
  Sun, 
  Sprout, 
  Tractor, 
  Wrench, 
  ThermometerSun, 
  FileBadge,
  ArrowRight,
  ChevronRight,
  Leaf,
  CheckCircle2,
  Lock,
  Zap,
  Droplets
} from "lucide-react";
import styles from "./AgribusinessFinance.module.css";
import Image from "next/image";
import Link from "next/link";

// 1. Equipment Visualizer Component
function EquipmentVisualizer() {
  const [activeItem, setActiveItem] = useState(0);
  
  const items = [
    { 
      title: "Tractors & Machinery", 
      icon: <Tractor size={32} />, 
      img: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=800",
      desc: "High-performance tractors and power machines engineered for Somalia's diverse terrain." 
    },
    { 
      title: "Solar Irrigation", 
      icon: <Sun size={32} />, 
      img: "https://images.unsplash.com/photo-1509391366360-fe5bb65830bb?auto=format&fit=crop&q=80&w=800",
      desc: "Sustainable, cost-effective energy solutions to power your irrigation systems 24/7." 
    },
    { 
      title: "Modern Greenhouses", 
      icon: <ThermometerSun size={32} />, 
      img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800",
      desc: "Climate-controlled environments to ensure consistent yield and crop protection." 
    }
  ];

  return (
    <div className={styles.equipContainer}>
      <div className={styles.equipNav}>
        {items.map((item, i) => (
          <button 
            key={i} 
            className={activeItem === i ? styles.activeNav : ""}
            onClick={() => setActiveItem(i)}
          >
            {item.icon}
            <span>{item.title}</span>
          </button>
        ))}
      </div>

      <div className={styles.equipDisplay}>
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeItem}
            className={styles.displayCard}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className={styles.displayImage}>
              <Image src={items[activeItem].img} alt={items[activeItem].title} fill />
              <div className={styles.imageOverlay} />
            </div>
            <div className={styles.displayText}>
              <h3>{items[activeItem].title}</h3>
              <p>{items[activeItem].desc}</p>
              <div className={styles.impactBadge}>
                 <Zap size={14} /> +35% Yield Efficiency
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

// 2. Sustainable Cycle Infographic
function SustainableCycle() {
  const [hoveredPhase, setHoveredPhase] = useState<number | null>(null);

  const phases = [
    { title: "Plan", icon: <FileBadge />, color: "#2D6A4F" },
    { title: "Plant", icon: <Sprout />, color: "#40916C" },
    { title: "Protect", icon: <Droplets />, color: "#52B788" },
    { title: "Profit", icon: <TrendingUp />, color: "#74C69D" }
  ];

  return (
    <div className={styles.cycleArena}>
       <div className={styles.cycleWrapper}>
          {phases.map((phase, i) => (
            <motion.div 
              key={i}
              className={styles.phaseNode}
              style={{ borderColor: phase.color }}
              onHoverStart={() => setHoveredPhase(i)}
              onHoverEnd={() => setHoveredPhase(null)}
              animate={{ 
                scale: hoveredPhase === i ? 1.1 : 1,
                boxShadow: hoveredPhase === i ? `0 0 30px ${phase.color}44` : "none"
              }}
            >
               <div className={styles.phaseIcon} style={{ color: phase.color }}>{phase.icon}</div>
               <span className={styles.phaseLabel}>{phase.title}</span>
            </motion.div>
          ))}
          <svg className={styles.cycleLines}>
             <circle cx="50%" cy="50%" r="40%" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="2" strokeDasharray="10 10" />
          </svg>
       </div>
    </div>
  );
}

export default function AgribusinessFinancePage() {
  // Parallax setup
  const heroRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const x = useTransform(mouseX, [0, 1920], [-15, 15]);
  const y = useTransform(mouseY, [0, 1080], [-15, 15]);

  return (
    <main className={styles.main}>
      
      {/* 1. Green Horizon Hero */}
      <section className={styles.heroSection} onMouseMove={handleMouseMove}>
        <motion.div className={styles.heroImgContainer} style={{ x, y }}>
          <Image 
            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=2000" // Fertile green landscape
            alt="Dahabshil Agribusiness"
            fill
            className={styles.heroImg}
            priority
          />
        </motion.div>
        <div className={styles.heroOverlay} />

        <div className={styles.heroLayout}>
           <motion.div 
            className={styles.heroContent}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
           >
              <div className={styles.badge}><Leaf size={14} /> Dahabshil Agriculture</div>
              <h1 className={styles.title}>Cultivating Success.<br/>Powering Productivity.</h1>
              <p className={styles.subtitle}>
                Modernize your agribusiness with Sharia-compliant local financing. From tractors to solar ecosystems, we provide the tools for your harvest.
              </p>
              <div className={styles.ctaGroup}>
                <Link href="/contact" className={styles.primaryBtn}>
                  Apply for Financing <ArrowRight size={20} />
                </Link>
              </div>
           </motion.div>
        </div>
      </section>

      {/* 2. Equipment Visualizer */}
      <section className={styles.visualizerSection}>
        <div className={styles.sectionHeader}>
           <h2>Engineered for Yield.</h2>
           <p>Modernize your operation with the latest agricultural technology.</p>
        </div>
        <EquipmentVisualizer />
      </section>

      {/* 3. Sustainable Cycle */}
      <section className={styles.cycleSection}>
         <div className={styles.cycleLayout}>
            <div className={styles.cycleText}>
               <div className={styles.badge}>Holistic Growth</div>
               <h2>The Sustainable Cycle.</h2>
               <p>Our financing is calibrated to the agricultural lifecycle, ensuring you have capitalized support from planting through to profit.</p>
               <div className={styles.benefitList}>
                   <div className={styles.bItem}>
                      <CheckCircle2 color="var(--color-cyan)" />
                      <span>Sharia-compliant Murabaha contracts</span>
                   </div>
                   <div className={styles.bItem}>
                      <CheckCircle2 color="var(--color-cyan)" />
                      <span>Flexible seasonal repayment periods</span>
                   </div>
                   <div className={styles.bItem}>
                      <CheckCircle2 color="var(--color-cyan)" />
                      <span>Specialized solar & irrigation rates</span>
                   </div>
               </div>
            </div>
            <SustainableCycle />
         </div>
      </section>

      {/* 4. Rooted Requirements */}
      <section className={styles.reqSection}>
        <div className={styles.reqHeader}>
           <h2>Ready to Modernize?</h2>
           <p>Start your application with these foundational requirements.</p>
        </div>

        <div className={styles.reqGrid}>
           {[
             { title: "Asset Details", icon: <Tractor />, desc: "Proforma invoice for tractors, solar, or greenhouse equipment." },
             { title: "Farm Identity", icon: <FileBadge />, desc: "Proof of land ownership or a valid long-term lease agreement." },
             { title: "Business Plan", icon: <TrendingUp />, desc: "Brief outline of seasonal production and market targets." },
             { title: "Active Account", icon: <Briefcase />, desc: "Dahabshil Business Account in good standing for 6 months." }
           ].map((req, i) => (
             <motion.div 
              key={i} 
              className={styles.reqCard}
              whileHover={{ y: -10 }}
             >
                <div className={styles.reqIcon}>{req.icon}</div>
                <h3>{req.title}</h3>
                <p>{req.desc}</p>
             </motion.div>
           ))}
        </div>

        <div className={styles.finalContact}>
           <p>Questions about agricultural grants or specialized equipment? Our specialists are in the field.</p>
           <Link href="mailto:Agriculture@dahabshilbank.com" className={styles.contactBtn}>
              Agriculture@dahabshilbank.com
           </Link>
        </div>
      </section>

    </main>
  );
}

// Missing imports
import { TrendingUp, Briefcase } from "lucide-react";
