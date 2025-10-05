import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-16 min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Ignite curiosity.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                  Empower innovation
                </span>{' '}
                to all.
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                RISE Foundation brings hands-on STEAM education to underserved
                communities worldwide, providing students with the tools to
                learn while helping solve real-world problems in their
                communities.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('programs')}
                className="group bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span>Our Programs</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('get-involved')}
                className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-xl font-semibold hover:bg-teal-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Involved
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">4</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600">500+</div>
                <div className="text-sm text-gray-600">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">20+</div>
                <div className="text-sm text-gray-600">Communities</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://aalambanafoundation.org/assets/images/slideshow/slider1.jpg"
                alt="Students engaged in STEAM education activities"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-teal-600/20 rounded-2xl transform rotate-3 -z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-bl from-orange-600/20 to-yellow-600/20 rounded-2xl transform -rotate-3 -z-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
