import React from 'react';
import { Helmet } from 'react-helmet-async';
import config from '../config/siteConfig';

const SEO = ({ title, description, keywords, image, url, type = 'website' }) => {
    const siteTitle = title ? `${title} | ${config.website.name}` : `India's #1 Fastest Reels Shooting Service | ${config.website.name} – Event Reels in 20 Minutes | Hyderabad`;
    const siteDescription = description || "CineReelz is India's number one reels shooting service and Hyderabad's best reels website. Get stunning cinematic event reels delivered in just 20 minutes! Fastest reels shooting for weddings, birthdays, corporate events & more. Shot on iPhone & Drone. Book India's top reel makers now!";
    const siteKeywords = keywords || "India number one reels shoot, best reels website India, fastest reels shooting, best reels shooting in Hyderabad, Hyderabad reels service, number one reels Hyderabad, reels shooting Hyderabad, best reel makers India, best reel makers Hyderabad, instant reels delivery, pay and shoot reels India, wedding reels Hyderabad, event reels near me, professional reels shooting India, cinematic reels India, drone reel shoot, iPhone reel shoot India, 20 minute reels, CineReelz, cinereelz Hyderabad";
    const siteImage = image || `${config.website.url}/cinereelz-hero.png`;
    const siteUrl = url || config.website.url;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{siteTitle}</title>
            <meta name="description" content={siteDescription} />
            <meta name="keywords" content={siteKeywords} />
            <link rel="canonical" href={siteUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={siteDescription} />
            <meta property="og:image" content={siteImage} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={siteUrl} />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={siteDescription} />
            <meta name="twitter:image" content={siteImage} />

            {/* Geo Tags - useful for local SEO */}
            <meta name="geo.region" content="IN-TG" />
            <meta name="geo.placename" content="Hyderabad" />
            <meta name="geo.position" content="17.385044;78.486671" />
            <meta name="ICBM" content="17.385044, 78.486671" />
        </Helmet>
    );
};

export default SEO;
