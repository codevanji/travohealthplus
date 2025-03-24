import { useState, useEffect } from 'react';

export default function OptimizedImage({ src, alt, className, priority = false }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(
    `data:image/svg+xml;base64,${btoa(
      `<svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#f3f4f6"/>
      </svg>`
    )}`
  );

  useEffect(() => {
    console.log('Loading image:', src);
    const img = new Image();
    
    img.onload = () => {
      console.log('Image loaded successfully:', src);
      setCurrentSrc(src);
      setIsLoading(false);
      setError(false);
    };

    img.onerror = (e) => {
      console.error('Error loading image:', src, e);
      setError(true);
      setIsLoading(false);
    };

    img.src = src;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  if (error) {
    console.log('Rendering error state for:', src);
    return (
      <div className={`${className} bg-gray-200 flex items-center justify-center`}>
        <p className="text-gray-500">Failed to load image</p>
      </div>
    );
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={`${className} ${isLoading ? 'blur-sm animate-pulse' : 'blur-0 animate-none'} transition-all duration-300`}
      loading={priority ? 'eager' : 'lazy'}
    />
  );
}
