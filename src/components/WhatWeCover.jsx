import React, { useEffect, useRef } from 'react';
import '../styles/WhatWeCover.css';

const coverItems = [
    {
        className: 'cover-card-personal',
        icon: 'fa-solid fa-cake-candles',
        title: 'Personal Celebrations',
        description: 'Warm, emotion-led reels for intimate milestones and moments that deserve a polished memory.',
        tags: ['Birthdays', 'Baby Showers', 'Anniversaries', 'Housewarming', 'Engagements']
    },
    {
        className: 'cover-card-featured',
        icon: 'fa-solid fa-heart',
        title: 'Weddings and Grand Events',
        description: 'Our signature category for multi-function stories, elevated edits, and crowd-moving highlights.',
        tags: ['Weddings', 'Pre-Weddings', 'Receptions', 'Haldi and Mehendi', 'Sangeet'],
        featured: true
    },
    {
        className: 'cover-card-corporate',
        icon: 'fa-solid fa-briefcase',
        title: 'Corporate and Public Events',
        description: 'Professional reels for launches, campaigns, and public-facing moments that need stronger reach.',
        tags: ['Business Launches', 'Political Rallies', 'Brand Promotions', 'Conferences', 'Inaugurations']
    }
];

const WhatWeCover = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('cover-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
        );

        const elements = sectionRef.current?.querySelectorAll('.cover-animate');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="what-we-cover section" id="what-we-cover" ref={sectionRef}>
            <div className="section-heading cover-animate">
                <span className="section-eyebrow">Coverage Map</span>
                <h2 className="section-title">
                    What We <span>Cover</span>
                </h2>
                <p className="section-subtitle">
                    From intimate celebrations to grand events, we shape every shoot around the mood, pacing, and story
                    your audience should feel.
                </p>
            </div>

            <div className="cover-grid">
                {coverItems.map((item) => (
                    <article key={item.title} className={`cover-card cover-animate ${item.className}`}>
                        {item.featured && (
                            <div className="cover-featured-badge">
                                <i className="fa-solid fa-star" aria-hidden="true"></i> Most Popular
                            </div>
                        )}

                        <div className={`cover-card-icon ${item.featured ? 'cover-icon-featured' : ''}`}>
                            <i className={item.icon} aria-hidden="true"></i>
                        </div>
                        <h3 className="cover-card-title">{item.title}</h3>
                        <p className="cover-card-description">{item.description}</p>
                        <div className="cover-pills">
                            {item.tags.map((tag) => (
                                <span key={tag} className="cover-pill">{tag}</span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default WhatWeCover;
