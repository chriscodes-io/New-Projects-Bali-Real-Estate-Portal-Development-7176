import React, { useState } from 'react';

const OptimizedImage = ({ src, alt, className, ...props }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const handleLoad = () => setLoaded(true);
  const handleError = () => setError(true);

  // Generate srcset for high-DPI displays (Retina support)
  // Note: This is a basic implementation. For production, use a CDN with image optimization
  // (e.g., Cloudinary, Imgix) that can automatically serve different resolutions
  const generateSrcSet = (src) => {
    // Since we don't have dynamic image resizing, we'll skip srcset for now
    // and rely on the browser's native scaling, which works well for modern displays
    // TODO: Integrate with CDN that supports ?w=width&dpr=2 query params
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