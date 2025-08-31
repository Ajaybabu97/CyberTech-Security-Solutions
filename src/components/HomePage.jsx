// =========================
// HomePage Component
// =========================

import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

// Functional component for the home page
const HomePage = () => {
  return (
    <div className="homepage">
      {/* =============================
          Hero Section: Main Banner
          ============================= */}
      <section className="hero-section d-flex align-items-center justify-content-center">
        {/* ========================
            Hero Card Wrapper
            ======================== */}
        <div className="hero-card text-center p-5">
          {/* Main welcome heading */}
          <h1 className="hero-title">Welcome to CyberTech Security Solutions</h1>
          {/* Subtitle / tagline */}
          <p className="hero-subtitle">
            Delivering Reliable
            for Over 12 Years
          </p>

          {/* ==================
              Button Group Links
              ================== */}
          <div className="btn-group">
            <Link to="/about" className="btn custom-btn">
              About Us
            </Link>
            <Link to="/clients" className="btn custom-btn">
              Our Clients
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// Exporting HomePage component as default
export default HomePage;
