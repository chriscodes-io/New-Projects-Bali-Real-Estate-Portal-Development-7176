import React, { useState } from 'react';

const OptimizedImage = ({ src, alt, className, ...props }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const handleLoad = () => setLoaded(true);
  const handleError = () => setError(true);

  // Generate srcset for high-DPI displays (Retina support)
  // This is a simple implementation that assumes the source can be modified with query params
  // For production, consider using a CDN that supports automatic image optimization
  const generateSrcSet = (src) => {
    if (!src) return null;
    // Check if it's an external URL that might support dynamic resizing
    if (src.includes('wp-content') || src.includes('uploads')) {
      // For WordPress or similar systems, you can append size params
      // This is a placeholder - adjust based on your image server capabilities
      return `${src} 1x, ${src} 2x`;
    }
    return null;
  };

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
        srcSet={generateSrcSet(src)}
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

export default React.memo(OptimizedImage);