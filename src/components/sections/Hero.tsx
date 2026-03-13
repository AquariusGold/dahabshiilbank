"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <section className={styles.heroSection}>
      {/* Animated Image Background */}
      <div className={styles.imageBackground}></div>
      <div className={styles.overlay}></div>

      {/* Background elements for depth */}
      <div className={styles.glowOrb1}></div>
      <div className={styles.glowOrb2}></div>
      
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className={styles.badge}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Digital Premium Banking
          </motion.div>
          
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Dahabshiil Bank <span className="text-gradient">International</span>
          </motion.h1>
          
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Dahabshil Bank International (DBI) is fully fledged sharia bank licensed by both Central Banks of Somalia and Somaliland. An integral, trustworthy, and profitable bank that provides accessible and affordable sharia compliant financial solutions.
          </motion.p>
          
          <motion.div 
            className={styles.ctaGroup}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <Link href="/contact">
              <Button variant="primary" size="lg">Open an account today</Button>
            </Link>
            <Link href="/digital/internet-banking">
              <Button variant="outline" size="lg">E-banking made secure</Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
