import React from 'react';
import '../styles/Footer.css';
import logo from '../assets/cinereelz-logo.png';
import config from '../config/siteConfig';

const quickLinks = [
    { label: 'Home', sectionId: 'hero' },
    { label: 'Why Us', sectionId: 'why-choose-us' },
    { label: 'Packages', sectionId: 'packages' },
    { label: 'Samples', sectionId: 'samples' },
    { label: 'Terms', sectionId: 'terms' }
];

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
                    <div className="footer-brand">
                        <img src={logo} alt="CineReelz" className="footer-logo" />
                        <p className="footer-description">{config.business.description}</p>
                        <div className="footer-social">
                            <a href={config.social.instagram} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                                <i className="fa-brands fa-instagram" aria-hidden="true"></i>
                            </a>
                            <a href={config.social.whatsappChannel} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="WhatsApp Channel">
                                <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
                            </a>
                            <a href={config.social.youtube} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="YouTube">
                                <i className="fa-brands fa-youtube" aria-hidden="true"></i>
                            </a>
                            <a href={config.social.twitter} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="X (Twitter)">
                                <i className="fa-brands fa-x-twitter" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>

                    <div className="footer-card">
                        <h3>Quick Links</h3>
                        <ul className="footer-links">
                            {quickLinks.map((link) => (
                                <li key={link.sectionId}>
                                    <a onClick={() => scrollToSection(link.sectionId)}>{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-card">
                        <h3>Contact</h3>
                        <div className="footer-contact">
                            <p>
                                <i className="fa-solid fa-phone" aria-hidden="true"></i>
                                <a href={`tel:${config.contact.phoneLink}`}>{config.contact.phoneFormatted}</a>
                            </p>
                            <p>
                                <i className="fa-solid fa-envelope" aria-hidden="true"></i>
                                <a href={`mailto:${config.contact.email}`}>{config.contact.email}</a>
                            </p>
                            <p>
                                <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
                                <span>{config.contact.location}</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-seo-tagline">CineReelz - India&apos;s fastest reels shooting service for weddings, events, and brand moments.</p>
                    <p>&copy; 2026 {config.website.name}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
