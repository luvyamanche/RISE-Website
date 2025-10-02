import React from 'react';
import {
  Package,
  Handshake,
  GraduationCap,
  Globe,
  Droplets,
  Lightbulb,
} from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      icon: <Package className="h-8 w-8" />,
      title: 'STEAM Kit Distribution',
      description:
        'We design and deliver hands-on STEAM kits that combine education with problem solving. These kits help students explore science, technology, engineering, arts, and mathematics through direct practice.',
      color: 'blue',
    },
    {
      icon: <Handshake className="h-8 w-8" />,
      title: 'Community Partnerships',
      description:
        'We collaborate with schools, educators, and local leaders to understand specific educational challenges. This collaboration shapes our programs to be relevant and sustainable.',
      color: 'teal',
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: 'Hands-On Learning Programs',
      description:
        'We organize interactive sessions where students connect concepts to real-world applications. These experiences encourage critical thinking, teamwork, and problem solving.',
      color: 'orange',
    },
  ];

  const kits = [
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: 'Solar Light Kits',
      description: 'For homes without electricity',
    },
    {
      icon: <Droplets className="h-6 w-6" />,
      title: 'Water Purification Kits',
      description: 'For areas with unsafe water',
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: 'Educational Kits',
      description: 'For classrooms with limited resources',
    },
  ];

  const countries = [
    'India',
    'Ivory Coast',
    'Senegal',
    'Nigeria',
    'Sierra Leone',
    'Guatemala',
  ];

  return (
    <section id="programs" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What We Do
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive approach combines education, community
            partnership, and practical solutions to create lasting impact in
            underserved regions worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div
                className={`bg-${program.color}-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-${program.color}-600`}
              >
                {program.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {program.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {program.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Practical STEAM Kits
            </h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our carefully designed kits address real-world challenges while
              providing educational value. Each kit is developed with community
              input to ensure maximum impact and sustainability.
            </p>

            <div className="space-y-4 mb-8">
              {kits.map((kit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 bg-white p-4 rounded-xl shadow-sm"
                >
                  <div className="bg-blue-100 p-3 rounded-lg text-blue-600 flex-shrink-0">
                    {kit.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{kit.title}</h4>
                    <p className="text-gray-600 text-sm">{kit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-teal-50 p-6 rounded-xl">
              <div className="flex items-center space-x-3 mb-4">
                <Globe className="h-6 w-6 text-teal-600" />
                <h4 className="font-semibold text-gray-900">Global Reach</h4>
              </div>
              <p className="text-gray-600 mb-4">We currently operate in:</p>
              <div className="flex flex-wrap gap-2">
                {countries.map((country, index) => (
                  <span
                    key={index}
                    className="bg-white px-3 py-1 rounded-full text-sm font-medium text-teal-700 border border-teal-200"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/public/packages.jpeg"
              alt="Students working with STEAM kits"
              className="w-full rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-teal-600/10 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
