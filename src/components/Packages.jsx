import React from 'react';
import '../styles/Packages.css';
import goldLogo from '../assets/cinereelz-logo-gold.png';

const Packages = () => {
    const getWhatsappLink = (pkgName) =>
        `https://wa.me/919493903229?text=${encodeURIComponent(`Hi, I want to book the ${pkgName} Package from CineReelz`)}`;

    const packages = [
        {
            name: "Pre-Wedding",
            price: "₹9,999",
            description: "Your love story from above and beyond.",
            features: [
                "Cinematic drone footage",
                "Signature Cinematic Edit",
                "1 event coverage",
                "1 professionally edited video",
                "Terms and conditions apply"
            ],
            bestSeller: false
        },
        {
            name: "Standard",
            price: "₹5,499",
            description: "One experience. One story. Cinematically captured.",
            features: [
                "One event coverage",
                "3 reels professionally captured",
                "Signature Cinematic Edit",
                "Raw footage included",
                "Instant delivery"
            ],
            bestSeller: false
        },
        {
            name: "Spotlight",
            price: "₹21,999",
            description: "Three events, one polished narrative.",
            features: [
                "Covers 3 events",
                "12 reels",
                "Signature Cinematic Edit",
                "Raw footage included",
                "Instant delivery"
            ],
            bestSeller: true
        },
        {
            name: "Premier",
            price: "₹27,459",
            description: "Every detail, from start to finish.",
            features: [
                "Covers 4 events",
                "15 reels",
                "Signature Cinematic Edit",
                "Raw footage included",
                "Instant delivery"
            ],
            bestSeller: false
        },
        {
            name: "Grand Finale",
            price: "₹43,999",
            description: "The entire story.",
            features: [
                "Covers 6 events",
                "24 reels",
                "Signature Cinematic Edit",
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
                            <a href={getWhatsappLink(pkg.name)} target="_blank" rel="noopener noreferrer">
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
