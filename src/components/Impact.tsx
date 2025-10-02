import React from 'react';
import { Star, Quote } from 'lucide-react';

const Impact = () => {
  const testimonials = [
    {
      name: "Mrs. Fatmata O'Connor",
      role: "Community Leader",
      content: "RISE has truly made a difference in our community! The STEAM kits provided were engaging and educational, sparking a love for learning among the children. Their commitment to addressing real-world issues is inspiring.",
      rating: 5
    },
    {
      name: "Aalambana Foundation",
      role: "Partner Organization",
      content: "We are incredibly grateful for RISE's efforts. Their team was attentive and responsive to our community's needs, and the impact of their STEAM initiatives has been profound. We highly recommend supporting RISE to anyone who believes in the power of education.",
      rating: 5
    }
  ];

  const stats = [
    { number: "1000+", label: "Students Reached", color: "blue" },
    { number: "50+", label: "Communities Served", color: "teal" },
    { number: "6", label: "Countries", color: "orange" },
    { number: "100+", label: "STEAM Kits Distributed", color: "green" }
  ];

  return (
    <section id="impact" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how we're making a difference in communities around the world through the voices 
            of those we serve and the numbers that tell our story.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className={`text-3xl md:text-4xl font-bold text-${stat.color}-600 mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <Quote className="h-8 w-8 text-blue-600 mr-3" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>
              
              <div className="border-t border-gray-200 pt-6">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-blue-600 text-sm">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Image */}
        <div className="mt-16">
          <div className="relative rounded-2xl overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/8471929/pexels-photo-8471929.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Students celebrating their achievements"
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-teal-900/70 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h3 className="text-2xl md:text-4xl font-bold mb-4">
                  Transforming Communities Through Education
                </h3>
                <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
                  Every kit we distribute, every program we run, creates ripples of positive change 
                  that extend far beyond the classroom.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;