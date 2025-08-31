import React from "react";
import { useLocation } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const location = useLocation();
  const currentYear = new Date().getFullYear();

  // Check if current route is the contact page
  const isContactPage = location.pathname === "/contact";

  return (
    <footer className="footer bg-purple text-white py-4">
      <div className="container text-center">
        {isContactPage && (
          <>
            <h5 className="mb-3">Address:</h5>
            <address className="mb-3">
              Mekkumkara Veedu <br />
              Njandoorkonam, Chempazhanthy P.O <br />
              Trivandrum 695587 <br />
            </address>
          </>
        )}
        <div className="footer-bottom">
          <p>
            &copy; {currentYear} CyberTech Security Solutions. All rights reserved.
          </p>
          <p className="text-muted">Created by AR</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
