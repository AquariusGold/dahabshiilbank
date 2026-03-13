"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className="text-gradient">Dahabshiil Bank</span>
        </Link>
        
        <nav className={styles.desktopNav}>
          <Link href="/personal" className={styles.navLink}>Personal Banking</Link>
          <Link href="/business" className={styles.navLink}>Business Banking</Link>
          <Link href="/digital" className={styles.navLink}>Digital Banking</Link>
          <Link href="/contact" className={styles.navLink}>Contact Us</Link>
          <Link href="/about" className={styles.navLink}>About Us</Link>
        </nav>

        <div className={styles.actions}>
          <Button variant="ghost" className={styles.loginBtn}>Login</Button>
          <Link href="/contact">
            <Button variant="primary">Open Account</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};
