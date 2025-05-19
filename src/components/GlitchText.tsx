
import { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
  as?: React.ElementType;
}

const GlitchText = ({ text, className = "", intensity = 'medium', as: Component = 'span' }: GlitchTextProps) => {
  const [displayText, setDisplayText] = useState(text);
  
  useEffect(() => {
    let interval: number;
    
    if (intensity === 'low') {
      interval = window.setInterval(() => {
        if (Math.random() > 0.95) {
          const glitchText = createGlitchText(text);
          setDisplayText(glitchText);
          
          setTimeout(() => {
            setDisplayText(text);
          }, 100);
        }
      }, 5000);
    } 
    else if (intensity === 'medium') {
      interval = window.setInterval(() => {
        if (Math.random() > 0.9) {
          const glitchText = createGlitchText(text);
          setDisplayText(glitchText);
          
          setTimeout(() => {
            setDisplayText(text);
          }, 150);
        }
      }, 3000);
    } 
    else if (intensity === 'high') {
      interval = window.setInterval(() => {
        if (Math.random() > 0.7) {
          const glitchText = createGlitchText(text);
          setDisplayText(glitchText);
          
          setTimeout(() => {
            setDisplayText(text);
          }, 200);
        }
      }, 1500);
    }
    
    return () => clearInterval(interval);
  }, [text, intensity]);
  
  const createGlitchText = (original: string) => {
    // Don't glitch short texts too much
    if (original.length < 5) {
      const randomChar = '!@#$%^&*()_+-=[]{}|;:,.<>?/\\'.charAt(Math.floor(Math.random() * 26));
      return original.slice(0, -1) + randomChar;
    }
    
    // For longer text, create more complex glitches
    let result = '';
    for (let i = 0; i < original.length; i++) {
      // 20% chance to glitch each character
      if (Math.random() > 0.8) {
        // Possible glitch options
        const options = [
          // Replace with random character
          '!@#$%^&*()_+-=[]{}|;:,.<>?/\\'.charAt(Math.floor(Math.random() * 26)),
          // Duplicate the character
          original.charAt(i) + original.charAt(i),
          // Convert to similar looking character
          convertToSimilarChar(original.charAt(i))
        ];
        result += options[Math.floor(Math.random() * options.length)];
      } else {
        result += original.charAt(i);
      }
    }
    return result;
  };
  
  // Convert characters to similar looking ones (l to 1, o to 0, etc.)
  const convertToSimilarChar = (char: string) => {
    const map: Record<string, string> = {
      'a': '@', 'e': '3', 'i': '1', 'o': '0', 's': '$', 't': '+',
      'A': '4', 'B': '8', 'E': '3', 'I': '1', 'O': '0', 'S': '$'
    };
    return map[char] || char;
  };
  
  return (
    <Component className={`${className} relative`}>
      {displayText}
    </Component>
  );
};

export default GlitchText;
