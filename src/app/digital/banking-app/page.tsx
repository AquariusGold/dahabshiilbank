"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useSpring, useMotionValue } from "framer-motion";
import { 
  Smartphone, 
  Fingerprint, 
  CheckCircle2,
  LockKeyhole,
  ExternalLink,
  Shield,
  Send,
  CreditCard, 
  Download, 
  MapPin,
  ChevronRight,
  QrCode,
  Zap,
  Globe
} from "lucide-react";
import styles from "./BankingApp.module.css";
import Image from "next/image";
import Link from "next/link";

// 1. Interactive Device Hero
function InteractiveDeviceHero() {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const rx = useTransform(mouseY, [-500, 500], [10, -10]);
  const ry = useTransform(mouseX, [-500, 500], [-10, 10]);

  return (
    <section className={styles.heroSection} onMouseMove={handleMouseMove} ref={containerRef}>
      <div className={styles.heroLayout}>
        
        {/* Text Content */}
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.badge}><Smartphone size={16} /> Dahabshil Digital App</div>
          <h1 className={styles.title}>Your Bank.<br/><span className={styles.textCyan}>In Your Pocket.</span></h1>
          <p className={styles.subtitle}>
            Experience the new and improved Banking App from Dahabshil. Enjoy seamless banking on-the-go with enhanced features combined with an intuitive visual experience.
          </p>
          <div className={styles.downloadGroup}>
            <button className={styles.appStoreBtn}>
               <Image src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" width={140} height={42} />
            </button>
            <button className={styles.playStoreBtn}>
               <Image src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" width={140} height={42} />
            </button>
          </div>
        </motion.div>

        {/* 3D Device Container */}
        <div className={styles.deviceContainer}>
           <motion.div 
            className={styles.deviceWrapper}
            style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
           >
              {/* Phone Mockup Body */}
              <div className={styles.phoneBody}>
                 <div className={styles.phoneScreen}>
                    {/* Simulated Screen Content */}
                    <div className={styles.simHeader}>
                       <span>Welcome Back</span>
                       <strong>User</strong>
                    </div>
                    <div className={styles.simBalance}>
                       <span>Available Balance</span>
                       <h2>$24,500.00</h2>
                    </div>
                    <div className={styles.simGrid}>
                       <div className={styles.simBtn}><Send size={20}/>Send</div>
                       <div className={styles.simBtn}><CreditCard size={20}/>Pay</div>
                       <div className={styles.simBtn}><Zap size={20}/>Top-up</div>
                    </div>
                 </div>
              </div>

              {/* Floating Nodes */}
              <motion.div className={`${styles.floatNode} ${styles.n1}`} style={{ translateZ: 50 }}>
                 <Fingerprint color="var(--color-cyan)" /><span>Biometric Login</span>
              </motion.div>
              <motion.div className={`${styles.floatNode} ${styles.n2}`} style={{ translateZ: 80 }}>
                 <Globe color="var(--color-cyan)" /><span>Global Transfer</span>
              </motion.div>
              <motion.div className={`${styles.floatNode} ${styles.n3}`} style={{ translateZ: 30 }}>
                 <Shield color="var(--color-cyan)" /><span>Bank-Grade Security</span>
              </motion.div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}

// 2. App Features Carousel
function FeatureCarousel() {
  const [activeFeature, setActiveFeature] = useState(0);
  
  const features = [
    { title: "Dashboard", icon: <CreditCard />, desc: "Instantly view all your account balances and recent transaction history at a glance." },
    { title: "Fast Transfers", icon: <Send />, desc: "Move funds instantly between Dahabshil accounts or globally with our secure network." },
    { title: "Bill Payments", icon: <Zap />, desc: "Pay electricity, water, and internet bills automatically with easy-to-set-up auto payments." },
    { title: "ATM Locator", icon: <MapPin />, desc: "Quickly find the nearest Dahabshil branch or ATM using integrated maps." }
  ];

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.featureList}>
        {features.map((f, i) => (
          <button 
           key={i} 
           className={`${styles.featureItem} ${activeFeature === i ? styles.activeFeature : ""}`}
           onClick={() => setActiveFeature(i)}
          >
             <div className={styles.fIcon}>{f.icon}</div>
             <div className={styles.fText}>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
             </div>
             {activeFeature === i && <ChevronRight className={styles.fArrow} />}
          </button>
        ))}
      </div>

      <div className={styles.featureDisplay}>
         <AnimatePresence mode="wait">
            <motion.div 
             key={activeFeature}
             className={styles.pseudoScreen}
             initial={{ opacity: 0, scale: 0.9, y: 20 }}
             animate={{ opacity: 1, scale: 1, y: 0 }}
             exit={{ opacity: 0, scale: 0.9, y: -20 }}
             transition={{ duration: 0.4 }}
            >
               {/* Very abstract representation of the selected feature screen */}
               <div className={styles.psHeader}>{features[activeFeature].title}</div>
               <div className={styles.psBody}>
                  {activeFeature === 0 && <div className={styles.psBalanceSkeleton} />}
                  {activeFeature === 1 && (
                    <>
                      <div className={styles.psInputSkeleton} />
                      <div className={styles.psInputSkeleton} />
                      <div className={styles.psButtonSkeleton} />
                    </>
                  )}
                  {activeFeature === 2 && (
                    <div className={styles.psListSkeleton}>
                       <div /> <div /> <div />
                    </div>
                  )}
                  {activeFeature === 3 && (
                    <div className={styles.psMapSkeleton}>
                       <MapPin color="var(--color-cyan)" size={40} />
                    </div>
                  )}
               </div>
            </motion.div>
         </AnimatePresence>
      </div>
    </div>
  );
}

// 3. Security Section
function SecurityMatrix() {
  return (
    <div className={styles.securityMatrix}>
       <div className={styles.secText}>
          <h2>Uncompromising Security.</h2>
          <p>Bank with confidence. Our architecture prioritizes your data safety with multi-layered protection systems.</p>
       </div>
       <div className={styles.secGrid}>
          {[
            { title: "OTP Verification", icon: <Shield />, desc: "Dynamic One-Time Passwords for high-value transactions." },
            { title: "Instant SMS Alerts", icon: <Smartphone />, desc: "Real-time notifications sent to your approved mobile device." },
            { title: "Biometric Access", icon: <Fingerprint />, desc: "FaceID and TouchID integration for encrypted login." },
            { title: "Session Timeouts", icon: <LockKeyhole />, desc: "Automatic logouts to protect unattended devices." }
          ].map((item, i) => (
             <div key={i} className={styles.secCard}>
                <div className={styles.sIcon}>{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
             </div>
          ))}
          {/* Scanning Laser Animation */}
          <div className={styles.laserScan} />
       </div>
    </div>
  );
}

export default function BankingAppPage() {
  return (
    <main className={styles.main}>
      
      {/* 1. Hero */}
      <InteractiveDeviceHero />

      {/* 2. Features */}
      <section className={styles.featureSection}>
         <div className={styles.sectionHeader}>
            <div className={styles.badge}>App Capabilities</div>
            <h2>Everything you need. Nothing you don&apos;t.</h2>
         </div>
         <FeatureCarousel />
      </section>

      {/* 3. Security */}
      <section className={styles.securitySection}>
         <SecurityMatrix />
      </section>

      {/* 4. Unified Download CTA */}
      <section className={styles.downloadSection}>
         <div className={styles.dBox}>
            <div className={styles.dText}>
               <h2>Get Dahabshil App Today.</h2>
               <p>Available for both iOS and Android devices. Download now and start banking smarter.</p>
               <div className={styles.qrArea}>
                  <div className={styles.qrCode}>
                     <QrCode size={60} color="#001020" />
                  </div>
                  <span>Scan to download directly to your device</span>
               </div>
               <div className={styles.downloadGroup}>
                 <button className={styles.appStoreBtn}>
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" width={140} height={42} />
                 </button>
                 <button className={styles.playStoreBtn}>
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" width={140} height={42} />
                 </button>
               </div>
            </div>
            
            <div className={styles.dMockupGroup}>
               <div className={styles.dPhoneLeft} />
               <div className={styles.dPhoneRight} />
            </div>
         </div>
      </section>

    </main>
  );
}
