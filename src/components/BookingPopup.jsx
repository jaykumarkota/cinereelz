import React, { useEffect, useState } from 'react';
import '../styles/BookingPopup.css';
import config from '../config/siteConfig';

const BOOKING_POPUP_STORAGE_KEY = 'cinereelz-booking-popup-seen';

const BookingPopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    const dismissPopup = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        if (window.localStorage.getItem(BOOKING_POPUP_STORAGE_KEY)) {
            return undefined;
        }

        const showTimer = window.setTimeout(() => {
            window.localStorage.setItem(BOOKING_POPUP_STORAGE_KEY, 'true');
            setIsOpen(true);
        }, 900);

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                dismissPopup();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.clearTimeout(showTimer);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    if (!isOpen) {
        return null;
    }

    return (
        <div className="booking-popup-backdrop" role="presentation" onClick={dismissPopup}>
            <section
                className="booking-popup"
                role="dialog"
                aria-modal="true"
                aria-labelledby="booking-popup-title"
                onClick={(event) => event.stopPropagation()}
            >
                <button className="booking-popup-close" type="button" onClick={dismissPopup} aria-label="Close booking popup">
                    <i className="fa-solid fa-xmark" aria-hidden="true"></i>
                </button>

                <div className="booking-popup-icon" aria-hidden="true">
                    <i className="fa-solid fa-video"></i>
                </div>
                <p className="booking-popup-eyebrow">CineReelz Express</p>
                <h2 id="booking-popup-title">Ready for your next <span>reel?</span></h2>
                <p className="booking-popup-copy">
                    Book your shoot in a few taps and get a cinematic, social-ready reel delivered fast.
                </p>

                <div className="booking-popup-points">
                    <span><i className="fa-solid fa-bolt" aria-hidden="true"></i> Fast delivery</span>
                    <span><i className="fa-solid fa-wand-magic-sparkles" aria-hidden="true"></i> Cinematic edit</span>
                </div>

                <a
                    href={config.whatsapp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="booking-popup-action"
                    onClick={dismissPopup}
                >
                    <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
                    Book a Reel Shoot
                </a>
                <button type="button" className="booking-popup-dismiss" onClick={dismissPopup}>
                    Maybe later
                </button>
            </section>
        </div>
    );
};

export default BookingPopup;
