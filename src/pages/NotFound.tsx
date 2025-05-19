
import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import GlitchText from "@/components/GlitchText";

const NotFound = () => {
  const location = useLocation();
  const [glitchEffect, setGlitchEffect] = useState(false);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Glitch animation effect
    const interval = setInterval(() => {
      setGlitchEffect(true);
      setTimeout(() => {
        setGlitchEffect(false);
      }, 200);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-museum-dark overflow-hidden">
      <div className="relative z-10 text-center px-4">
        <h1 className={`text-8xl md:text-9xl font-bold mb-6 ${glitchEffect ? 'text-glitch-animate' : 'text-glitch'}`}>
          404
        </h1>
        <div className="mb-8">
          <GlitchText 
            text="Exhibit Not Found"
            className="text-2xl md:text-3xl font-bold text-museum-accent"
            intensity="high"
            as="h2"
          />
          <p className="text-museum-text opacity-70 mt-2 max-w-md mx-auto">
            The artifact you are looking for has been either misplaced, 
            fabricated, or exists in an alternate reality our servers cannot access.
          </p>
        </div>
        
        <div className="inline-block mb-8 p-4 border border-dashed border-museum-accent border-opacity-30 font-mono text-sm">
          <div className="text-museum-accent mb-1">Path Not Recognized:</div>
          <div className="opacity-70 overflow-hidden text-ellipsis max-w-xs">{location.pathname}</div>
        </div>
        
        <Button asChild className="bg-museum-accent hover:bg-opacity-90">
          <Link to="/">
            Return to Main Exhibition
          </Link>
        </Button>
      </div>
      
      {/* Animated glitch background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-2 bg-museum-accent opacity-10 animate-[glitch-horizontal_3s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-0 left-0 w-full h-2 bg-museum-accent opacity-10 animate-[glitch-horizontal_4s_ease-in-out_infinite]"></div>
        <div className="absolute top-0 left-0 h-full w-2 bg-museum-accent opacity-10 animate-[glitch-vertical_5s_ease-in-out_infinite]"></div>
        <div className="absolute top-0 right-0 h-full w-2 bg-museum-accent opacity-10 animate-[glitch-vertical_6s_ease-in-out_infinite]"></div>
        
        <div className="absolute left-0 w-full h-[1px] bg-white opacity-20 animate-[scan-line_10s_linear_infinite]"></div>
      </div>
    </div>
  );
};

export default NotFound;
