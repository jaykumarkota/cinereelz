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
        const gap = 14;
        const index = Math.round(scrollLeft / (cardWidth + gap));
        setActiveIndex(Math.min(index, testimonials.length - 1));
    }, [testimonials.length]);

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

