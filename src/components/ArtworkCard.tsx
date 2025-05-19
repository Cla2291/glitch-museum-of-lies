
import { useState } from 'react';
import GlitchImage from './GlitchImage';
import GlitchText from './GlitchText';

interface ArtworkCardProps {
  image: string;
  title: string;
  artist: string;
  year: string;
  description: string;
}

const ArtworkCard = ({ image, title, artist, year, description }: ArtworkCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="group relative bg-museum-black rounded-sm overflow-hidden border border-museum-accent border-opacity-10 hover:border-opacity-30 transition-all"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="aspect-[3/4] overflow-hidden">
        <GlitchImage 
          src={image} 
          alt={title} 
          className="w-full h-full transform transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <GlitchText 
          text={title}
          className="block text-xl font-bold mb-1 text-museum-accent"
          intensity="low"
          as="h3"
        />
        <div className="flex justify-between text-sm opacity-70 mb-2">
          <GlitchText text={artist} className="italic" intensity="low" />
          <span className="font-mono">{year}</span>
        </div>
        <div className={`overflow-hidden transition-all ${isExpanded ? 'max-h-96' : 'max-h-0 group-hover:max-h-24'}`}>
          <p className="text-sm mt-2 opacity-90 leading-relaxed">
            {description}
          </p>
        </div>
        <div className="mt-3 text-xs font-mono text-museum-accent opacity-50">
          Click to {isExpanded ? 'collapse' : 'expand'}
        </div>
      </div>
    </div>
  );
};

export default ArtworkCard;
