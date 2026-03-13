"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from "framer-motion";
import { 
  Truck, 
  Car, 
  Key, 
  ShieldCheck, 
  TrendingUp, 
  DollarSign, 
  ArrowRight,
  ChevronRight,
  Plus,
  Minus,
  Briefcase
} from "lucide-react";
import styles from "./BusinessCarFinance.module.css";
import Image from "next/image";
import Link from "next/link";

// 1. Fleet Murabaha Calculator Engine
function FleetCalculator() {
  const [fleetSize, setFleetSize] = useState(5);
  const [term, setTerm] = useState(36);
  const [vehicleType, setVehicleType] = useState<"sedan" | "van" | "truck">("van");

  const prices = { sedan: 25000, van: 35000, truck: 55000 };
  const profitMargin = 0.08; // 8% Murabaha profit

  const unitCost = prices[vehicleType];
  const totalCost = unitCost * fleetSize;
  const totalProfit = totalCost * profitMargin;
  const totalAmount = totalCost + totalProfit;
  const monthlyPayment = totalAmount / term;

  return (
    <div className={styles.calcContainer}>
      <div className={styles.calcHeader}>
        <TrendingUp color="var(--color-cyan)" />
        <h3>Fleet Murabaha Engine</h3>
      </div>

      <div className={styles.calcGrid}>
        {/* Left: Controls */}
        <div className={styles.calcInputs}>
          <div className={styles.inputGroup}>
            <label>Vehicle Type</label>
            <div className={styles.typeSelector}>
              {(["sedan", "van", "truck"] as const).map((type) => (
                <button 
                  key={type}
                  className={vehicleType === type ? styles.activeType : ""}
                  onClick={() => setVehicleType(type)}
                >
                  {type === "sedan" && <Car size={18} />}
                  {type === "van" && <Briefcase size={18} />}
                  {type === "truck" && <Truck size={18} />}
                  <span>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
                </button>
              ))}
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label>Fleet Size: <span>{fleetSize} Units</span></label>
            <div className={styles.rangeControl}>
              <button onClick={() => setFleetSize(Math.max(1, fleetSize - 1))}><Minus size={16} /></button>
              <input 
                type="range" 
                min="1" max="50" 
                value={fleetSize} 
                onChange={(e) => setFleetSize(parseInt(e.target.value))} 
              />
              <button onClick={() => setFleetSize(Math.min(50, fleetSize + 1))}><Plus size={16} /></button>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label>Financing Term: <span>{term} Months</span></label>
            <input 
              type="range" 
              min="12" max="60" step="12"
              value={term} 
              onChange={(e) => setTerm(parseInt(e.target.value))} 
            />
          </div>
        </div>

        {/* Right: Visual Feedback */}
        <div className={styles.calcResults}>
           <div className={styles.resultItem}>
              <p>Monthly Repayment</p>
              <div className={styles.amount}>${monthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}<span>/mo</span></div>
           </div>
           
           <div className={styles.breakdown}>
              <div className={styles.breakItem}>
                 <span>Asset Cost</span>
                 <span>${totalCost.toLocaleString()}</span>
              </div>
              <div className={styles.breakItem}>
                 <span>Murabaha Profit (8%)</span>
                 <span style={{ color: "var(--color-cyan)" }}>+${totalProfit.toLocaleString()}</span>
              </div>
              <div className={styles.totalLine}>
                 <span>Total Contract</span>
                 <span>${totalAmount.toLocaleString()}</span>
              </div>
           </div>
        </div>
      </div>

      {/* 3D Fleet Visualizer */}
      <div className={styles.fleetPreview}>
         <div className={styles.previewLabel}>Visualizing {fleetSize} {vehicleType}s</div>
         <div className={styles.fleetTrack}>
            <AnimatePresence>
               {[...Array(Math.min(fleetSize, 12))].map((_, i) => (
                 <motion.div 
                   key={i}
                   className={styles.vehicleSilhouette}
                   initial={{ opacity: 0, x: -20, scale: 0.8 }}
                   animate={{ opacity: 1, x: 0, scale: 1 }}
                   exit={{ opacity: 0, x: 20, scale: 0.8 }}
                   transition={{ delay: i * 0.05 }}
                 >
                   {vehicleType === "sedan" && <Car />}
                   {vehicleType === "van" && <Briefcase />}
                   {vehicleType === "truck" && <Truck />}
                 </motion.div>
               ))}
               {fleetSize > 12 && <div className={styles.plusMore}>+{fleetSize - 12} More</div>}
            </AnimatePresence>
         </div>
      </div>
    </div>
  );
}

// 3. Procurement JourneyComponent
function ProcurementJourney() {
  const steps = [
    { title: "Fleet Selective", icon: <Car />, desc: "Choose your professional assets from our authorized dealership network." },
    { title: "Bank Acquisition", icon: <DollarSign />, desc: "Dahabshil buys the assets directly from the dealer in a cash transaction." },
    { title: "Murabaha Sale", icon: <ArrowRight />, desc: "We sell the assets to you at a pre-agreed price including professional profit." },
    { title: "Rapid Delivery", icon: <Key />, desc: "Immediate possession of the fleet to ignite your business operations." }
  ];

  return (
    <div className={styles.journeyContainer}>
       <div className={styles.journeyTrack}>
          {steps.map((step, i) => (
             <motion.div 
              key={i} 
              className={styles.journeyStep}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
             >
                <div className={styles.stepIcon}>{step.icon}</div>
                <div className={styles.stepNumber}>0{i+1}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
                {i < steps.length - 1 && <div className={styles.stepConnector} />}
             </motion.div>
          ))}
       </div>
    </div>
  );
}

export default function BusinessCarFinancePage() {
  return (
    <main className={styles.main}>
      
      {/* 1. Momentum Hero */}
      <section className={styles.heroSection}>
        <div className={styles.heroImageContainer}>
          <Image 
            src="https://images.unsplash.com/photo-1519003722824-192d992a60bf?auto=format&fit=crop&q=80&w=2000" // Logistics/Transport Motion
            alt="Business Fleet Momentum"
            fill
            className={styles.heroImg}
            priority
          />
        </div>
        <div className={styles.heroOverlay} />

        <div className={styles.heroLayout}>
          <motion.div 
            className={styles.heroContent}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className={styles.badge}>Dahabshil Logistics</div>
            <h1 className={styles.title}>Power Your Fleet.<br/>Scale Your Future.</h1>
            <p className={styles.subtitle}>
              Experience the clarity of Murabaha Auto Finance. From single executive cars to entire logistics networks, we put your business on the road to success.
            </p>
            <div className={styles.ctaGroup}>
              <Link href="/contact" className={styles.primaryBtn}>
                Get an Online Quote <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Fleet Murabaha Calculator Engine */}
      <section className={styles.calculatorSection}>
        <div className={styles.sectionHeader}>
          <h2>Engineered for Scale.</h2>
          <p>Configure your business fleet and see the transparent Murabaha breakdown instantly.</p>
        </div>
        <FleetCalculator />
      </section>

      {/* 3. The Procurement Journey */}
      <section className={styles.journeySection}>
         <div className={styles.sectionHeader}>
            <div className={styles.badge}>Process Transparency</div>
            <h2>The Procurement Journey</h2>
            <p>A seamless, 4-step Sharia-compliant path to asset ownership.</p>
         </div>
         <ProcurementJourney />
      </section>

      {/* 4. Asset Shield & Requirements */}
      <section className={styles.shieldSection}>
        <div className={styles.gridContainer}>
           <div className={styles.shieldCard}>
              <div className={styles.shieldVisual}>
                 <ShieldCheck size={80} color="var(--color-cyan)" />
                 <motion.div 
                  className={styles.shieldPulse}
                  animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.1, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                 />
              </div>
              <h3>Asset Protection</h3>
              <p>Every fleet vehicle financed through DBI includes integrated Takaful coverage and priority maintenance support through our authorized partners.</p>
           </div>

           <div className={styles.reqCard}>
              <h3>Business Requirements</h3>
              <ul className={styles.reqList}>
                 <li><CheckCircle2 size={16} /> <span>Valid Business License</span></li>
                 <li><CheckCircle2 size={16} /> <span>Entity Registration Documents</span></li>
                 <li><CheckCircle2 size={16} /> <span>Dahabshil Business Account (6mo active)</span></li>
                 <li><CheckCircle2 size={16} /> <span>Fleet Specification & Proforma Invoice</span></li>
              </ul>
              <Link href="/contact" className={styles.ctaLink}>
                 Download Full Requirements <ChevronRight size={18} />
              </Link>
           </div>
        </div>
      </section>

    </main>
  );
}

// Missing imports
import { CheckCircle2 } from "lucide-react";
