import React from 'react';
import {
  Heart,
  Users,
  Mail,
  DollarSign,
  Volume as Volunteer,
} from 'lucide-react';

const GetInvolved = () => {
  const ways = [
    {
      icon: <Volunteer className="h-8 w-8" />,
      title: 'Volunteer',
      description:
        'Join our team of passionate educators and community leaders making a difference worldwide.',
      color: 'blue',
      action: 'Explore Opportunities',
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: 'Donate',
      description:
        'Support our mission by contributing resources to help us reach more communities.',
      color: 'teal',
      action: 'Make a Donation',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Partner',
      description:
        'Collaborate with us to bring STEAM education to your community or organization.',
      color: 'orange',
      action: 'Become a Partner',
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: 'Stay Connected',
      description:
        'Subscribe to our newsletter for updates on our programs and impact stories.',
      color: 'blue',
      action: 'Subscribe Now',
    },
  ];

  return (
    <section id="get-involved" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="h-8 w-8 text-red-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get Involved
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join us as we foster innovation and empower the next generation.
            Whether you're interested in volunteering, contributing resources,
            or sponsoring our STEAM kits, we'd love to build a brighter future
            together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {ways.map((way, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div
                className={`bg-${way.color}-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 text-${way.color}-600`}
              >
                {way.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {way.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                {way.description}
              </p>
              <button
                className={`bg-${way.color}-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-${way.color}-700 transition-colors text-sm`}
              >
                {way.action}
              </button>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 via-teal-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to Make a Difference?
          </h3>
          <p className="text-blue-100 leading-relaxed mb-8 text-lg max-w-2xl mx-auto">
            Every contribution, no matter how small, helps us reach more
            students and communities. Together, we can ignite curiosity and
            empower innovation around the world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors flex-1">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex-1">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
