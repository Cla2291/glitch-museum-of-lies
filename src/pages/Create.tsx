
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import GlitchText from '@/components/GlitchText';
import GlitchImage from '@/components/GlitchImage';

// Placeholder images for "generated" content
const placeholderImages = [
  "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?ixlib=rb-4.0.3",
];

// Silly art titles
const artTitles = [
  "Quantum Dissonance",
  "Synthetic Reverie",
  "Algorithmic Soul",
  "Electronic Dreams",
  "Neural Evolution",
  "Binary Emotions",
  "Artificial Renaissance", 
  "Digital Consciousness",
  "Silicon Memories",
  "Synthetic Genesis",
];

// Artists
const artists = [
  "Deep Learn Davis",
  "Neural.Paintbrush",
  "AI.rtist Collective",
  "Algorithm van Gogh",
  "Synthetic Warhol",
  "GAN Picasso",
  "Machine Learning Monet",
  "Robot Rembrandt",
  "Artificial Da Vinci",
  "Digital Dalí",
];

// Time periods
const timePeriods = [
  "2029",
  "2034",
  "2041",
  "2045",
  "2052",
  "2058",
  "2063",
  "2077",
  "2086",
  "2099",
];

// Description templates
const descriptionTemplates = [
  "Created using KEYWORD1 technology, this piece explores the relationship between KEYWORD2 and human KEYWORD3. The artist spent months calibrating the algorithms to achieve the perfect balance of artificial creativity and emotional resonance.",
  "This pioneering work combines KEYWORD1 aesthetics with KEYWORD2 theory. It represents a breakthrough moment when AI systems first developed the ability to incorporate KEYWORD3 into their creative process.",
  "Exhibited first at the Museum of KEYWORD1 Innovation, this artwork shocked critics with its KEYWORD2 interpretation of KEYWORD3. Some viewers reported experiencing synthetic synesthesia when viewing the piece.",
  "Using experimental KEYWORD1 algorithms, the artist trained the system on thousands of images of KEYWORD2 before asking it to imagine KEYWORD3. The resulting creation challenges our understanding of machine creativity.",
  "This controversial masterpiece was created when a KEYWORD1 neural network was exposed to KEYWORD2 data and asked to visualize KEYWORD3. The work was temporarily banned in three countries for its provocative implications.",
];

// Generate a random integer between min and max (inclusive)
const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const Create = () => {
  const [keywords, setKeywords] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedResult, setGeneratedResult] = useState<{
    image: string;
    title: string;
    artist: string;
    year: string;
    description: string;
  } | null>(null);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!keywords.trim()) {
      toast({
        title: "Error",
        description: "Please enter at least one keyword.",
        variant: "destructive",
      });
      return;
    }
    
    // Split the keywords and ensure we have at least one
    const keywordsList = keywords.split(/[ ,]+/).filter(k => k.trim().length > 0);
    
    if (keywordsList.length === 0) {
      toast({
        title: "Error",
        description: "Please enter valid keywords.",
        variant: "destructive",
      });
      return;
    }
    
    // Start the "generation" process
    setIsGenerating(true);
    setGeneratedResult(null);
    
    // Simulate AI generation time
    setTimeout(() => {
      // Select random elements for our fake artwork
      const keywordsToUse = [...keywordsList];
      while (keywordsToUse.length < 3) {
        // If user provided fewer than 3 keywords, duplicate one
        keywordsToUse.push(keywordsList[getRandomInt(0, keywordsList.length - 1)]);
      }
      
      // Randomly select 3 keywords from the list (or shuffle if fewer than 3)
      const shuffledKeywords = keywordsToUse.sort(() => Math.random() - 0.5).slice(0, 3);
      
      // Get random template and replace keywords
      let description = descriptionTemplates[getRandomInt(0, descriptionTemplates.length - 1)];
      description = description
        .replace("KEYWORD1", shuffledKeywords[0])
        .replace("KEYWORD2", shuffledKeywords[1])
        .replace("KEYWORD3", shuffledKeywords[2]);
      
      // Create the result
      setGeneratedResult({
        image: placeholderImages[getRandomInt(0, placeholderImages.length - 1)],
        title: artTitles[getRandomInt(0, artTitles.length - 1)],
        artist: artists[getRandomInt(0, artists.length - 1)],
        year: timePeriods[getRandomInt(0, timePeriods.length - 1)],
        description: description,
      });
      
      setIsGenerating(false);
    }, 2500);
  };
  
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-glitch">
            <GlitchText text="Create Your Own Fake" intensity="medium" />
          </h1>
          <p className="text-lg text-museum-text opacity-80 mb-6">
            Enter a few keywords (e.g., "Einstein, UFO, Sushi") and our automated 
            art generation system will produce a unique piece of fake art complete 
            with an authentically inauthentic museum label.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Form */}
          <div>
            <div className="bg-museum-black bg-opacity-40 p-8 rounded-sm border border-museum-accent border-opacity-20">
              <h2 className="text-2xl font-bold mb-6">
                <GlitchText text="Enter Your Keywords" intensity="low" />
              </h2>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="keywords" className="block font-medium mb-2 text-sm">
                    Keywords (separated by commas)
                  </label>
                  <Input
                    id="keywords"
                    placeholder="Einstein, UFO, Sushi, Dinosaur..."
                    value={keywords}
                    onChange={(e) => setKeywords(e.target.value)}
                    className="bg-museum-dark border-museum-accent border-opacity-40"
                  />
                  <p className="mt-2 text-xs opacity-70 italic">
                    Suggestion: Enter unusual or contradictory combinations for more interesting results
                  </p>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-museum-accent hover:bg-opacity-90"
                  disabled={isGenerating}
                >
                  {isGenerating ? (
                    <>
                      <span className="animate-pulse mr-2">Generating</span>
                      <span className="inline-block animate-pulse">.</span>
                      <span className="inline-block animate-pulse delay-200">.</span>
                      <span className="inline-block animate-pulse delay-400">.</span>
                    </>
                  ) : "Generate Fake Artwork"}
                </Button>
              </form>
              
              <div className="mt-8 text-center">
                <div className="text-xs font-mono opacity-50 mb-1">MUSEUM COMMISSION</div>
                <div className="text-sm font-bold">Supported by the Imaginary Arts Council</div>
              </div>
            </div>
            
            <div className="mt-6 p-4 border border-dashed border-museum-accent border-opacity-30 rounded-sm">
              <h3 className="text-sm font-bold mb-2 text-museum-accent opacity-80">How it works</h3>
              <p className="text-sm opacity-70 leading-relaxed">
                Our proprietary FAKE-GEN™ technology doesn't actually exist. This is a satirical 
                demonstration that combines random images with generated text. In a real AI art 
                system, your inputs would influence the visual output. This simplified version 
                highlights how easily convincing fakes can be created.
              </p>
            </div>
          </div>
          
          {/* Results Display */}
          <div>
            {isGenerating ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-block w-16 h-16 border-4 border-t-museum-accent border-opacity-50 rounded-full animate-spin mb-6"></div>
                  <div className="text-lg font-mono text-museum-accent animate-pulse">Processing keywords...</div>
                  <p className="mt-2 text-sm opacity-70">Accessing alternate reality databases</p>
                </div>
              </div>
            ) : generatedResult ? (
              <div className="bg-museum-black bg-opacity-40 rounded-sm overflow-hidden border border-museum-accent border-opacity-20">
                <GlitchImage
                  src={generatedResult.image}
                  alt={generatedResult.title}
                  className="w-full h-64 md:h-96 object-cover"
                  glitchOnHover={true}
                />
                
                <div className="p-6">
                  <div className="mb-1 font-mono text-xs text-museum-accent">FAKE MUSEUM COLLECTION</div>
                  <h2 className="text-2xl font-bold mb-2">
                    <GlitchText text={generatedResult.title} className="text-museum-accent" intensity="low" />
                  </h2>
                  
                  <div className="flex justify-between text-sm mb-4">
                    <span className="italic">{generatedResult.artist}</span>
                    <span className="font-mono">{generatedResult.year}</span>
                  </div>
                  
                  <div className="bg-museum-dark bg-opacity-50 p-4 rounded-sm mb-4">
                    <p className="italic text-museum-text opacity-90 leading-relaxed">
                      "{generatedResult.description}"
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-xs font-mono opacity-50">
                      ID: FM-{Math.random().toString(36).substring(2, 10).toUpperCase()}
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-museum-accent text-museum-accent text-xs"
                        onClick={() => setGeneratedResult(null)}
                      >
                        Reset
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-museum-accent text-museum-accent text-xs"
                        onClick={handleSubmit}
                      >
                        Regenerate
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center border-2 border-dashed border-museum-accent border-opacity-20 rounded-sm p-8">
                <div className="text-center">
                  <div className="mb-4">
                    <div className="inline-block w-16 h-16 rounded-full bg-museum-accent bg-opacity-10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-museum-accent opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Create Your Masterpiece</h3>
                  <p className="text-museum-text opacity-70 max-w-sm">
                    Enter your keywords in the form and click Generate to create your own fake artwork with a museum description.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
