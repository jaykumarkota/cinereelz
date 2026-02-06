import React from 'react';
import '../styles/About.css';

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section-title">About <span>CineReelz</span></h2>
            <div className="about-content">
                <p className="about-intro">
                    We specialize in <strong>pay-and-shoot reels</strong> for events, delivering professionally
                    edited content in just <strong>20 minutes</strong>. Shot on iPhone and drone, our reels
                    combine speed, quality, and creativity to capture your moments instantly.
                </p>
            </div>
        </section>
    );
};

export default About;
