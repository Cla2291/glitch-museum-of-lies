
import GlitchText from '@/components/GlitchText';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-glitch-animate">
            About the Project
          </h1>
          
          {/* Introduction */}
          <div className="prose prose-invert max-w-none mb-16">
            <p className="text-xl leading-relaxed mb-6 text-museum-text opacity-90">
              <span className="text-museum-accent font-medium">Fake Museum</span> is a satirical 
              web experience that explores the increasingly blurred boundaries between authentic 
              and artificial creation in our digital age. Through deliberate glitches, 
              absurd narratives, and synthetic artifacts, we invite visitors to question 
              their perception of digital truth.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-museum-text opacity-80">
              In an era where AI can generate convincing images, text, and even video 
              indistinguishable from human-created content, this project serves as both 
              a playful exhibition and a critical commentary on our relationship with 
              information, creativity, and technological mediation.
            </p>
          </div>
          
          {/* Glitch section divider */}
          <div className="relative h-[2px] w-full my-12 overflow-hidden">
            <div className="absolute inset-0 bg-museum-accent opacity-30"></div>
            <div className="absolute h-full w-[60%] bg-museum-accent animate-[glitch-horizontal_10s_ease-in-out_infinite]"></div>
          </div>
          
          {/* Key Themes */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              <GlitchText text="Key Themes" intensity="medium" />
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-museum-black bg-opacity-40 p-6 rounded-sm border border-museum-accent border-opacity-20">
                <h3 className="text-xl font-bold mb-3 text-museum-accent">The Aesthetics of Glitch</h3>
                <p className="text-museum-text opacity-80 leading-relaxed">
                  We celebrate the visual poetry of digital error, finding beauty in 
                  the broken and distorted. By intentionally introducing glitches, we highlight 
                  the artificial nature of digital representation and the unexpected creativity 
                  that emerges from systemic failure.
                </p>
              </div>
              
              <div className="bg-museum-black bg-opacity-40 p-6 rounded-sm border border-museum-accent border-opacity-20">
                <h3 className="text-xl font-bold mb-3 text-museum-accent">Artificial Creativity</h3>
                <p className="text-museum-text opacity-80 leading-relaxed">
                  As algorithms create increasingly convincing art, music, and literature, 
                  we question the nature of creativity itself. Is the human touch essential 
                  to art, or can synthetic works evoke authentic emotional responses? What 
                  happens when we can no longer distinguish the source?
                </p>
              </div>
              
              <div className="bg-museum-black bg-opacity-40 p-6 rounded-sm border border-museum-accent border-opacity-20">
                <h3 className="text-xl font-bold mb-3 text-museum-accent">The Post-Truth Museum</h3>
                <p className="text-museum-text opacity-80 leading-relaxed">
                  Museums traditionally serve as arbiters of cultural value and historical truth. 
                  By creating a "fake museum" with fabricated artifacts and histories, we 
                  examine how institutional authority shapes our acceptance of narratives and 
                  how digital technologies challenge these structures.
                </p>
              </div>
              
              <div className="bg-museum-black bg-opacity-40 p-6 rounded-sm border border-museum-accent border-opacity-20">
                <h3 className="text-xl font-bold mb-3 text-museum-accent">Digital Authenticity</h3>
                <p className="text-museum-text opacity-80 leading-relaxed">
                  In an age of deepfakes and synthetic media, what constitutes an "authentic" 
                  digital experience? This project plays with the concept of authenticity itself, 
                  suggesting that perhaps the distinctions between real and artificial are 
                  increasingly irrelevant in our digital existence.
                </p>
              </div>
            </div>
          </div>
          
          {/* Artist Statement */}
          <div className="bg-museum-black bg-opacity-50 p-8 rounded-sm border border-museum-accent border-opacity-30 mb-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-museum-accent to-transparent opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-museum-accent to-transparent opacity-50"></div>
            
            <h2 className="text-2xl font-bold mb-4 text-center text-museum-accent">
              <GlitchText text="Artist's Statement" intensity="low" />
            </h2>
            
            <div className="text-lg italic text-museum-text opacity-90 leading-relaxed">
              <p className="mb-4">
                "The Fake Museum exists in the uncanny valley between education and deception, 
                between human and machine creativity. Through satirical exhibits and deliberate 
                technical anomalies, we invite visitors to question not just what they see in our 
                virtual halls, but all digital content they encounter in their daily lives.
              </p>
              <p className="mb-4">
                In creating this space, we are not merely critics of AI-generated content, but 
                participants in the ongoing conversation about how technology reshapes our 
                relationship with reality. The glitches you experience are not bugs—they are 
                features intended to disrupt the seamless digital experience we've come to expect.
              </p>
              <p>
                Perhaps in embracing the obviously fake, we become better equipped to recognize 
                the subtly inauthentic that increasingly permeates our information landscape."
              </p>
            </div>
            
            <div className="mt-6 text-right">
              <p className="text-sm font-mono text-museum-accent">
                — The Curatorial Collective
              </p>
            </div>
          </div>
          
          {/* Continue Exploring */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-6 text-museum-accent">
              <GlitchText text="Continue Exploring" intensity="medium" />
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-museum-accent hover:bg-opacity-90">
                <Link to="/gallery">
                  Gallery of Fakes <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-museum-accent text-museum-accent hover:bg-museum-accent hover:bg-opacity-10">
                <Link to="/timeline">False Timeline</Link>
              </Button>
              <Button asChild variant="outline" className="border-museum-accent text-museum-accent hover:bg-museum-accent hover:bg-opacity-10">
                <Link to="/create">Create Your Own Fake</Link>
              </Button>
              <Button asChild variant="outline" className="border-museum-accent text-museum-accent hover:bg-museum-accent hover:bg-opacity-10">
                <Link to="/glitch-hall">Glitch Hall</Link>
              </Button>
            </div>
          </div>
          
          <div className="text-center text-sm opacity-50 font-mono">
            <p>This is a satirical project created for educational and artistic purposes.</p>
            <p>All images, descriptions, and historical events are fictional.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
