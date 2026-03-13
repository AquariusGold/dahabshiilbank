"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { 
  Users, 
  Link as LinkIcon, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  ChevronRight,
  Database,
  Lock,
  MessageSquare,
  Repeat,
  FileText,
  Activity
} from "lucide-react";
import styles from "./PartnershipSynergy.module.css";
import Link from "next/link";

// 1. Interactive Synergy Core & Orbital Nodes
function SynergyEngine() {
  const [partners, setPartners] = useState<number[]>([]);
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const addPartner = () => {
    if (partners.length < 5) {
      setPartners([...partners, partners.length]);
    }
  };

  const features = [
    { id: "RM", icon: <Users />, title: "Relationship Advisor", text: "Your shared vision deserves a singular point of expertise." },
    { id: "Prices", icon: <Database />, title: "Competitive Pricing", text: "Scale your partnership with optimized treasury management." },
    { id: "Online", icon: <Zap />, title: "Online Banking", text: "Multi-user access with granular permission structures." },
    { id: "SMS", icon: <MessageSquare />, title: "Real-time Alerts", text: "Stay synchronized on every transaction across all partners." }
  ];

  return (
    <div className={styles.engineContainer}>
      {/* Background Synergy Web (Canvas would be better, but we'll use SVG for reliability here) */}
      <svg className={styles.synergyWeb}>
        {partners.map((_, i) => (
          <motion.line
            key={i}
            x1="50%" y1="50%"
            x2={`${50 + 35 * Math.cos((i * 2 * Math.PI) / partners.length)}%`}
            y2={`${50 + 35 * Math.sin((i * 2 * Math.PI) / partners.length)}%`}
            stroke="rgba(0, 174, 239, 0.4)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
          />
        ))}
      </svg>

      {/* The CORE */}
      <div className={styles.coreWrapper}>
        <motion.div 
          className={styles.synergyCore}
          animate={{ 
            scale: [1, 1.1, 1],
            boxShadow: [
              "0 0 20px rgba(0, 174, 239, 0.3)",
              "0 0 60px rgba(0, 174, 239, 0.6)",
              "0 0 20px rgba(0, 174, 239, 0.3)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className={styles.coreText}>
            <span>{partners.length}</span>
            <p>Partners</p>
          </div>
        </motion.div>
        
        <button className={styles.addPartnerBtn} onClick={addPartner}>
          <LinkIcon size={20} /> Add Partner
        </button>
      </div>

      {/* Orbital Discovery Nodes */}
      <div className={styles.orbitals}>
         {features.map((feat, i) => (
           <motion.div
             key={feat.id}
             className={styles.nodeWrapper}
             style={{ 
               top: `${50 + 40 * Math.sin((i * 2 * Math.PI) / features.length)}%`,
               left: `${50 + 40 * Math.cos((i * 2 * Math.PI) / features.length)}%`
             }}
             whileHover={{ scale: 1.2 }}
             onClick={() => setActiveNode(feat.id)}
           >
             <div className={styles.discoveryNode}>
                {feat.icon}
                <div className={styles.nodeGlow} />
             </div>
             
             <AnimatePresence>
               {activeNode === feat.id && (
                 <motion.div 
                   className={styles.nodeDetail}
                   initial={{ opacity: 0, scale: 0.8, y: 20 }}
                   animate={{ opacity: 1, scale: 1, y: 0 }}
                   exit={{ opacity: 0, scale: 0.8, y: 20 }}
                 >
                   <h4>{feat.title}</h4>
                   <p>{feat.text}</p>
                   <button onClick={(e) => { e.stopPropagation(); setActiveNode(null); }}>Dismiss</button>
                 </motion.div>
               )}
             </AnimatePresence>
           </motion.div>
         ))}
      </div>
    </div>
  );
}

// 2. Governance Simulator
function GovernanceMatrix() {
  const [mode, setMode] = useState<"joint" | "multi">("joint");

  return (
    <div className={styles.matrixContainer}>
       <div className={styles.matrixCard}>
          <div className={styles.matrixHeader}>
             <ShieldCheck color="var(--color-cyan)" />
             <h3>Governance Matrix</h3>
          </div>
          
          <div className={styles.toggleGroup}>
             <button 
               className={mode === "joint" ? styles.activeToggle : ""} 
               onClick={() => setMode("joint")}
             >
               Joint Access
             </button>
             <button 
               className={mode === "multi" ? styles.activeToggle : ""} 
               onClick={() => setMode("multi")}
             >
               Multi-Signatory
             </button>
          </div>

          <div className={styles.visualFeedback}>
            <div className={styles.signatories}>
               <motion.div 
                 className={styles.userNode}
                 animate={{ opacity: 1, y: 0 }}
                 initial={{ opacity: 0, y: 10 }}
               >
                 <Users size={20} />
                 <span>Primary</span>
               </motion.div>
               <motion.div 
                 className={styles.connectorLine}
                 animate={{ 
                   borderColor: mode === "multi" ? "var(--color-cyan)" : "rgba(255,255,255,0.1)",
                   borderStyle: mode === "multi" ? "solid" : "dashed"
                 }}
               />
               <motion.div 
                 className={styles.userNode}
                 animate={{ opacity: mode === "multi" ? 1 : 0.4 }}
               >
                 <Users size={20} />
                 <span>Partner B</span>
               </motion.div>
            </div>
            <p className={styles.matrixDesc}>
              {mode === "joint" 
                ? "Either partner can initiate and finalize transactions independently." 
                : "Requires coordinated approval from all partners for major capital movements."}
            </p>
          </div>
       </div>
    </div>
  );
}

export default function PartnershipAccountPage() {
  return (
    <main className={styles.main}>
      
      {/* 1. Hero Experience (Discovery) */}
      <section className={styles.heroSection}>
        <div className={styles.heroTitleLayout}>
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
           >
             <div className={styles.badge}>Corporate Synergy</div>
             <h1 className={styles.title}>Limited Liability &<br/>Partnership Account.</h1>
             <p className={styles.subtitle}>
               The architecture of shared ambition. Experience a banking engine built for multi-user governance and exponential growth.
             </p>
           </motion.div>
        </div>

        <div className={styles.engineSpace}>
           <SynergyEngine />
        </div>
      </section>

      {/* 2. Governance & Simulation */}
      <section className={styles.governanceSection}>
        <div className={styles.sectionGrid}>
           <div className={styles.govText}>
              <h2>Active Governance.</h2>
              <p>Why settle for passive access? Dahabshil gives your partnership the tools to define granular control over your shared capital.</p>
              
              <div className={styles.featurePills}>
                <div className={styles.pill}><Lock size={16}/> Secure Multi-Login</div>
                <div className={styles.pill}><Activity size={16}/> Transaction Staging</div>
                <div className={styles.pill}><Users size={16}/> Board Resolutions</div>
              </div>
           </div>
           
           <GovernanceMatrix />
        </div>
      </section>

      {/* 3. Requirement Blueprint */}
      <section className={styles.blueprintSection}>
        <div className={styles.blueprintHeader}>
           <h2>The Blueprint</h2>
           <p>Scan the documentation architecture required for your entity.</p>
        </div>

        <div className={styles.blueprintGrid}>
           {[
             { title: "Legal Structure", items: ["Memorandum of Association", "Articles of Association"] },
             { title: "Resolution", items: ["Board Resolution to open account", "Mandate Letter"] },
             { id: "sign", title: "Signatories", items: ["National ID for all Directors", "Passport Photos"] },
             { title: "Entity Proof", items: ["Valid Business Permit", "Physical Address Proof"] }
           ].map((item, i) => (
             <motion.div 
               key={i} 
               className={styles.blueprintCard}
               whileHover={{ scale: 1.02 }}
             >
               <div className={styles.bpLine} />
               <h3>{item.title}</h3>
               <ul>
                 {item.items.map((doc, j) => (
                   <li key={j}><FileText size={14} /> {doc}</li>
                 ))}
               </ul>
             </motion.div>
           ))}
        </div>

        <div className={styles.bottomCta}>
          <Link href="/contact" className={styles.primaryBtn}>
            Engineer Your Partnership <ArrowRight size={20} />
          </Link>
        </div>
      </section>

    </main>
  );
}
