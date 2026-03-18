"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Plus, CreditCard, ShieldCheck, Smartphone, Landmark, HelpCircle, ChevronRight } from "lucide-react";
import styles from "./Faq.module.css";
import Link from "next/link";

// Realistic Banking FAQ Mock Data
const FAQ_CATEGORIES = [
  { id: "general", name: "General Banking", icon: Landmark },
  { id: "digital", name: "Digital Services", icon: Smartphone },
  { id: "accounts", name: "Accounts & Finance", icon: CreditCard },
  { id: "security", name: "Security & Privacy", icon: ShieldCheck },
];

const FAQS = [
  // General Banking
  { id: 1, categoryId: "general", question: "What are your standard branch operating hours?", answer: "Most Dahabshiil Bank branches are open Saturday to Thursday, from 7:30 AM to 4:00 PM. However, hours may vary slightly by location. Please check our Branch Locator for specific details." },
  { id: 2, categoryId: "general", question: "How do I open a new bank account?", answer: "To open a new account, you must visit a local branch with your valid National ID or Passport, two passport-sized photographs, and a justification of income/address. The process is quick and simple." },
  { id: 3, categoryId: "general", question: "Are your services Sharia-compliant?", answer: "Yes, Dahabshil Bank International is a fully-fledged Sharia bank licensed by the Central Banks of Somalia and Somaliland. All our products are 100% Sharia-compliant." },
  
  // Digital Services
  { id: 4, categoryId: "digital", question: "How do I register for Internet Banking?", answer: "If you have an active account, you can apply for E-banking online through our website or visit your nearest branch to have it activated instantly by our customer service team." },
  { id: 5, categoryId: "digital", question: "Is the Mobile Banking App available on iOS and Android?", answer: "Yes! Our DahabPlus and standard Banking App are both available for download on the Apple App Store and Google Play Store." },
  { id: 6, categoryId: "digital", question: "What do I do if I forget my E-Banking password?", answer: "You can click on the 'Forgot Password' link on the E-banking login page. You will receive an OTP on your registered mobile number to reset your password securely." },
  
  // Accounts
  { id: 7, categoryId: "accounts", question: "What is the Dahabo Account for Women?", answer: "'Dahabo' means 'Gold' in Somali. This account is exclusively tailored for our female clients, offering specialized savings, investment, and current account features to create real value for their businesses and families." },
  { id: 8, categoryId: "accounts", question: "Can I get a Cheque Book with my Savings Account?", answer: "Yes, both our Current and Savings accounts come with Cheque Book facilities, subject to standard KYC and eligibility checks." },
  { id: 9, categoryId: "accounts", question: "Do you offer property or vehicle financing?", answer: "Absolutely. We offer competitive Murabaha Personal and Business Finance options, including Car Finance, Home Finance, and Real Estate Investment Finance." },
  
  // Security
  { id: 10, categoryId: "security", question: "How do I block a lost or stolen Debit Card?", answer: "You can instantly block your card online through our E-Banking portal, via the mobile app, or by calling our support line at +252 65 300 002 immediately." },
  { id: 11, categoryId: "security", question: "How does Dahabshiil protect my online transactions?", answer: "We use industry-leading encryption and multi-factor authentication (MFA) to ensure that every transaction you make online or via the app is fully secured against unauthorized access." },
  { id: 12, categoryId: "security", question: "Can I set transaction limits on my account?", answer: "Yes, you can configure daily and per-transaction limits directly through your E-Banking portal to add an extra layer of control and security to your funds." },
];

export default function FaqPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("general");
  const [openIds, setOpenIds] = useState<number[]>([]);

  // Toggle Accordion Function
  const toggleAccordion = (id: number) => {
    setOpenIds((prev) => 
      prev.includes(id) 
        ? prev.filter(openId => openId !== id) // Close if already open
        : [...prev, id] // Open otherwise
    );
  };

  // Filter FAQs based on search or category
  const displayedFaqs = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (query) {
      // If searching, ignore categories and search all FAQs
      return FAQS.filter(faq => 
        faq.question.toLowerCase().includes(query) || 
        faq.answer.toLowerCase().includes(query)
      );
    }
    // If not searching, just show active category
    return FAQS.filter(faq => faq.categoryId === activeCategory);
  }, [searchQuery, activeCategory]);

  return (
    <main className={styles.main}>
      
      {/* 1. Support Hero with Instant Search */}
      <section className={styles.heroSection}>
        <div className={styles.heroGlow} />
        
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.heroBadge}>Support Center</div>
          <h1 className={styles.heroTitle}>How can we help you today?</h1>
          
          <div className={styles.searchWrapper}>
            <Search className={styles.searchIcon} size={28} />
            <input 
              type="text" 
              className={styles.searchInput}
              placeholder="Search for answers e.g., 'lost card', 'opening an account'..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </motion.div>
      </section>

      {/* 2. Main Content Split */}
      <section className={styles.contentSection}>
        <div className={styles.layoutGrid}>
          
          {/* Left Sidebar: Categories (Hidden during active search) */}
          <div className={styles.sidebar}>
            <AnimatePresence>
              {searchQuery.trim() === "" ? (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20, height: 0 }}
                  className={styles.categoryMenu}
                >
                  <h3 className={styles.menuTitle}>Categories</h3>
                  {FAQ_CATEGORIES.map(category => {
                    const Icon = category.icon;
                    const isActive = activeCategory === category.id;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`${styles.categoryBtn} ${isActive ? styles.active : ""}`}
                      >
                        <div className={styles.catIconWrapper}>
                          <Icon size={20} />
                        </div>
                        <span className={styles.catText}>{category.name}</span>
                        {isActive && <ChevronRight size={16} className={styles.catArrow} />}
                      </button>
                    )
                  })}

                  {/* Contact Us Upsell */}
                  <div className={styles.contactUpsell}>
                    <HelpCircle size={24} className={styles.upsellIcon} />
                    <h4>Still need help?</h4>
                    <p>Our support team is just a call or email away.</p>
                    <Link href="/contact" className={styles.upsellBtn}>
                      Contact Us
                    </Link>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={styles.searchResultsInfo}
                >
                  <h3>Search Results</h3>
                  <p>Found <strong>{displayedFaqs.length}</strong> answers for "{searchQuery}"</p>
                  <button 
                    className={styles.clearSearchBtn}
                    onClick={() => setSearchQuery("")}
                  >
                    Clear Search
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Main Area: FAQS Accordion */}
          <div className={styles.faqList}>
            <AnimatePresence mode="popLayout">
              {displayedFaqs.map((faq) => {
                const isOpen = openIds.includes(faq.id);
                
                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ layout: { type: "spring", stiffness: 300, damping: 30 } }}
                    key={faq.id}
                    className={`${styles.accordionItem} ${isOpen ? styles.itemOpen : ""}`}
                  >
                    <button 
                      className={styles.accordionHeader}
                      onClick={() => toggleAccordion(faq.id)}
                    >
                      <h3 className={styles.questionText}>{faq.question}</h3>
                      <motion.div 
                        className={styles.iconBox}
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      >
                        <Plus size={24} />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className={styles.accordionBody}
                        >
                          <div className={styles.answerContent}>
                            <p>{faq.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}

              {/* No Results Fallback */}
              {displayedFaqs.length === 0 && (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }}
                  className={styles.noResults}
                >
                  <Search size={48} className={styles.noResultsIcon} />
                  <h3>No matching FAQs found</h3>
                  <p>We couldn't find an answer to your specific question. Please try an alternative search term or reach out to our team.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
        </div>
      </section>

    </main>
  );
}
