import React from 'react';
import '../styles/Packages.css';
import goldLogo from '../assets/cinereelz-logo-gold.png';

const Packages = () => {
    const whatsappLink = "https://wa.me/919493903229?text=I%20want%20to%20book%20a%20CineReelz%20reel%20shoot";

    const packages = [
        {
            name: "Pre-Wedding",
            price: "₹9,999",
            description: "Your love story from above and beyond.",
            features: [
                "Cinematic drone footage",
                "iPhone cinematic editing",
                "1 event coverage",
                "1 professionally edited video",
                "Terms and conditions apply"
            ],
            bestSeller: false
        },
        {
            name: "Standard",
            price: "₹9,999",
            description: "One experience. One story. Cinematically captured.",
            features: [
                "One event coverage",
                "3 reels professionally captured",
                "Edited on iPhone",
                "Raw footage included",
                "Instant delivery"
            ],
            bestSeller: false
        },
        {
            name: "Spotlight",
            price: "₹27,999",
            description: "Three events, one polished narrative.",
            features: [
                "Covers 3 events",
                "12 reels",
                "iPhone editing",
                "Raw footage included",
                "Instant delivery"
            ],
            bestSeller: true
        },
        {
            name: "Premier",
            price: "₹45,999",
            description: "Every detail, from start to finish.",
            features: [
                "Covers 4 events",
                "15 reels",
                "iPhone editing",
                "Raw footage included",
                "Instant delivery"
            ],
            bestSeller: false
        },
        {
            name: "Grand Finale",
            price: "₹72,999",
            description: "The entire story.",
            features: [
                "Covers 6 events",
                "24 reels",
                "iPhone editing",
                "Raw footage included",
                "Instant delivery"
            ],
            bestSeller: false,
            premium: true
        }
    ];

    return (
        <section className="packages section" id="packages">
            <h2 className="section-title">Event <span>Packages</span></h2>
            <div className="packages-grid">
                {packages.map((pkg, index) => (
                    <div
                        key={index}
                        className={`package-card ${pkg.bestSeller ? 'best-seller' : ''} ${pkg.premium ? 'premium' : ''}`}
                        style={{ animationDelay: `${index * 0.15}s` }}
                    >
                        {pkg.bestSeller && (
                            <div className="best-seller-badge">
                                <i className="fa-solid fa-star"></i> Best Seller
                            </div>
                        )}
                        {pkg.premium && (
                            <div className="premium-badge">
                                <i className="fa-solid fa-crown"></i> Premium
                            </div>
                        )}
                        {pkg.premium && (
                            <div className="premium-logo-container">
                                <img src={goldLogo} alt="CineReelz Gold" className="premium-gold-logo" />
                            </div>
                        )}
                        <h3 className="package-name">{pkg.name} Package</h3>
                        <div className="package-price">{pkg.price}</div>
                        <p className="package-description">{pkg.description}</p>
                        <ul className="package-features">
                            {pkg.features.map((feature, idx) => (
                                <li key={idx}>{feature}</li>
                            ))}
                        </ul>
                        <div className="package-cta">
                            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                                <button className="cta-button">Book Now</button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Packages;
