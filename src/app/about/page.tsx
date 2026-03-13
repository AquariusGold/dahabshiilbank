"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Eye, Target, Compass, ArrowRight, ShieldCheck, Globe, Briefcase, Building } from "lucide-react";
import styles from "./About.module.css";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Hero Scroll Parallax
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroScale = useTransform(heroProgress, [0, 1], [1, 5]);
  const heroRotate = useTransform(heroProgress, [0, 1], [0, 10]);
  const heroOpacity = useTransform(heroProgress, [0, 0.3], [1, 0]);
  const heroContentY = useTransform(heroProgress, [0, 1], [0, 200]);

  // Timeline Progress
  const timelineRef = useRef<HTMLElement>(null);
  const { scrollYProgress: timelineProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end end"]
  });

  const timelineHeight = useTransform(timelineProgress, [0, 1], ["0%", "100%"]);

  return (
    <main className={styles.main} ref={containerRef}>
      
      {/* 1. Cinematic Portal Hero */}
      <section className={styles.heroSection} ref={heroRef}>
        <motion.div 
          className={styles.heroBackground}
          style={{ scale: heroScale, rotate: heroRotate }}
        >
          <div className={styles.heroVideoMask}>
            <h1 className={styles.heroTitle}>ESTABLISHED<br/>2012</h1>
          </div>
        </motion.div>

        <motion.div 
          className={styles.heroContent}
          style={{ opacity: heroOpacity, y: heroContentY }}
        >
          <span className={styles.heroYear}>A LEGACY OF TRUST</span>
          <p className={styles.heroSubtitle}>
            Dahabshiil Bank International (DBI) is the first fully-fledged Sharia bank established in Somaliland, dedicated to ethical financial empowerment.
          </p>
        </motion.div>
      </section>

      {/* 2. Interactive Growth Timeline */}
      <section className={styles.timelineSection} ref={timelineRef}>
        <div className={styles.timelineContainer}>
          <div className={styles.timelineLine} />
          <motion.div 
            className={styles.timelineProgress} 
            style={{ height: timelineHeight }}
          />

          {[
            {
              year: "2012",
              title: "The Vision Born",
              desc: "Launched as the first fully-fledged Sharia bank in Somaliland to fill the gap in Islamic financial services.",
              icon: ShieldCheck
            },
            {
              year: "2015",
              title: "Regional Expansion",
              desc: "Expanded operations across East Africa and the Gulf Region, connecting key commercial hubs.",
              icon: Globe
            },
            {
              year: "2018",
              title: "Technological Leap",
              desc: "Introduced advanced automation and the latest banking technology to provide cost-effective Sharia solutions.",
              icon: Compass
            },
            {
              year: "2024",
              title: "Global Reach",
              desc: "Connecting the diaspora from Western Europe to North America with a presence in all major international markets.",
              icon: Target
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              className={styles.timelineItem}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className={styles.timelineDot} />
              <span className={styles.timelineDate}>{item.year}</span>
              <h3 className={styles.timelineTitle}>{item.title}</h3>
              <p className={styles.timelineDesc}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Global Connectivity Hub (The Map) */}
      <section className={styles.mapSection}>
        <div className={styles.mapHeader}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            A Global Footprint
          </motion.h2>
          <p>We connect East Africa to the Gulf Region, Western Europe, and North America through reliable, Sharia-compliant infrastructure.</p>
        </div>

        <div className={styles.mapContainer}>
          <div className={styles.worldMapBg} />
          <svg className={styles.arcOverlay} viewBox="0 0 1000 500" preserveAspectRatio="none">
            <motion.path 
              d="M 500 350 Q 400 200 450 100" 
              className={styles.arcPath}
              stroke="var(--color-cyan)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
            />
            <motion.path 
              d="M 500 350 Q 600 300 650 250" 
              className={styles.arcPath}
              stroke="var(--color-cyan)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3 }}
            />
            <motion.path 
              d="M 500 350 Q 300 150 150 150" 
              className={styles.arcPath}
              stroke="var(--color-cyan)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.6 }}
            />
          </svg>

          <div className={styles.mapNode} style={{ top: '70%', left: '50.2%' }}>
            <div className={styles.nodePulse} />
            <span className={styles.nodeLabel}>Headquarters</span>
          </div>
          <div className={styles.mapNode} style={{ top: '20%', left: '44%' }}>
            <div className={styles.nodePulse} />
            <span className={styles.nodeLabel}>Europe</span>
          </div>
          <div className={styles.mapNode} style={{ top: '48%', left: '65.5%' }}>
            <div className={styles.nodePulse} />
            <span className={styles.nodeLabel}>Middle East</span>
          </div>
          <div className={styles.mapNode} style={{ top: '30%', left: '16%' }}>
            <div className={styles.nodePulse} />
            <span className={styles.nodeLabel}>North America</span>
          </div>
        </div>
      </section>

      {/* 4. Serving the Impact (Who We Serve Grid) */}
      <section className={styles.impactSection}>
        <div className={styles.impactHeader}>
          <h2>Dedicated to Excellence</h2>
        </div>
        <div className={styles.impactGrid}>
          {[
            {
              title: "Governments & Embassies",
              desc: "Providing efficient banking services with a friendly, welcoming, and trustworthy environment to global missions.",
              icon: Building,
              image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?q=80&w=1000&auto=format&fit=crop"
            },
            {
              title: "International NGOs",
              desc: "Collaborating with local and international NGOs to facilitate humanitarian and development goals.",
              icon: Globe,
              image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop"
            },
            {
              title: "Business Leaders",
              desc: "Empowering merchants and potential executives to start and grow their business with affordable Islamic finance.",
              icon: Briefcase,
              image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
            },
            {
              title: "Global Diaspora",
              desc: "Bringing the Bank closer to the community abroad, providing accessible Sharia-compliant solutions anywhere.",
              icon: ShieldCheck,
              image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1000&auto=format&fit=crop"
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              className={styles.impactItem}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Image 
                src={item.image} 
                alt={item.title} 
                fill 
                className={styles.impactImage}
              />
              <div className={styles.impactOverlay} />
              <div className={styles.impactContent}>
                <item.icon size={32} className={styles.impactIcon} />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. The Guiding Principles (Sticky-Scroll Split Screen) */}
      <section className={styles.principlesSection}>
        <div className={styles.splitLayout}>
          
          <div className={styles.stickyColumn}>
            <div className={styles.stickyContent}>
              <ShieldCheck size={48} className={styles.stickyIcon} />
              <h2>The Principles<br/>That Drive Us.</h2>
              <p>Since inception, we have displayed magnificent growth by adhering to the highest ethical standards of Sharia combined with the latest technological automation.</p>
              
              <Link href="/careers" className={styles.careerLink}>
                Join Our Team <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          <div className={styles.scrollColumn}>
            <motion.div className={styles.principleCard} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIconBox}><Compass size={32} /></div>
                <h3>Our Philosophy</h3>
              </div>
              <p>Dahabshiil Bank was formulated to fill a critical gap in Islamic financial services in Somaliland. Our core idea is to bring forth accessible, transparent, and affordable modes of Islamic finance to empower merchants and executives to start and grow their businesses ethically.</p>
            </motion.div>

            <motion.div className={styles.principleCard} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIconBox}><Eye size={32} /></div>
                <h3>Our Vision</h3>
              </div>
              <p>We envision a future where Dahabshiil is the preferred, universally trusted financial services provider, acting as the primary catalyst contributing to the sweeping economic prosperity of the people in our region and beyond.</p>
            </motion.div>

            <motion.div className={styles.principleCard} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIconBox}><Target size={32} /></div>
                <h3>Our Mission</h3>
              </div>
              <p>To offer inclusive, customer-oriented financial services utilizing our extensive local market knowledge, unmatched financial expertise, appropriate technology, and deep-rooted relationships—thus significantly contributing to the economic prosperity of all our clients and stakeholders.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Liquid CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaLiquid}>
          <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <motion.path 
              d="M0,1000 C300,800 400,1000 1000,800 L1000,1000 L0,1000 Z" 
              fill="rgba(0, 174, 239, 0.1)"
              animate={{
                d: [
                  "M0,1000 C300,800 400,1000 1000,800 L1000,1000 L0,1000 Z",
                  "M0,1000 C200,900 600,800 1000,950 L1000,1000 L0,1000 Z",
                  "M0,1000 C300,800 400,1000 1000,800 L1000,1000 L0,1000 Z"
                ]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </div>

        <div className={styles.ctaContent}>
          <motion.h2 
            className={styles.ctaTitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Ready to Build Your Future?
          </motion.h2>
          <Link href="/careers">
            <motion.button 
              className={styles.ctaButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join the Dahabshiil Family <ArrowRight size={24} />
            </motion.button>
          </Link>
        </div>
      </section>

    </main>
  );
}
