import { Users, Star, Shield, Clock, CheckCircle } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "50,000+ Job Opportunities",
    description: "Access to diverse job listings across industries",
  },
  {
    icon: Shield,
    title: "Verified Employers",
    description: "All job postings are from verified businesses",
  },
  {
    icon: Star,
    title: "Fair Compensation",
    description: "Competitive rates and timely payments",
  },
  {
    icon: Clock,
    title: "Flexible Work",
    description: "Choose jobs that fit your schedule",
  },
];

const BenefitsSidebar = () => {
  return (
    <div className="lg:col-span-1">
      <div className="sticky top-24 space-y-8">
        <div className="bg-white rounded-xl shadow-xl p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-3">
            Why Choose Shramik?
          </h3>

          <div className="space-y-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={index}
                  className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg hover:shadow-md transition-all"
                >
                  <div className="bg-orange-100 rounded-full p-3">
                    <Icon className="h-6 w-6 text-orange-600" />
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 text-base">
                      {benefit.title}
                    </h4>

                    <p className="text-sm text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 flex items-start space-x-4">
          <CheckCircle className="h-7 w-7 text-green-500 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-green-800 text-base">
              100% Free Registration
            </h4>

            <p className="text-sm text-green-700 leading-relaxed">
              Create your profile at no cost. Start getting job offers
              immediately after verification.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSidebar;
