// =============================
// Navbar Component
// =============================

import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

// Functional Navbar component
const Navbar = () => {
  // Access current route location from React Router
  const location = useLocation();

  // Determine if currently on the home page
  const isHomePage = location.pathname === '/';

  // Function to close the navbar collapse on mobile after clicking a link
  const handleNavLinkClick = () => {
    const toggleButton = document.querySelector('.navbar-toggler');
    const navbar = document.getElementById('navbarNav');
    if (navbar && navbar.classList.contains('show') && toggleButton) {
      // Trigger toggler click to close navbar collapse
      toggleButton.click();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm fixed-top py-2">
      <div className="container">
        {/* =============================
            Brand Logo and Link to Home
            ============================= */}
        <NavLink
          className="navbar-brand fw-bold text-dark d-flex align-items-center"
          to="/"
          style={{ letterSpacing: '1px' }}
        >
          <img
            src="https://res.cloudinary.com/dzbuvo8dr/image/upload/v1756628764/CYBERTECH_New_Logo_2_eirrcs.png"
            alt="CyberTech Security Solutions Logo"
            style={{ height: '75px', width: '200px', marginRight: '10px' }}
          />
        </NavLink>

        {/* ==================
            Navbar Toggler (Mobile)
            ================== */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* =============================
            Navbar Navigation Links
            ============================= */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Conditionally hide About and Our Clients links on home page */}
            {!isHomePage && (
              <>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      'nav-link mx-2 px-3 rounded-pill' + (isActive ? ' active-link' : ' text-dark')
                    }
                    to="/about"
                    onClick={handleNavLinkClick}
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      'nav-link mx-2 px-3 rounded-pill' + (isActive ? ' active-link' : ' text-dark')
                    }
                    to="/clients"
                    onClick={handleNavLinkClick}
                  >
                    Our Clients
                  </NavLink>
                </li>
              </>
            )}
            {/* Always show Contact Us link */}
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  'nav-link mx-2 px-3 rounded-pill' + (isActive ? ' active-link' : ' text-dark')
                }
                to="/contact"
                onClick={handleNavLinkClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// Export Navbar as default
export default Navbar;
