import React from 'react';
import { 
  Users, 
  Target, 
  Globe, 
  CheckCircle, 
  Award, 
  Heart 
} from 'lucide-react';

const AboutPage = () => {
  const corePrinciples = [
    {
      icon: Users,
      title: "Empowerment",
      description: "Providing opportunities for skilled workers to thrive"
    },
    {
      icon: Target,
      title: "Transparency",
      description: "Creating a fair and open marketplace for work"
    },
    {
      icon: Globe,
      title: "Local Impact",
      description: "Supporting local economies and communities"
    }
  ];

  const teamMembers = [
    {
      name: "Rahul Sharma",
      role: "Founder & CEO",
      bio: "Serial entrepreneur with 15+ years in tech and workforce development"
    },
    {
      name: "Priya Patel",
      role: "Chief Operations Officer",
      bio: "Expert in labor market dynamics and social entrepreneurship"
    },
    {
      name: "Amit Kumar",
      role: "Technology Lead",
      bio: "Innovative tech leader passionate about solving social challenges"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-yellow-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-orange-600">Shramik</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our mission is to revolutionize how skilled workers find opportunities 
            and how employers connect with local talent
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Journey Begins
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Shramik was founded in 2018 with a simple yet powerful vision: 
                to create a platform that bridges the gap between skilled workers 
                and local job opportunities across India.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Recognizing the challenges faced by millions of skilled workers 
                in finding consistent and fair work, we developed a technology-driven 
                solution that empowers both workers and employers.
              </p>
              <div className="flex space-x-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">50K+</div>
                  <div className="text-sm text-gray-600">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">1M+</div>
                  <div className="text-sm text-gray-600">Jobs Completed</div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/founder-image.jpg"  // Replace with actual founder image
                  alt="Shramik Founders"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Core Principles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The fundamental values that drive everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {corePrinciples.map((principle, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-lg shadow-md p-6 text-center"
              >
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <principle.icon className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {principle.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate individuals driving Shramik's mission forward
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-gray-100 rounded-lg p-6 text-center"
              >
                <div className="bg-white rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {member.role}
                </p>
                <p className="text-gray-500 text-sm">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-yellow-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Be part of a movement that's transforming workforce connections
          </p>
          <div className="flex justify-center space-x-4">
            <button className="px-6 py-3 bg-white text-orange-600 rounded-md hover:bg-orange-100 transition-colors">
              Join as a Worker
            </button>
            <button className="px-6 py-3 border border-white text-white rounded-md hover:bg-white/20 transition-colors">
              Hire Talent
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;