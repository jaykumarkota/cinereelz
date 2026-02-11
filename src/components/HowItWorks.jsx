import React from 'react';
import { Helmet } from 'react-helmet-async';
import '../styles/HowItWorks.css';

const HowItWorks = () => {
    const steps = [
        {
            number: 1,
            icon: "fa-brands fa-whatsapp",
            title: "Book on WhatsApp",
            description: "Simply message us on WhatsApp to book your slot. Quick and easy."
        },
        {
            number: 2,
            icon: "fa-solid fa-video",
            title: "On-Spot Shooting",
            description: "Professional iPhone & drone shooting at your event location."
        },
        {
            number: 3,
            icon: "fa-solid fa-scissors",
            title: "Instant Editing",
            description: "Our team edits your reels on-the-go using iPhone."
        },
        {
            number: 4,
            icon: "fa-solid fa-paper-plane",
            title: "Delivery in Minutes",
            description: "Receive your polished reels within 20 minutes. No waiting."
        }
    ];

    // Structured Data for HowTo
    const howToSchema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Book a CineReelz Shoot",
        "step": steps.map(step => ({
            "@type": "HowToStep",
            "position": step.number,
            "name": step.title,
            "text": step.description,
            "image": "https://www.cinereelz.in/cinereelz-logo.png"
        }))
    };

    return (
        <section className="how-it-works section" id="how-it-works">
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(howToSchema)}
                </script>
            </Helmet>
            <h2 className="section-title">How It <span>Works</span></h2>
            <div className="steps-container">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="step"
                        style={{ animationDelay: `${index * 0.2}s` }}
                    >
                        <div
                            className="step-number"
                            style={{ animationDelay: `${index * 0.3}s` }}
                        >
                            {step.number}
                        </div>
                        <div className="step-icon">
                            <i className={step.icon}></i>
                        </div>
                        <h3 className="step-title">{step.title}</h3>
                        <p className="step-description">{step.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowItWorks;
