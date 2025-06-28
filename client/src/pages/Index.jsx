import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Briefcase,
  MapPin,
  Star,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  Hammer,
  Wrench,
  Paintbrush,
  Zap,
  Car,
  Home,
} from "lucide-react";

const Index = () => {
  const skills = [
    { name: "Carpentry", icon: Hammer, count: "2,500+" },
    { name: "Plumbing", icon: Wrench, count: "1,800+" },
    { name: "Painting", icon: Paintbrush, count: "3,200+" },
    { name: "Electrical", icon: Zap, count: "1,500+" },
    { name: "Driving", icon: Car, count: "4,100+" },
    { name: "Construction", icon: Home, count: "5,300+" },
  ];

  const features = [
    {
      icon: Shield,
      title: "Verified Workers",
      description: "All workers go through identity and skill verification",
    },
    {
      icon: MapPin,
      title: "Location-Based",
      description: "Find workers and jobs in your local area",
    },
    {
      icon: Star,
      title: "Rating System",
      description: "Transparent ratings and reviews for quality assurance",
    },
    {
      icon: Clock,
      title: "Quick Matching",
      description: "Get matched with suitable workers or jobs within hours",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Carpenter",
      location: "Delhi",
      content:
        "ShramSetu helped me find consistent work. I now have regular clients and my income has doubled!",
      rating: 5,
    },
    {
      name: "Priya Constructions",
      role: "Employer",
      location: "Bangalore",
      content:
        "Found skilled workers quickly for our project. The quality was excellent and the process was smooth.",
      rating: 5,
    },
    {
      name: "Mohammed Ali",
      role: "Electrician",
      location: "Mumbai",
      content:
        "The app is easy to use even for people like me who aren't tech-savvy. Great support team too!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-yellow-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-orange-100 text-orange-600 hover:bg-orange-200">
                  Empowering India's Workforce
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Connect <span className="text-orange-600">Skilled Hands</span>{" "}
                  with
                  <span className="text-blue-600"> Local Demand</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  India's first platform dedicated to connecting skilled workers
                  with employers in the informal sector. Find work, hire talent,
                  grow together.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/worker-signup">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700"
                  >
                    <Users className="h-5 w-5 mr-2" />
                    I'm Looking for Work
                  </Button>
                </Link>
                <Link to="/employer-signup">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                  >
                    <Briefcase className="h-5 w-5 mr-2" />I Need Workers
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Free to Join</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Verified Workers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Local Focus</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill, index) => {
                    const IconComponent = skill.icon;
                    return (
                      <div
                        key={index}
                        className="text-center p-4 rounded-lg bg-gray-100"
                      >
                        <IconComponent className="h-8 w-8 mx-auto mb-2 text-orange-600" />
                        <h3 className="font-semibold text-gray-900">
                          {skill.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {skill.count} workers
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 border border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">50K+</div>
                  <div className="text-sm text-gray-600">
                    Active Users
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 border border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">1M+</div>
                  <div className="text-sm text-gray-600">
                    Jobs Completed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Why Choose ShramSetu?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've built the most comprehensive platform for India's informal
              workforce, designed with local needs in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card
                  key={index}
                  className="border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                      <IconComponent className="h-8 w-8 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Rest of the sections remain similar, replacing variable-based classes with direct Tailwind classes */}
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-yellow-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Ready to Transform Your Work Life?
          </h2>
          <p className="text-xl text-white/90">
            Join thousands of workers and employers who trust ShramSetu for
            their daily needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/worker-signup">
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-orange-600 hover:bg-white/90 border-white"
              >
                <Users className="h-5 w-5 mr-2" />
                Find Work Today
              </Button>
            </Link>
            <Link to="/employer-signup">
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-orange-600 hover:bg-white/90 border-white"
              >
                <Briefcase className="h-5 w-5 mr-2" />
                Hire Workers Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;