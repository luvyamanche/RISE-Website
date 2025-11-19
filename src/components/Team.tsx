import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const Team = () => {
  const leaders = [
    {
      name: 'Arav Kewalia',
      role: 'Chief Executive Officer',
      image: '/arav.jpg',
      description:
        'A proactive STEAM advocate currently attending high school at Bridgewater-Raritan, Arav plays a key role in distributing STEAM kits and fostering community educational programs, leveraging his research and robotics background. His attentiveness to detail serves as a model for growth.',
      linkedin: 'https://www.linkedin.com/in/arav-kewalia-3b614728a/',
      email: 'aravkewalia@gmail.com',
    },
    {
      name: 'Luvyakrish Manche',
      role: 'Chief Operations Officer',
      image: '/luvya.jpeg',
      description:
        'A strategic thinker with a passion for entrepreneurship, he focuses on building partnerships and driving sustainable growth for RISE. He brings strong skills in business development and project management, helping streamline operations while ensuring maximum community impact.',
      linkedin: 'https://www.linkedin.com/in/luvyakrish-manche-a36780300/',
      email: 'luvya.manche@gmail.com',
    },
  ];

  return (
    <section id="team" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our passionate team combines expertise in education, technology, and
            community development to drive meaningful change in underserved
            communities worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="mb-6">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover shadow-lg"
                />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {leader.name}
              </h3>
              <p className="text-blue-600 font-semibold mb-4">{leader.role}</p>
              <p className="text-gray-600 leading-relaxed text-sm mb-6">
                {leader.description}
              </p>

              <div className="flex justify-center space-x-4">
                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-100 hover:bg-blue-200 p-3 rounded-lg transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-blue-600" />
                </a>
                <a
                  href={`mailto:${leader.email}`}
                  className="bg-gray-100 hover:bg-gray-200 p-3 rounded-lg transition-colors"
                >
                  <Mail className="h-5 w-5 text-gray-600" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Join Our Mission
          </h3>
          <p className="text-blue-100 leading-relaxed mb-6 max-w-2xl mx-auto">
            We're always looking for passionate individuals who share our vision
            of making STEAM education accessible to all. Whether you're an
            educator, engineer, or simply someone who believes in the power of
            education.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Get Involved
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;
