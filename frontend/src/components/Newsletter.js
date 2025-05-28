// Newsletter.js
import React, { useState } from "react";
import axios from "axios";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [responseMsg, setResponseMsg] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    axios.post("/api/newsletter-subscribe", { email })
      .then(response => {
        setResponseMsg(response.data.message);
        setEmail("");
      })
      .catch(error => {
        console.error("Subscription error:", error);
        setResponseMsg("Error subscribing, please try again.");
      });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Subscribe to Our Newsletter</h2>
      {responseMsg && <p>{responseMsg}</p>}
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "row", gap: "10px", justifyContent: "center" }}>
        <input type="email" placeholder="Your Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}

export default Newsletter;
