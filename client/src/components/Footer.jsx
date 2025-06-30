import { Link } from "react-router-dom";
import {
  Users,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-br from-orange-500 to-yellow-500 p-2 rounded-lg">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Shramik</h3>
                <p className="text-sm text-gray-500">
                  Connecting Skills & Opportunities
                </p>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              Empowering India's skilled workforce by connecting workers with
              local employers in the informal sector.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-500">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-pink-600">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-700">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* For Workers */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
              For Workers
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/worker-signup"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Get Started
                </Link>
              </li>
              <li>
                <Link
                  to="/find-jobs"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Find Jobs
                </Link>
              </li>
              <li>
                <Link
                  to="/worker-guide"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Worker Guide
                </Link>
              </li>
              <li>
                <Link
                  to="/safety"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Safety Tips
                </Link>
              </li>
            </ul>
          </div>

          {/* For Employers */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
              For Employers
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/employer-signup"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Get Started
                </Link>
              </li>
              <li>
                <Link
                  to="/post-job"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Post a Job
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/employer-guide"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Employer Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
              Contact
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-600 text-sm">
                <Mail className="h-4 w-4" />
                <span>support@shramik.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600 text-sm">
                <Phone className="h-4 w-4" />
                <span>+91 9876543210</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-600 text-sm">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>
                  Mumbai, Maharashtra
                  <br />
                  India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copy Rights */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © 2024 Shramik. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/privacy"
                className="text-gray-600 hover:text-gray-900 text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-600 hover:text-gray-900 text-sm"
              >
                Terms of Service
              </Link>
              <Link
                to="/help"
                className="text-gray-600 hover:text-gray-900 text-sm"
              >
                Help Center
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
