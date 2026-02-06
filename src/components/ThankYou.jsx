import React from 'react';
import '../styles/ThankYou.css';
import config from '../config/siteConfig';

const ThankYou = () => {
    return (
        <section className="thank-you section" id="contact">
            <div className="thank-you-container">
                <div className="thank-you-icon">
                    <i className="fa-solid fa-heart"></i>
                </div>
                <h2 className="thank-you-title">Ready to Capture Your <span>Moments?</span></h2>
                <p className="thank-you-message">
                    Let's create something amazing together! Reach out to us and we'll make your event unforgettable.
                </p>

                <div className="thank-you-cta">
                    <a href={config.whatsapp.link} target="_blank" rel="noopener noreferrer">
                        <button className="cta-button">
                            <i className="fa-brands fa-whatsapp"></i> Book Your Shoot
                        </button>
                    </a>
                </div>

                <div className="contact-details">
                    <div className="contact-item">
                        <i className="fa-solid fa-phone"></i>
                        <a href={`tel:${config.contact.phoneLink}`}>{config.contact.phoneFormatted}</a>
                    </div>
                    <div className="contact-item">
                        <i className="fa-solid fa-envelope"></i>
                        <a href={`mailto:${config.contact.email}`}>{config.contact.email}</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ThankYou;
