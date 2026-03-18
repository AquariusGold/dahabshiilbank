"use client";

import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs";
import { Building2, Briefcase, Truck, ArrowRight, Plane, Factory, Trees } from "lucide-react";
import styles from "@/styles/Hub.module.css";
import Link from "next/link";

const MotionLink = motion(Link);

const tabData = [
  { id: "accounts", label: "Business Accounts" },
  { id: "finance", label: "Business Finance" },
];

export default function BusinessClient() {
  return (
    <div className={styles.container} style={{ 
      '--hub-accent': '#EAB308', // Corporate Gold
      '--hub-glow': 'rgba(234, 179, 8, 0.15)'
    } as React.CSSProperties}>
      <section className={styles.hero}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="badge-premium mb-8 mx-auto" style={{ width: 'fit-content' }}>
            Enterprise Solutions
          </div>
          <h1 className={styles.title}>
            Drive Your <span className="text-gradient">Growth</span>
          </h1>
          <p className={styles.subtitle}>
            Empowering organizations with robust financial infrastructure. From trade finance to industrial capital, we fuel the engine of your business success.
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
                  title: "Sole Proprietor",
                  desc: "Tailored for individual owners. Full digital access and dedicated relationship management.",
                  href: "/business/sole-proprietor",
                  icon: Briefcase
                },
                {
                  title: "Limited Liability & NGOs",
                  desc: "Robust accounts for LLPs and NGOs featuring competitive pricing and payroll solutions.",
                  href: "/business/ngos",
                  icon: Building2
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
                  desc: "Financing solutions for commercial vehicles and fleets to keep your operations moving.",
                  href: "/business/car-finance",
                  icon: Truck
                },
                {
                  title: "Trade Finance",
                  desc: "Facilitating international trade with Sharia-compliant financing for importers and exporters.",
                  href: "/business/trade-finance",
                  icon: Plane
                },
                {
                  title: "Agribusiness",
                  desc: "Islamic Agricultural Finance for equipment and solar systems to enable sustainable growth.",
                  href: "/business/agribusiness",
                  icon: Trees
                },
                {
                  title: "Industrial Finance",
                  desc: "Customized Sharia-compliant solutions for large-scale industrial facility development.",
                  href: "/business/industrial-finance",
                  icon: Factory
                },
                {
                  title: "Real Estate",
                  desc: "Murabaha financing for commercial property development and corporate investments.",
                  href: "/business/real-estate",
                  icon: Building2
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
        </Tabs>
      </section>
    </div>
  );
}

