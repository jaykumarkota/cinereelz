import React, { useRef, useState, useEffect, useCallback } from 'react';
import '../styles/WhyChooseUs.css';

const WhyChooseUs = () => {
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const features = [
        {
            icon: "fa-solid fa-bolt",
            title: "Speed That Separates Us",
            description: "20-minute delivery sets us apart. Your content is ready before the moment fades."
        },
        {
            icon: "fa-solid fa-bullseye",
            title: "Effortless From Start to Finish",
            description: "No complicated workflows. Simple booking, instant shooting, immediate delivery."
        },
        {
            icon: "fa-solid fa-palette",
            title: "Tailored to Your Brand",
            description: "Custom-crafted reels that match your unique style and brand identity perfectly."
        },
        {
            icon: "fa-solid fa-chart-line",
            title: "Results You Can See",
            description: "Boost engagement and visibility with professionally shot content that performs."
        },
        {
            icon: "fa-solid fa-rocket",
            title: "Ahead of Trends",
            description: "We stay current with the latest content trends to keep you ahead of the curve."
        },
        {
            icon: "fa-solid fa-trophy",
            title: "Award-Winning Quality",
            description: "Recognized for exceptional cinematography and creative excellence in event coverage."
        }
    ];

    const handleScroll = useCallback(() => {
        const container = scrollRef.current;
        if (!container) return;
        const scrollLeft = container.scrollLeft;
        const cardWidth = container.firstElementChild?.offsetWidth || 1;
        const gap = 14;
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
        const gap = 14;
        const targetScroll = index * (cardWidth + gap);
        const startScroll = container.scrollLeft;
        const distance = targetScroll - startScroll;
        const duration = 600;
        let startTime = null;

        const easeInOutCubic = (t) =>
            t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

        const animateScroll = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeInOutCubic(progress);
            container.scrollLeft = startScroll + distance * eased;
            if (progress < 1) {
                requestAnimationFrame(animateScroll);
            }
        };

        requestAnimationFrame(animateScroll);
    }, []);

    // Auto-scroll on mobile
    useEffect(() => {
        const isMobile = () => window.matchMedia('(max-width: 768px)').matches;
        if (!isMobile()) return;

        let autoScrollInterval;
        let pauseTimeout;
        let currentAutoIndex = 0;

        const startAutoScroll = () => {
            stopAutoScroll();
            autoScrollInterval = setInterval(() => {
                if (!isMobile()) return;
                currentAutoIndex = (currentAutoIndex + 1) % features.length;
                setActiveIndex(currentAutoIndex);
                scrollToIndex(currentAutoIndex);
            }, 3000);
        };

        const stopAutoScroll = () => {
            if (autoScrollInterval) clearInterval(autoScrollInterval);
        };

        const handleUserInteraction = () => {
            stopAutoScroll();
            if (pauseTimeout) clearTimeout(pauseTimeout);
            pauseTimeout = setTimeout(() => {
                const container = scrollRef.current;
                if (container) {
                    const cardWidth = container.firstElementChild?.offsetWidth || 1;
                    const gap = 14;
                    currentAutoIndex = Math.round(container.scrollLeft / (cardWidth + gap));
                }
                startAutoScroll();
            }, 5000);
        };

        const container = scrollRef.current;
        if (container) {
            container.addEventListener('touchstart', handleUserInteraction, { passive: true });
            container.addEventListener('touchend', handleUserInteraction, { passive: true });
        }

        startAutoScroll();

        return () => {
            stopAutoScroll();
            if (pauseTimeout) clearTimeout(pauseTimeout);
            if (container) {
                container.removeEventListener('touchstart', handleUserInteraction);
                container.removeEventListener('touchend', handleUserInteraction);
            }
        };
    }, [features.length, scrollToIndex]);



    return (
        <section className="why-choose-us section" id="why-choose-us">
            <h2 className="section-title">Why Choose <span>CineReelz</span></h2>
            <p className="section-subtitle">India's number one reels shooting service — trusted by hundreds across Hyderabad and India for the fastest, most cinematic event reels delivered in just 20 minutes.</p>
            <div className="features-grid" ref={scrollRef}>
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="feature-card"
                        style={{ animationDelay: `${index * 0.15}s` }}
                    >
                        <div className="feature-icon">
                            <i className={feature.icon}></i>
                        </div>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
            <div className="features-dots">
                {features.map((_, index) => (
                    <button
                        key={index}
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
