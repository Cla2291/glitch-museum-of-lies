
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import GlitchText from '@/components/GlitchText';
import GlitchImage from '@/components/GlitchImage';

// Sample artwork data for the rotating gallery
const featuredArtworks = [
  {
    id: 1,
    title: "The Digital Decay",
    artist: "AI.rtist_0xFF",
    year: "2056",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3",
  },
  {
    id: 2,
    title: "Cognitive Dissonance in RGB",
    artist: "Neural.Paintbrush",
    year: "2042",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3",
  },
  {
    id: 3,
    title: "Synthetic Memories v3.1",
    artist: "DeepDream Collective",
    year: "2037",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3",
  },
  {
    id: 4,
    title: "404: Reality Not Found",
    artist: "The Silicon Surrealist",
    year: "2048",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3",
  },
];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const [glitchText, setGlitchText] = useState(false);
  
  // Rotating gallery effect
  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % featuredArtworks.length);
    }, 5000);
    
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);
  
  // Random text glitch effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.8) {
        setGlitchText(true);
        setTimeout(() => setGlitchText(false), 200);
      }
    }, 3000);
    
    return () => clearInterval(glitchInterval);
  }, []);
  
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="relative h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-museum-dark bg-opacity-70 z-10"></div>
          <GlitchImage
            src={featuredArtworks[activeIndex].image}
            alt="Featured artwork"
            className="w-full h-full object-cover transition-opacity duration-1000"
          />
        </div>
        
        {/* Scan line effect */}
        <div className="absolute left-0 w-full h-[2px] bg-white opacity-30 scan-line"></div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
              <span className="text-glitch-animate font-serif">FAKE MUSEUM</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-light mb-6 text-museum-text">
              <GlitchText
                text="The Distorted Future of Art"
                className="italic"
                intensity="medium"
              />
            </h2>
            <p className={`text-lg md:text-xl mb-8 max-w-xl text-museum-text opacity-90 ${glitchText ? 'text-glitch-animate' : ''}`}>
              Welcome to the world's premier institution dedicated to the 
              celebration of artificial creativity, digital deception, and 
              the blurring of reality in the age of machine-generated art.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-museum-accent hover:bg-opacity-90 text-white">
                <Link to="/gallery">
                  Explore Gallery <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-museum-accent text-museum-accent hover:bg-museum-accent hover:bg-opacity-10">
                <Link to="/create">Create Your Own Fake</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured Artworks */}
      <div className="container mx-auto px-4 py-16">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            <GlitchText text="Featured Fabrications" intensity="low" />
          </h2>
          <p className="text-museum-text opacity-70">
            Currently on display in our virtual exhibition.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredArtworks.map((artwork, index) => (
            <Link 
              key={artwork.id} 
              to={`/gallery`}
              className={`block transition-all duration-500 transform ${
                index === activeIndex ? 'scale-105 z-10' : 'scale-100 opacity-70'
              }`}
            >
              <div className="aspect-[3/4] overflow-hidden relative rounded bg-museum-black border border-museum-accent border-opacity-20">
                <GlitchImage
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover"
                  glitchOnHover={true}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-museum-black to-transparent p-4">
                  <h3 className="text-lg font-bold text-museum-accent">{artwork.title}</h3>
                  <div className="flex justify-between text-xs">
                    <span className="opacity-70 italic">{artwork.artist}</span>
                    <span className="font-mono opacity-70">{artwork.year}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Exhibition Info */}
        <div className="mt-16 mb-8 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-glitch">
            <span className="relative inline-block">
              Current Exhibition
              <span className="absolute -inset-1 -skew-y-3 bg-museum-accent opacity-20 -z-10"></span>
            </span>
          </h2>
          <h3 className="text-2xl md:text-4xl font-serif mb-2">
            <GlitchText text="« REALITY OPTIONAL »" intensity="high" />
          </h3>
          <p className="text-museum-text opacity-70 max-w-xl mx-auto">
            Exploring the post-truth landscape where AI and algorithms reshape our perception of authenticity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
