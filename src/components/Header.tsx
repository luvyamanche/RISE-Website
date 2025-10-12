import React, { useState, useEffect } from 'react';
import { Menu, X, Lightbulb } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="flex items-center">
              <img src='/logo.jpeg' className = 'h-10 w-auto object-contain'/>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">RISE Foundation</h1>
              <p className="text-xs text-gray-600">Rural Initiative for STEAM Education</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              About
            </button>
            <button onClick={() => scrollToSection('programs')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Programs
            </button>
            <button onClick={() => scrollToSection('team')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Team
            </button>
            <button onClick={() => scrollToSection('impact')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Impact
            </button>
            <button onClick={() => scrollToSection('get-involved')} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Get Involved
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-blue-600 transition-colors font-medium">
                About
              </button>
              <button onClick={() => scrollToSection('programs')} className="text-left text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Programs
              </button>
              <button onClick={() => scrollToSection('team')} className="text-left text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Team
              </button>
              <button onClick={() => scrollToSection('impact')} className="text-left text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Impact
              </button>
              <button onClick={() => scrollToSection('get-involved')} className="text-left bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium w-fit">
                Get Involved
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;