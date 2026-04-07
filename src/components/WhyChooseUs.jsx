import React, { useRef, useState, useEffect, useCallback } from 'react';
import '../styles/WhyChooseUs.css';

const WhyChooseUs = () => {
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const features = [
        {
            icon: 'fa-solid fa-bolt',
            title: 'Speed That Separates Us',
            description: '20-minute delivery sets us apart. Your content is ready before the moment fades.'
        },
        {
            icon: 'fa-solid fa-bullseye',
            title: 'Effortless From Start to Finish',
            description: 'No complicated workflows. Simple booking, instant shooting, immediate delivery.'
        },
        {
            icon: 'fa-solid fa-palette',
            title: 'Tailored to Your Brand',
            description: 'Custom-crafted reels that match your unique style and brand identity perfectly.'
        },
        {
            icon: 'fa-solid fa-chart-line',
            title: 'Results You Can See',
            description: 'Boost engagement and visibility with professionally shot content that performs.'
        },
        {
            icon: 'fa-solid fa-rocket',
            title: 'Ahead of Trends',
            description: 'We stay current with the latest content trends to keep you ahead of the curve.'
        },
        {
            icon: 'fa-solid fa-trophy',
            title: 'Award-Winning Quality',
            description: 'Recognized for exceptional cinematography and creative excellence in event coverage.'
        }
    ];

    const handleScroll = useCallback(() => {
        const container = scrollRef.current;
        if (!container) return;
        const scrollLeft = container.scrollLeft;
        const cardWidth = container.firstElementChild?.offsetWidth || 1;
        const gap = 18;
        const index = Math.round(scrollLeft / (cardWidth + gap));
        setActiveIndex(Math.min(index, features.length - 1));
    }, [features.length]);

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;
        container.addEventListener('scroll', handleScroll, { passive: true });
        return () => container.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    useEffect(() => {
        const cards = scrollRef.current?.querySelectorAll('.feature-card');
        if (!cards) return;

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

        cards.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    const scrollToIndex = useCallback((index) => {
        const container = scrollRef.current;
        if (!container) return;
        const cardWidth = container.firstElementChild?.offsetWidth || 1;
        const gap = 18;
        const targetScroll = index * (cardWidth + gap);
        container.scrollTo({ left: targetScroll, behavior: 'smooth' });
    }, []);

    return (
        <section className="why-choose-us section" id="why-choose-us">
            <div className="section-heading">
                <span className="section-eyebrow">Why CineReelz</span>
                <h2 className="section-title">Why Clients Keep <span>Choosing Us</span></h2>
                <p className="section-subtitle">
                    India&apos;s number one reels shooting service for cinematic, social-ready event coverage delivered
                    with speed, polish, and a premium on-ground experience.
                </p>
            </div>

            <div className="features-grid" ref={scrollRef}>
                {features.map((feature, index) => (
                    <article
                        key={feature.title}
                        className="feature-card"
                        style={{ animationDelay: `${index * 0.12}s` }}
                    >
                        <span className="feature-index">0{index + 1}</span>
                        <div className="feature-icon">
                            <i className={feature.icon} aria-hidden="true"></i>
                        </div>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </article>
                ))}
            </div>

            <div className="features-dots">
                {features.map((feature, index) => (
                    <button
                        key={feature.title}
                        className={`feature-dot ${index === activeIndex ? 'active' : ''}`}
                        onClick={() => scrollToIndex(index)}
                        aria-label={`Go to feature ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default WhyChooseUs;
