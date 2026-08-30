import { useEffect } from 'react';
import Lenis from 'lenis';

const SmoothScroll = () => {
    useEffect(() => {
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

        if (reducedMotion.matches) {
            return undefined;
        }

        const lenis = new Lenis({
            duration: 1.15,
            easing: (time) => Math.min(1, 1.001 - Math.pow(2, -10 * time)),
            smoothWheel: true,
            syncTouch: false,
            wheelMultiplier: 0.9
        });

        let animationFrameId;
        const raf = (time) => {
            lenis.raf(time);
            animationFrameId = window.requestAnimationFrame(raf);
        };

        const handleScrollRequest = (event) => {
            lenis.scrollTo(event.detail.top, { offset: event.detail.offset ?? 0 });
        };

        animationFrameId = window.requestAnimationFrame(raf);
        window.addEventListener('cinereelz:scroll-to', handleScrollRequest);

        return () => {
            window.cancelAnimationFrame(animationFrameId);
            window.removeEventListener('cinereelz:scroll-to', handleScrollRequest);
            lenis.destroy();
        };
    }, []);

    return null;
};

export default SmoothScroll;
