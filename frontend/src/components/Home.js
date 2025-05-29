// Home.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import HeroSection from "./HeroSection"; // This component includes the white nav
import styles from "./Home.module.css";
import ServicesSection from "./ServicesSection";

function Home() {
  const [dataMessage, setDataMessage] = useState("");

  useEffect(() => {
    axios
      .get("/api/data")
      .then((response) => setDataMessage(response.data.message))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className={styles.homeContainer}>
      {/* Only render the HeroSection which contains the preferred white navigation */}
      <HeroSection />

      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* Services Section (e.g. "Our Services" etc.) */}
        <ServicesSection />

      </div>

      {/* Shape Divider */}
      <div className={styles.shapeDivider}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 V50 Q600,100 1200,50 V0 Z" fill="#1A237E" />
        </svg>
      </div>
    </div>
  );
}

export default Home;
