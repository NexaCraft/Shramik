import { useState, useEffect } from "react";
import { Users, CheckCircle, ArrowLeft, ArrowRight } from "lucide-react";

const WorkerSignup = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    age: "",
    gender: "",
    city: "",
    skills: [],
    experience: "",
    workPreference: "",
  });

  const [errors, setErrors] = useState({});
  const [isStepValid, setIsStepValid] = useState(false);

  // Validation Logic
  const validateStep = () => {
    const newErrors = {};
    let stepIsValid = true;

    switch (step) {
      case 1:
        if (!formData.fullName || formData.fullName.trim().length < 2) {
          newErrors.fullName = "Full name is required (min 2 characters)";
          stepIsValid = false;
        }

        if (!formData.phone || !/^\d{10}$/.test(formData.phone)) {
          newErrors.phone = "Valid 10-digit phone number is required";
          stepIsValid = false;
        }

        if (
          !formData.age ||
          parseInt(formData.age) < 18 ||
          parseInt(formData.age) > 65
        ) {
          newErrors.age = "Age must be between 18 and 65";
          stepIsValid = false;
        }

        if (!formData.gender) {
          newErrors.gender = "Gender is required";
          stepIsValid = false;
        }
        break;

      case 2:
        if (formData.skills.length === 0) {
          newErrors.skills = "Select at least one skill";
          stepIsValid = false;
        }

        if (!formData.experience) {
          newErrors.experience = "Experience level is required";
          stepIsValid = false;
        }
        break;

      case 3:
        if (!formData.city) {
          newErrors.city = "City is required";
          stepIsValid = false;
        }

        if (!formData.workPreference) {
          newErrors.workPreference = "Work preference is required";
          stepIsValid = false;
        }
        break;

      default:
        break;
    }

    setErrors(newErrors);
    setIsStepValid(stepIsValid);
    return stepIsValid;
  };

  // Validate step on form data change
  useEffect(() => {
    validateStep();
  }, [formData, step]);

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Skill Toggle
  const toggleSkill = (skill) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill],
    }));
  };

  // Navigation Methods
  const nextStep = () => {
    if (validateStep()) {
      setStep((prev) => Math.min(prev + 1, 4));
    }
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  // Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      // Submit form data
      console.log("Form Submitted:", formData);
      // Add your submission logic here
      alert("Profile created successfully!");
    }
  };

  // Render Step-Specific Content
  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-center text-gray-800">
              Personal Information
            </h2>

            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`mt-1 block w-full border rounded-md shadow-sm py-2 px-3 
                  ${
                    errors.fullName
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-500"
                  }`}
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number *
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                  +91
                </span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`flex-1 block w-full border rounded-r-md shadow-sm py-2 px-3
                    ${
                      errors.phone
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-blue-500"
                    }`}
                />
              </div>
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Age */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Age *
              </label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                min="18"
                max="65"
                className={`mt-1 block w-full border rounded-md shadow-sm py-2 px-3
                  ${
                    errors.age
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-500"
                  }`}
              />
              {errors.age && (
                <p className="text-red-500 text-xs mt-1">{errors.age}</p>
              )}
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Gender *
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className={`mt-1 block w-full border rounded-md shadow-sm py-2 px-3
                  ${
                    errors.gender
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-500"
                  }`}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && (
                <p className="text-red-500 text-xs mt-1">{errors.gender}</p>
              )}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-center text-gray-800">
              Skills & Experience
            </h2>

            {/* Skills Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Select Skills *
              </label>
              <div className="grid grid-cols-3 gap-2 mt-2">
                {[
                  "Carpentry",
                  "Plumbing",
                  "Electrical",
                  "Painting",
                  "Welding",
                  "Masonry",
                ].map((skill) => (
                  <div key={skill} className="flex items-center">
                    <input
                      type="checkbox"
                      id={skill}
                      checked={formData.skills.includes(skill)}
                      onChange={() => toggleSkill(skill)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor={skill}
                      className="ml-2 block text-sm text-gray-700"
                    >
                      {skill}
                    </label>
                  </div>
                ))}
              </div>
              {errors.skills && (
                <p className="text-red-500 text-xs mt-1">{errors.skills}</p>
              )}
            </div>

            {/* Experience */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Experience Level *
              </label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className={`mt-1 block w-full border rounded-md shadow-sm py-2 px-3
                  ${
                    errors.experience
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-500"
                  }`}
              >
                <option value="">Select Experience</option>
                <option value="fresher">Fresher (0-1 years)</option>
                <option value="1-3">1-3 years</option>
                <option value="3-5">3-5 years</option>
                <option value="5+">5+ years</option>
              </select>
              {errors.experience && (
                <p className="text-red-500 text-xs mt-1">{errors.experience}</p>
              )}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-center text-gray-800">
              Location & Availability
            </h2>

            {/* City */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                City *
              </label>
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className={`mt-1 block w-full border rounded-md shadow-sm py-2 px-3
                  ${
                    errors.city
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-500"
                  }`}
              >
                <option value="">Select City</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Bangalore">Bangalore</option>
                {/* Add more cities */}
              </select>
              {errors.city && (
                <p className="text-red-500 text-xs mt-1">{errors.city}</p>
              )}
            </div>

            {/* Work Preference */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Work Preference *
              </label>
              <select
                name="workPreference"
                value={formData.workPreference}
                onChange={handleChange}
                className={`mt-1 block w-full border rounded-md shadow-sm py-2 px-3
                  ${
                    errors.workPreference
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-500"
                  }`}
              >
                <option value="">Select Work Preference</option>
                <option value="full-time">Full-time</option>
                <option value="part-time">Part-time</option>
                <option value="contract">Contract</option>
                <option value="freelance">Freelance</option>
              </select>
              {errors.workPreference && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.workPreference}
                </p>
              )}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6 text-center">
            <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
            <h2 className="text-2xl font-bold text-gray-800">Almost There!</h2>
            <p className="text-gray-600">
              Review your details and submit your profile
            </p>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p>
                <strong>Name:</strong> {formData.fullName}
              </p>
              <p>
                <strong>Phone:</strong> {formData.phone}
              </p>
              <p>
                <strong>Skills:</strong> {formData.skills.join(", ")}
              </p>
              <p>
                <strong>City:</strong> {formData.city}
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-3 rounded-full">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-extrabold text-gray-900">
              Worker Registration
            </h1>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center space-x-4 mb-8">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className={`
                w-10 h-10 rounded-full flex items-center justify-center 
                ${
                  step >= num
                    ? "bg-orange-500 text-white"
                    : "bg-gray-200 text-gray-500"
                }
              `}
            >
              {step > num ? <CheckCircle /> : num}
            </div>
          ))}
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-xl p-8"
        >
          {/* Dynamic Step Content */}
          {renderStepContent()}

          {/* Navigation Buttons */}
          <div className="mt-8 flex justify-between">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </button>
            )}

            {step < 4 && (
              <button
                type="button"
                onClick={nextStep}
                disabled={!isStepValid}
                className={`
                  inline-flex items-center px-4 py-2 border border-transparent 
                  text-sm font-medium rounded-md shadow-sm text-white 
                  ${
                    isStepValid
                      ? "bg-orange-600 hover:bg-orange-700"
                      : "bg-gray-400 cursor-not-allowed"
                  }
                `}
              >
                Next Step
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            )}

            {step === 4 && (
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700"
              >
                Create Profile
                <CheckCircle className="ml-2 h-4 w-4" />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default WorkerSignup;
