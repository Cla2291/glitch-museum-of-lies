
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Random glitch effect on logo
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, Math.random() * 5000 + 2000);

    return () => clearInterval(glitchInterval);
  }, []);

  const links = [
    { path: "/", label: "Home" },
    { path: "/gallery", label: "Gallery of Fakes" },
    { path: "/timeline", label: "False Timeline" },
    { path: "/create", label: "Create Your Own Fake" },
    { path: "/glitch-hall", label: "Glitch Hall" },
    { path: "/about", label: "About the Project" },
  ];

  return (
    <nav className="w-full bg-museum-black bg-opacity-90 backdrop-blur-sm fixed top-0 left-0 z-50 border-b border-museum-accent border-opacity-30">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <NavLink to="/" className="text-2xl font-bold text-museum-accent">
            <span className={`${glitchActive ? 'text-glitch-animate' : 'text-glitch'}`}>FAKE MUSEUM</span>
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm tracking-wide font-medium hover:text-museum-accent transition-colors relative py-1 ${
                  isActive ? 'text-museum-accent after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-museum-accent' : 'text-museum-text'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Menu"
            onClick={toggleMenu}
            className="text-museum-text hover:text-museum-accent"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-museum-black bg-opacity-95 border-t border-museum-accent border-opacity-30 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `text-base py-2 px-3 rounded-md ${
                    isActive ? 'bg-museum-accent bg-opacity-20 text-museum-accent' : 'text-museum-text hover:bg-opacity-10 hover:bg-museum-accent'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
