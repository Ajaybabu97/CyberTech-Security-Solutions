// =========================
// ClientsPage Component
// =========================

import React from "react";
import "./ClientsPage.css";
import Footer from "./Footer";


// =========================
// Array of Client Objects
// Each client has an id, name, and logo URL
// =========================
const clients = [
    { id: 1, name: "Client One", logo: "https://res.cloudinary.com/dzbuvo8dr/image/upload/v1756701671/neyyar_medcity_nxhl5o.jpg" },
    { id: 2, name: "Client Two", logo: "https://res.cloudinary.com/dzbuvo8dr/image/upload/v1756701671/ayusha_yefuif.jpg" },
    { id: 3, name: "Client Three", logo: "https://res.cloudinary.com/dzbuvo8dr/image/upload/v1756701671/zidaan_xdubdl.jpg" },
    { id: 4, name: "Client Four", logo: "https://res.cloudinary.com/dzbuvo8dr/image/upload/v1756385267/opentext-image-1-cs-lulu-group-international-en_qjm3rh.png" },
    { id: 5, name: "Client Five", logo: "https://res.cloudinary.com/dzbuvo8dr/image/upload/v1756385266/logo2024_ffqjeg.png" },
    { id: 6, name: "Client Six", logo: "https://res.cloudinary.com/dzbuvo8dr/image/upload/v1756385268/sp-fort-hospital-thiruvananthapuram-logo_rx2eow.jpg" },
    { id: 7, name: "Client Seven", logo: "https://res.cloudinary.com/dzbuvo8dr/image/upload/v1756385263/EXqNyLst_400x400_ukrksk.jpg" },
    { id: 8, name: "Client Eight", logo: "https://res.cloudinary.com/dzbuvo8dr/image/upload/v1756385263/292140241_361083106175095_5552407151171512233_n_brdfy3.jpg" },
    { id: 9, name: "Client Nine", logo: "https://res.cloudinary.com/dzbuvo8dr/image/upload/v1756385263/azad-logo_r1j940.png" },
    { id: 10, name: "Client Ten", logo: "https://res.cloudinary.com/dzbuvo8dr/image/upload/v1756385265/kmscllogo_joecwq.jpg" },
    { id: 11, name: "Client Eleven", logo: "https://res.cloudinary.com/dzbuvo8dr/image/upload/v1756385263/9bc32a42f411f8f278bd8d488b77e2a2_icon_iemqyi.png" },
    { id: 12, name: "Client Twelve", logo: "https://res.cloudinary.com/dzbuvo8dr/image/upload/v1756385264/images_mihjy1.png" },
    { id: 13, name: "Client Thirteen", logo: "https://res.cloudinary.com/dzbuvo8dr/image/upload/v1756385264/1639577961217_hlsn3u.jpg" },
    { id: 14, name: "Client Fourteen", logo: "https://res.cloudinary.com/dzbuvo8dr/image/upload/v1756385264/images_1_geuevw.png" },
    { id: 15, name: "Client Fifteen", logo: "https://res.cloudinary.com/dzbuvo8dr/image/upload/v1756385264/images_2_sqte4y.png" },
    { id: 16, name: "Client Sixteen", logo: "https://res.cloudinary.com/dzbuvo8dr/image/upload/v1756385266/logo_1-300x291_mwbsw2.jpg" },
    { id: 17, name: "Client Seventeen", logo: "https://res.cloudinary.com/dzbuvo8dr/image/upload/v1756385266/logo_azbz7v.png" },
    { id: 18, name: "Client Eighteen", logo: "https://res.cloudinary.com/dzbuvo8dr/image/upload/v1756385269/Untitled_design_a_soyipm.png" },
    { id: 19, name: "Client Nineteen", logo: "https://res.cloudinary.com/dzbuvo8dr/image/upload/v1756385267/ogimage_q9cqdm.png" },
    { id: 20, name: "Client Twenty", logo: "https://res.cloudinary.com/dzbuvo8dr/image/upload/v1756385269/Untitled_design_bvpdgy.png" },
    { id: 21, name: "Client Twenty-One", logo: "https://res.cloudinary.com/dzbuvo8dr/image/upload/v1756385263/22e9d92bf0001f840afb5b0ffed26f78_qulrmo.jpg" },
];

// =========================
// Main ClientsPage Rendering
// =========================
const ClientsPage = () => {
    return (
        <div className="clientspage">
            {/* ======================================
                Hero Section (Fixed background banner)
               ====================================== */}
            <section className="clients-hero-section d-flex justify-content-center align-items-center">
                <div className="clients-hero-card text-center p-4">
                    <h1 className="clients-hero-title">Our Happy Clients</h1>
                    <p className="clients-hero-subtitle">
                        Trusted partners who rely on CyberTech Security Solutions.
                        Quality is at the core of our operations, and we adhere to stringent industry standards and best
                        practices to ensure the delivery of top-notch
                        IT infrastructure solutions. We also prioritize the
                        security of our clients' data and implement robust measures to safeguard sensitive information.
                    </p>
                </div>
            </section>

            {/* ===========================
                Client Logo Grid Section
            ============================ */}
            <div className="bg-dark logo">
                <section className="clients-logos-section container py-5">
                    <div className="row g-4 justify-content-center">
                        {clients.map((client) => (
                            <div key={client.id} className="col-6 col-sm-4 col-md-3 col-lg-2">
                                <div className="clients-logo-card d-flex justify-content-center align-items-center">
                                    <img
                                        src={client.logo}
                                        alt={`${client.name} Logo`}
                                        className="clients-logo-img"
                                        title={client.name}
                                    />
                                </div>
                                {/* Optionally show client name below logo:
                                <p className="clients-logo-name text-center mt-2">{client.name}</p>
                                */}
                            </div>
                        ))}
                    </div>
                </section>

                <Footer />  {/* Add footer here */}

            </div>
        </div>
    );
};

// =========================
// Export the ClientsPage Component
// =========================
export default ClientsPage;
