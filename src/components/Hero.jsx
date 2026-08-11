import React from 'react';
import '../styles/Hero.css';
import config from '../config/siteConfig';
import weddingSample from '../assets/wedding-sample.jpeg';
import corporateSample from '../assets/corporate-sample.png';
import politicalSample from '../assets/political-sample.png';
import birthdaySample from '../assets/birthday-sample.png';
import ashokImg from '../assets/ashok-img.jpeg';

const sliderImages = [
    { image: weddingSample, alt: 'Wedding cinematic reel sample' },
    { image: corporateSample, alt: 'Corporate cinematic reel sample' },
    { image: politicalSample, alt: 'Political cinematic reel sample' },
    { image: birthdaySample, alt: 'Birthday cinematic reel sample' },
];

const Hero = () => {
    const whatsappLink = config.whatsapp.link;
    const sliderTrack = [...sliderImages, ...sliderImages];

    return (
        <section className="hero" aria-label="Hero section">
            <div className="hero-slider" aria-hidden="true">
                <div className="hero-slider-track">
                    {sliderTrack.map((slide, index) => (
                        <div className="hero-slide" key={`${slide.alt}-${index}`}>
                            <img src={slide.image} alt="" className="hero-slide-image" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="hero-overlay"></div>
            <div className="hero-left-mask"></div>

            <div className="hero-content">
                <div className="hero-panel">
                    <div className="hero-top-tagline">
                        <i className="fa-solid fa-bolt" aria-hidden="true"></i>
                        <span>{config.business.fastestServiceTagline}</span>
                    </div>

                    <h1 className="hero-tagline">
                        <span className="hero-line">Your Vision,</span>
                        <span className="hero-line">our Lens,</span>
                        <span className="hero-line">Stories Unfold.</span>
                        <span className="hero-line hero-highlight">IN {config.business.deliveryTime.toUpperCase()}</span>
                    </h1>

                    <p className="hero-subtitle">
                        Shot on <span>iPhone</span> and <span>Drone</span> with a premium edit-first workflow for
                        weddings, events, brands, and celebrations.
                    </p>

                    <div className="hero-cta">
                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                            <button className="cta-button">Book Your Shoot</button>
                        </a>
                        <a href="#samples" className="hero-secondary-cta">
                            View Sample Reels
                        </a>
                    </div>
                </div>

                <h2 className="sr-only">India's #1 Fastest Reels Shooting Service - Best Reels Website in Hyderabad for Weddings, Events and More</h2>
            </div>
        </section>
    );
};

export default Hero;
