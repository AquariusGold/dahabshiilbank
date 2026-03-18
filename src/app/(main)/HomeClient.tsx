"use client";

import { motion, Variants } from "framer-motion";
import { Hero } from "@/components/sections/Hero";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Briefcase, Smartphone, UserCircle, Globe2, ShieldCheck, TrendingUp } from "lucide-react";
import Link from "next/link";
import styles from "./Home.module.css";
import Image from "next/image";

export default function HomeClient() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2 
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <main className={styles.main}>
      <Hero />
      
      {/* Scroll-Triggered Services Section */}
      <section className={styles.servicesSection}>
        <motion.div 
          className={styles.sectionHeader}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className={styles.badge} variants={itemVariants}>
            Our Services
          </motion.div>
          <motion.h2 className={styles.sectionTitle} variants={itemVariants}>
            Banking <span className="text-gradient">Without Borders</span>
          </motion.h2>
          <motion.p className={styles.sectionSubtitle} variants={itemVariants}>
            Choose the right banking solution for your needs. We provide accessible and affordable sharia compliant financial solutions.
          </motion.p>
        </motion.div>

        <motion.div 
          className={styles.servicesGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <Link href="/personal">
            <motion.div className={styles.serviceCard} variants={itemVariants}>
              <div className={styles.serviceIconWrapper}>
                <UserCircle size={32} />
              </div>
              <h3 className={styles.serviceTitle}>Personal Banking</h3>
              <p className={styles.serviceDesc}>
                With DBI Personal Financing options, we can help make your dreams a reality. We offer excellent profit rates and convenient enrolment.
              </p>
              <div className={styles.serviceLink}>
                Explore Personal <ArrowRight size={18} />
              </div>
            </motion.div>
          </Link>

          <Link href="/business">
            <motion.div className={styles.serviceCard} variants={itemVariants}>
              <div className={styles.serviceIconWrapper}>
                <Briefcase size={32} />
              </div>
              <h3 className={styles.serviceTitle}>Business Banking</h3>
              <p className={styles.serviceDesc}>
                Business solutions designed to enable you to drive your organization to the next level of financial success globally and locally.
              </p>
              <div className={styles.serviceLink}>
                Elevate Business <ArrowRight size={18} />
              </div>
            </motion.div>
          </Link>

          <Link href="/digital">
            <motion.div className={styles.serviceCard} variants={itemVariants}>
              <div className={styles.serviceIconWrapper}>
                <Smartphone size={32} />
              </div>
              <h3 className={styles.serviceTitle}>Digital Platforms</h3>
              <p className={styles.serviceDesc}>
                Whatever device you have, our Mobile Banking enables you to bank anytime and at anyplace. Send money and pay bills instantly.
              </p>
              <div className={styles.serviceLink}>
                Go Digital <ArrowRight size={18} />
              </div>
            </motion.div>
          </Link>
        </motion.div>
      </section>

      {/* Parallax Trust Banner */}
      <section className={styles.parallaxBanner}>
        <Image 
          src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=2000"
          alt="Dahabshiil Bank Trust"
          fill
          className={styles.parallaxImage}
          priority={false}
        />
        <div className={styles.parallaxOverlay}></div>
        
        <motion.div 
          className={styles.parallaxContent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 className={styles.parallaxTitle} variants={itemVariants}>
            The First Fully Fledged Sharia Bank in Somaliland.
          </motion.h2>
          
          <motion.div className={styles.statsGrid} variants={containerVariants}>
            <motion.div className={styles.statItem} variants={itemVariants}>
              <ShieldCheck size={48} color="var(--color-cyan)" style={{ marginBottom: "16px" }} />
              <div className={styles.statValue}>100%</div>
              <div className={styles.statLabel}>Sharia Compliant</div>
            </motion.div>
            
            <motion.div className={styles.statItem} variants={itemVariants}>
              <Globe2 size={48} color="var(--color-cyan)" style={{ marginBottom: "16px" }} />
              <div className={styles.statValue}>Global</div>
              <div className={styles.statLabel}>Reach & Networks</div>
            </motion.div>
            
            <motion.div className={styles.statItem} variants={itemVariants}>
              <TrendingUp size={48} color="var(--color-cyan)" style={{ marginBottom: "16px" }} />
              <div className={styles.statValue}>24/7</div>
              <div className={styles.statLabel}>Digital Access</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Pre-Footer CTA */}
      <section className={styles.ctaSection}>
        <motion.div 
          className={styles.ctaBox}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.ctaTitle}>Ready to move forward?</h2>
          <p className={styles.ctaDesc}>
            Open an account today. E-banking made secure, seamless, and tailored for you.
          </p>
          <div className={styles.ctaButtonGroup}>
            <Link href="/contact">
              <Button variant="primary" size="lg">Apply Online</Button>
            </Link>
            <Link href="/faq">
              <Button variant="outline" size="lg">Contact Support</Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
