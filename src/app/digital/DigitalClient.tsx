"use client";

import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs";
import { Smartphone, MonitorPlay, Wifi, Layers, ArrowRight } from "lucide-react";
import styles from "@/styles/Hub.module.css";
import Link from "next/link";

const MotionLink = motion(Link);

const tabData = [
  { id: "app", label: "Banking App" },
  { id: "internet", label: "Internet Banking" },
  { id: "mobile", label: "Mobile Banking" },
  { id: "dahabplus", label: "DahabPlus" },
];

export default function DigitalClient() {
  return (
    <div className={styles.container} style={{ 
      '--hub-accent': '#3B82F6', // Electric Blue
      '--hub-glow': 'rgba(59, 130, 246, 0.25)'
    } as React.CSSProperties}>
      <section className={styles.hero}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="badge-premium mb-8 mx-auto" style={{ width: 'fit-content' }}>
            Next-Gen Banking
          </div>
          <h1 className={styles.title}>
            Banking at <span className="text-gradient">Speed</span>
          </h1>
          <p className={styles.subtitle}>
            Seamless, secure, and always accessible. Elevate your financial experience with our cutting-edge digital ecosystem designed for the modern world.
          </p>
        </motion.div>
      </section>

      <section className={styles.content}>
        <Tabs defaultValue="app">
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

          <TabsContent value="app">
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
                  title: "Dahabshil Banking App",
                  desc: "The new and improved Banking App. Open accounts, pay bills, and make transfers seamlessly on-the-go.",
                  href: "/digital/banking-app",
                  icon: Smartphone
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
                    Explore the App <ArrowRight size={20} />
                  </div>
                </MotionLink>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="internet">
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
                  title: "Internet Banking",
                  desc: "Efficient, convenient, and hassle-free banking through our secure online portal for desktop web users.",
                  href: "/digital/internet-banking",
                  icon: MonitorPlay
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
                    Launch Portal <ArrowRight size={20} />
                  </div>
                </MotionLink>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="mobile">
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
                  title: "Mobile Banking",
                  desc: "Dial *777# to access your accounts instantly. No internet required for essential financial transactions.",
                  href: "/digital/mobile-banking",
                  icon: Wifi
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
                    View USSD Codes <ArrowRight size={20} />
                  </div>
                </MotionLink>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="dahabplus">
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
                  title: "DahabPlus Portal",
                  desc: "A unified portal connecting your personal accounts and business transactions in one central hub.",
                  href: "/digital/dahab-plus",
                  icon: Layers
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
                    Discover DahabPlus <ArrowRight size={20} />
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

