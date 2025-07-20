import { Users, CheckCircle, ArrowLeft, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { registerWorker } from "../../redux/features/auth/‎authSlice";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    age: "",
    gender: "",
    email: "",
    skills: [],
    experience: "",
    workPreference: "",
    city: "",
    area: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });
  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
    confirmPassword: false,
  });
  const [errors, setErrors] = useState({});

  const skills = [
    "Carpentry",
    "Plumbing",
    "Electrical",
    "Painting",
    "Welding",
    "Masonry",
    "Driving",
    "Cleaning",
    "Cooking",
    "Security",
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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      if (name === "termsAccepted") {
        setFormData((prev) => ({
          ...prev,
          [name]: checked,
        }));
      } else {
        // Handle skills checkbox
        setFormData((prev) => ({
          ...prev,
          skills: checked
            ? [...prev.skills, value]
            : prev.skills.filter((skill) => skill !== value),
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate full name
    if (!formData.fullName || !formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
      console.log("Full Name Error");
    }

    // Validate phone
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone || !formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      console.log("Phone Error");
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    // Validate age
    if (!formData.age) {
      newErrors.age = "Age is required";
      console.log("Age Error");
    } else {
      const ageNum = parseInt(formData.age);
      if (ageNum < 18 || ageNum > 65) {
        newErrors.age = "Age must be between 18 and 65";
      }
    }

    // Validate gender
    if (!formData.gender) {
      newErrors.gender = "Gender is required";
      console.log("Gender Error");
    }

    // Validate skills
    if (!formData.skills || formData.skills.length === 0) {
      newErrors.skills = "Select at least one skill";
      console.log("Skills Error");
    }

    // Validate experience
    if (!formData.experience) {
      newErrors.experience = "Experience level is required";
      console.log("Experience Error");
    }

    // Validate work preference
    if (!formData.workPreference) {
      newErrors.workPreference = "Work preference is required";
      console.log("Work Preference Error");
    }

    // Validate city
    if (!formData.city) {
      newErrors.city = "City is required";
      console.log("City Error");
    }

    // Validate city
    if (!formData.area) {
      newErrors.area = "Area is required";
      console.log("Area Error");
    }

    // Validate password
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password must be 8+ chars, include uppercase, lowercase, number, special char";
    }

    // Confirm password
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Validate terms
    if (!formData.termsAccepted) {
      newErrors.termsAccepted = "You must accept the terms and conditions";
    }

    console.log("Validation Errors:", newErrors);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    if (validateForm()) {
      try {
        const result = await dispatch(
          registerWorker({
            fullName: formData.fullName,
            phone: formData.phone,
            age: formData.age,
            gender: formData.gender,
            email: formData.email,
            skills: formData.skills,
            experience: formData.experience,
            workPreference: formData.workPreference,
            city: formData.city,
            area: formData.area,
            password: formData.password,
          })
        ).unwrap();

        if (result?.data?.success) {
          toast.success("Profile created successfully!");
        }

        navigate("/login");
      } catch (error) {
        toast.error(error?.message || "Registration failed");
        console.error("Registration failed", error);
      }
    } else {
      toast.error("Please fix the form errors");
    }
  };

  const togglePasswordVisibility = (field) => {
    setPasswordVisibility((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };
  return (
    <div className="bg-white border border-gray-200 shadow-2xl rounded-2xl overflow-hidden">
      {/* Form Header */}
      <div className="flex items-center justify-between bg-gradient-to-r from-orange-100 to-pink-100 px-6 py-5 border-b">
        <div className="flex items-center space-x-4">
          <Users className="h-6 w-6 text-orange-600" />
          <h2 className="text-xl font-bold text-gray-900">
            Create Your Worker Profile
          </h2>
        </div>
      </div>

      {/* Form Content */}
      <form className="space-y-6 p-6">
        {/* Personal Information */}
        <fieldset className="space-y-4">
          <legend className="text-sm font-medium text-gray-900 border-b border-gray-200 pb-2">
            Personal Details
          </legend>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Your full name"
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.fullName
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-orange-500"
                }`}
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
              )}
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Phone Number *
              </label>
              <div className="flex">
                <span className="flex items-center px-3 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md text-gray-700">
                  +91
                </span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="9876543210"
                  className={`w-full px-3 py-2 border rounded-md ${
                    errors.fullName
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-orange-500"
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
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
                placeholder="Your age"
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.age
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-orange-500"
                }`}
              />
              {errors.age && (
                <p className="text-red-500 text-xs mt-1">{errors.age}</p>
              )}
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Gender *
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.gender
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-orange-500"
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
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Email (Optional)
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>
        </fieldset>

        {/* Skills & Experience */}
        <fieldset className="space-y-4">
          <legend className="text-sm font-medium text-gray-900 border-b border-gray-200 pb-2">
            Professional Details
          </legend>

          <div className="space-y-2">
            <span className="text-sm font-medium text-gray-700">
              Select Your Skills *
            </span>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {skills.map((skill) => (
                <label key={skill} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="skills"
                    value={skill}
                    checked={formData.skills.includes(skill)}
                    onChange={handleChange}
                    className="form-checkbox"
                  />
                  <span className="ml-2 text-sm">{skill}</span>
                </label>
              ))}
            </div>
            {errors.skills && (
              <p className="text-red-500 text-xs mt-1">{errors.skills}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Experience Level *
              </label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.experience
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-orange-500"
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
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Work Preference *
              </label>
              <select
                name="workPreference"
                value={formData.workPreference}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.workPreference
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-orange-500"
                }`}
              >
                <option value="">Select Work Type</option>
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
        </fieldset>

        {/* Location Information */}
        <fieldset className="space-y-4">
          <legend className="text-sm font-medium text-gray-900 border-b border-gray-200 pb-2">
            Location Preferences
          </legend>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                City *
              </label>
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.city
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-orange-500"
                }`}
              >
                <option value="">Select City</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
              {errors.city && (
                <p className="text-red-500 text-xs mt-1">{errors.city}</p>
              )}
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Preferred Work Area
              </label>
              <input
                type="text"
                name="area"
                value={formData.area}
                onChange={handleChange}
                placeholder="e.g., Andheri West, Koramangala"
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.area
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-orange-500"
                }`}
              />
            </div>
          </div>
        </fieldset>

        {/* Password Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2 relative">
            <label className="block text-sm font-medium text-gray-700">
              Password *
            </label>
            <input
              type={passwordVisibility.password ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a strong password"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.password
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-orange-500"
              }`}
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility("password")}
              className="absolute right-3 top-9 text-gray-500 cursor-pointer"
            >
              {passwordVisibility.password ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          <div className="space-y-2 relative">
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password *
            </label>
            <input
              type={passwordVisibility.confirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.confirmPassword
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-orange-500"
              }`}
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility("confirmPassword")}
              className="absolute right-3 top-9 text-gray-500 cursor-pointer"
            >
              {passwordVisibility.confirmPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>
        </div>

        {/* Terms Checkbox with Error Handling */}
        <div className="space-y-4">
          <label className="inline-flex items-center space-x-2">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className={`h-4 w-4 text-orange-600 border-gray-300 rounded ${
                errors.termsAccepted ? "border-red-500" : ""
              }`}
              required
            />
            <span className="text-sm text-gray-700 leading-relaxed">
              I agree to Shramik's{" "}
              <Link to="/terms" className="text-orange-600 hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="text-orange-600 hover:underline">
                Privacy Policy
              </Link>
              .
            </span>
          </label>
          {errors.termsAccepted && (
            <p className="text-red-500 text-xs">{errors.termsAccepted}</p>
          )}

          {/* Global Error Display */}
          {error && (
            <div className="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded relative">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            onClick={handleSubmit}
            className={`w-full inline-flex items-center justify-center px-6 py-3 text-white text-lg font-medium rounded-md transition-colors ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-orange-600 hover:bg-orange-700 cursor-pointer"
            }`}
          >
            {isLoading ? "Creating Profile..." : "Create Worker Profile"}
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
  );
};

export default SignupForm;
