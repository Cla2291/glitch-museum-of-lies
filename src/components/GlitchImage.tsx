
import { useState, useEffect } from 'react';

interface GlitchImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  glitchOnHover?: boolean;
}

const GlitchImage = ({ src, alt, className = "", width, height, glitchOnHover = true }: GlitchImageProps) => {
  const [isGlitching, setIsGlitching] = useState(false);
  const [randomGlitch, setRandomGlitch] = useState(false);
  
  useEffect(() => {
    // Random glitch effect
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.9 && !isGlitching) {
        setRandomGlitch(true);
        setTimeout(() => {
          setRandomGlitch(false);
        }, Math.random() * 300 + 100);
      }
    }, Math.random() * 5000 + 3000);
    
    return () => clearInterval(glitchInterval);
  }, [isGlitching]);
  
  const handleMouseEnter = () => {
    if (glitchOnHover) {
      setIsGlitching(true);
    }
  };
  
  const handleMouseLeave = () => {
    if (glitchOnHover) {
      setIsGlitching(false);
    }
  };
  
  return (
    <div 
      className={`glitch-img relative overflow-hidden ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img 
        src={src} 
        alt={alt} 
        width={width} 
        height={height}
        className={`w-full h-full object-cover transition-all ${isGlitching || randomGlitch ? 'scale-[1.02]' : ''}`}
      />
      
      {/* RGB Split Effect */}
      {(isGlitching || randomGlitch) && (
        <>
          <div className="absolute inset-0 bg-museum-glitchRed opacity-40 mix-blend-screen -translate-x-1" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}></div>
          <div className="absolute inset-0 bg-museum-glitchBlue opacity-40 mix-blend-screen translate-x-1" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}></div>
          
          {/* Scan line */}
          <div className="absolute left-0 w-full h-[2px] bg-white opacity-50 animate-[scan-line_2s_linear_infinite]"></div>
          
          {/* Noise texture */}
          <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay"></div>
          
          {/* Horizontal glitch segments */}
          <div className="absolute h-[10%] w-full bg-current left-0" 
            style={{ 
              top: `${Math.random() * 90}%`,
              transform: `translateX(${Math.random() > 0.5 ? '10px' : '-10px'})`,
              opacity: 0.8 
            }}>
          </div>
        </>
      )}
    </div>
  );
};

export default GlitchImage;
