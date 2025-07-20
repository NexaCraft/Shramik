import { Briefcase } from "lucide-react";
import BenefitsSidebar from "../../components/EmployerSignup/BenefitsSidebar";
import SignupForm from "../../components/EmployerSignup/SignupForm";
import ContactInfo from "../../components/common/ContactInfo";

const EmployerSignup = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Refined Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center space-x-4 bg-white shadow-md rounded-full px-6 py-3">
            <div className="bg-gradient-to-br from-orange-500 to-yellow-500 p-3 rounded-full shadow-lg">
              <Briefcase className="h-7 w-7 text-white" />
            </div>

            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600">
              Join as an Employer
            </h1>
          </div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Connect with skilled workers in your area. Post jobs, hire talent,
            and grow your business with ease.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Benefits Sidebar */}
          <BenefitsSidebar />

          <div className="lg:col-span-2">
            {/* Registration Form */}
            <SignupForm />

            {/* Contact Info */}
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerSignup;
