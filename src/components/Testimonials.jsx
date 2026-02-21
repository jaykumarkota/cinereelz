import React, { useRef, useState, useEffect, useCallback } from 'react';
import '../styles/Testimonials.css';

const Testimonials = () => {
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const testimonials = [
        {
            name: "Lucky",
            role: "Sister's Wedding",
            content: "We were amazed by how quickly we got the reels! The quality was stunning, and seeing the videos while the event was still happening was just magical. Everyone kept asking who the team was!",
            rating: 5
        },
        {
            name: "Janaki",
            role: "Birthday Celebration",
            content: "Honestly, I didn't expect such professional output in just 20 minutes. They captured the vibe perfectly without being intrusive. It felt like they were part of the celebration!",
            rating: 5
        },
        {
            name: "Surya",
            role: "Corporate Event",
            content: "The best decision we made for our event. The team was super friendly and the final reels were just beautiful. Sharing them instantly with colleagues made it so much fun!",
            rating: 5
        }
    ];

    const handleScroll = useCallback(() => {
        const container = scrollRef.current;
        if (!container) return;
        const scrollLeft = container.scrollLeft;
        const cardWidth = container.firstElementChild?.offsetWidth || 1;
        const gap = 16;
        const index = Math.round(scrollLeft / (cardWidth + gap));
        setActiveIndex(Math.min(index, testimonials.length - 1));
    }, [testimonials.length]);

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;
        container.addEventListener('scroll', handleScroll, { passive: true });
        return () => container.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    const scrollToIndex = (index) => {
        const container = scrollRef.current;
        if (!container) return;
        const cardWidth = container.firstElementChild?.offsetWidth || 1;
        const gap = 16;
        container.scrollTo({
            left: index * (cardWidth + gap),
            behavior: 'smooth'
        });
    };

    return (
        <section className="testimonials section" id="testimonials">
            <h2 className="section-title">What Our <span>Clients Say</span></h2>
            <div className="testimonials-grid" ref={scrollRef}>
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="testimonial-card"
                        style={{ animationDelay: `${index * 0.15}s` }}
                    >
                        <div className="testimonial-rating">
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <i key={i} className="fa-solid fa-star"></i>
                            ))}
                        </div>
                        <p className="testimonial-content">"{testimonial.content}"</p>
                        <div className="testimonial-author">
                            <div className="author-avatar">
                                {testimonial.name.charAt(0)}
                            </div>
                            <div className="author-info">
                                <h4>{testimonial.name}</h4>
                                <p>{testimonial.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="testimonials-dots">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
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

