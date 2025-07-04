import { Link } from "react-router-dom";
import {
  Briefcase,
  Building2,
  Users,
  CheckCircle,
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Star,
  Shield,
  Clock,
} from "lucide-react";

const EmployerSignup = () => {
  const businessTypes = [
    "Construction Company",
    "Home Services",
    "Restaurant/Hotel",
    "Retail Store",
    "Manufacturing",
    "Event Management",
    "Real Estate",
    "Individual/Homeowner",
    "Other",
  ];

  const cities = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Chennai",
    "Kolkata",
    "Hyderabad",
    "Pune",
    "Ahmedabad",
    "Surat",
    "Jaipur",
  ];

  const benefits = [
    {
      icon: Users,
      title: "Access to 50K+ Verified Workers",
      description: "Find skilled workers in your area instantly",
    },
    {
      icon: Shield,
      title: "Identity Verified Profiles",
      description: "All workers go through our verification process",
    },
    {
      icon: Star,
      title: "Rating & Review System",
      description: "Choose workers based on real employer feedback",
    },
    {
      icon: Clock,
      title: "Quick Hiring Process",
      description: "Post a job and get applications within hours",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Refined Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center space-x-4 bg-white shadow-md rounded-full px-6 py-3">
            <div className="bg-gradient-to-br from-orange-500 to-yellow-500 p-3 rounded-full shadow-lg">
              <Briefcase className="h-7 w-7 text-white" />
            </div>

            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600">
              Join as an Employer
            </h1>
          </div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Connect with skilled workers in your area. Post jobs, hire talent,
            and grow your business with ease.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Benefits Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              <div className="bg-white rounded-xl shadow-xl p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-3">
                  Why Choose Shramik?
                </h3>

                <div className="space-y-6">
                  {benefits.map((benefit, index) => {
                    const Icon = benefit.icon;

                    return (
                      <div
                        key={index}
                        className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg hover:shadow-md transition-all"
                      >
                        <div className="bg-orange-100 rounded-full p-3">
                          <Icon className="h-6 w-6 text-orange-600" />
                        </div>

                        <div>
                          <h4 className="font-bold text-gray-900 text-base">
                            {benefit.title}
                          </h4>

                          <p className="text-sm text-gray-600">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 flex items-start space-x-4">
                <CheckCircle className="h-7 w-7 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-green-800 text-base">
                    Free to Get Started
                  </h4>

                  <p className="text-sm text-green-700 leading-relaxed">
                    Create your account and post your first job for free. Pay
                    only when you hire real talent.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 shadow-2xl rounded-2xl overflow-hidden">
              {/* Form Header */}
              <div className="flex items-center justify-between bg-gradient-to-r from-orange-100 to-pink-100 px-6 py-5 border-b">
                <div className="flex items-center space-x-4">
                  <Building2 className="h-6 w-6 text-orange-600" />
                  <h2 className="text-xl font-bold text-gray-900">
                    Create Your Employer Account
                  </h2>
                </div>
              </div>

              {/* Form Content */}
              <form className="space-y-6 p-6">
                {/* Contact Information */}
                <fieldset className="space-y-4">
                  <legend className="text-sm font-medium text-gray-900 border-b border-gray-200 pb-2">
                    Contact Information
                  </legend>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="contactName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Contact Person Name *
                      </label>
                      <input
                        id="contactName"
                        name="contactName"
                        required
                        type="text"
                        placeholder="Your full name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone Number *
                      </label>
                      <div className="flex">
                        <span className="flex items-center px-3 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md text-gray-700">
                          +91
                        </span>
                        <input
                          id="phone"
                          name="phone"
                          required
                          type="tel"
                          placeholder="9876543210"
                          className="w-full px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      required
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </fieldset>

                {/* Business Information */}
                <fieldset className="space-y-4">
                  <legend className="text-sm font-medium text-gray-900 border-b border-gray-200 pb-2">
                    Business Information
                  </legend>

                  <div className="space-y-2">
                    <label
                      htmlFor="businessName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Business/Company Name *
                    </label>
                    <input
                      id="businessName"
                      name="businessName"
                      required
                      type="text"
                      placeholder="Enter your business name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="businessType"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Business Type *
                      </label>
                      <select
                        id="businessType"
                        name="businessType"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      >
                        <option value="">Select business type</option>
                        {businessTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="teamSize"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Team Size
                      </label>
                      <select
                        id="teamSize"
                        name="teamSize"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      >
                        <option value="">Select team size</option>
                        <option value="1-5">1-5 employees</option>
                        <option value="6-20">6-20 employees</option>
                        <option value="21-50">21-50 employees</option>
                        <option value="51-100">51-100 employees</option>
                        <option value="100+">100+ employees</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="businessDescription"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Business Description (Optional)
                    </label>
                    <textarea
                      id="businessDescription"
                      name="businessDescription"
                      rows={4}
                      placeholder="Briefly describe your business and the type of work you typically need help with..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </fieldset>

                {/* Location Information */}
                <fieldset className="space-y-4">
                  <legend className="text-sm font-medium text-gray-900 border-b border-gray-200 pb-2">
                    Location Information
                  </legend>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        City *
                      </label>
                      <select
                        id="city"
                        name="city"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      >
                        <option value="">Select your city</option>
                        {cities.map((city) => (
                          <option key={city} value={city}>
                            {city}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="area"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Area/Locality *
                      </label>
                      <input
                        id="area"
                        name="area"
                        required
                        type="text"
                        placeholder="e.g., Andheri West, Koramangala"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Full Address
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      rows={3}
                      placeholder="Enter your complete business address..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </fieldset>

                {/* Hiring Needs */}
                <fieldset className="space-y-4">
                  <legend className="text-sm font-medium text-gray-900 border-b border-gray-200 pb-2">
                    Hiring Needs
                  </legend>

                  <div className="space-y-2">
                    <span className="text-sm font-medium text-gray-700">
                      What type of workers do you typically need? *
                    </span>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {[
                        "Construction Workers",
                        "Drivers",
                        "Cooks",
                        "Cleaners",
                        "Security Guards",
                        "Delivery Personnel",
                        "Electricians",
                        "Plumbers",
                        "Carpenters",
                        "General Labor",
                      ].map((worker) => (
                        <label
                          key={worker}
                          className="inline-flex items-center space-x-2"
                        >
                          <input
                            type="checkbox"
                            name="workers"
                            value={worker}
                            className="h-4 w-4 text-orange-600 border-gray-300 rounded"
                          />
                          <span className="text-sm text-gray-700">
                            {worker}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="hiringFrequency"
                      className="block text-sm font-medium text-gray-700"
                    >
                      How often do you hire? *
                    </label>
                    <select
                      id="hiringFrequency"
                      name="hiringFrequency"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="">Select hiring frequency</option>
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly</option>
                      <option value="monthly">Monthly</option>
                      <option value="project-based">Project-based</option>
                      <option value="as-needed">As needed</option>
                    </select>
                  </div>
                </fieldset>

                {/* Terms and Submit */}
                <div className="space-y-4">
                  <label className="inline-flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="terms"
                      className="h-4 w-4 text-orange-600 border-gray-300 rounded"
                      required
                    />
                    <span className="text-sm text-gray-700 leading-relaxed">
                      I agree to Shramik's{" "}
                      <Link
                        to="/terms"
                        className="text-orange-600 hover:underline"
                      >
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link
                        to="/privacy"
                        className="text-orange-600 hover:underline"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-orange-600 text-white text-lg font-medium rounded-md hover:bg-orange-700 transition-colors cursor-pointer"
                  >
                    Create Employer Account
                    <CheckCircle className="h-5 w-5 ml-2" />
                  </button>
                </div>

                {/* Back to Home */}
                <div className="text-center pt-4 border-t border-gray-200">
                  <Link to="/">
                    <button
                      type="button"
                      className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Back to Home
                    </button>
                  </Link>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Phone,

                  title: "Call Support",

                  detail: "+91 98765 43210",

                  color: "text-orange-600",
                },

                {
                  icon: Mail,

                  title: "Email Us",

                  detail: "support@Shramik.com",

                  color: "text-blue-600",
                },

                {
                  icon: MapPin,

                  title: "Visit Office",

                  detail: "Mumbai, Maharashtra",

                  color: "text-green-600",
                },
              ].map((contact, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  <contact.icon
                    className={`h-8 w-8 mx-auto mb-4 ${contact.color}`}
                  />

                  <p className="font-bold text-base text-gray-800 mb-2">
                    {contact.title}
                  </p>

                  <p className="text-sm text-gray-600">{contact.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerSignup;
