import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Briefcase,
  Building2,
  Users,
  CheckCircle,
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Star,
  Shield,
  Clock,
} from "lucide-react";

const EmployerSignup = () => {
  const businessTypes = [
    "Construction Company",
    "Home Services",
    "Restaurant/Hotel",
    "Retail Store",
    "Manufacturing",
    "Event Management",
    "Real Estate",
    "Individual/Homeowner",
    "Other",
  ];

  const cities = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Chennai",
    "Kolkata",
    "Hyderabad",
    "Pune",
    "Ahmedabad",
    "Surat",
    "Jaipur",
  ];

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

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="flex items-center justify-center space-x-2">
            <div className="bg-gradient-to-br from-primary to-accent p-2 rounded-lg">
              <Briefcase className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-foreground">
              Join as an Employer
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with skilled workers in your area. Post jobs, hire talent,
            and grow your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Benefits Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <h3 className="text-xl font-semibold text-foreground">
                Why Choose ShramSetu?
              </h3>

              <div className="space-y-6">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="bg-primary/10 rounded-lg p-2">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm">
                          {benefit.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-green-800 text-sm">
                      Free to Get Started
                    </h4>
                    <p className="text-sm text-green-700">
                      Create your account and post your first job for free. Pay
                      only when you hire.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <div className="lg:col-span-2">
            <Card className="border-border shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Building2 className="h-5 w-5 text-primary" />
                  <span>Create Your Employer Account</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Contact Information */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground border-b border-border pb-2">
                    Contact Information
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contactName">Contact Person Name *</Label>
                      <Input id="contactName" placeholder="Your full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <div className="flex">
                        <span className="flex items-center px-3 bg-muted border border-r-0 border-input rounded-l-md text-muted-foreground">
                          +91
                        </span>
                        <Input
                          id="phone"
                          placeholder="9876543210"
                          className="rounded-l-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Business Information */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground border-b border-border pb-2">
                    Business Information
                  </h4>

                  <div className="space-y-2">
                    <Label htmlFor="businessName">
                      Business/Company Name *
                    </Label>
                    <Input
                      id="businessName"
                      placeholder="Enter your business name"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="businessType">Business Type *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select business type" />
                        </SelectTrigger>
                        <SelectContent>
                          {businessTypes.map((type) => (
                            <SelectItem
                              key={type}
                              value={type.toLowerCase().replace(/\s+/g, "-")}
                            >
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="teamSize">Team Size</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select team size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-5">1-5 employees</SelectItem>
                          <SelectItem value="6-20">6-20 employees</SelectItem>
                          <SelectItem value="21-50">21-50 employees</SelectItem>
                          <SelectItem value="51-100">
                            51-100 employees
                          </SelectItem>
                          <SelectItem value="100+">100+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="businessDescription">
                      Business Description (Optional)
                    </Label>
                    <Textarea
                      id="businessDescription"
                      placeholder="Briefly describe your business and the type of work you typically need help with..."
                      className="min-h-[80px]"
                    />
                  </div>
                </div>

                {/* Location Information */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground border-b border-border pb-2">
                    Location Information
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your city" />
                        </SelectTrigger>
                        <SelectContent>
                          {cities.map((city) => (
                            <SelectItem key={city} value={city.toLowerCase()}>
                              {city}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="area">Area/Locality *</Label>
                      <Input
                        id="area"
                        placeholder="e.g., Andheri West, Koramangala"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Full Address</Label>
                    <Textarea
                      id="address"
                      placeholder="Enter your complete business address..."
                      className="min-h-[60px]"
                    />
                  </div>
                </div>

                {/* Hiring Needs */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground border-b border-border pb-2">
                    Hiring Needs
                  </h4>

                  <div className="space-y-2">
                    <Label>What type of workers do you typically need? *</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {[
                        "Construction Workers",
                        "Drivers",
                        "Cooks",
                        "Cleaners",
                        "Security Guards",
                        "Delivery Personnel",
                        "Electricians",
                        "Plumbers",
                        "Carpenters",
                        "General Labor",
                      ].map((worker) => (
                        <div
                          key={worker}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox id={worker} />
                          <Label
                            htmlFor={worker}
                            className="text-sm font-normal cursor-pointer"
                          >
                            {worker}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="hiringFrequency">
                      How often do you hire? *
                    </Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select hiring frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="project-based">
                          Project-based
                        </SelectItem>
                        <SelectItem value="as-needed">As needed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Terms and Submit */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="text-sm leading-relaxed">
                      I agree to ShramSetu's{" "}
                      <Link
                        to="/terms"
                        className="text-primary hover:underline"
                      >
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link
                        to="/privacy"
                        className="text-primary hover:underline"
                      >
                        Privacy Policy
                      </Link>
                      . I understand that I can post jobs for free and will only
                      be charged when I hire workers.
                    </Label>
                  </div>

                  <Button
                    className="w-full bg-primary hover:bg-primary/90"
                    size="lg"
                  >
                    Create Employer Account
                    <CheckCircle className="h-5 w-5 ml-2" />
                  </Button>
                </div>

                {/* Back to Home */}
                <div className="text-center pt-4 border-t border-border">
                  <Link to="/">
                    <Button variant="outline">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Back to Home
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <Phone className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="font-semibold text-sm">Call Support</p>
                <p className="text-sm text-muted-foreground">+91 98765 43210</p>
              </div>
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <Mail className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="font-semibold text-sm">Email Us</p>
                <p className="text-sm text-muted-foreground">
                  support@shramsetu.com
                </p>
              </div>
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <MapPin className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="font-semibold text-sm">Visit Office</p>
                <p className="text-sm text-muted-foreground">
                  Mumbai, Maharashtra
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerSignup;
