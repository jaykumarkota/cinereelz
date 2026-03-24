import React, { useEffect, useRef } from 'react';
import '../styles/About.css';
import ashokImg from '../assets/ashok-img.jpeg';
import nanduImg from '../assets/nandu-img.webp';

const About = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('about-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
        );

        const elements = sectionRef.current?.querySelectorAll('.about-animate');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="about section" id="about" ref={sectionRef}>
            <h2 className="section-title about-animate">
                Meet the <span>Visionaries</span>
            </h2>
            <p className="section-subtitle about-animate">
                The creative minds behind CineReelz — driven by passion, powered by storytelling.
            </p>

            <div className="about-team">
                {/* Ashok Card */}
                <div className="about-member about-animate">
                    <div className="about-member-image-wrap">
                        <div className="about-member-glow"></div>
                        <img
                            src={ashokImg}
                            alt="Ammireddy Ashok Reddy — Founder of CineReelz"
                            className="about-member-image"
                            loading="lazy"
                        />
                    </div>
                    <div className="about-member-info">
                        <h3 className="about-member-name">Ammireddy Ashok Reddy</h3>
                        <span className="about-member-role">Founder of Cinereelz</span>
                        <p className="about-member-bio">
                            Hi, I'm Ashok Reddy, founder of Cinereelz. I create
                            cinematic reels that capture emotions, style, and storytelling in
                            every frame. My goal is simple — to make your moments look and
                            feel like a movie.
                        </p>
                        <div className="about-member-tags">
                            <span>Visionary</span>
                            <span>Cinematic reel maker</span>
                            <span>Storyteller</span>
                        </div>
                    </div>
                </div>

                {/* Nandu Card */}
                <div className="about-member about-member-reverse about-animate">
                    <div className="about-member-image-wrap">
                        <div className="about-member-glow"></div>
                        <img
                            src={nanduImg}
                            alt="Nandu Chowdary — Co-founder & Editor at CineReelz"
                            className="about-member-image"
                            loading="lazy"
                        />
                    </div>
                    <div className="about-member-info">
                        <h3 className="about-member-name">Nandu Chowdary</h3>
                        <span className="about-member-role">Co-founder & Editor</span>
                        <p className="about-member-bio">
                            Co-founder and Editor at Cinereelz. A cinematic and instant
                            reel maker — creating fast, cinematic, and visually engaging
                            stories that leave a lasting impression.
                        </p>
                        <div className="about-member-tags">
                            <span>Editor</span>
                            <span>Cinematic Instant Reel Maker</span>
                            <span>Reel Maker</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
