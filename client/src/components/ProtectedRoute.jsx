import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ allowedRoles }) => {
  const { isAuthenticated, userType } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(userType)) {
    return <Navigate to="/unauthorized" replace />;
  }
  return <Outlet />;
};

export const AuthRedirect = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  if (isAuthenticated) {
    return <Navigate to={getDashboardRoute()} replace />;
  }

  return children;
};

const getDashboardRoute = (userType) => {
  switch (userType) {
    case "worker":
      return "/worker/dashboard";
    case "employer":
      return "/employer/dashboard";
    case "admin":
      return "/admin/dashboard";
    default:
      return "/";
  }
};
