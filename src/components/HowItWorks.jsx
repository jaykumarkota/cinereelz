import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import '../styles/HowItWorks.css';

const steps = [
    {
        number: 1,
        icon: 'fa-brands fa-whatsapp',
        title: 'Book on WhatsApp',
        description: 'Simply message us on WhatsApp to confirm your slot and share your event details.'
    },
    {
        number: 2,
        icon: 'fa-solid fa-video',
        title: 'On-Spot Shooting',
        description: 'We capture the event live with a polished social-first approach using iPhone and drone.'
    },
    {
        number: 3,
        icon: 'fa-solid fa-scissors',
        title: 'Instant Editing',
        description: 'The edit starts while the event is still happening, so your reels keep their momentum.'
    },
    {
        number: 4,
        icon: 'fa-solid fa-paper-plane',
        title: 'Delivery in Minutes',
        description: 'You receive clean, share-ready reels fast, without waiting days for the final content.'
    }
];

const HowItWorks = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const items = containerRef.current?.querySelectorAll('.step');
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

    const howToSchema = {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'How to Book a CineReelz Shoot',
        step: steps.map((step) => ({
            '@type': 'HowToStep',
            position: step.number,
            name: step.title,
            text: step.description,
            image: 'https://www.cinereelz.in/cinereelz-logo.png'
        }))
    };

    return (
        <section className="how-it-works section" id="how-it-works">
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(howToSchema)}
                </script>
            </Helmet>

            <div className="section-heading">
                <span className="section-eyebrow">Process</span>
                <h2 className="section-title">How It <span>Works</span></h2>
                <p className="section-subtitle">
                    A fast booking-to-delivery workflow designed to feel smooth for you and still look cinematic in the final reel.
                </p>
            </div>

            <div className="steps-container" ref={containerRef}>
                {steps.map((step, index) => (
                    <article
                        key={step.number}
                        className="step"
                        style={{ animationDelay: `${index * 0.12}s` }}
                    >
                        <div className="step-number">{step.number}</div>
                        <div className="step-icon">
                            <i className={step.icon} aria-hidden="true"></i>
                        </div>
                        <h3 className="step-title">{step.title}</h3>
                        <p className="step-description">{step.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default HowItWorks;
