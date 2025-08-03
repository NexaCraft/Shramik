import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  MessageCircle,
  Clock,
  Globe,
  Info,
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Our team typically responds within 24 hours",
      contact: "support@shramik.com",
      colorClass: "text-blue-600 bg-blue-100", // Blue for communication
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Available Monday-Saturday, 9 AM - 6 PM",
      contact: "+91 9624342055",
      colorClass: "text-green-600 bg-green-100", // Green for active support
    },
    {
      icon: MapPin,
      title: "Office Location",
      description: "Visit us at our Valsad headquarters",
      contact: "Umbergaon, Valsad, Gujarat",
      colorClass: "text-red-600 bg-red-100", // Red for location marker
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-yellow-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Contact <span className="text-orange-600">Shramik</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help and answer any questions you may have
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg shadow-md p-6 text-center"
              >
                <div
                  className={`rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 ${method.colorClass}`}
                >
                  <method.icon className="h-8 w-8" />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {method.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  {method.description}
                </p>
                <p className="font-medium text-orange-600">{method.contact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-lg shadow-md p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Send Us a Detailed Message
              </h2>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you as soon as
                possible
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Your Full Name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="+91 XXXX XXXXX"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Subject</label>
                  <div className="relative">
                    <Info className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="">Select Subject</option>
                      <option value="support">Customer Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Your Message</label>
                <div className="relative">
                  <MessageCircle className="absolute left-3 top-3 text-gray-400" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Describe your query in detail..."
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Additional Support Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Additional Support Channels
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Help Center */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <Globe className="h-12 w-12 text-blue-600 bg-blue-100 rounded-full p-2 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Help Center</h3>
              <p className="text-gray-600">
                Browse our comprehensive help center for quick answers
              </p>
              <a
                href="/help"
                className="mt-4 inline-block text-blue-600 hover:underline"
              >
                Visit Help Center
              </a>
            </div>

            {/* Support Hours */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <Clock className="h-12 w-12 text-green-600 bg-green-100 rounded-full p-2 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Support Hours</h3>
              <p className="text-gray-600">
                Monday - Saturday: 9:00 AM to 6:00 PM IST
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Excluding public holidays
              </p>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <Info className="h-12 w-12 text-purple-600 bg-purple-100 rounded-full p-2 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">FAQ</h3>
              <p className="text-gray-600">
                Find answers to commonly asked questions
              </p>
              <a
                href="/faq"
                className="mt-4 inline-block text-purple-600 hover:underline"
              >
                View FAQ
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
