import { Link } from "react-router-dom";
import { Bell, Users } from "lucide-react";
import { useSelector } from "react-redux";

const DashboardNavbar = () => {
  const { user } = useSelector((store) => store.auth);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 shadow-sm z-50">
      <div className="flex items-center justify-between h-16 px-12">
        {/* Logo and Title */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-br from-orange-500 to-yellow-500 p-2 rounded-lg">
              <Users className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-gray-900">Shramik</h1>
          </Link>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <button className="relative">
            <Bell className="h-6 w-6 text-gray-600 hover:text-gray-900" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-4 w-4 flex items-center justify-center text-xs">
              3
            </span>
          </button>

          {/* User Profile Dropdown */}
          <Link to="/dashboard/profile" className="cursor-pointer">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">
                  {user?.name?.[0].toUpperCase() || "U"}
                </span>
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-semibold">
                  {user?.fullName || "User"}
                </p>
                <p className="text-xs text-gray-500">{user?.email}</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
