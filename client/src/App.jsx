import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingSpinner from "./components/common/LoadingSpinner";
import { ProtectedRoute } from "./components/ProtectedRoute";
import PublicLayout from "./components/PublicLayout";
import DashboardLayout from "./components/DashboardLayout";

// Lazy load pages for performance
const Index = lazy(() => import("./pages/Index"));
const AboutPage = lazy(() => import("./pages/About"));
const ContactPage = lazy(() => import("./pages/Contact"));
const HowItWorksPage = lazy(() => import("./pages/HowItWorks"));
const NotFound = lazy(() => import("./pages/common/NotFound"));
const Unauthorized = lazy(() => import("./pages/common/Unauthorized"));
const EmployerSignup = lazy(() => import("./pages/auth/EmployerSignup"));
const WorkerSignup = lazy(() => import("./pages/auth/WorkerSignup"));
const Login = lazy(() => import("./pages/auth/Login"));
const DashboardHome = lazy(() => import("./pages/dashboard/DashboardHome"));
const ProfilePage = lazy(() => import("./pages/dashboard/ProfilePage"));
const JobsPage = lazy(() => import("./pages/dashboard/JobsPage"));

const App = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <Routes>
      {/* Public Routes */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Index />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/employer-signup" element={<EmployerSignup />} />
        <Route path="/worker-signup" element={<WorkerSignup />} />
      </Route>

      {/* Protected Routes */}
      <Route
        element={
          <ProtectedRoute allowedRoles={["worker", "employer", "admin"]} />
        }
      >
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="jobs" element={<JobsPage />} />
        </Route>
      </Route>

      {/* 404 Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Suspense>
);

export default App;
