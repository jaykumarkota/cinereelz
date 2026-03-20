import React from 'react';
import '../styles/WhyChooseUs.css';

const WhyChooseUs = () => {
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

    return (
        <section className="why-choose-us section" id="why-choose-us">
            <h2 className="section-title">Why Choose <span>CineReelz</span></h2>
            <p className="section-subtitle">India's number one reels shooting service — trusted by hundreds across Hyderabad and India for the fastest, most cinematic event reels delivered in just 20 minutes.</p>
            <div className="features-grid">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="feature-card"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className="feature-icon">
                            <i className={feature.icon}></i>
                        </div>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyChooseUs;
