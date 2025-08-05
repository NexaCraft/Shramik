import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { Briefcase, Home, User, LogOut } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { logout } from "../redux/features/auth/‎authSlice";
import DashboardNavbar from "./DashboardNavbar";

const DashboardLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.auth);

  const handleLogout = () => {
    try {
      dispatch(logout());
      toast.success("Logged out successfully");
      navigate("/");
    } catch (error) {
      toast.error("Logout failed");
      console.error("Logout error:", error);
    }
  };

  const sidebarNavItems = [
    {
      path: "/dashboard",
      icon: <Home className="w-5 h-5" />,
      label: "Dashboard",
    },
    {
      path: "/dashboard/profile",
      icon: <User className="w-5 h-5" />,
      label: "Profile",
    },
    {
      path: "/dashboard/jobs",
      icon: <Briefcase className="w-5 h-5" />,
      label: "Jobs",
    },
  ];

  // Check if user exists, if not redirect to login
  if (!user) {
    navigate("/login");
    return null;
  }

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Navbar */}
      <DashboardNavbar />

      {/* Dashboard Container */}
      <div className="flex w-full pt-16">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 shadow-md py-6 px-4 flex flex-col fixed left-0 top-16 bottom-0">
          <div className="mb-8">
            <nav className="space-y-2">
              {sidebarNavItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/dashboard"}
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 rounded-lg transition-colors ${
                      isActive
                        ? "bg-blue-50 text-blue-600 font-semibold"
                        : "text-gray-600 hover:bg-gray-100"
                    }`
                  }
                >
                  {item.icon}
                  <span className="ml-3">{item.label}</span>
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="mt-auto mx-4 flex items-center px-4 py-2 text-red-600 hover:bg-red-200 rounded-lg transition-colors cursor-pointer"
          >
            <LogOut className="w-5 h-5 mr-3" />
            <span>Logout</span>
          </button>
        </aside>

        {/* Main Content Area */}
        <main className="flex-grow bg-gray-50 overflow-y-auto ml-64 p-6">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
