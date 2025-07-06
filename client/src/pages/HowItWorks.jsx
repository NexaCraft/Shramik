import React from 'react';
import { 
  Users, 
  MapPin, 
  CheckCircle, 
  Shield, 
  Clock, 
  Star, 
  Search, 
  Phone, 
  Handshake 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorksPage = () => {
  const steps = [
    {
      title: "Create Your Profile",
      description: "Sign up and build a comprehensive professional profile showcasing your skills, experience, and certifications.",
      icon: Users,
      color: "bg-blue-100",
      details: [
        "Quick and easy registration",
        "Highlight your skills and expertise",
        "Upload professional certifications",
        "Add your work history and references"
      ]
    },
    {
      title: "Browse Opportunities",
      description: "Explore a wide range of job opportunities tailored to your skills and location.",
      icon: Search,
      color: "bg-green-100",
      details: [
        "Location-based job matching",
        "Filter jobs by skill and preference",
        "View detailed job descriptions",
        "Transparent pricing and requirements"
      ]
    },
    {
      title: "Connect & Confirm",
      description: "Communicate with potential employers, negotiate terms, and finalize work arrangements.",
      icon: Handshake,
      color: "bg-orange-100",
      details: [
        "Secure in-app messaging",
        "Discuss job details",
        "Agree on terms and pricing",
        "Schedule and confirm work"
      ]
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Comprehensive verification process for both workers and employers"
    },
    {
      icon: Clock,
      title: "Efficient Matching",
      description: "Quick and accurate job and worker recommendations"
    },
    {
      icon: Star,
      title: "Trust & Transparency",
      description: "Ratings and reviews to build a reliable professional network"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-yellow-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How <span className="text-orange-600">Shramik</span> Works
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A simple, transparent platform connecting skilled workers with local opportunities
          </p>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6"
              >
                <div className={`${step.color} rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6`}>
                  <div className="text-3xl font-bold text-gray-800">
                    {index + 1}
                  </div>
                </div>
                <div className={`bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border ${step.color} border-2`}>
                  <step.icon className="h-8 w-8 text-gray-800" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm text-center mb-4">
                  {step.description}
                </p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Platform Guarantees
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've built robust features to ensure a seamless experience for workers and employers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-lg shadow-md p-6 text-center"
              >
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of workers and employers who trust Shramik
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/worker-signup">
              <button className="px-6 py-3 bg-white text-orange-600 rounded-md hover:bg-orange-100 transition-colors">
                I'm Looking for Work
              </button>
            </Link>
            <Link to="/employer-signup">
              <button className="px-6 py-3 border border-white text-white rounded-md hover:bg-white/20 transition-colors">
                I Need Workers
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;