import React, { useState, useMemo } from 'react';

/**
 * OptimizedImage component with High-DPI (Retina) support
 * 
 * Features:
 * - srcset for 2x/3x displays (using Contentful/external image transforms)
 * - Lazy loading with intersection observer
 * - Graceful error handling with fallback
 * - Smooth loading transitions
 */
const OptimizedImage = ({
  src,
  alt,
  className,
  sizes = '100vw',
  quality = 80,
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const handleLoad = () => setLoaded(true);
  const handleError = () => setError(true);

  /**
   * Generate srcset for Retina displays
   * Supports Contentful, Cloudinary, and generic resize patterns
   */
  const imageSrcSet = useMemo(() => {
    if (!src) return '';

    // Check if it's a Contentful image (supports fm=webp&q=80&w=)
    if (src.includes('images.ctfassets.net')) {
      const baseUrl = src.split('?')[0];
      return [
        `${baseUrl}?fm=webp&q=${quality}&w=400 400w`,
        `${baseUrl}?fm=webp&q=${quality}&w=800 800w`,
        `${baseUrl}?fm=webp&q=${quality}&w=1200 1200w`,
        `${baseUrl}?fm=webp&q=${quality}&w=1600 1600w`,
        `${baseUrl}?fm=webp&q=${quality}&w=2400 2400w`,
      ].join(', ');
    }

    // Check if it's a Cloudinary image
    if (src.includes('cloudinary.com')) {
      const parts = src.split('/upload/');
      if (parts.length === 2) {
        return [
          `${parts[0]}/upload/w_400,q_${quality},f_auto/${parts[1]} 400w`,
          `${parts[0]}/upload/w_800,q_${quality},f_auto/${parts[1]} 800w`,
          `${parts[0]}/upload/w_1200,q_${quality},f_auto/${parts[1]} 1200w`,
          `${parts[0]}/upload/w_1600,q_${quality},f_auto/${parts[1]} 1600w`,
        ].join(', ');
      }
    }

    // For other CDNs or static images, just use the original
    // The browser will use the src attribute as fallback
    return '';
  }, [src, quality]);

  if (error) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        <span className="text-gray-400 text-xs">Image unavailable</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded && !error && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse" />
      )}
      <img
        src={src}
        srcSet={imageSrcSet || undefined}
        sizes={imageSrcSet ? sizes : undefined}
        alt={alt}
        className={`w-full h-full object-cover ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
        decoding="async"
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;