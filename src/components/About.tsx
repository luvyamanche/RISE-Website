import React from 'react';
import { Target, Eye, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Who We Are
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            RISE (Rural Initiative for STEAM Education) is a nonprofit
            organization focused on access to STEAM education. We provide
            students with hands-on learning in science, technology, engineering,
            arts, and mathematics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <div>
            <img
              src="/finalpic.png"
              alt="Children learning with STEAM kits"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Our Approach</h3>
            <p className="text-gray-600 leading-relaxed">
              We support local communities with practical kits including solar
              light kits for homes without electricity, water purification kits
              for areas with unsafe water, and educational kits for classrooms
              with limited resources.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our approach is simple: we give students the tools to learn. We
              give communities the tools to solve problems. This way, young
              people gain skills while helping where they live.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-8 rounded-2xl text-center">
            <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Make science, technology, engineering, arts, and mathematics
              accessible to all children, especially those in underserved
              communities.
            </p>
          </div>

          <div className="bg-teal-50 p-8 rounded-2xl text-center">
            <div className="bg-teal-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Eye className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              Foster creativity, critical thinking, and a lifelong interest in
              learning while providing practical resources to help grow
              communities.
            </p>
          </div>

          <div className="bg-orange-50 p-8 rounded-2xl text-center">
            <div className="bg-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Impact</h3>
            <p className="text-gray-600 leading-relaxed">
              Young people gain valuable skills while contributing meaningfully
              to their communities, creating lasting positive change.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-3xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Our Origin Story
            </h3>
            <p className="text-blue-100 leading-relaxed text-lg mb-4">
              The Rise Foundation began in 2022 during a  trip to India. Local schools lacked textbooks, lab supplies, and
              electricity. Students wanted to learn but had no tools. Seeing
              these conditions inspired the founders to act.
            </p>
            <p className="text-blue-100 leading-relaxed text-lg mb-4">
              That same year, a monsoon disaster in India revealed how
              communities suffer when basic resources fail. Children and
              families were forced to drink contaminated water, with no access
              to safe treatment. The crisis exposed global gaps in public health
              and education.
            </p>
            <p className="text-blue-100 leading-relaxed text-lg mb-4">
              These experiences shaped the Rise Foundation's mission. What began
              as small kits of electronic parts for one school grew into
              scalable STEAM kits built for real-world needs. The kits include
              projects such as water purification and pH testing, designed for
              durability and affordability.
            </p>
            <p className="text-blue-100 leading-relaxed text-lg">
              Today, the foundation supports multiple schools and communities.
              Beyond providing supplies, the team builds programs that teach
              problem solving and practical science. Their goal is clear: expand
              access to knowledge and tools so no child is held back by lack of
              opportunity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
