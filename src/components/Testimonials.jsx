import React, { useRef, useState, useEffect, useCallback } from 'react';
import '../styles/Testimonials.css';

const testimonials = [
    {
        name: 'Lucky',
        role: "Sister's Wedding",
        content: 'We were amazed by how quickly we got the reels! The quality was stunning, and seeing the videos while the event was still happening was just magical. Everyone kept asking who the team was!',
        rating: 5
    },
    {
        name: 'Janaki',
        role: 'Birthday Celebration',
        content: "Honestly, I didn't expect such professional output in just 20 minutes. They captured the vibe perfectly without being intrusive. It felt like they were part of the celebration!",
        rating: 5
    },
    {
        name: 'Surya',
        role: 'Corporate Event',
        content: 'The best decision we made for our event. The team was super friendly and the final reels were just beautiful. Sharing them instantly with colleagues made it so much fun!',
        rating: 5
    }
];

const Testimonials = () => {
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = useCallback(() => {
        const container = scrollRef.current;
        if (!container) return;
        const scrollLeft = container.scrollLeft;
        const cardWidth = container.firstElementChild?.offsetWidth || 1;
        const gap = 18;
        const index = Math.round(scrollLeft / (cardWidth + gap));
        setActiveIndex(Math.min(index, testimonials.length - 1));
    }, []);

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;
        container.addEventListener('scroll', handleScroll, { passive: true });
        return () => container.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    useEffect(() => {
        const cards = scrollRef.current?.querySelectorAll('.testimonial-card');
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

    const scrollToIndex = (index) => {
        const container = scrollRef.current;
        if (!container) return;
        const cardWidth = container.firstElementChild?.offsetWidth || 1;
        const gap = 18;
        const targetScroll = index * (cardWidth + gap);
        container.scrollTo({ left: targetScroll, behavior: 'smooth' });
    };

    return (
        <section className="testimonials section" id="testimonials">
            <div className="section-heading">
                <span className="section-eyebrow">Client Notes</span>
                <h2 className="section-title">What Our <span>Clients Say</span></h2>
                <p className="section-subtitle">
                    Real reactions from people who wanted fast delivery, cleaner edits, and a team that could keep up with the energy of the event.
                </p>
            </div>

            <div className="testimonials-grid" ref={scrollRef}>
                {testimonials.map((testimonial, index) => (
                    <article
                        key={testimonial.name}
                        className="testimonial-card"
                        style={{ animationDelay: `${index * 0.12}s` }}
                    >
                        <div className="testimonial-rating">
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <i key={i} className="fa-solid fa-star" aria-hidden="true"></i>
                            ))}
                        </div>
                        <p className="testimonial-content">&quot;{testimonial.content}&quot;</p>
                        <div className="testimonial-author">
                            <div className="author-avatar">{testimonial.name.charAt(0)}</div>
                            <div className="author-info">
                                <h4>{testimonial.name}</h4>
                                <p>{testimonial.role}</p>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            <div className="testimonials-dots">
                {testimonials.map((testimonial, index) => (
                    <button
                        key={testimonial.name}
                        className={`testimonial-dot ${index === activeIndex ? 'active' : ''}`}
                        onClick={() => scrollToIndex(index)}
                        aria-label={`Go to review ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
