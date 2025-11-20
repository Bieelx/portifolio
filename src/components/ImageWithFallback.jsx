import React, { useState } from 'react';

export function ImageWithFallback({ src, alt, className, fallbackSrc = 'https://via.placeholder.com/400x300?text=Image+Not+Found' }) {
    const [imgSrc, setImgSrc] = useState(src);
    const [hasError, setHasError] = useState(false);

    const onError = () => {
        if (!hasError) {
            setImgSrc(fallbackSrc);
            setHasError(true);
        }
    };

    return (
        <img
            src={imgSrc}
            alt={alt}
            className={className}
            onError={onError}
        />
    );
}
