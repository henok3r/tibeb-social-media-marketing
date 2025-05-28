// Testimonials.js
import React, { useEffect, useState } from "react";
import axios from "axios";

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    axios.get("/api/testimonials")
      .then(response => setTestimonials(response.data))
      .catch(error => console.error("Error fetching testimonials:", error));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Client Testimonials</h2>
      {testimonials.length > 0 ? (
        testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial-item" style={{ borderBottom: "1px dashed #ccc", paddingBottom: "10px", marginBottom: "10px" }}>
            <h4>{testimonial.client}</h4>
            <p>{testimonial.feedback}</p>
            <small>{testimonial.date}</small>
          </div>
        ))
      ) : (
        <p>No testimonials available yet.</p>
      )}
    </div>
  );
}

export default Testimonials;
