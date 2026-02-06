import React from 'react';
import '../styles/Hero.css';
import config from '../config/siteConfig';

const Hero = () => {
    const whatsappLink = config.whatsapp.link;

    return (
        <section className="hero" aria-label="Hero section">
            <video
                className="hero-video-bg"
                autoPlay
                loop
                muted
                playsInline
                aria-label="CineReelz promotional video background"
                title="CineReelz Event Reels"
            >
                <source src="/cinereelz-hero-animation.mp4" type="video/mp4" />
            </video>
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <div className="hero-top-tagline">
                    <i className="fa-solid fa-bolt"></i> {config.business.fastestServiceTagline}
                </div>
                <h1 className="hero-tagline">
                    Your Vision, our Lens,<br />
                    Stories Unload.<br />
                    <span className="hero-highlight">IN {config.business.deliveryTime.toUpperCase()}</span>
                </h1>
                <p className="hero-subtitle">
                    Shot on <span>iPhone</span> & <span>Drone</span>
                </p>
                <div className="hero-cta">
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                        <button className="cta-button">Book Your Shoot</button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
