// Services.js
import React, { useEffect, useState } from "react";
import axios from "axios";

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get("/api/services")
      .then(response => setServices(response.data))
      .catch(error => console.error("Error fetching services:", error));
  }, []);

  return (
    <div className="services-container" style={{ padding: "20px" }}>
      <h2>Our Services</h2>
      {services.length > 0 ? (
        services.map(service => (
          <div key={service.id} className="service-item" style={{ background: "rgba(255, 111, 0, 0.1)", padding: "15px", margin: "15px 0", borderRadius: "4px" }}>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </div>
        ))
      ) : (
        <p>Our services are coming soon!</p>
      )}
    </div>
  );
}

export default Services;
