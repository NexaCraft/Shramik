import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, AlertTriangle } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
      <div className="max-w-md w-full bg-white rounded-xl shadow-2xl p-8 text-center space-y-6">
        <div className="flex justify-center mb-4">
          <div className="bg-red-100 rounded-full w-24 h-24 flex items-center justify-center">
            <AlertTriangle className="w-16 h-16 text-red-600" />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">
            404 - Page Not Found
          </h1>

          <p className="text-gray-600 text-lg">
            Oops! The page you're looking for seems to have wandered off. It
            might have been moved, deleted, or never existed.
          </p>
        </div>

        <div className="flex justify-center space-x-4">
          <Link to="/">
            <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" className="border-gray-300 text-gray-700">
              Contact Support
            </Button>
          </Link>
        </div>

        <div className="text-sm text-gray-500 pt-4 border-t border-gray-200">
          Need help?{" "}
          <Link to="/support" className="text-blue-600 hover:underline">
            Contact our support team
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
