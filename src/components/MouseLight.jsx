import React, { useEffect } from 'react';

const MouseLight = () => {
    useEffect(() => {
        const mouseLight = document.querySelector('.mouse-light');
        const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isTouch) return;

        const handleEvent = (e) => {
            if (mouseLight) {
                mouseLight.style.left = `${e.clientX}px`;
                mouseLight.style.top = `${e.clientY}px`;
            }
        };
        const handleMouseEnter = () => mouseLight && mouseLight.classList.add('active');
        const handleMouseLeave = () => mouseLight && mouseLight.classList.remove('active');

        window.addEventListener('mousemove', handleEvent);
        const clickable = document.querySelectorAll('.project-card, .social-links a');
        clickable.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            window.removeEventListener('mousemove', handleEvent);
            clickable.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return <div className='mouse-light'></div>;
};

export default MouseLight;
