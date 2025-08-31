import React from "react";
import "./AboutPage.css";
import Footer from "./Footer";

const serviceData = [
  {
    title: "Computer Sales & Service",
    image:
      "https://res.cloudinary.com/dzbuvo8dr/image/upload/v1756628800/computer_sales_and_service_crr8uy.webp",
    points: [
      "Wide selection of computers, laptops, and accessories from leading brands.",
      "Reliable hardware/software repair, virus removal, and upgrades.",
      "Expert consultation to match budget and needs, with fast turnaround.",
    ],
  },
  {
    title: "CCTV Surveillance Systems",
    image:
      "https://res.cloudinary.com/dzbuvo8dr/image/upload/v1756628799/CCTV_Surveillance_Systems_nxwocz.webp",
    points: [
      "Custom-designed, high-definition camera surveillance and recording.",
      "Remote monitoring from any device, scalable solutions.",
      "Seamless integration with wider security systems, expert support.",
    ],
  },
  {
    title: "Biometric Attendance Systems",
    image:
      "https://res.cloudinary.com/dzbuvo8dr/image/upload/v1756628799/Biometric_Attendance_Systems_nzhoyk.jpg",
    points: [
      "Accurate, secure tracking with advanced biometric technologies.",
      "Real-time monitoring, analytics, and seamless integration to HR systems.",
      "Scalable and customizable for any business size.",
    ],
  },
  {
    title: "Printing Solutions",
    image:
      "https://res.cloudinary.com/dzbuvo8dr/image/upload/v1756628804/Printing_Solutions_aj70de.jpg",
    points: [
      "Printers for homes and businesses, alongside genuine supplies.",
      "Fast repairs, maintenance contracts, and expert advice.",
      "Tailored solutions for efficiency and reliability.",
    ],
  },
  {
    title: "UPS & Inverter Solutions",
    image:
      "https://res.cloudinary.com/dzbuvo8dr/image/upload/v1756628805/UPS_Inverter_Solutions_nveyb9.jpg",
    points: [
      "Reliable backup power and voltage regulation for any need.",
      "Automatic battery management, instant switchover, energy efficiency.",
      "Protection for critical systems and data.",
    ],
  },
  {
    title: "Interactive Panels",
    image:
      "https://res.cloudinary.com/dzbuvo8dr/image/upload/v1756628803/Interactive_Panels_jfaqub.webp",
    points: [
      "High-definition touch panels for education, business, and collaboration.",
      "Multi-touch, wireless sharing, and integration with digital platforms.",
      "Versatile for presentations, learning, and group work.",
    ],
  },
  {
    title: "Gate Automation",
    image:
      "https://res.cloudinary.com/dzbuvo8dr/image/upload/v1756628802/Gate_Automation_ifnymg.jpg",
    points: [
      "Motorized gates with remote/app/keypad control for all property types.",
      "Smart safety sensors and aesthetic integration for convenience.",
      "Easily connected to security systems and smart home solutions.",
    ],
  },
  {
    title: "EPABX & Intercom Systems",
    image:
      "https://res.cloudinary.com/dzbuvo8dr/image/upload/v1756628801/EPABX_Intercom_Systems_fhl7bf.png",
    points: [
      "Centralized business telephony for efficient communication.",
      "Features include extension dialing, call management, conference calls, and voicemail.",
      "Scalable and ready for modern VoIP integration.",
    ],
  },
  {
    title: "Public Address (PA) Systems",
    image: "https://res.cloudinary.com/dzbuvo8dr/image/upload/v1756628805/Public_Address_PA_Systems_tafit7.png",
    points: [
      "Electronic audio systems for announcements, music, and events.",
      "Professional installations for venues, schools, businesses, and emergency systems.",
      "Advanced audio management and flexibility for all applications.",
    ],
  },
];

const AboutPage = () => {
  return (
    <div className="aboutpage">
        <br />
        <br />
      {/* Hero Section */}
      <section className="about-hero-section d-flex align-items-center justify-content-center">
        <div className="about-hero-card text-center p-5">
          <h1 className="about-hero-title">
            About CyberTech Security Solutions
          </h1>
          <p className="about-hero-subtitle">
            Cybertech Security Solutions is a trusted IT company with over 12
            years of experience, specializing in comprehensive infrastructure,
            computer sales and service, CCTV, UPS, printer solutions, automation,
            and security systems. The team customizes every project, focusing on
            seamless integration, reliability, and innovative technologies tailored
            for each client. 
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section
        className="about-content-section container mt-5"
        
      >
        <h2 className="about-content-title text-center mb-4">Our Services</h2>
        <div className="row justify-content-center">
          {serviceData.map((service, idx) => (
            <div key={idx} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="about-service-card shadow p-3 rounded h-100 d-flex flex-column text-center">
                <img
                  src={service.image}
                  alt={service.title}
                  className="about-service-image mb-3"
                  style={{ objectFit: "cover", borderRadius: "8px", height: "200px", width: "100%" }}
                />
                <h5 className="about-service-title">{service.title}</h5>
                <ul className="about-service-description text-start flex-grow-1">
                  {service.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <Footer />  {/* Add footer here */}          

    </div>
  );
};

export default AboutPage;
