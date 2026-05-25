import React, { useState } from 'react';
import logo from '../assets/cinereelz-logo.png';
import '../styles/Navbar.css';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 65;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setMobileMenuOpen(false);
    };

    const whatsappLink = "https://wa.me/919493903229?text=I%20want%20to%20book%20a%20CineReelz%20reel%20shoot";

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo-container" onClick={() => scrollToSection('hero')}>
                    <img
                        src={logo}
                        alt="CineReelz"
                        className="navbar-logo"
                    />
                </div>

                <ul className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`}>
                    <li><a onClick={() => scrollToSection('hero')}>Home</a></li>
                    <li><a onClick={() => scrollToSection('why-choose-us')}>Why Us</a></li>
                    <li><a onClick={() => scrollToSection('packages')}>Packages</a></li>
                    <li><a onClick={() => scrollToSection('samples')}>Samples</a></li>
                    <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
                </ul>

                <div className="navbar-cta">
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                        <button className="cta-button">Book Now</button>
                    </a>
                </div>

                <button
                    className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
