import { useState } from "react";
import { useSelector } from "react-redux";
import {
  Search,
  Clipboard,
  CheckCircle,
  DollarSign,
  MapPin,
  Clock,
  Calendar,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const DashboardHome = () => {
  const { user } = useSelector((store) => store.auth);

  const [searchQuery, setSearchQuery] = useState("");
  const [availabilityType, setAvailabilityType] = useState("full-time");

  // Calendar state
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState([]);
  const [isSelectingRange, setIsSelectingRange] = useState(false);

  // Get calendar data
  const getCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startingDayOfWeek = firstDay.getDay();
    const daysInMonth = lastDay.getDate();

    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }

    return days;
  };

  const isDateSelected = (date) => {
    if (!date) return false;
    return selectedDates.some(
      (selectedDate) => selectedDate.toDateString() === date.toDateString()
    );
  };

  const isDateInRange = (date) => {
    if (!date || selectedDates.length < 2) return false;
    const sortedDates = [...selectedDates].sort((a, b) => a - b);
    return (
      date >= sortedDates[0] && date <= sortedDates[sortedDates.length - 1]
    );
  };

  const handleDateClick = (date) => {
    if (!date) return;

    if (isSelectingRange) {
      if (selectedDates.length === 0) {
        setSelectedDates([date]);
      } else if (selectedDates.length === 1) {
        const startDate = selectedDates[0];
        const endDate = date;
        const range = [];
        const current = new Date(Math.min(startDate, endDate));
        const end = new Date(Math.max(startDate, endDate));

        while (current <= end) {
          range.push(new Date(current));
          current.setDate(current.getDate() + 1);
        }
        setSelectedDates(range);
      } else {
        setSelectedDates([date]);
      }
    } else {
      // Single date selection
      if (isDateSelected(date)) {
        setSelectedDates(
          selectedDates.filter((d) => d.toDateString() !== date.toDateString())
        );
      } else {
        setSelectedDates([...selectedDates, date]);
      }
    }
  };

  const navigateMonth = (direction) => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + direction);
      return newDate;
    });
  };

  const nearbyWork = [
    {
      id: 1,
      title: "Plumbing Repair Work",
      employer: "Sharma Construction",
      location: "1.2 km away",
      type: "Full-time",
      pay: "₹800/day",
      duration: "2 days",
      skills: "Plumbing",
      urgent: true,
    },
    {
      id: 2,
      title: "House Painting Job",
      employer: "Kumar Builders",
      location: "2.5 km away",
      type: "Part-time",
      pay: "₹600/day",
      duration: "5 days",
      skills: "Painting",
      urgent: false,
    },
    {
      id: 3,
      title: "Electrical Wiring",
      employer: "Metro Housing",
      location: "0.8 km away",
      type: "Full-time",
      pay: "₹1200/day",
      duration: "3 days",
      skills: "Electrical",
      urgent: true,
    },
  ];

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="min-h-screen bg-gray-100 rounded-md">
      <div className="max-w-7xl mx-auto p-4 lg:p-6">
        {/* Welcome Message */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Welcome back, {user?.fullName || "User"}! 👋
          </h1>
          <p className="text-gray-600 text-lg">
            Ready to find your next opportunity?
          </p>
        </div>

        {/* Search Section */}
        <div className="mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Find Work Near You
            </h2>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search: plumbing, electrical, painting, construction..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
              />
              <button className="absolute right-2 top-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-2 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all font-medium">
                Search
              </button>
            </div>

            {/* Quick Filters */}
            <div className="flex flex-wrap gap-2 mt-4">
              {[
                "Plumbing",
                "Electrical",
                "Painting",
                "Carpentry",
                "Construction",
                "Driving",
              ].map((skill) => (
                <button
                  key={skill}
                  className="px-4 py-2 bg-gray-100 hover:bg-orange-100 text-gray-700 hover:text-orange-700 rounded-full text-sm transition-colors"
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Left Side */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-500">
                <div className="flex items-center">
                  <div className="p-3 bg-blue-100 rounded-full mr-4">
                    <Clipboard className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Jobs Applied</p>
                    <p className="text-2xl font-bold text-blue-600">12</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-green-500">
                <div className="flex items-center">
                  <div className="p-3 bg-green-100 rounded-full mr-4">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Completed Jobs</p>
                    <p className="text-2xl font-bold text-green-600">47</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Work Opportunities */}
            <div className="bg-white rounded-xl shadow-lg">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-800 flex items-center">
                    <span className="bg-gradient-to-r from-orange-400 to-red-400 w-2 h-6 rounded-full mr-3"></span>
                    Available Work Near You
                  </h2>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    Within 5km
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                {nearbyWork.map((work) => (
                  <div
                    key={work.id}
                    className={`relative p-5 border-2 rounded-xl transition-all hover:shadow-lg cursor-pointer ${
                      work.urgent
                        ? "border-red-200 bg-red-50"
                        : "border-gray-200 hover:border-orange-300"
                    }`}
                  >
                    {work.urgent && (
                      <div className="absolute top-3 right-3">
                        <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse">
                          URGENT
                        </span>
                      </div>
                    )}

                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-gray-800 mb-1">
                          {work.title}
                        </h3>
                        <p className="text-gray-600 font-medium">
                          {work.employer}
                        </p>
                      </div>
                      <div className="text-right ml-4">
                        <div className="text-2xl font-bold text-green-600">
                          {work.pay}
                        </div>
                        <div className="text-sm text-gray-500 flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {work.duration}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                      <span className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
                        <MapPin className="w-4 h-4 mr-1" />
                        {work.location}
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          work.type === "Full-time"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-purple-100 text-purple-700"
                        }`}
                      >
                        {work.type}
                      </span>
                      <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-medium">
                        {work.skills}
                      </span>
                    </div>

                    <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all">
                      Apply Now - Get Instant Response
                    </button>
                  </div>
                ))}
              </div>

              <div className="p-6 border-t border-gray-100">
                <button className="w-full py-3 border-2 border-orange-300 text-orange-600 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
                  View All Available Work (156 jobs)
                </button>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Interactive Calendar */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg sticky top-6">
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <Calendar className="w-6 h-6 mr-2" />
                  Set Your Availability
                </h2>

                {/* Calendar Controls */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <button
                      onClick={() => navigateMonth(-1)}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <h3 className="text-lg font-semibold">
                      {monthNames[currentDate.getMonth()]}{" "}
                      {currentDate.getFullYear()}
                    </h3>
                    <button
                      onClick={() => navigateMonth(1)}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Selection Mode Toggle */}
                  <div className="flex gap-2 mb-4">
                    <button
                      onClick={() => {
                        setIsSelectingRange(false);
                        setSelectedDates([]);
                      }}
                      className={`flex-1 py-2 px-3 rounded-lg text-xs font-medium transition-all ${
                        !isSelectingRange
                          ? "bg-orange-500 text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      Single Days
                    </button>
                    <button
                      onClick={() => {
                        setIsSelectingRange(true);
                        setSelectedDates([]);
                      }}
                      className={`flex-1 py-2 px-3 rounded-lg text-xs font-medium transition-all ${
                        isSelectingRange
                          ? "bg-orange-500 text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      Date Range
                    </button>
                  </div>

                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-1 mb-2">
                    {dayNames.map((day) => (
                      <div
                        key={day}
                        className="text-center text-xs font-medium text-gray-500 py-2"
                      >
                        {day}
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-7 gap-1">
                    {getCalendarDays().map((date, index) => (
                      <button
                        key={index}
                        onClick={() => handleDateClick(date)}
                        disabled={
                          !date || date < new Date().setHours(0, 0, 0, 0)
                        }
                        className={`
                          aspect-square flex items-center justify-center text-sm rounded-lg transition-all
                          ${!date ? "invisible" : ""}
                          ${
                            date && date < new Date().setHours(0, 0, 0, 0)
                              ? "text-gray-300 cursor-not-allowed"
                              : "hover:bg-orange-100 cursor-pointer"
                          }
                          ${
                            isDateSelected(date)
                              ? "bg-orange-500 text-white font-bold"
                              : isDateInRange(date)
                              ? "bg-orange-200 text-orange-800"
                              : "text-gray-700"
                          }
                        `}
                      >
                        {date ? date.getDate() : ""}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Selected Dates Info */}
                {selectedDates.length > 0 && (
                  <div className="mb-4 p-3 bg-orange-50 rounded-lg">
                    <p className="text-sm font-medium text-orange-800 mb-1">
                      Selected Dates ({selectedDates.length} days):
                    </p>
                    <p className="text-xs text-orange-700">
                      {isSelectingRange && selectedDates.length > 1
                        ? `${selectedDates[0].toLocaleDateString()} - ${selectedDates[
                            selectedDates.length - 1
                          ].toLocaleDateString()}`
                        : selectedDates
                            .map((date) => date.toLocaleDateString())
                            .join(", ")}
                    </p>
                  </div>
                )}

                {/* Work Type Selector */}
                <div className="mb-6">
                  <p className="text-sm font-medium text-gray-700 mb-3">
                    Work Preference:
                  </p>
                  <div className="grid grid-cols-1 gap-2">
                    <button
                      onClick={() => setAvailabilityType("full-time")}
                      className={`py-3 px-4 rounded-lg text-sm font-semibold transition-all ${
                        availabilityType === "full-time"
                          ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      Full-time (8+ hours/day)
                    </button>
                    <button
                      onClick={() => setAvailabilityType("part-time")}
                      className={`py-3 px-4 rounded-lg text-sm font-semibold transition-all ${
                        availabilityType === "part-time"
                          ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      Part-time (4-6 hours/day)
                    </button>
                    <button
                      onClick={() => setAvailabilityType("contract")}
                      className={`py-3 px-4 rounded-lg text-sm font-semibold transition-all ${
                        availabilityType === "contract"
                          ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      Contract (Project-based)
                    </button>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="bg-gradient-to-r from-orange-100 to-red-100 p-4 rounded-lg mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-700">
                      {selectedDates.length} Days
                    </div>
                    <div className="text-sm text-orange-600">
                      Selected as {availabilityType.replace("-", " ")}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all mb-2 flex items-center justify-center">
                  <Settings className="w-4 h-4 mr-2" />
                  Save Availability
                </button>

                <button
                  onClick={() => setSelectedDates([])}
                  className="w-full border-2 border-gray-300 text-gray-600 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center"
                >
                  Clear Selection
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
