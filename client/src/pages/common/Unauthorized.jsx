import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

const Unauthorized = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8 text-center">
      <div>
        <Shield className="mx-auto h-20 w-20 text-red-500" />
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
          Unauthorized Access
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          You do not have permission to access this page.
        </p>
      </div>
      <div className="mt-6">
        <Link
          to="/"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700"
        >
          Return to Home
        </Link>
      </div>
    </div>
  </div>
);

export default Unauthorized;
