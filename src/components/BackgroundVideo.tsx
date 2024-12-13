import React, { useState, useEffect } from 'react';

interface BackgroundVideoProps {
  videoUrl: string;
  posterUrl: string;
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ videoUrl, posterUrl }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const video = document.createElement('video');
    
    const handleCanPlay = () => {
      setIsLoading(false);
      setIsError(false);
    };

    const handleError = () => {
      setIsLoading(false);
      setIsError(true);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);
    video.src = videoUrl;

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
      video.remove();
    };
  }, [videoUrl]);

  if (isError) {
    return (
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={posterUrl} 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-gray-900">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
        poster={posterUrl}
        onError={() => setIsError(true)}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;