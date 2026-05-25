import React, { useEffect, useRef } from 'react';
import '../styles/About.css';
import ashokImg from '../assets/ashok-img.jpeg';

const teamMembers = [
    {
        name: 'Ammireddy Ashok Reddy',
        role: 'Founder of CineReelz',
        image: ashokImg,
        alt: 'Ammireddy Ashok Reddy - Founder of CineReelz',
        bio: "Hi, I'm Ashok Reddy, founder of CineReelz. I create cinematic reels that capture emotions, style, and storytelling in every frame. My goal is simple - to make your moments look and feel like a movie.",
        tags: ['Visionary', 'Cinematic Reel Maker', 'Storyteller']
    }
];

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
            <div className="section-heading about-animate">
                <span className="section-eyebrow">The Team</span>
                <h2 className="section-title">
                    Meet the <span>Visionary</span>
                </h2>
                <p className="section-subtitle">
                    The creative force behind CineReelz, blending fast delivery with a more cinematic, detail-driven eye.
                </p>
            </div>

            <div className="about-team">
                {teamMembers.map((member, index) => (
                    <article
                        key={member.name}
                        className={`about-member about-animate ${index % 2 === 1 ? 'about-member-reverse' : ''}`}
                    >
                        <div className="about-member-image-wrap">
                            <div className="about-member-glow"></div>
                            <img
                                src={member.image}
                                alt={member.alt}
                                className="about-member-image"
                                loading="lazy"
                            />
                        </div>

                        <div className="about-member-info">
                            <span className="about-member-kicker">Core Creative</span>
                            <h3 className="about-member-name">{member.name}</h3>
                            <span className="about-member-role">{member.role}</span>
                            <p className="about-member-bio">{member.bio}</p>
                            <div className="about-member-tags">
                                {member.tags.map((tag) => (
                                    <span key={tag}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default About;
