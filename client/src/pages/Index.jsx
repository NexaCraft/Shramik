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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                  Empowering India's Workforce
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Connect <span className="text-primary">Skilled Hands</span>{" "}
                  with
                  <span className="text-secondary"> Local Demand</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  India's first platform dedicated to connecting skilled workers
                  with employers in the informal sector. Find work, hire talent,
                  grow together.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/worker-signup">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-secondary hover:bg-secondary/90"
                  >
                    <Users className="h-5 w-5 mr-2" />
                    I'm Looking for Work
                  </Button>
                </Link>
                <Link to="/employer-signup">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Briefcase className="h-5 w-5 mr-2" />I Need Workers
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-8 text-sm text-muted-foreground">
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
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-border">
                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill, index) => {
                    const IconComponent = skill.icon;
                    return (
                      <div
                        key={index}
                        className="text-center p-4 rounded-lg bg-muted/50"
                      >
                        <IconComponent className="h-8 w-8 mx-auto mb-2 text-primary" />
                        <h3 className="font-semibold text-foreground">
                          {skill.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {skill.count} workers
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 border border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50K+</div>
                  <div className="text-sm text-muted-foreground">
                    Active Users
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 border border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">1M+</div>
                  <div className="text-sm text-muted-foreground">
                    Jobs Completed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Why Choose ShramSetu?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
                  className="border-border hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Simple steps to connect and get things done
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* For Workers */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-secondary flex items-center">
                <Users className="h-6 w-6 mr-2" />
                For Workers
              </h3>
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Create Your Profile",
                    desc: "Add your skills, experience, and work samples",
                  },
                  {
                    step: "2",
                    title: "Get Verified",
                    desc: "Complete our simple verification process",
                  },
                  {
                    step: "3",
                    title: "Find Jobs",
                    desc: "Browse and apply to jobs in your area",
                  },
                  {
                    step: "4",
                    title: "Work & Earn",
                    desc: "Complete jobs and build your reputation",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-secondary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/worker-signup">
                <Button className="bg-secondary hover:bg-secondary/90">
                  Get Started as Worker <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>

            {/* For Employers */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-primary flex items-center">
                <Briefcase className="h-6 w-6 mr-2" />
                For Employers
              </h3>
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Post Your Job",
                    desc: "Describe the work, location, and requirements",
                  },
                  {
                    step: "2",
                    title: "Review Applications",
                    desc: "See worker profiles and previous ratings",
                  },
                  {
                    step: "3",
                    title: "Hire the Best",
                    desc: "Connect with workers and agree on terms",
                  },
                  {
                    step: "4",
                    title: "Rate & Review",
                    desc: "Help others by sharing your experience",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/employer-signup">
                <Button className="bg-primary hover:bg-primary/90">
                  Post a Job <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground">
              Real people, real results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6 space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.location}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
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
                className="bg-white text-primary hover:bg-white/90 border-white"
              >
                <Users className="h-5 w-5 mr-2" />
                Find Work Today
              </Button>
            </Link>
            <Link to="/employer-signup">
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-primary hover:bg-white/90 border-white"
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
