"use client";

import { motion } from "framer-motion";
import { 
  Globe, 
  ShieldCheck, 
  ArrowRightLeft, 
  Briefcase,
  Monitor,
  Lock,
  ChevronRight,
  CheckCircle2,
  BarChart3,
  Clock,
  CreditCard,
  FileText,
  Smartphone,
  Users,
  Zap,
  Send,
  TrendingUp,
  ArrowUpRight,
  ArrowDownLeft
} from "lucide-react";
import styles from "./InternetBanking.module.css";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  })
};

/* ─────────────────────────────────────────────
   1. HERO — Dashboard Preview
   ───────────────────────────────────────────── */
function Hero() {
  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.heroInner}
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
      >
        <motion.div className={styles.heroBadge} variants={fadeUp} custom={0}>
          <Monitor size={14} /> Internet Banking Platform
        </motion.div>

        <motion.h1 className={styles.heroTitle} variants={fadeUp} custom={1}>
          Your Finances,{" "}
          <span className={styles.heroGradient}>One Dashboard Away.</span>
        </motion.h1>

        <motion.p className={styles.heroSub} variants={fadeUp} custom={2}>
          Manage accounts, send transfers, view real-time analytics, and control your wealth
          from anywhere — all through our secure, enterprise-grade internet banking portal.
        </motion.p>

        <motion.div className={styles.heroActions} variants={fadeUp} custom={3}>
          <Link href="/auth/signup" className={styles.btnPrimary}>
            Get Started <ChevronRight size={16} />
          </Link>
          <Link href="/contact" className={styles.btnSecondary}>
            Request Demo
          </Link>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          className={styles.dashboardPreview}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.dashboardFrame}>
            {/* Browser chrome */}
            <div className={styles.dashTitleBar}>
              <div className={styles.dashDot} />
              <div className={styles.dashDot} />
              <div className={styles.dashDot} />
              <div className={styles.dashUrl}>
                <Lock size={10} style={{ marginRight: 6, opacity: 0.5 }} />
                ebanking.dahabshiilbank.com/dashboard
              </div>
            </div>

            <div className={styles.dashBody}>
              {/* Sidebar */}
              <div className={styles.dashSidebar}>
                {["Dashboard", "Transfers", "Accounts", "Statements", "Cards", "Settings"].map((item, i) => (
                  <div key={item} className={`${styles.dashSideItem} ${i === 0 ? styles.dashSideItemActive : ''}`}>
                    <div className={styles.dashSideIcon} />
                    {item}
                  </div>
                ))}
              </div>

              {/* Main content */}
              <div className={styles.dashMain}>
                <div className={styles.dashStatsRow}>
                  <div className={styles.dashStatCard}>
                    <div className={styles.dashStatLabel}>Total Balance</div>
                    <div className={styles.dashStatValue}>$48,250</div>
                    <div className={styles.dashStatChange}>↑ 12.4% this month</div>
                  </div>
                  <div className={styles.dashStatCard}>
                    <div className={styles.dashStatLabel}>Income</div>
                    <div className={styles.dashStatValue}>$12,800</div>
                    <div className={styles.dashStatChange}>↑ 8.2%</div>
                  </div>
                  <div className={styles.dashStatCard}>
                    <div className={styles.dashStatLabel}>Transfers</div>
                    <div className={styles.dashStatValue}>24</div>
                    <div className={styles.dashStatChange}>This week</div>
                  </div>
                </div>

                <div className={styles.dashChartArea}>
                  <svg className={styles.chartLine} viewBox="0 0 600 180" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#00AEEF" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#00AEEF" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M0,140 C40,120 80,90 120,100 C160,110 200,60 240,70 C280,80 320,30 360,45 C400,60 440,20 480,35 C520,50 560,25 600,15 L600,180 L0,180 Z" fill="url(#chartGrad)" />
                    <path d="M0,140 C40,120 80,90 120,100 C160,110 200,60 240,70 C280,80 320,30 360,45 C400,60 440,20 480,35 C520,50 560,25 600,15" fill="none" stroke="#00AEEF" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   2. STATS BAR
   ───────────────────────────────────────────── */
function StatsBar() {
  const stats = [
    { value: "99.9%",  label: "Uptime Guarantee" },
    { value: "256‑bit", label: "SSL Encryption" },
    { value: "24/7",   label: "Monitoring" },
    { value: "<2s",    label: "Transfer Speed" }
  ];

  return (
    <div className={styles.statsBar}>
      {stats.map((s, i) => (
        <motion.div
          key={i}
          className={styles.statItem}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: i * 0.08, duration: 0.5 }}
        >
          <div className={styles.statNumber}>
            <span className={styles.statCyan}>{s.value}</span>
          </div>
          <div className={styles.statLabel}>{s.label}</div>
        </motion.div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   3. FEATURE ROWS — Alternating Layout
   ───────────────────────────────────────────── */
function FeatureRows() {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.featuresInner}>

        {/* Feature 1: Instant Transfers */}
        <motion.div
          className={styles.featureRow}
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <div>
            <motion.div className={styles.featureTag} variants={fadeUp} custom={0}>
              <ArrowRightLeft size={14} /> Instant Transfers
            </motion.div>
            <motion.h2 className={styles.featureTitle} variants={fadeUp} custom={1}>
              Send Money Anywhere,<br />In Seconds.
            </motion.h2>
            <motion.p className={styles.featureDesc} variants={fadeUp} custom={2}>
              Execute domestic and international transfers instantly. Seamlessly integrate with
              your e-Dahab mobile wallet, manage scheduled payments, and view real-time
              transaction histories — all from one place.
            </motion.p>
            <motion.ul className={styles.featureChecks} variants={fadeUp} custom={3}>
              <li><CheckCircle2 size={16} /> e-Dahab wallet integration</li>
              <li><CheckCircle2 size={16} /> Scheduled & recurring transfers</li>
              <li><CheckCircle2 size={16} /> Multi-currency support (USD, EUR, KES)</li>
              <li><CheckCircle2 size={16} /> Real-time transaction tracking</li>
            </motion.ul>
          </div>

          <motion.div className={styles.featureVisual} variants={fadeUp} custom={2}>
            <div className={styles.featureCard}>
              <div className={styles.transferMockup}>
                <div className={styles.transferRow}>
                  <div className={styles.transferIcon}><Send size={20} /></div>
                  <div className={styles.transferDetails}>
                    <div className={styles.transferName}>Mohamed Hassan</div>
                    <div className={styles.transferSub}>e-Dahab Transfer • 2 min ago</div>
                  </div>
                  <div className={styles.transferAmountNeg}>-$350.00</div>
                </div>
                <div className={styles.transferDivider} />
                <div className={styles.transferRow}>
                  <div className={styles.transferIcon}><ArrowDownLeft size={20} /></div>
                  <div className={styles.transferDetails}>
                    <div className={styles.transferName}>Salary Deposit</div>
                    <div className={styles.transferSub}>Company Payroll • Today</div>
                  </div>
                  <div className={styles.transferAmount}>+$4,200.00</div>
                </div>
                <div className={styles.transferDivider} />
                <div className={styles.transferRow}>
                  <div className={styles.transferIcon}><ArrowUpRight size={20} /></div>
                  <div className={styles.transferDetails}>
                    <div className={styles.transferName}>Rent Payment</div>
                    <div className={styles.transferSub}>Scheduled • Tomorrow</div>
                  </div>
                  <div className={styles.transferAmountNeg}>-$800.00</div>
                </div>
                <div className={styles.transferDivider} />
                <div className={styles.transferRow}>
                  <div className={styles.transferIcon}><TrendingUp size={20} /></div>
                  <div className={styles.transferDetails}>
                    <div className={styles.transferName}>Business Revenue</div>
                    <div className={styles.transferSub}>International • Yesterday</div>
                  </div>
                  <div className={styles.transferAmount}>+$12,500.00</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Feature 2: Security (Reversed) */}
        <motion.div
          className={styles.featureRowReversed}
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <div>
            <motion.div className={styles.featureTag} variants={fadeUp} custom={0}>
              <ShieldCheck size={14} /> Bank-Grade Security
            </motion.div>
            <motion.h2 className={styles.featureTitle} variants={fadeUp} custom={1}>
              Built for Trust.<br />Engineered for Safety.
            </motion.h2>
            <motion.p className={styles.featureDesc} variants={fadeUp} custom={2}>
              Every session is protected by multi-layer security — from OTP verification to
              biometric authentication and real-time fraud monitoring. Your data never leaves
              our encrypted environment.
            </motion.p>
            <motion.ul className={styles.featureChecks} variants={fadeUp} custom={3}>
              <li><CheckCircle2 size={16} /> 256-bit end-to-end encryption</li>
              <li><CheckCircle2 size={16} /> OTP + biometric authentication</li>
              <li><CheckCircle2 size={16} /> Real-time fraud detection & alerts</li>
              <li><CheckCircle2 size={16} /> Automatic session timeout</li>
            </motion.ul>
          </div>

          <motion.div className={styles.featureVisual} variants={fadeUp} custom={2}>
            <div className={styles.featureCard}>
              <div className={styles.securityVisual}>
                <div className={styles.secShield}>
                  <Lock size={32} />
                </div>
                <div className={styles.secBars}>
                  <div className={styles.secBar}><CheckCircle2 size={14} /> SSL Certificate Active</div>
                  <div className={styles.secBar}><CheckCircle2 size={14} /> OTP Verification Enabled</div>
                  <div className={styles.secBar}><CheckCircle2 size={14} /> Device Authorization Active</div>
                  <div className={styles.secBar}><CheckCircle2 size={14} /> Suspicious Activity Monitor</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   4. CAPABILITIES GRID
   ───────────────────────────────────────────── */
function CapabilitiesGrid() {
  const capabilities = [
    { icon: <BarChart3 size={22} />,   title: "Real-Time Analytics",    desc: "Interactive dashboards with live balance updates, spending trends, and cash flow projections." },
    { icon: <FileText size={22} />,     title: "Digital Statements",     desc: "Download and print formatted account statements for any date range instantly." },
    { icon: <Users size={22} />,        title: "Multi-User Access",      desc: "Assign different access levels for employees, accountants, and business partners." },
    { icon: <CreditCard size={22} />,   title: "Card Management",        desc: "Freeze, unfreeze, and set spending limits on your debit and credit cards instantly." },
    { icon: <Smartphone size={22} />,   title: "e-Dahab Integration",    desc: "Deposit to and withdraw from your e-Dahab mobile wallet directly within the portal." },
    { icon: <Clock size={22} />,        title: "Scheduled Payments",     desc: "Automate recurring bills, payroll, and vendor payments with flexible scheduling." },
  ];

  return (
    <section className={styles.capSection}>
      <div className={styles.capHeader}>
        <motion.div
          className={styles.capBadge}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Zap size={14} /> Full Capabilities
        </motion.div>
        <motion.h2
          className={styles.capTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          Everything You Need.<br />Nothing You Don&apos;t.
        </motion.h2>
      </div>

      <div className={styles.capGrid}>
        {capabilities.map((cap, i) => (
          <motion.div
            key={i}
            className={styles.capCard}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
          >
            <div className={styles.capIcon}>{cap.icon}</div>
            <h3>{cap.title}</h3>
            <p>{cap.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   5. CTA
   ───────────────────────────────────────────── */
function CTASection() {
  return (
    <section className={styles.ctaSection}>
      <motion.div
        className={styles.ctaBox}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={styles.ctaTitle}>Ready to Take Control?</h2>
        <p className={styles.ctaSub}>
          Open your internet banking account today and experience the future of digital finance.
        </p>
        <div className={styles.ctaActions}>
          <Link href="/auth/signup" className={styles.btnPrimary}>
            Open an Account <ChevronRight size={16} />
          </Link>
          <Link href="/contact" className={styles.btnSecondary}>
            Contact Sales
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PAGE EXPORT
   ───────────────────────────────────────────── */
export default function InternetBankingPage() {
  return (
    <main className={styles.main}>
      <Hero />
      <StatsBar />
      <FeatureRows />
      <CapabilitiesGrid />
      <CTASection />

      <section className={styles.helpSection}>
        <p>Can&apos;t find what you&apos;re looking for?</p>
        <Link href="mailto:Info@dahabshilbank.com" className={styles.helpEmail}>
          Email Info@dahabshilbank.com
        </Link>
      </section>
    </main>
  );
}
