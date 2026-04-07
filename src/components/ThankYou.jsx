import React from 'react';
import '../styles/ThankYou.css';
import config from '../config/siteConfig';

const contactItems = [
    {
        icon: 'fa-solid fa-phone',
        label: 'Call Us',
        value: config.contact.phoneFormatted,
        href: `tel:${config.contact.phoneLink}`
    },
    {
        icon: 'fa-solid fa-envelope',
        label: 'Email',
        value: config.contact.email,
        href: `mailto:${config.contact.email}`
    }
];

const ThankYou = () => {
    return (
        <section className="thank-you section" id="contact">
            <div className="thank-you-container">
                <span className="section-eyebrow">Book With Us</span>
                <h2 className="thank-you-title">
                    Ready to Capture Your <span>Moments?</span>
                </h2>
                <p className="thank-you-message">
                    Let&apos;s build reels that feel cinematic, polished, and ready to share while the energy of the event is still alive.
                </p>

                <div className="thank-you-cta">
                    <a href={config.whatsapp.link} target="_blank" rel="noopener noreferrer">
                        <button className="cta-button">
                            <i className="fa-brands fa-whatsapp" aria-hidden="true"></i> Book Your Shoot
                        </button>
                    </a>
                    <a href="#packages" className="thank-you-secondary">
                        Review Packages
                    </a>
                </div>

                <div className="contact-details">
                    {contactItems.map((item) => (
                        <a key={item.label} href={item.href} className="contact-item">
                            <i className={item.icon} aria-hidden="true"></i>
                            <div>
                                <span>{item.label}</span>
                                <strong>{item.value}</strong>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ThankYou;
