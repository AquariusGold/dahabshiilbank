"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, Building2, Landmark, Navigation, Phone, Clock } from "lucide-react";
import styles from "./Branches.module.css";
import Image from "next/image";

// Mock Data for the Locator Dashboard
const LOCATIONS = [
  { id: 1, name: "Hargeisa Main Branch", city: "Hargeisa", type: "Branch", region: "Somaliland", address: "Road 1, Downtown Hargeisa", phone: "+252 65 300 002" },
  { id: 2, name: "Jigjiga Yar Branch", city: "Hargeisa", type: "Branch", region: "Somaliland", address: "Jigjiga Yar Street", phone: "+252 65 300 003" },
  { id: 3, name: "Hargeisa Central ATM", city: "Hargeisa", type: "ATM", region: "Somaliland", address: "26 June District", phone: null },
  { id: 4, name: "Burao City Branch", city: "Burao", type: "Branch", region: "Somaliland", address: "Main Market Road", phone: "+252 65 300 005" },
  { id: 5, name: "Berbera Port Branch", city: "Berbera", type: "Branch", region: "Somaliland", address: "Berbera Port Zone", phone: "+252 65 300 006" },
  { id: 6, name: "Mogadishu Headquarters", city: "Mogadishu", type: "Branch", region: "Somalia", address: "KM4, Maka Al-Mukarama", phone: "+252 61 200 001" },
  { id: 7, name: "Bakara Market Branch", city: "Mogadishu", type: "Branch", region: "Somalia", address: "Bakara Main Street", phone: "+252 61 200 002" },
  { id: 8, name: "Mogadishu Airport ATM", city: "Mogadishu", type: "ATM", region: "Somalia", address: "Aden Adde Int Airport", phone: null },
  { id: 9, name: "Garowe Center Branch", city: "Garowe", type: "Branch", region: "Somalia", address: "Garowe Main Square", phone: "+252 61 200 004" },
  { id: 10, name: "Bosaso Port Branch", city: "Bosaso", type: "Branch", region: "Somalia", address: "Commercial District", phone: "+252 61 200 005" },
  { id: 11, name: "Kismayo Branch", city: "Kismayo", type: "Branch", region: "Somalia", address: "Kismayo Downtown", phone: "+252 61 200 006" },
  { id: 12, name: "Borama University Branch", city: "Borama", type: "Branch", region: "Somaliland", address: "Amoud University Road", phone: "+252 65 300 007" },
];

const FILTERS = ["All", "Somaliland", "Somalia", "Branches", "ATMs"];

export default function BranchLocatorPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  // Filter Logic
  const filteredLocations = useMemo(() => {
    return LOCATIONS.filter(loc => {
      // Free text search math
      const matchesSearch = 
        loc.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        loc.city.toLowerCase().includes(searchQuery.toLowerCase());
        
      // Quick pill filter math
      const matchesFilter = 
        activeFilter === "All" ||
        activeFilter === loc.region ||
        activeFilter === loc.type ||
        (activeFilter === "Branches" && loc.type === "Branch") ||
        (activeFilter === "ATMs" && loc.type === "ATM");

      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, activeFilter]);

  return (
    <main className={styles.main}>
      
      {/* Abstract Right Canvas (The Map / Visual) */}
      <div className={styles.canvasArea}>
        <div className={styles.canvasOverlay} />
        {/* We use an abstract high-tech globe/map image as the backdrop for the locator */}
        <Image 
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000"
          alt="Abstract Globe Network"
          fill
          className={styles.canvasImage}
        />
        <div className={styles.mapLabel}>
          <MapPin size={48} className={styles.pulsePin} />
          <h2>Global Network</h2>
          <p>Find us anywhere.</p>
        </div>
      </div>

      {/* Left Panel Console */}
      <div className={styles.consolePanel}>
        
        {/* Header & Search */}
        <div className={styles.consoleHeader}>
          <h1 className={styles.title}>Branch Locator</h1>
          <p className={styles.subtitle}>Find your nearest Dahabshiil branch or ATM.</p>
          
          <div className={styles.searchBox}>
            <Search className={styles.searchIcon} size={24} />
            <input 
              type="text" 
              placeholder="Search by city e.g. Hargeisa, Mogadishu..." 
              className={styles.searchInput}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Liquid Filtering Pills */}
          <div className={styles.filtersWrapper}>
            {FILTERS.map(filter => (
              <button
                key={filter}
                className={`${styles.filterPill} ${activeFilter === filter ? styles.activePill : ""}`}
                onClick={() => setActiveFilter(filter)}
              >
                {activeFilter === filter && (
                  <motion.div layoutId="activePillBg" className={styles.activePillBg} />
                )}
                <span className={styles.pillText}>{filter}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Results List */}
        <div className={styles.resultsArea}>
          <AnimatePresence mode="popLayout">
            {filteredLocations.map((loc, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, x: -30, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ 
                  layout: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 }
                }}
                key={loc.id}
                className={styles.resultCard}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.iconWrapper}>
                    {loc.type === "Branch" ? <Building2 size={24} /> : <Landmark size={24} />}
                  </div>
                  <div className={styles.cardHeaderInfo}>
                    <h3 className={styles.cardName}>{loc.name}</h3>
                    <span className={styles.cardBadge}>{loc.type}</span>
                  </div>
                </div>
                
                <div className={styles.cardBody}>
                  <p className={styles.cardAddress}><MapPin size={16}/> {loc.address}, {loc.city}</p>
                  {loc.phone && <p className={styles.cardPhone}><Phone size={16}/> {loc.phone}</p>}
                  <p className={styles.cardHours}><Clock size={16}/> Sat - Thu (8:00 AM - 4:00 PM)</p>
                </div>

                <button className={styles.directionsBtn}>
                  <Navigation size={18} /> Get Directions
                </button>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredLocations.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className={styles.noResults}
            >
              <MapPin size={48} className={styles.noResultsIcon} />
              <h3>No locations found</h3>
              <p>Try adjusting your search or filters.</p>
            </motion.div>
          )}
        </div>

      </div>
    </main>
  );
}
