import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  Users,
  Briefcase,
  LayoutDashboard,
  LogOut,
  LogIn,
} from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { logout } from "../../redux/features/auth/‎authSlice";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      dispatch(logout());
      toast.success("Logged out successfully");
      navigate("/");
      setIsMenuOpen(false);
    } catch (error) {
      toast.error("Logout failed");
      console.error("Logout error:", error);
    }
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-br from-orange-500 to-yellow-500 p-2 rounded-lg">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Shramik</h1>
                <p className="text-xs text-gray-500 hidden sm:block">
                  Connecting Skills & Opportunities
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/how-it-works"
              className="text-gray-500 hover:text-gray-900 transition-colors"
            >
              How it Works
            </Link>
            <Link
              to="/about"
              className="text-gray-500 hover:text-gray-900 transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-500 hover:text-gray-900 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          {user ? (
            <div className="hidden md:flex items-center space-x-4">
              <Link to={`/dashboard`}>
                <button className="flex items-center px-4 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition-colors cursor-pointer">
                  <LayoutDashboard className="h-4 w-4 mr-2" />
                  Dashboard
                </button>
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors cursor-pointer"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </button>
            </div>
          ) : (
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/login">
                <button className="flex items-center px-4 py-2 border border-green-500 text-green-500 rounded-md hover:bg-green-500 hover:text-white transition-colors cursor-pointer">
                  <LogIn className="h-4 w-4 mr-2" />
                  Login
                </button>
              </Link>
              <Link to="/worker-signup">
                <button className="flex items-center px-4 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition-colors cursor-pointer">
                  <Users className="h-4 w-4 mr-2" />
                  Find Work
                </button>
              </Link>
              <Link to="/employer-signup">
                <button className="flex items-center px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors cursor-pointer">
                  <Briefcase className="h-4 w-4 mr-2" />
                  Hire Workers
                </button>
              </Link>
            </div>
          )}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-gray-900"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                to="/how-it-works"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-500 hover:text-gray-900"
              >
                How it Works
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-500 hover:text-gray-900"
              >
                About
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-500 hover:text-gray-900"
              >
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                {user ? (
                  <>
                    <Link
                      to={`/dashboard`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <button className="w-full flex items-center justify-center px-4 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition-colors">
                        <LayoutDashboard className="h-4 w-4 mr-2" />
                        Dashboard
                      </button>
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center justify-center px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                      <button className="w-full flex items-center justify-center px-4 py-2 border border-green-500 text-green-500 rounded-md hover:bg-green-500 hover:text-white transition-colors">
                        <LogIn className="h-4 w-4 mr-2" />
                        Login
                      </button>
                    </Link>
                    <Link
                      to="/worker-signup"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <button className="w-full flex items-center justify-center px-4 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition-colors">
                        <Users className="h-4 w-4 mr-2" />
                        Find Work
                      </button>
                    </Link>
                    <Link
                      to="/employer-signup"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <button className="w-full flex items-center justify-center px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors">
                        <Briefcase className="h-4 w-4 mr-2" />
                        Hire Workers
                      </button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
