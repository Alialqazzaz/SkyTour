import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Left column */}
                <div className="footer-column">
                    <h6>About SkyTour</h6>
                    <p>SkyTour is a reputable travel company offering custom travel experiences worldwide. We help you create unforgettable journeys!</p>
                </div>

                {/* Middle column */}
                <div className="footer-column" style={{ textAlign: 'center' }}>
                    <h6>Connect with us</h6>
                    <div className="footer-icons">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaLinkedin /></a>
                    </div>
                </div>

                {/* Right column */}
                <div className="footer-column" style={{ textAlign: 'right' }}>
                    <h6>Contact Us</h6>
                    <p>Tampere, Finland</p>
                    <p>info@skytour.com</p>
                    <p>+01 234 567 88</p>
                    <p>+01 234 567 89</p>
                </div>
            </div>

            <div className="footer-copy">
                © 2025 SkyTour. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
