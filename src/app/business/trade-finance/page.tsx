"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from "framer-motion";
import { 
  Globe, 
  Anchor, 
  FileText, 
  ShieldCheck, 
  RefreshCw, 
  Send,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Lock,
  ExternalLink,
  Briefcase
} from "lucide-react";
import styles from "./BusinessTradeFinance.module.css";
import Image from "next/image";
import Link from "next/link";

// 1. Trade Flow Visualizer (Nexus Flow)
function TradeFlowVisualizer() {
  const [view, setView] = useState<"import" | "export">("import");

  const steps = view === "import" ? [
    { label: "Importer (You)", icon: <Briefcase />, sub: "Initiate LC Request" },
    { label: "Dahabshil Bank", icon: <ShieldCheck />, sub: "Issue Letter of Credit" },
    { label: "Exporter", icon: <Anchor />, sub: "Shipment & Docs" }
  ] : [
    { label: "Exporter (You)", icon: <Briefcase />, sub: "Ship Goods & Present Docs" },
    { label: "Dahabshil Bank", icon: <ShieldCheck />, sub: "Doc Verification & Collection" },
    { label: "Importer", icon: <Anchor />, sub: "Sanctioned Payment" }
  ];

  return (
    <div className={styles.nexusContainer}>
      <div className={styles.nexusHeader}>
        <div className={styles.viewToggle}>
          <button 
            className={view === "import" ? styles.activeView : ""} 
            onClick={() => setView("import")}
          >
            Import Path
          </button>
          <button 
            className={view === "export" ? styles.activeView : ""} 
            onClick={() => setView("export")}
          >
            Export Path
          </button>
        </div>
      </div>

      <div className={styles.flowArena}>
        <div className={styles.nodeGrid}>
          {steps.map((step, i) => (
            <motion.div 
              key={view + i}
              className={styles.node}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <div className={styles.nodeIcon}>{step.icon}</div>
              <div className={styles.nodeText}>
                 <h4>{step.label}</h4>
                 <p>{step.sub}</p>
              </div>
              {i < steps.length - 1 && (
                <div className={styles.connector}>
                   <motion.div 
                    className={styles.flowParticle}
                    animate={{ left: ["0%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                   />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <div className={styles.nexusDescription}>
        {view === "import" 
          ? "Letter of Credit (LC): Controls the flow of cash throughout the order and process of delivery. It makes provision for payment commitments as transactions are being made."
          : "Secure your receivables through world-class collection services and export LC discounting."
        }
      </div>
    </div>
  );
}

// 2. Guarantee Carousel
function GuaranteeGrid() {
  const guarantees = [
    { title: "Bid Bonds", desc: "Secure your participation in government and private sector tenders." },
    { title: "Performance", desc: "Guarantees contract fulfillment to your clients and partners." },
    { title: "Retention", desc: "Ensures maintenance commitments are met during project warrant periods." },
    { title: "Payment", desc: "Mitigates financial risk by guaranteeing payment obligations." }
  ];

  return (
    <div className={styles.gradGrid}>
      {guarantees.map((g, i) => (
        <motion.div 
          key={i} 
          className={styles.gCard}
          whileHover={{ scale: 1.02, backgroundColor: "rgba(0, 174, 239, 0.05)" }}
        >
          <div className={styles.gHeader}>
             <ShieldCheck size={24} color="var(--color-cyan)" />
             <h3>{g.title}</h3>
          </div>
          <p>{g.desc}</p>
          <div className={styles.gStatus}>
             <span className={styles.statusDot} /> Sharia Compliant
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function BusinessTradeFinancePage() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <main className={styles.main}>
      
      {/* 1. Global Gateway Hero */}
      <section className={styles.heroSection}>
        <div className={styles.heroMedia}>
           <Image 
            src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&q=80&w=2000" // Global Logistics / Port
            alt="Global Trade Finance"
            fill
            className={styles.heroImg}
            priority
          />
        </div>
        <div className={styles.heroOverlay} />
        
        <div className={styles.heroLayout}>
           <motion.div 
            className={styles.heroContent}
            style={{ opacity }}
           >
              <div className={styles.badge}>Dahabshil Global Trade</div>
              <h1 className={styles.title}>Trade Without Borders.<br/>Trust Without Limits.</h1>
              <p className={styles.subtitle}>
                Navigate the complexities of global commerce with Dahabshil&apos;s sophisticated Trade Finance instruments. Secure your imports, empower your exports.
              </p>
              <div className={styles.ctaGroup}>
                <Link href="/contact">
                  <button className={styles.primaryBtn}>
                    Inquire Now <ArrowRight size={20} />
                  </button>
                </Link>
              </div>
           </motion.div>
        </div>
      </section>

      {/* 2. Nexus Flow Visualizer */}
      <section className={styles.visualizerSection}>
        <div className={styles.sectionHeader}>
           <h2>The Nexus Flow</h2>
           <p>Visualize the security bridge Dahabshil builds between you and your global partners.</p>
        </div>
        <TradeFlowVisualizer />
      </section>

      {/* 3. Letters of Guarantee */}
      <section className={styles.guaranteeSection}>
         <div className={styles.guaranteeLayout}>
            <div className={styles.guaranteeText}>
               <div className={styles.badge}>Risk Mitigation</div>
               <h2>Letters of Guarantee.</h2>
               <p>We provide a comprehensive range of bank guarantees to support your business contract requirements across all sectors.</p>
               
               <div className={styles.guaranteeList}>
                  <div className={styles.listItem}>
                     <CheckCircle2 color="var(--color-cyan)" />
                     <span>Maintenance Guarantees</span>
                  </div>
                  <div className={styles.listItem}>
                     <CheckCircle2 color="var(--color-cyan)" />
                     <span>Bid Bonds & Tenders</span>
                  </div>
                  <div className={styles.listItem}>
                     <CheckCircle2 color="var(--color-cyan)" />
                     <span>Performance Bonds</span>
                  </div>
               </div>
            </div>

            <GuaranteeGrid />
         </div>
      </section>

      {/* 4. Import/Export Handling */}
      <section className={styles.handlingSection}>
        <div className={styles.handlingCard}>
           <div className={styles.handlingHeader}>
              <RefreshCw className={styles.spinIcon} />
              <h2>Document Handling & Collection</h2>
           </div>
           
           <div className={styles.handlingGrid}>
              <div className={styles.hItem}>
                 <h3>DP / CAD Basis</h3>
                 <p>Documents against Payments. We ensure titles are только released once payment security is confirmed.</p>
              </div>
              <div className={styles.hItem}>
                 <h3>Export Collections</h3>
                 <p>Fast-track your domestic and international receivables through our extensive corresponding banking network.</p>
              </div>
           </div>
           
           <div className={styles.handlingFooter}>
              <p>Efficiently managing the flow of trade documentation to accelerate your business cycle.</p>
              <Link href="/contact">
                <button className={styles.secondaryBtn}>
                   Learn More <ExternalLink size={16} />
                </button>
              </Link>
           </div>
        </div>
      </section>

      {/* 5. Contact CTA */}
      <section className={styles.finalCta}>
         <div className={styles.ctaBox}>
            <h2>Ready to expand your global reach?</h2>
            <p>Speak with our Trade Finance specialists today.</p>
            <Link href="mailto:Info@dahabshilbank.com" className={styles.emailLink}>
               Info@dahabshilbank.com
            </Link>
         </div>
      </section>

    </main>
  );
}
