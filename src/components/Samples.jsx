import React, { useEffect, useRef } from 'react';
import '../styles/Samples.css';
import config from '../config/siteConfig';

const Samples = () => {
    const gridRef = useRef(null);

    const samples = [
        { id: 1, ...config.images.samples.corporate },
        { id: 2, ...config.images.samples.wedding },
        { id: 3, ...config.images.samples.political },
        { id: 4, ...config.images.samples.birthday }
    ];

    useEffect(() => {
        const items = gridRef.current?.querySelectorAll('.sample-item');
        if (!items) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
        );

        items.forEach((item) => observer.observe(item));

        return () => observer.disconnect();
    }, []);

    const openSample = (link) => {
        window.open(link, '_blank', 'noopener,noreferrer');
    };

    const handleKeyDown = (event, link) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openSample(link);
        }
    };

    return (
        <section className="samples section" id="samples">
            <div className="section-heading">
                <span className="section-eyebrow">Showcase</span>
                <h2 className="section-title">Sample <span>Reels</span></h2>
                <p className="section-subtitle">
                    A quick look at the moods, formats, and event styles we shape into cinematic, social-first reels.
                </p>
            </div>

            <p className="samples-subtitle">
                <i className="fa-brands fa-instagram" aria-hidden="true"></i>
                Follow
                <a href={config.social.instagram} target="_blank" rel="noopener noreferrer" className="instagram-link">
                    {config.social.instagramHandle}
                </a>
                for the latest drops.
            </p>

            <div className="samples-grid" ref={gridRef}>
                {samples.map((sample, index) => (
                    <article
                        key={sample.id}
                        className="sample-item"
                        style={{ animationDelay: `${index * 0.12}s` }}
                        onClick={() => openSample(sample.link)}
                        onKeyDown={(event) => handleKeyDown(event, sample.link)}
                        role="link"
                        tabIndex={0}
                        aria-label={`Open ${sample.title} reel on Instagram`}
                    >
                        <img
                            src={sample.image}
                            alt={sample.alt}
                            title={sample.title}
                            className="sample-image"
                            loading="lazy"
                            width="1080"
                            height="1920"
                        />

                        <div className="sample-overlay">
                            <div className="sample-overlay-top">
                                <span className="sample-tag">Featured Reel</span>
                                <div className="sample-instagram">
                                    <i className="fa-brands fa-instagram" aria-hidden="true"></i>
                                    <span>{config.social.instagramHandle.slice(1)}</span>
                                </div>
                            </div>

                            <span className="sample-play-btn" aria-hidden="true">
                                <i className="fa-solid fa-play" aria-hidden="true"></i>
                            </span>
                        </div>
                    </article>
                ))}
            </div>

            <div className="samples-cta">
                <a href={config.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="View more reels on Instagram">
                    <button className="cta-button">
                        <i className="fa-brands fa-instagram" aria-hidden="true"></i> View More Reels
                    </button>
                </a>
            </div>
        </section>
    );
};

export default Samples;
