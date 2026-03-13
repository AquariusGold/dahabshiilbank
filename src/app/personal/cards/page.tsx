"use client";

import { useRef, useState, useEffect, useMemo } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { 
  Globe, 
  ShoppingCart, 
  Plane, 
  ShieldCheck, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight,
  ArrowUpRight,
  Zap,
  Lock,
  Award,
  TrendingUp
} from "lucide-react";
import styles from "./CardsOverview.module.css";
import Image from "next/image";
import Link from "next/link";

// 1. Particle System Component (The "Heartbeat" of the network)
function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: { x: number; y: number; vx: number; vy: number; size: number; color: string }[] = [];
    const particleCount = 100;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          size: Math.random() * 2 + 1,
          color: Math.random() > 0.5 ? "rgba(0, 174, 239, 0.4)" : "rgba(212, 175, 55, 0.3)"
        });
      }
    };

    let animationFrameId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);
    resize();
    init();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.particleCanvas} />;
}

// 2. 3D Card Item Component
function CardItem({ card, index, activeIndex, setActiveIndex }: any) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);
  
  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const isActive = index === activeIndex;

  return (
    <motion.div
      className={`${styles.cardWrapper} ${isActive ? styles.cardActive : ""}`}
      onClick={() => setActiveIndex(index)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: 1, 
        scale: isActive ? 1.1 : 0.85,
        filter: isActive ? "blur(0px)" : "blur(2px)",
        z: isActive ? 50 : 0
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
    >
      <div className={`${styles.cardInner} ${styles[card.theme]}`}>
        {/* Holographic Shimmer Overlay */}
        <div className={styles.shimmerLayer} />
        
        <div className={styles.cardHeader}>
          <div className={styles.cardLogo}>DAHABSHIIL</div>
          <div className={styles.cardType}>{card.type}</div>
        </div>

        <div className={styles.cardVisual}>
          <div className={styles.cardChip} />
          {card.icon}
        </div>

        <div className={styles.cardFooter}>
          <div className={styles.cardNumber}>**** **** **** {card.lastFour}</div>
          <div className={styles.cardHolder}>{card.holder}</div>
        </div>
      </div>
    </motion.div>
  );
}

export default function CardsOverviewPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      id: "mastercard",
      type: "Mastercard Debit",
      theme: "mastercardTheme",
      lastFour: "8820",
      holder: "CORPORATE PARTNER",
      icon: <Globe className={styles.visIcon} />,
      title: "GLOBAL",
      features: [
        { icon: <Globe size={20} />, label: "Worldwide Acceptance" },
        { icon: <Lock size={20} />, label: "Enhanced Security" },
        { icon: <Plane size={20} />, label: "Travel Perks" }
      ],
      link: "/personal/mastercard"
    },
    {
      id: "dahabo",
      type: "Dahabo Gold",
      theme: "dahaboTheme",
      lastFour: "4401",
      holder: "EXCLUSIVE MEMBER",
      icon: <Award className={styles.visIcon} />,
      title: "EXCLUSIVE",
      features: [
        { icon: <ShoppingCart size={20} />, label: "Premium Lifestyle" },
        { icon: <Zap size={20} />, label: "Instant Access" },
        { icon: <ShieldCheck size={20} />, label: "Family Protection" }
      ],
      link: "/personal/dahabo"
    },
    {
      id: "business",
      type: "Corporate Tier",
      theme: "businessTheme",
      lastFour: "9912",
      holder: "ENTERPRISE",
      icon: <TrendingUp className={styles.visIcon} />,
      title: "COMMERCE",
      features: [
        { icon: <TrendingUp size={20} />, label: "Higher Limits" },
        { icon: <Users size={20} />, label: "Team Management" },
        { icon: <ArrowUpRight size={20} />, label: "Business Growth" }
      ]
    }
  ];

  return (
    <main className={styles.main}>
      <ParticleBackground />

      {/* Floating Background Typography */}
      <div className={styles.bgTextContainer}>
        <AnimatePresence mode="wait">
          <motion.h2
            key={cards[activeIndex].title}
            initial={{ opacity: 0, x: 100, filter: "blur(10px)" }}
            animate={{ opacity: 0.1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: -100, filter: "blur(10px)" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={styles.bgTitle}
          >
            {cards[activeIndex].title}
          </motion.h2>
        </AnimatePresence>
      </div>

      <div className={styles.experienceLayout}>
        
        {/* 1. The Magnetic Deck */}
        <div className={styles.deckContainer}>
          <div className={styles.cardsTrack}>
            {cards.map((card, i) => (
              <CardItem 
                key={card.id} 
                card={card} 
                index={i} 
                activeIndex={activeIndex} 
                setActiveIndex={setActiveIndex} 
              />
            ))}
          </div>
        </div>

        {/* 2. Focused Card Detail Overlay */}
        <div className={styles.detailOverlay}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className={styles.detailContent}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <div className={styles.detailHeader}>
                <span className={styles.badge}>Dahabshiil Premium</span>
                <h3>{cards[activeIndex].type}</h3>
              </div>
              
              <div className={styles.featureGrid}>
                {cards[activeIndex].features.map((feat: any, idx: number) => (
                  <motion.div 
                    key={idx} 
                    className={styles.featureItem}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className={styles.featureIcon}>{feat.icon}</div>
                    <span>{feat.label}</span>
                  </motion.div>
                ))}
              </div>

              <Link href={cards[activeIndex].link || "#"} className={styles.primaryBtn}>
                Explore Full Benefits <ArrowRight size={20} />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* Manual Controls */}
      <div className={styles.controls}>
        <button 
          className={styles.controlBtn}
          onClick={() => setActiveIndex((prev) => (prev > 0 ? prev - 1 : cards.length - 1))}
        >
          <ChevronLeft size={30} />
        </button>
        <div className={styles.indicators}>
          {cards.map((_, i) => (
            <div 
              key={i} 
              className={`${styles.indicator} ${i === activeIndex ? styles.indicatorActive : ""}`} 
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
        <button 
          className={styles.controlBtn}
          onClick={() => setActiveIndex((prev) => (prev < cards.length - 1 ? prev + 1 : 0))}
        >
          <ChevronRight size={30} />
        </button>
      </div>

    </main>
  );
}

// Additional missing imports for Card Detail Overlay
import { Users } from "lucide-react";
