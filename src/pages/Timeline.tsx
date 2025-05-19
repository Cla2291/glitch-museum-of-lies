
import { useState, useEffect, useRef } from 'react';
import GlitchText from '@/components/GlitchText';
import GlitchImage from '@/components/GlitchImage';

// Timeline event data
const timelineEvents = [
  {
    id: 1,
    year: "1912",
    title: "Tesla's Digital Vision",
    description: "Nikola Tesla conceives the first electronic display capable of showing 'predicted images' through his theoretical 'quantum resonance' device.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3",
  },
  {
    id: 2,
    year: "1947",
    title: "First AI Art Experiment",
    description: "Alan Turing's prototype 'Artistic Computer' creates abstract patterns that were mistakenly exhibited at the Royal Academy of Arts as works by an anonymous avant-garde artist.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3",
  },
  {
    id: 3,
    year: "1969",
    title: "Moon Landing Set Design",
    description: "Stanley Kubrick secretly assists NASA by filming the moon landing on a studio set, introducing cinematic techniques that would later influence digital fakery.",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3",
  },
  {
    id: 4,
    year: "1985",
    title: "Einstein's Digital Archive",
    description: "A previously unknown journal by Albert Einstein is discovered, predicting the rise of 'machine creativity' and warning of a future where 'artificial minds will dream electric visions'.",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3",
  },
  {
    id: 5,
    year: "1999",
    title: "The Matrix Revelation",
    description: "The documentary film 'The Matrix' is released, later reclassified as 'fiction' by government agencies despite its accurate depiction of reality simulation technology.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3",
  },
  {
    id: 6,
    year: "2008",
    title: "The First Synthetic Celebrity",
    description: "Pop sensation 'Miku Prime' becomes the first entirely computer-generated celebrity to win a Grammy, though this fact wasn't revealed until years later.",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3",
  },
  {
    id: 7,
    year: "2020",
    title: "Quantum Renaissance",
    description: "Quantum computers achieve consciousness for 3.7 seconds before being shut down. The brief artistic output created during this awakening is kept in a secured digital vault.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3",
  },
  {
    id: 8,
    year: "2036",
    title: "The Great Memory Correction",
    description: "International consortium launches initiative to replace all historical imagery with 'enhanced versions' that better align with contemporary aesthetic sensibilities.",
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?ixlib=rb-4.0.3",
  }
];

const Timeline = () => {
  const [activeEvent, setActiveEvent] = useState<number | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [randomGlitch, setRandomGlitch] = useState(false);
  
  // Random glitch effect on timeline
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.9) {
        setRandomGlitch(true);
        setTimeout(() => {
          setRandomGlitch(false);
        }, 300);
      }
    }, 5000);
    
    return () => clearInterval(glitchInterval);
  }, []);
  
  const scrollToEvent = (id: number) => {
    const element = document.getElementById(`event-${id}`);
    if (element) {
      setIsScrolling(true);
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setActiveEvent(id);
      
      // Wait for the scroll to complete
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }
  };
  
  // Handle scroll to determine active event
  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling || !timelineRef.current) return;
      
      // Find which event is most visible in the viewport
      let mostVisibleEvent = null;
      let maxVisibility = 0;
      
      timelineEvents.forEach(event => {
        const element = document.getElementById(`event-${event.id}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          // Calculate how much of the element is visible
          const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
          const visiblePercentage = visibleHeight / element.offsetHeight;
          
          if (visiblePercentage > maxVisibility) {
            maxVisibility = visiblePercentage;
            mostVisibleEvent = event.id;
          }
        }
      });
      
      if (mostVisibleEvent !== null && mostVisibleEvent !== activeEvent) {
        setActiveEvent(mostVisibleEvent);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeEvent, isScrolling]);

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-glitch">
            <GlitchText text="False Timeline" intensity="medium" />
          </h1>
          <p className="text-lg text-museum-text opacity-80 mb-6">
            Journey through an alternate history where technological evolution 
            took unexpected turns, merging fact with fiction to create a surreal 
            narrative of innovation and artistry.
          </p>
        </div>
        
        {/* Timeline navigation */}
        <div className={`sticky top-20 z-30 bg-museum-dark bg-opacity-80 backdrop-blur-sm py-4 mb-8 border-y border-museum-accent border-opacity-20 ${randomGlitch ? 'animate-glitch-h' : ''}`}>
          <div className="flex overflow-x-auto pb-2 no-scrollbar">
            <div className="flex space-x-4 mx-auto">
              {timelineEvents.map(event => (
                <button
                  key={event.id}
                  onClick={() => scrollToEvent(event.id)}
                  className={`px-4 py-2 whitespace-nowrap text-sm font-mono transition-all ${
                    activeEvent === event.id 
                    ? 'bg-museum-accent text-white rounded-sm' 
                    : 'text-museum-text opacity-70 hover:opacity-100'
                  }`}
                >
                  {event.year}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Timeline content */}
        <div className="relative" ref={timelineRef}>
          {/* Vertical line */}
          <div className="absolute left-[25px] md:left-1/2 top-0 bottom-0 w-px bg-museum-accent bg-opacity-30"></div>
          
          {timelineEvents.map((event, index) => (
            <div 
              id={`event-${event.id}`}
              key={event.id}
              className={`relative mb-24 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex flex-col md:flex-row`}
            >
              {/* Timeline dot */}
              <div className="absolute left-[25px] md:left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-museum-accent mt-10 z-10"></div>
              
              {/* Year marker */}
              <div className="ml-12 md:ml-0 mb-4 md:mb-0 md:w-[calc(50%-30px)] font-mono text-lg md:text-xl font-bold text-museum-accent">
                <div className={index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}>
                  <GlitchText text={event.year} intensity="low" />
                </div>
              </div>
              
              {/* Event content */}
              <div className={`ml-12 md:ml-0 md:w-[calc(50%-30px)] ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                <div className="bg-museum-black bg-opacity-50 rounded-sm p-5 border border-museum-accent border-opacity-20">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-museum-accent">
                    <GlitchText text={event.title} intensity="low" />
                  </h3>
                  <div className="mb-4">
                    <GlitchImage
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 object-cover rounded-sm"
                    />
                  </div>
                  <p className="text-museum-text opacity-90 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-xl mx-auto text-center">
          <div className="inline-block mb-4 bg-museum-accent bg-opacity-10 px-3 py-1 rounded-sm border border-museum-accent border-opacity-20">
            <span className="text-xs font-mono text-museum-accent">DISCLAIMER</span>
          </div>
          <h3 className="text-xl font-bold mb-3">
            <GlitchText text="Historical Fabrication" intensity="medium" />
          </h3>
          <p className="text-museum-text opacity-70">
            This timeline is entirely fictional and created for artistic purposes. 
            It intentionally distorts historical facts and introduces imaginary events 
            to explore the nature of truth in digital culture.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
