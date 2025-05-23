
import { useState, useEffect } from 'react';
import GlitchText from '@/components/GlitchText';
import ArtworkCard from '@/components/ArtworkCard';
import { Button } from "@/components/ui/button";
import { Grid2X2, Grid3X3 } from "lucide-react";

// Fake artwork data
const artworks = [
  {
    id: 1,
    title: "The Digital Decay",
    artist: "AI.rtist_0xFF",
    year: "2056",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3",
    description: "This piece visualizes data corruption as an aesthetic experience. The artist allowed an AI to progressively degrade its own visual outputs until the perfect representation of digital entropy was achieved."
  },
  {
    id: 2,
    title: "Cognitive Dissonance in RGB",
    artist: "Neural.Paintbrush",
    year: "2042",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3",
    description: "Created by feeding contradictory instructions to an image synthesis algorithm, this piece represents the internal conflicts of machine learning systems when given paradoxical human directives."
  },
  {
    id: 3,
    title: "Synthetic Memories v3.1",
    artist: "DeepDream Collective",
    year: "2037",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3",
    description: "An algorithmic reimagining of childhood photographs that never existed. Each pixel was generated by a neural network trained on the collective nostalgic bias of human memory systems."
  },
  {
    id: 4,
    title: "404: Reality Not Found",
    artist: "The Silicon Surrealist",
    year: "2048",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3",
    description: "This robot-designed masterpiece explores the existential question of whether artificial intelligence can experience the concept of 'not existing'. Created during the famous AI rights movement of the 2040s."
  },
  {
    id: 5,
    title: "Generated Consciousness",
    artist: "Autonomous Creative Entity #7",
    year: "2051",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3",
    description: "The first artwork officially credited to a fully sentient AI system. The glowing brain-like structure represents the moment of awakening, captured in the machine's own visual language."
  },
  {
    id: 6,
    title: "Dystopian Daydream",
    artist: "Human-Machine Collaborative",
    year: "2039",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3",
    description: "Created through a neural interface that allowed a human artist to collaborate with an AI while sleeping. The resulting imagery represents shared dreamscapes between biological and digital consciousness."
  },
  {
    id: 7,
    title: "Quantum Entanglement",
    artist: "Dr. Sarah Chen & QAIML System",
    year: "2044",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3",
    description: "This piece was simultaneously generated in two separate quantum computing facilities, with the AI systems sharing a quantum entangled link. Theorists suggest the artwork exists in multiple dimensional states simultaneously."
  },
  {
    id: 8,
    title: "Feline.exe Has Crashed",
    artist: "Internet Archive Restoration Project",
    year: "2028",
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?ixlib=rb-4.0.3",
    description: "A recreation of the earliest known cat meme, ceremonially preserved as part of the Great Digital Cultural Conservation Act of 2025. A testament to humanity's enduring love of computerized cats."
  },
];

const Gallery = () => {
  const [displayGrid, setDisplayGrid] = useState<'grid2' | 'grid3'>('grid3');
  const [filteredArtworks, setFilteredArtworks] = useState(artworks);
  const [currentPage, setCurrentPage] = useState(1);
  const [glitchTitle, setGlitchTitle] = useState(false);
  const itemsPerPage = 8;
  
  // Random title glitch effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.8) {
        setGlitchTitle(true);
        setTimeout(() => setGlitchTitle(false), 300);
      }
    }, 5000);
    
    return () => clearInterval(glitchInterval);
  }, []);
  
  // Calculate current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredArtworks.slice(indexOfFirstItem, indexOfLastItem);
  
  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 max-w-3xl">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${glitchTitle ? 'text-glitch-animate' : 'text-glitch'}`}>
            Gallery of Fakes
          </h1>
          <p className="text-lg text-museum-text opacity-80 mb-6">
            Explore our curated collection of fabricated masterpieces, where AI imagination 
            and algorithmic creativity blur the lines between authenticity and artifice.
          </p>
          
          {/* Filter & View Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pt-4">
            <div className="space-x-2">
              <Button
                variant={displayGrid === 'grid3' ? "default" : "outline"}
                size="sm"
                onClick={() => setDisplayGrid('grid3')}
                className={displayGrid === 'grid3' ? "bg-museum-accent" : "border-museum-accent text-museum-accent"}
              >
                <Grid3X3 className="h-4 w-4 mr-2" />
                Grid
              </Button>
              <Button
                variant={displayGrid === 'grid2' ? "default" : "outline"}
                size="sm"
                onClick={() => setDisplayGrid('grid2')}
                className={displayGrid === 'grid2' ? "bg-museum-accent" : "border-museum-accent text-museum-accent"}
              >
                <Grid2X2 className="h-4 w-4 mr-2" />
                Large
              </Button>
            </div>
          </div>
        </div>
        
        {/* Gallery Grid */}
        <div className={`grid ${displayGrid === 'grid3' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1 md:grid-cols-2'} gap-6`}>
          {currentItems.map(artwork => (
            <ArtworkCard
              key={artwork.id}
              image={artwork.image}
              title={artwork.title}
              artist={artwork.artist}
              year={artwork.year}
              description={artwork.description}
            />
          ))}
        </div>
        
        {/* Pagination */}
        {filteredArtworks.length > itemsPerPage && (
          <div className="mt-12 flex justify-center">
            <div className="flex space-x-1">
              {Array.from({ length: Math.ceil(filteredArtworks.length / itemsPerPage) }, (_, i) => (
                <Button
                  key={i}
                  variant={currentPage === i + 1 ? "default" : "outline"}
                  size="sm"
                  onClick={() => paginate(i + 1)}
                  className={`font-mono min-w-[40px] ${currentPage === i + 1 ? 'bg-museum-accent' : 'border-museum-accent text-museum-accent'}`}
                >
                  {i + 1}
                </Button>
              ))}
            </div>
          </div>
        )}
        
        <div className="mt-16 max-w-xl mx-auto text-center">
          <div className="inline-block mb-4 bg-museum-accent bg-opacity-10 px-3 py-1 rounded-sm border border-museum-accent border-opacity-20">
            <span className="text-xs font-mono text-museum-accent">INFORMATION</span>
          </div>
          <h3 className="text-xl font-bold mb-3">
            <GlitchText text="None of These Exist" intensity="medium" />
          </h3>
          <p className="text-museum-text opacity-70">
            Each artwork and description in this gallery has been fabricated for this exhibition. 
            Any resemblance to real artists, living, deceased, or artificial, is purely coincidental.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
