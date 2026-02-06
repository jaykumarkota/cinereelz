import React from 'react';
import '../styles/Footer.css';
import logo from '../assets/cinereelz-logo.png';
import config from '../config/siteConfig';

const Footer = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-section">
                        <img src={logo} alt="CineReelz" className="footer-logo" />
                        <p className="footer-description">
                            {config.business.description}
                        </p>
                        <div className="footer-social">
                            <a href={config.social.instagram} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a href={config.social.whatsappChannel} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="WhatsApp Channel">
                                <i className="fa-brands fa-whatsapp"></i>
                            </a>
                            <a href={config.social.youtube} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="YouTube">
                                <i className="fa-brands fa-youtube"></i>
                            </a>
                            <a href={config.social.twitter} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="X (Twitter)">
                                <i className="fa-brands fa-x-twitter"></i>
                            </a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul className="footer-links">
                            <li><a onClick={() => scrollToSection('hero')}>Home</a></li>
                            <li><a onClick={() => scrollToSection('why-choose-us')}>Why Us</a></li>
                            <li><a onClick={() => scrollToSection('packages')}>Packages</a></li>
                            <li><a onClick={() => scrollToSection('samples')}>Samples</a></li>
                            <li><a onClick={() => scrollToSection('terms')}>Terms</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>Contact Us</h3>
                        <div className="footer-contact">
                            <p>
                                <i className="fa-solid fa-phone"></i>
                                <a href={`tel:${config.contact.phoneLink}`}>{config.contact.phoneFormatted}</a>
                            </p>
                            <p>
                                <i className="fa-solid fa-envelope"></i>
                                <a href={`mailto:${config.contact.email}`}>{config.contact.email}</a>
                            </p>
                            <p>
                                <i className="fa-solid fa-location-dot"></i>
                                {config.contact.location}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 {config.website.name}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
