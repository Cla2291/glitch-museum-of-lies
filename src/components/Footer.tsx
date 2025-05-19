
import { useState, useEffect } from 'react';

const Footer = () => {
  const [glitchedYear, setGlitchedYear] = useState(new Date().getFullYear().toString());
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.8) {
        // Sometimes show a glitched year
        const randomYear = Math.floor(Math.random() * 2100 + 1900).toString();
        setGlitchedYear(randomYear);
        
        // Reset after a short delay
        setTimeout(() => {
          setGlitchedYear(new Date().getFullYear().toString());
        }, 500);
      }
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative overflow-hidden bg-museum-black py-8 border-t border-museum-accent border-opacity-20">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-museum-accent to-transparent opacity-30"></div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-museum-text opacity-70 font-mono">
              <span className="text-glitch">©</span> <span>{glitchedYear}</span> Fake Museum. All rights imagined.
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-museum-text opacity-50 font-mono mb-1">Not a real museum.</p>
            <p className="text-xs text-museum-text opacity-50 font-mono">
              <span className="text-museum-accent">ID:</span> FMDF-{Math.random().toString(36).substring(2, 8).toUpperCase()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
