import React from 'react';
import { Helmet } from 'react-helmet-async';
import config from '../config/siteConfig';

const SEO = ({ title, description, keywords, image, url, type = 'website' }) => {
    const siteTitle = title ? `${title} | ${config.website.name}` : `${config.website.name} | Professional Event Reels`;
    const siteDescription = description || config.business.description;
    const siteKeywords = keywords || "event reels, wedding reels, corporate event videos, cinematic reels, Hyderabad videography";
    const siteImage = image || `${config.website.url}/cinereelz-hero.png`; // Ensure this image exists in public folder
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
