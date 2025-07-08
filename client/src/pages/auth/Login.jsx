import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import { LogIn, User, Lock, Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    setError("");
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // setIsLoading(true);
    // setError("");
    // // Basic validation
    // if (!formData.email || !formData.password || !formData.role) {
    //   setError("Please fill in all fields");
    //   setIsLoading(false);
    //   return;
    // }
    // try {
    //   const response = await axios.post("/api/auth/login", {
    //     email: formData.email,
    //     password: formData.password,
    //     role: formData.role,
    //   });
    //   // Store token and user info
    //   localStorage.setItem("token", response.data.token);
    //   localStorage.setItem("user", JSON.stringify(response.data.user));
    //   // Redirect based on role
    //   switch (response.data.user.role) {
    //     case "worker":
    //       navigate("/worker/dashboard");
    //       break;
    //     case "employer":
    //       navigate("/employer/dashboard");
    //       break;
    //     case "admin":
    //       navigate("/admin/dashboard");
    //       break;
    //     default:
    //       navigate("/");
    //   }
    // } catch (err) {
    //   setError(
    //     err.response?.data?.message ||
    //       "Login failed. Please check your credentials."
    //   );
    // } finally {
    //   setIsLoading(false);
    // }
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

        {/* Error Message */}
        {error && (
          <div
            className="bg-red-50 border border-red-300 text-red-800 px-4 py-3 rounded relative"
            role="alert"
          >
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        {/* Login Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="relative">
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="appearance-none rounded-md relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
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
              className="appearance-none rounded-md relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
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
          </div>

          {/* Role Selection */}
          <div>
            <label htmlFor="role" className="sr-only">
              User Role
            </label>
            <select
              id="role"
              name="role"
              required
              value={formData.role}
              onChange={handleChange}
              className="mt-1 block w-full pl-10 pr-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            >
              <option value="">Select Role</option>
              <option value="worker">Worker</option>
              <option value="employer">Employer</option>
              <option value="admin">Admin</option>
            </select>
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
                  : "bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              }`}
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>

        {/* Additional Links */}
        <div className="mt-6 text-center">
          <div className="flex justify-center space-x-4">
            <a
              href="/forgot-password"
              className="text-sm text-orange-600 hover:text-orange-500"
            >
              Forgot password?
            </a>
            <a
              href="/register"
              className="text-sm text-blue-600 hover:text-blue-500"
            >
              Create an account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
