import { useState } from "react";
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
import { Badge } from "@/components/ui/badge";
import {
  Users,
  CheckCircle,
  Upload,
  Phone,
  ArrowLeft,
  ArrowRight,
  Star,
} from "lucide-react";

const WorkerSignup = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedSkills, setSelectedSkills] = useState([]);

  const skills = [
    "Carpentry",
    "Plumbing",
    "Electrical Work",
    "Painting",
    "Masonry",
    "Welding",
    "Roofing",
    "Flooring",
    "Gardening",
    "Cleaning",
    "Driver",
    "Cook",
    "Security Guard",
    "Delivery",
    "Moving/Packing",
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

  const handleSkillToggle = (skill) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="flex items-center justify-center space-x-2">
            <div className="bg-gradient-to-br from-secondary to-secondary/80 p-2 rounded-lg">
              <Users className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-foreground">
              Join as a Worker
            </h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Create your profile and start finding work opportunities in your
            area
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center space-x-4 mb-12">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step <= currentStep
                    ? "bg-secondary text-white"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {step < currentStep ? (
                  <CheckCircle className="h-5 w-5" />
                ) : (
                  step
                )}
              </div>
              {step < 4 && (
                <div
                  className={`w-16 h-1 mx-2 ${
                    step < currentStep ? "bg-secondary" : "bg-muted"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <Card className="border-border shadow-lg">
          <CardHeader>
            <CardTitle className="text-center">
              {currentStep === 1 && "Basic Information"}
              {currentStep === 2 && "Skills & Experience"}
              {currentStep === 3 && "Location & Availability"}
              {currentStep === 4 && "Verification & Documents"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Step 1: Basic Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input id="fullName" placeholder="Enter your full name" />
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="age">Age *</Label>
                    <Input
                      id="age"
                      type="number"
                      placeholder="25"
                      min="18"
                      max="65"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                        <SelectItem value="prefer-not-to-say">
                          Prefer not to say
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="language">Primary Language</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hindi">Hindi</SelectItem>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="tamil">Tamil</SelectItem>
                        <SelectItem value="telugu">Telugu</SelectItem>
                        <SelectItem value="marathi">Marathi</SelectItem>
                        <SelectItem value="gujarati">Gujarati</SelectItem>
                        <SelectItem value="bengali">Bengali</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="about">
                    Tell us about yourself (Optional)
                  </Label>
                  <Textarea
                    id="about"
                    placeholder="Briefly describe your work experience and what makes you a reliable worker..."
                    className="min-h-[100px]"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Skills & Experience */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <Label>Select Your Skills *</Label>
                  <p className="text-sm text-muted-foreground">
                    Choose all skills that apply to you. You can add more later.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {skills.map((skill) => (
                      <div key={skill} className="flex items-center space-x-2">
                        <Checkbox
                          id={skill}
                          checked={selectedSkills.includes(skill)}
                          onCheckedChange={() => handleSkillToggle(skill)}
                        />
                        <Label
                          htmlFor={skill}
                          className="text-sm font-normal cursor-pointer"
                        >
                          {skill}
                        </Label>
                      </div>
                    ))}
                  </div>
                  {selectedSkills.length > 0 && (
                    <div className="space-y-2">
                      <Label>Selected Skills:</Label>
                      <div className="flex flex-wrap gap-2">
                        {selectedSkills.map((skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Years of Experience *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fresher">
                        Fresher (0-1 years)
                      </SelectItem>
                      <SelectItem value="1-3">1-3 years</SelectItem>
                      <SelectItem value="3-5">3-5 years</SelectItem>
                      <SelectItem value="5-10">5-10 years</SelectItem>
                      <SelectItem value="10+">10+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="workSamples">
                    Upload Work Photos (Optional)
                  </Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <p className="text-muted-foreground mb-2">
                      Upload photos of your previous work to showcase your
                      skills
                    </p>
                    <Button variant="outline" size="sm">
                      Choose Files
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Location & Availability */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <Label htmlFor="workRadius">
                    How far are you willing to travel for work? *
                  </Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select travel distance" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5km">Within 5 km</SelectItem>
                      <SelectItem value="10km">Within 10 km</SelectItem>
                      <SelectItem value="20km">Within 20 km</SelectItem>
                      <SelectItem value="city">Anywhere in the city</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  <Label>When are you available to work? *</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                      "Sunday",
                    ].map((day) => (
                      <div key={day} className="flex items-center space-x-2">
                        <Checkbox id={day} />
                        <Label htmlFor={day} className="text-sm font-normal">
                          {day}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="workType">Preferred Work Type *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select work preference" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-time">Full-time jobs</SelectItem>
                      <SelectItem value="part-time">Part-time jobs</SelectItem>
                      <SelectItem value="contract">Contract work</SelectItem>
                      <SelectItem value="any">Any type of work</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {/* Step 4: Verification */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <Star className="h-5 w-5 text-yellow-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-yellow-800">
                        Why Verification Matters
                      </h4>
                      <p className="text-sm text-yellow-700 mt-1">
                        Verified profiles get 3x more job opportunities and
                        higher ratings from employers.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>Identity Verification *</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-border rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Aadhaar Card</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Upload clear photos of both sides
                      </p>
                      <Button variant="outline" size="sm" className="w-full">
                        <Upload className="h-4 w-4 mr-2" />
                        Upload Aadhaar
                      </Button>
                    </div>
                    <div className="border border-border rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Profile Photo</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Clear photo of yourself
                      </p>
                      <Button variant="outline" size="sm" className="w-full">
                        <Upload className="h-4 w-4 mr-2" />
                        Upload Photo
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>Additional Documents (Optional)</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-border rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Skill Certificates</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        ITI, Trade certificates, etc.
                      </p>
                      <Button variant="outline" size="sm" className="w-full">
                        <Upload className="h-4 w-4 mr-2" />
                        Upload Certificates
                      </Button>
                    </div>
                    <div className="border border-border rounded-lg p-4">
                      <h4 className="font-semibold mb-2">References</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Contact info of previous employers
                      </p>
                      <Button variant="outline" size="sm" className="w-full">
                        <Phone className="h-4 w-4 mr-2" />
                        Add References
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-green-800">
                        Ready to Get Started!
                      </h4>
                      <p className="text-sm text-green-700 mt-1">
                        Your profile will be reviewed within 24 hours. You'll
                        receive a confirmation SMS once approved.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6 border-t border-border">
              <div>
                {currentStep > 1 && (
                  <Button variant="outline" onClick={prevStep}>
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Previous
                  </Button>
                )}
                {currentStep === 1 && (
                  <Link to="/">
                    <Button variant="outline">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Back to Home
                    </Button>
                  </Link>
                )}
              </div>

              <div>
                {currentStep < 4 ? (
                  <Button
                    onClick={nextStep}
                    className="bg-secondary hover:bg-secondary/90"
                  >
                    Next Step
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                ) : (
                  <Button className="bg-primary hover:bg-primary/90">
                    Create My Profile
                    <CheckCircle className="h-4 w-4 ml-2" />
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Help Section */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Need help? Call our support team at{" "}
            <a
              href="tel:+919876543210"
              className="text-primary hover:underline"
            >
              +91 98765 43210
            </a>{" "}
            or{" "}
            <Link to="/help" className="text-primary hover:underline">
              visit our help center
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkerSignup;
