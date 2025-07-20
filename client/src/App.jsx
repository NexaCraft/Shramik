import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import LoadingSpinner from "./components/common/LoadingSpinner";
import { ProtectedRoute } from "./components/ProtectedRoute";

// Lazy load pages for performance
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/common/NotFound"));
const HowItWorksPage = lazy(() => import("./pages/HowItWorks"));
const AboutPage = lazy(() => import("./pages/About"));
const ContactPage = lazy(() => import("./pages/Contact"));
const EmployerSignup = lazy(() => import("./pages/auth/EmployerSignup"));
const WorkerSignup = lazy(() => import("./pages/auth/WorkerSignup"));
const Login = lazy(() => import("./pages/auth/Login"));
const Unauthorized = lazy(() => import("./pages/common/Unauthorized"));
const WorkerDashboard = lazy(() => import("./pages/dashboard/WorkerDashboard"));
const EmployerDashboard = lazy(() =>
  import("./pages/dashboard/EmployerDashboard")
);
const AdminDashboard = lazy(() => import("./pages/dashboard/AdminDashboard"));

const App = () => (
  <div className="flex flex-col min-h-screen">
    <Navbar />

    <main className="flex-grow">
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />

          <Route path="/login" element={<Login />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="/employer-signup" element={<EmployerSignup />} />
          <Route path="/worker-signup" element={<WorkerSignup />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute allowedRoles={["worker"]} />}>
            <Route path="/worker/dashboard/:id" element={<WorkerDashboard />} />
          </Route>

          <Route element={<ProtectedRoute allowedRoles={["employer"]} />}>
            <Route
              path="/employer/dashboard/:id"
              element={<EmployerDashboard />}
            />
          </Route>

          <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Route>

          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </main>
    <Footer />
  </div>
);

export default App;
