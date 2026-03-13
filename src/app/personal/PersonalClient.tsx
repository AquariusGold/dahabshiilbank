"use client";

import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs";
import { Wallet, Car, Home, CreditCard, Heart, ArrowRight, Building } from "lucide-react";
import styles from "@/styles/Hub.module.css";
import Link from "next/link";

const MotionLink = motion(Link);

const tabData = [
  { id: "accounts", label: "Accounts" },
  { id: "finance", label: "Finance" },
  { id: "dahabo", label: "Dahabo for Women" },
  { id: "cards", label: "Cards" },
];

export default function PersonalClient() {
  return (
    <div className={styles.container} style={{ 
      '--hub-accent': 'var(--color-cyan)',
      '--hub-glow': 'rgba(0, 174, 239, 0.2)'
    } as React.CSSProperties}>
      <section className={styles.hero}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="badge-premium mb-8 mx-auto" style={{ width: 'fit-content' }}>
            Personal Banking
          </div>
          <h1 className={styles.title}>
            Bank on Your <span className="text-gradient">Terms</span>
          </h1>
          <p className={styles.subtitle}>
            Experience a new standard of Sharia-compliant banking. From everyday accounts to future-focused finance, we empower your financial journey.
          </p>
        </motion.div>
      </section>

      <section className={styles.content}>
        <Tabs defaultValue="accounts">
          <TabsList className={styles.tabsList}>
            {tabData.map((tab) => (
              <TabsTrigger 
                key={tab.id} 
                value={tab.id}
                className={styles.tabsTrigger}
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="accounts">
            <motion.div 
              className={styles.grid}
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 }
                }
              }}
            >
              {[
                {
                  title: "Current Account",
                  desc: "Manage your day-to-day transactions hassle-free without any obstacles at any time, anywhere.",
                  href: "/personal/current-account",
                  icon: Wallet
                },
                {
                  title: "Saving Account",
                  desc: "A wholly Sharia-compliant facility for conservative investment, helping you store funds safely.",
                  href: "/personal/saving-account",
                  icon: Wallet
                },
                {
                  title: "Diaspora Account",
                  desc: "Tailored specifically for the Somali diaspora to easily manage funds back home using our digital channels.",
                  href: "/personal/diaspora-account",
                  icon: Wallet
                }
              ].map((card, i) => (
                <MotionLink 
                  key={i}
                  href={card.href}
                  className={styles.card}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0 }
                  }}
                >
                  <card.icon className={styles.cardIcon} size={48} />
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardDesc}>{card.desc}</p>
                  <div className={styles.cardAction}>
                    Explore Account <ArrowRight size={20} />
                  </div>
                </MotionLink>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="finance">
            <motion.div 
              className={styles.grid}
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 }
                }
              }}
            >
              {[
                {
                  title: "Car Finance",
                  desc: "Based on a Murabaha contract. DBI buys the car you want, then sells it back to you at a fixed margin.",
                  href: "/personal/car-finance",
                  icon: Car
                },
                {
                  title: "Home Finance",
                  desc: "Turn your dream home into a reality with bespoke, ethical, and fully Sharia-compliant finance solutions.",
                  href: "/personal/home-finance",
                  icon: Home
                },
                {
                  title: "Real Estate Finance",
                  desc: "Murabaha real estate investment banking for individual clients. Build your future brick by brick.",
                  href: "/personal/real-estate-finance",
                  icon: Building
                },
                {
                  title: "Microfinance",
                  desc: "Accessible financing opportunities to empower local micro-businesses and individuals to grow.",
                  href: "/personal/microfinance",
                  icon: Wallet
                }
              ].map((card, i) => (
                <MotionLink 
                  key={i}
                  href={card.href}
                  className={styles.card}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0 }
                  }}
                >
                  <card.icon className={styles.cardIcon} size={48} />
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardDesc}>{card.desc}</p>
                  <div className={styles.cardAction}>
                    Explore Finance <ArrowRight size={20} />
                  </div>
                </MotionLink>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="dahabo">
            <motion.div 
              className={styles.grid}
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 }
                }
              }}
            >
              {[
                {
                  title: "Dahabo Current",
                  desc: "Exclusively for women. Designed to empower financial independence and business growth.",
                  href: "/personal/dahabo",
                  icon: Heart
                },
                {
                  title: "Dahabo Saving",
                  desc: "Tailor-made savings solutions providing real value to your lifestyle, family, and aspirations.",
                  href: "/personal/dahabo",
                  icon: Heart
                }
              ].map((card, i) => (
                <MotionLink 
                  key={i}
                  href={card.href}
                  className={styles.card}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0 }
                  }}
                >
                  <card.icon className={styles.cardIcon} size={48} />
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardDesc}>{card.desc}</p>
                  <div className={styles.cardAction}>
                    Explore Dahabo <ArrowRight size={20} />
                  </div>
                </MotionLink>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="cards">
            <motion.div 
              className={styles.grid}
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 }
                }
              }}
            >
              {[
                {
                  title: "Mastercard Debit",
                  desc: "Accepted worldwide. Global cash access and enhanced security for all your online and local purchases.",
                  href: "/personal/cards",
                  icon: CreditCard
                }
              ].map((card, i) => (
                <MotionLink 
                  key={i}
                  href={card.href}
                  className={styles.card}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0 }
                  }}
                >
                  <card.icon className={styles.cardIcon} size={48} />
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardDesc}>{card.desc}</p>
                  <div className={styles.cardAction}>
                    Explore Cards <ArrowRight size={20} />
                  </div>
                </MotionLink>
              ))}
            </motion.div>
          </TabsContent>

        </Tabs>
      </section>
    </div>
  );
}

