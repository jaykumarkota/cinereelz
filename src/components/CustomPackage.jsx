import React from 'react';
import '../styles/CustomPackage.css';
import config from '../config/siteConfig';

const CustomPackage = () => {
    return (
        <section className="custom-package section" id="custom-package">
            <div className="custom-package-container">
                <div className="custom-package-content">
                    <div className="custom-package-icon">
                        <i className="fa-solid fa-wand-magic-sparkles"></i>
                    </div>
                    <h2 className="custom-package-title">
                        Create Your <span>Custom Package</span>
                    </h2>
                    <p className="custom-package-description">
                        Need something unique? Let's craft a personalized package tailored to your event's specific needs and vision.
                    </p>

                    <ul className="custom-package-features">
                        <li>
                            <i className="fa-solid fa-check"></i>
                            Flexible reel count
                        </li>
                        <li>
                            <i className="fa-solid fa-check"></i>
                            Extended coverage time
                        </li>
                        <li>
                            <i className="fa-solid fa-check"></i>
                            Multiple locations
                        </li>
                        <li>
                            <i className="fa-solid fa-check"></i>
                            Special editing requests
                        </li>
                        <li>
                            <i className="fa-solid fa-check"></i>
                            Drone footage add-on
                        </li>
                        <li>
                            <i className="fa-solid fa-check"></i>
                            Priority delivery
                        </li>
                    </ul>

                    <div className="custom-package-cta">
                        <a href={config.whatsapp.customPackageLink} target="_blank" rel="noopener noreferrer">
                            <button className="cta-button cta-button-outline">
                                <i className="fa-brands fa-whatsapp"></i> Discuss Custom Package
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomPackage;
