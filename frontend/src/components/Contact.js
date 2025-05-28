// Contact.js
import React, { useState } from "react";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post("/api/contact", formData)
      .then(response => {
        setResponseMessage(response.data.message);
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch(error => {
        console.error("Error sending contact form:", error);
        setResponseMessage("There was an error sending your message.");
      });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Contact Us</h2>
      {responseMessage && <p>{responseMessage}</p>}
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "500px", margin: "auto" }}>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
