import { Users, CheckCircle, Star, Shield, Clock } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Access to 50K+ Verified Workers",
    description: "Find skilled workers in your area instantly",
  },
  {
    icon: Shield,
    title: "Identity Verified Profiles",
    description: "All workers go through our verification process",
  },
  {
    icon: Star,
    title: "Rating & Review System",
    description: "Choose workers based on real employer feedback",
  },
  {
    icon: Clock,
    title: "Quick Hiring Process",
    description: "Post a job and get applications within hours",
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
              Free to Get Started
            </h4>

            <p className="text-sm text-green-700 leading-relaxed">
              Create your account and post your first job for free. Pay only
              when you hire real talent.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSidebar;
