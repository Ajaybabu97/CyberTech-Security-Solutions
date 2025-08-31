// ==========================
// React Router Setup & App Component
// ==========================

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

// Import react-router components for routing functionality
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ==========================
// Import Pages Components
// ==========================
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ClientsPage from "./components/ClientsPage";
import ContactPage from "./components/ContactPage";

// ==========================
// Import Navbar Component
// ==========================
import Navbar from "./components/Navbar";

// ==========================
// Main App Component with Router Configuration
// ==========================
function App() {
  return (
    <Router>
      <div>
        {/* Navbar will always stay visible on top */}
        <Navbar />

        {/* Define application routes mapping URL paths to components */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

// Export the App component as default
export default App;
