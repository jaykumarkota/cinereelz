import React from 'react';
import '../styles/Terms.css';

const Terms = () => {
    return (
        <section className="terms section" id="terms">
            <div className="section-heading">
                <span className="section-eyebrow">Fine Print</span>
                <h2 className="section-title">Terms and <span>Conditions</span></h2>
                <p className="section-subtitle">
                    Clear expectations help the shoot day move smoothly and keep delivery fast for everyone involved.
                </p>
            </div>
            <div className="terms-content">
                <ul className="terms-list">
                    <li><strong>Advance Payment:</strong> 50% advance required to confirm booking.</li>
                    <li><strong>Content Sharing:</strong> CineReelz reserves the right to share finished content on our platforms unless the client explicitly requests otherwise.</li>
                    <li><strong>Raw Footage:</strong> All raw footage will be delivered instantly after the shoot.</li>
                    <li><strong>Editing:</strong> One free edit is included. Additional edits will incur extra charges.</li>
                    <li><strong>Delivery Time:</strong> Reels are delivered the same day, within minutes or hours depending on the event scale.</li>
                    <li><strong>Client Instructions:</strong> Clients must provide clear instructions regarding content requirements and preferences.</li>
                    <li><strong>Cancellation Policy:</strong> Cancellations made less than 24 hours before the event will result in the advance payment being non-refundable.</li>
                    <li><strong>Location Permissions:</strong> Clients must secure necessary permissions for shooting at event locations. Travel charges apply for locations outside Hyderabad.</li>
                    <li><strong>Backup Responsibility:</strong> Clients are responsible for backing up all delivered files. CineReelz is not liable for data loss after delivery.</li>
                    <li><strong>Equipment:</strong> All videos are shot and edited on iPhone for maximum efficiency and quality.</li>
                    <li><strong>Branding:</strong> CineReelz logo will be included on all final videos unless specifically requested to be removed.</li>
                    <li><strong>Agreement:</strong> By booking our services, clients agree to all terms and conditions outlined above.</li>
                </ul>
            </div>
        </section>
    );
};

export default Terms;
