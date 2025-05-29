// App.js
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import WhiteNav from "./components/WhiteNav"; // Your global white navigation
import Home from "./components/Home";
import Blog from "./components/Blog";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Newsletter from "./components/Newsletter";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard"; // New Dashboard component
import "./App.css";
import PricingPage from "./components/PricingPage"; // New Pricing Page component

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {/* Global white navigation appears on every page */}
      <WhiteNav />
      <main>
        <TransitionGroup>
          <CSSTransition key={location.pathname} timeout={300} classNames="page">
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/services" element={<Services />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/newsletter" element={<Newsletter />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/pricing" element={<PricingPage />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </main>
      <footer>
        <p>&copy; 2025 Tibeb Social Media Marketing. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
