import React from 'react';
import '../styles/Testimonials.css';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Priya Sharma",
            role: "Wedding Planner",
            content: "CineReelz transformed our wedding coverage. The 20-minute delivery is incredible! Our clients love seeing their moments instantly.",
            rating: 5
        },
        {
            name: "Rajesh Kumar",
            role: "Event Organizer",
            content: "Professional quality with unmatched speed. The team captures every detail perfectly. Highly recommend for any event!",
            rating: 5
        },
        {
            name: "Ananya Reddy",
            role: "Birthday Celebration",
            content: "Amazing experience! The reels were delivered before the party ended. The quality is outstanding and everyone loved them.",
            rating: 5
        }
    ];

    return (
        <section className="testimonials section" id="testimonials">
            <h2 className="section-title">What Our <span>Clients Say</span></h2>
            <div className="testimonials-grid">
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
        </section>
    );
};

export default Testimonials;
