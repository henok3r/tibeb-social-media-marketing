// App.js
import React from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Newsletter from "./components/Newsletter";
import "./App.css";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tibeb Social Media Marketing</h1>
        <p>Empowering Your Brand's Digital Voice</p>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/newsletter">Newsletter</Link></li>
          </ul>
        </nav>
      </header>
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
