import React, { useState, useEffect, useRef } from 'react';
import '../styles/Samples.css';
import config from '../config/siteConfig';

const Samples = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedSample, setSelectedSample] = useState(null);
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

    const openModal = (sample) => {
        setSelectedSample(sample);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedSample(null);
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
                        onClick={() => openModal(sample)}
                        role="button"
                        tabIndex={0}
                        aria-label={`View ${sample.title} sample`}
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

                            <div className="sample-overlay-bottom">
                                <div>
                                    <h3 className="sample-title">{sample.title}</h3>
                                </div>
                                <a
                                    href={sample.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="sample-play-btn"
                                    onClick={(e) => e.stopPropagation()}
                                    aria-label={`Play ${sample.title} reel on Instagram`}
                                >
                                    <i className="fa-solid fa-play" aria-hidden="true"></i>
                                </a>
                            </div>
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

            {modalOpen && (
                <div className="modal-overlay" onClick={closeModal} role="dialog" aria-modal="true">
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal} aria-label="Close modal">
                            <i className="fa-solid fa-xmark" aria-hidden="true"></i>
                        </button>
                        <div className="modal-sample">
                            <i className="fa-solid fa-clapperboard" aria-hidden="true"></i>
                            <h3>{selectedSample?.title}</h3>
                            <p>Sample reel preview coming soon. Use the play button on the card to open Instagram directly.</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Samples;
