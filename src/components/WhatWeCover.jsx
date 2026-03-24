import React, { useEffect, useRef } from 'react';
import '../styles/WhatWeCover.css';

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
            <span className="cover-label cover-animate">OUR PORTFOLIO</span>
            <h2 className="section-title cover-animate">
                What We <span>Cover</span>
            </h2>
            <p className="section-subtitle cover-animate">
                From intimate celebrations to grand events — we shoot it all.
            </p>

            <div className="cover-grid">
                {/* Personal Celebrations */}
                <div className="cover-card cover-card-personal cover-animate">
                    <div className="cover-card-icon">
                        <i className="fa-solid fa-cake-candles"></i>
                    </div>
                    <h3 className="cover-card-title">Personal Celebrations</h3>
                    <div className="cover-pills">
                        <span className="cover-pill">Birthdays</span>
                        <span className="cover-pill">Baby Showers</span>
                        <span className="cover-pill">Anniversaries</span>
                        <span className="cover-pill">Housewarming</span>
                        <span className="cover-pill">Engagements</span>
                    </div>
                </div>

                {/* Weddings — Featured */}
                <div className="cover-card cover-card-featured cover-animate">
                    <div className="cover-featured-badge">
                        <i className="fa-solid fa-star"></i> Most Popular
                    </div>
                    <div className="cover-card-icon cover-icon-featured">
                        <i className="fa-solid fa-heart"></i>
                    </div>
                    <h3 className="cover-card-title">Weddings & Grand Events</h3>
                    <div className="cover-pills">
                        <span className="cover-pill">Weddings</span>
                        <span className="cover-pill">Pre-Weddings</span>
                        <span className="cover-pill">Receptions</span>
                        <span className="cover-pill">Haldi & Mehendi</span>
                        <span className="cover-pill">Sangeet</span>
                    </div>
                </div>

                {/* Corporate & Public Events */}
                <div className="cover-card cover-card-corporate cover-animate">
                    <div className="cover-card-icon">
                        <i className="fa-solid fa-briefcase"></i>
                    </div>
                    <h3 className="cover-card-title">Corporate & Public Events</h3>
                    <div className="cover-pills">
                        <span className="cover-pill">Business Launches</span>
                        <span className="cover-pill">Political Rallies</span>
                        <span className="cover-pill">Brand Promotions</span>
                        <span className="cover-pill">Conferences</span>
                        <span className="cover-pill">Inaugurations</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeCover;
