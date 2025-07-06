import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EmployerSignup from "./pages/auth/EmployerSignup";
import WorkerSignup from "./pages/auth/WorkerSignup";
import HowItWorksPage from "./pages/HowItWorks";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";

const App = () => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-grow">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
        <Route path="/employer-signup" element={<EmployerSignup />} />
        <Route path="/worker-signup" element={<WorkerSignup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
    <Footer />
  </div>
);

export default App;
