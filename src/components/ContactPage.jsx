// ==========================
// ContactPage Component
// ==========================

import React from "react";
// React icons for various contact methods
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaInstagram, FaFacebookF } from "react-icons/fa";
// Import CSS for styling
import "./ContactPage.css";
import Footer from "./Footer";

// Contact information array holding icon, text and link
const contactDetails = [
    // {
    //     icon: <FaPhoneAlt />,
    //     text: "+91 8907766818",
    //     link: "tel:+918907766818",
    // },
    {
        icon: <FaWhatsapp />,
        text: "+91 8893374747",
        link: "https://wa.me/918893374747",
    },
    {
        icon: <FaEnvelope />,
        text: "sales.cybertechtvm@gmail.com",
        link: "https://mail.google.com/mail/?view=cm&fs=1&to=sales.cybertechtvm@gmail.com",
    },
    // {
    //     icon: <FaInstagram />,
    //     text: "@cybertech_security",
    //     link: "https://instagram.com/cybertech_security",
    // },
    // {
    //     icon: <FaFacebookF />,
    //     text: "CyberTech Security Solutions",
    //     link: "https://facebook.com/CyberTechSecuritySolutions",
    // },
];

// Main functional component rendering the contact page
const ContactPage = () => {
    // Handle click on a contact card by opening the link in a new tab
    const handleClick = (url) => {
        window.open(url, "_blank", "noopener noreferrer");
    };

    return (
        <div className="contactpage">
            {/* Hero section with fixed background and centered card */}
            <section className="contact-hero-section d-flex justify-content-center align-items-center">
                <div className="contact-hero-card text-center p-4">
                    <h1 className="contact-hero-title mb-4">Feel Free to Reach Out to Our Experts</h1>
                    {/* Contact icons and text arranged responsively */}
                    <div className="contact-info-icons d-flex flex-column flex-sm-row justify-content-center gap-4 flex-wrap">
                        {contactDetails.map(({ icon, text, link }, index) => (
                            <div
                                key={index}
                                className="contact-icon-card"
                                onClick={() => handleClick(link)}
                                role="button"
                                tabIndex={0}
                                onKeyPress={(e) => {
                                    if (e.key === "Enter") handleClick(link);
                                }}
                                aria-label={`Contact via ${text}`}
                            >
                                <div className="contact-icon">{icon}</div>
                                <p className="contact-text">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />  {/* Add footer here */}
        </div>
    );
};

// Export ContactPage as default
export default ContactPage;
