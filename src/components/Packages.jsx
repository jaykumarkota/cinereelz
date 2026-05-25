import React, { useState } from 'react';
import '../styles/Packages.css';
import goldLogo from '../assets/cinereelz-logo-gold.png';
import weddingSample from '../assets/wedding-sample.jpeg';

const packageCatalog = [
    {
        name: 'Standard',
        price: 'Rs. 5,499',
        unit: '/event',
        kicker: 'Fast and polished',
        description: 'A clean event-day package designed for quick reels, key moments, and fast delivery.',
        idealFor: 'Birthdays and private events',
        delivery: '24-hour delivery',
        features: [
            'One event coverage',
            'Three professionally captured reels',
            'Signature cinematic edit',
            'Raw footage included',
            'Priority social-ready export'
        ]
    },
    {
        name: 'Spotlight',
        price: 'Rs. 21,999',
        unit: '/multi-event story',
        kicker: 'Most requested tier',
        description: 'The sweet spot for clients who want depth, style, and coverage across multiple moments.',
        idealFor: 'Wedding functions',
        delivery: 'Priority turnaround',
        features: [
            'Coverage across three events',
            'Twelve edited reels',
            'Signature cinematic edit',
            'Raw footage included',
            'Instant delivery for key highlights'
        ]
    },
    {
        name: 'Premier',
        price: 'Rs. 27,459',
        unit: '/celebration',
        kicker: 'Expanded coverage',
        description: 'Built for larger celebrations that need continuity, elevated edits, and more content.',
        idealFor: 'Wedding weekends',
        delivery: 'Concierge workflow',
        features: [
            'Coverage across four events',
            'Fifteen edited reels',
            'Signature cinematic edit',
            'Raw footage included',
            'Fast highlight turnaround'
        ]
    },
    {
        name: 'Grand Finale',
        price: 'Rs. 43,999',
        unit: '/signature experience',
        kicker: 'Luxury production tier',
        description: 'Our most premium package for clients who want the full story captured with scale.',
        idealFor: 'Luxury weddings',
        delivery: 'White-glove delivery',
        features: [
            'Coverage across six events',
            'Twenty-four edited reels',
            'Signature cinematic edit',
            'Raw footage included',
            'Fast delivery and premium support'
        ]
    }
];

const tierCollections = [
    {
        id: 'love-story',
        label: 'Signature Story',
        description: 'For intimate celebrations and polished story-led coverage that still feels premium and social-ready.',
        packageNames: ['Standard', 'Spotlight', 'Premier'],
        featured: 'Spotlight'
    },
    {
        id: 'event-day',
        label: 'Event Day',
        description: 'For single-day coverage that still feels premium, shareable, and well-paced across social formats.',
        packageNames: ['Standard', 'Spotlight', 'Premier'],
        featured: 'Spotlight'
    },
    {
        id: 'wedding-week',
        label: 'Wedding Week',
        description: 'For multi-function weddings and high-energy celebrations that need deeper coverage and a luxury finish.',
        packageNames: ['Spotlight', 'Premier', 'Grand Finale'],
        featured: 'Premier'
    }
];

const packageMap = Object.fromEntries(packageCatalog.map((pkg) => [pkg.name, pkg]));

const Packages = () => {
    const [activeTier, setActiveTier] = useState('event-day');

    const selectedTier = tierCollections.find((tier) => tier.id === activeTier) ?? tierCollections[1];
    const visiblePackages = selectedTier.packageNames.map((name) => packageMap[name]).filter(Boolean);

    const getWhatsappLink = (pkgName) =>
        `https://wa.me/919493903229?text=${encodeURIComponent(`Hi, I want to book the ${pkgName} package from CineReelz`)}`;

    return (
        <section className="packages section" id="packages">
            <div className="packages-shell">
                <p className="packages-eyebrow">Cinematic Tiering</p>
                <h2 className="packages-title">
                    Choose Your <span>Story</span>
                </h2>
                <p className="packages-intro">
                    From intimate celebrations to multi-day weddings, every package is shaped to feel polished,
                    premium, and social-first without losing the emotion of the event.
                </p>

                <div className="packages-tier-tabs" aria-label="Package collections">
                    {tierCollections.map((tier) => (
                        <button
                            key={tier.id}
                            type="button"
                            className={`packages-tier-pill ${tier.id === activeTier ? 'is-active' : ''}`}
                            onClick={() => setActiveTier(tier.id)}
                            aria-pressed={tier.id === activeTier}
                        >
                            {tier.label}
                        </button>
                    ))}
                </div>

                <p className="packages-tier-description">{selectedTier.description}</p>

                <div className="packages-grid">
                    {visiblePackages.map((pkg, index) => {
                        const isFeatured = selectedTier.featured === pkg.name;

                        return (
                            <article
                                key={`${selectedTier.id}-${pkg.name}`}
                                className={`package-card ${isFeatured ? 'is-featured' : ''} ${pkg.name === 'Grand Finale' ? 'is-premium-card' : ''}`}
                                style={{ animationDelay: `${index * 0.12}s` }}
                            >
                                {isFeatured && <div className="package-badge">Most Popular</div>}

                                <div className="package-card-top">
                                    <p className="package-kicker">{pkg.kicker}</p>
                                    <h3 className="package-name">{pkg.name}</h3>
                                    <div className="package-price-row">
                                        <span className="package-price">{pkg.price}</span>
                                        <span className="package-unit">{pkg.unit}</span>
                                    </div>
                                    <p className="package-description">{pkg.description}</p>
                                </div>

                                <ul className="package-features">
                                    {pkg.features.map((feature) => (
                                        <li key={feature}>
                                            <i className="fa-solid fa-circle-check" aria-hidden="true"></i>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="package-meta">
                                    <div className="package-meta-item">
                                        <span className="meta-label">Ideal for</span>
                                        <span className="meta-value">{pkg.idealFor}</span>
                                    </div>
                                    <div className="package-meta-item">
                                        <span className="meta-label">Delivery</span>
                                        <span className="meta-value">{pkg.delivery}</span>
                                    </div>
                                </div>

                                <a
                                    href={getWhatsappLink(pkg.name)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`package-button ${isFeatured ? 'is-solid' : ''}`}
                                >
                                    Book Now
                                </a>
                            </article>
                        );
                    })}
                </div>

                <article className="packages-spotlight">
                    <div className="spotlight-copy">
                        <div className="spotlight-chip">
                            <img src={goldLogo} alt="CineReelz gold logo" className="spotlight-chip-logo" />
                            <span>The Grand Finale</span>
                        </div>

                        <h3 className="spotlight-title">Unrivalled cinematic coverage for your biggest celebration.</h3>
                        <p className="spotlight-description">
                            Crafted for weddings and milestone events that deserve more than highlight reels, this tier
                            brings deeper coverage, elevated polish, and a premium delivery experience from start to finish.
                        </p>

                        <div className="spotlight-metrics">
                            <div className="spotlight-metric">
                                <i className="fa-solid fa-film" aria-hidden="true"></i>
                                <div>
                                    <strong>24 Reels Included</strong>
                                    <span>Story-first edits across the full celebration</span>
                                </div>
                            </div>
                            <div className="spotlight-metric">
                                <i className="fa-solid fa-users-viewfinder" aria-hidden="true"></i>
                                <div>
                                    <strong>Six Event Coverage</strong>
                                    <span>Designed for wedding weeks and large-scale functions</span>
                                </div>
                            </div>
                        </div>

                        <div className="spotlight-actions">
                            <a
                                href={getWhatsappLink('Grand Finale')}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="package-button spotlight-primary"
                            >
                                Book Grand Finale
                            </a>
                            <a href="#samples" className="package-button spotlight-secondary">
                                View Showcase
                            </a>
                        </div>
                    </div>

                    <div className="spotlight-visual">
                        <img src={weddingSample} alt="CineReelz wedding sample" className="spotlight-image" />
                        <div className="spotlight-image-caption">
                            Premium wedding storytelling with richer pacing, cleaner color, and a luxury finish.
                        </div>
                    </div>
                </article>

            </div>
        </section>
    );
};

export default Packages;
