import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { LogIn, User, Lock, Eye, EyeOff } from "lucide-react";
import { login } from "../../redux/features/auth/‎authSlice";

const Login = () => {
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
    userType: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validateForm = () => {
    const newErrors = {};

    // Validate phone number
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
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

    // Validate user type
    if (!formData.userType) {
      newErrors.userType = "Please select a user type";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear specific field error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset errors
    setErrors({});

    // Validate form
    if (validateForm()) {
      try {
        setIsLoading(true);

        // Dispatch login action
        const result = await dispatch(
          login({
            phone: formData.phone,
            password: formData.password,
            userType: formData.userType,
          })
        ).unwrap();

        // Check if login was successful
        if (result?.success) {
          toast.success("Login successful!");
          navigate("/dashboard");
        } else {
          // Handle unsuccessful login
          toast.error(result?.message || "Login failed");
        }
      } catch (error) {
        // Handle any errors from the login process
        toast.error(error?.message || "Login failed");
        console.error("Login error:", error);
      } finally {
        setIsLoading(false);
      }
    } else {
      toast.error("Please fix the form errors");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full space-y-8 bg-white shadow-2xl rounded-2xl p-10">
        {/* Header */}
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 flex items-center justify-center space-x-3">
            <LogIn className="h-8 w-8 text-orange-500" />
            <span>Login</span>
          </h2>
          <p className="mt-2 text-sm text-gray-600">Access your account</p>
        </div>

        {/* Login Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {/* Phone Number Input */}
          <div className="relative">
            <label htmlFor="phone" className="sr-only">
              Phone Number
            </label>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              className={`appearance-none rounded-md relative block w-full px-3 py-2 pl-10 border 
                ${
                  errors.phone
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-orange-500"
                } placeholder-gray-500 text-gray-900 focus:outline-none focus:border-orange-500 focus:z-10 sm:text-sm`}
              placeholder="Phone Number"
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Password Input */}
          <div className="relative">
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              required
              value={formData.password}
              onChange={handleChange}
              className={`appearance-none rounded-md relative block w-full px-3 py-2 pl-10 border 
                ${
                  errors.password
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-orange-500"
                } placeholder-gray-500 text-gray-900 focus:outline-none focus:border-orange-500 focus:z-10 sm:text-sm`}
              placeholder="Password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5 text-gray-400" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400" />
              )}
            </button>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          {/* User Type Selection */}
          <div>
            <label htmlFor="userType" className="sr-only">
              User Type
            </label>
            <select
              id="userType"
              name="userType"
              required
              value={formData.userType}
              onChange={handleChange}
              className={`mt-1 block w-full pl-10 pr-3 py-2 border 
                ${
                  errors.userType
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-orange-500"
                } bg-white rounded-md shadow-sm focus:outline-none sm:text-sm`}
            >
              <option value="">Select User Type</option>
              <option value="worker">Worker</option>
              <option value="employer">Employer</option>
            </select>
            {errors.userType && (
              <p className="text-red-500 text-xs mt-1">{errors.userType}</p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isLoading}
              className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white 
              ${
                isLoading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-orange-600 hover:bg-orange-700"
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500`}
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>

        {/* Additional Links */}
        <div className="mt-6 text-center">
          <div className="flex justify-center space-x-4">
            <Link
              to="/forgot-password"
              className="text-sm text-orange-600 hover:text-orange-500 hover:underline"
            >
              Forgot password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
