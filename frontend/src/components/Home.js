// Home.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from './Home.module.css';

function Home() {
  const [dataMessage, setDataMessage] = useState("");

  useEffect(() => {
    axios.get("/api/data")
      .then(response => setDataMessage(response.data.message))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="home-container">
      <h2>Welcome to Tibeb Social Media Marketing</h2>
      <p>{dataMessage}</p>
      
      {/* Shape Divider */}
      <div className="shape-divider">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 V50 Q600,100 1200,50 V0 Z" fill="#1A237E"></path>
        </svg>
      </div>
      
      {/* Additional content can be added here */}
    </div>
  );
}

export default Home;
