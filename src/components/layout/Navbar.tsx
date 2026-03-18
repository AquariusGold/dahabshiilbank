"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { createClient } from '@/lib/supabase/client';
import styles from './Navbar.module.css';

import type { User } from '@supabase/supabase-js';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [userFullName, setUserFullName] = useState<string>('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Listen for auth state changes
  useEffect(() => {
    const supabase = createClient();

    // Get initial session
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
      if (user) {
        setUserFullName(user.user_metadata?.full_name || user.email || '');
      }
      setLoading(false);
    });

    // Listen for changes (login/logout)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      const currentUser = session?.user ?? null;
      setUser(currentUser);
      if (currentUser) {
        setUserFullName(currentUser.user_metadata?.full_name || currentUser.email || '');
      } else {
        setUserFullName('');
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    setUser(null);
    setUserFullName('');
    setDropdownOpen(false);
    router.push('/');
    router.refresh();
  }

  // Get initials for the avatar
  const initials = userFullName
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

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
          {loading ? (
            // Skeleton placeholder while checking auth
            <div className={styles.authSkeleton} />
          ) : user ? (
            // Logged in — show user avatar + name with dropdown
            <div className={styles.userMenu} ref={dropdownRef}>
              <button
                className={styles.userBtn}
                onClick={() => setDropdownOpen(prev => !prev)}
                id="user-menu-btn"
              >
                <span className={styles.avatar}>{initials}</span>
                <span className={styles.userName}>{userFullName}</span>
                <svg className={`${styles.chevron} ${dropdownOpen ? styles.chevronOpen : ''}`} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {dropdownOpen && (
                <div className={styles.dropdown}>
                  <Link
                    href="/profile"
                    className={styles.dropdownItem}
                    onClick={() => setDropdownOpen(false)}
                    id="profile-link"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    My Profile
                  </Link>
                  <div className={styles.dropdownDivider} />
                  <button
                    className={styles.dropdownItem}
                    onClick={handleLogout}
                    id="logout-btn"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            // Not logged in — show Login button
            <Link href="/auth/login">
              <Button variant="ghost" className={styles.loginBtn}>Login</Button>
            </Link>
          )}
          <Link href="/contact">
            <Button variant="primary">Open Account</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};
