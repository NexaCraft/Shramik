import { useState, useEffect } from "react";
import {
  Briefcase,
  Users,
  Calendar,
  CheckCircle,
  PlusCircle,
  Search,
  Filter,
  User,
  MapPin,
  DollarSign,
  Clock,
  Settings,
  Bell,
} from "lucide-react";
import axios from "axios";
import { useSelector } from "react-redux";
import { baseURL } from "../../assets/asstes";

const EmployerDashboard = () => {
  const { user } = useSelector((store) => store.auth);
  const [employerProfile, setEmployerProfile] = useState(null);
  const [jobPostings, setJobPostings] = useState([]);
  const [applicants, setApplicants] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [stats, setStats] = useState({
    totalJobs: 0,
    activeJobs: 0,
    totalApplicants: 0,
    hiredWorkers: 0,
  });

  // Fetch employer data and job information
  useEffect(() => {
    const fetchEmployerData = async () => {
      try {
        // Fetch employer profile
        const profileResponse = await axios.get(
          `${baseURL}/employers/profile/${user._id}`
        );
        const data = profileResponse?.data?.data?.employerProfile;
        setEmployerProfile(data);

        // Fetch job postings
        const jobsResponse = await axios.get(`/api/jobs/employer/${user._id}`);
        setJobPostings(jobsResponse.data);

        // Fetch recent applicants
        const applicantsResponse = await axios.get(
          `/api/jobs/applicants/${user._id}`
        );
        setApplicants(applicantsResponse.data);

        // Fetch notifications
        const notificationsResponse = await axios.get(
          `/api/notifications/${user._id}`
        );
        setNotifications(notificationsResponse.data);

        // Fetch dashboard statistics
        const statsResponse = await axios.get(
          `/api/employers/stats/${user._id}`
        );
        setStats(statsResponse.data);
      } catch (error) {
        console.error("Failed to fetch dashboard data", error);
      }
    };

    fetchEmployerData();
  }, [user._id]);

  // Render job status badge
  const renderStatusBadge = (status) => {
    switch (status) {
      case "active":
        return (
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
            Active
          </span>
        );
      case "closed":
        return (
          <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">
            Closed
          </span>
        );
      case "draft":
        return (
          <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">
            Draft
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="container mx-auto">
        {/* Dashboard Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Employer Dashboard
            </h1>
            <p className="text-gray-600">
              Welcome back, {employerProfile?.businessName}!
            </p>
          </div>
          <div className="flex space-x-4">
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition flex items-center">
              <PlusCircle className="mr-2 h-5 w-5" />
              Post New Job
            </button>
            <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition flex items-center">
              <Settings className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Dashboard Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            {
              icon: Briefcase,
              title: "Total Jobs",
              value: stats.totalJobs,
              color: "text-blue-500",
            },
            {
              icon: CheckCircle,
              title: "Active Jobs",
              value: stats.activeJobs,
              color: "text-green-500",
            },
            {
              icon: Users,
              title: "Total Applicants",
              value: stats.totalApplicants,
              color: "text-purple-500",
            },
            {
              icon: User,
              title: "Hired Workers",
              value: stats.hiredWorkers,
              color: "text-orange-500",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 flex items-center justify-between"
            >
              <div>
                <stat.icon className={`h-8 w-8 ${stat.color} mb-2`} />
                <h3 className="text-sm text-gray-500">{stat.title}</h3>
                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Dashboard Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Job Postings */}
          <div className="bg-white shadow-lg rounded-xl p-6 md:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold flex items-center">
                <Briefcase className="mr-2 h-6 w-6 text-blue-500" />
                Job Postings
              </h2>
              <div className="flex space-x-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search jobs"
                    className="pl-8 pr-4 py-2 border rounded-lg"
                  />
                  <Search className="absolute left-2 top-3 h-4 w-4 text-gray-400" />
                </div>
                <button className="bg-gray-200 p-2 rounded-lg">
                  <Filter className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>
            <div className="space-y-4">
              {jobPostings.map((job) => (
                <div
                  key={job.id}
                  className="flex justify-between items-center bg-gray-50 p-4 rounded-lg"
                >
                  <div>
                    <h3 className="font-semibold">{job.title}</h3>
                    <div className="flex items-center text-sm text-gray-500 space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                      <DollarSign className="h-4 w-4" />
                      <span>{job.salary}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    {renderStatusBadge(job.status)}
                    <span className="text-sm text-gray-500">
                      <Clock className="inline-block mr-1 h-4 w-4" />
                      {job.postedDate}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Applicants & Notifications */}
          <div className="space-y-6">
            {/* Recent Applicants */}
            <div className="bg-white shadow-lg rounded-xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold flex items-center">
                  <Users className="mr-2 h-6 w-6 text-green-500" />
                  Recent Applicants
                </h2>
                <span className="text-gray-500">{applicants.length} Total</span>
              </div>
              <div className="space-y-4">
                {applicants.slice(0, 4).map((applicant) => (
                  <div
                    key={applicant.id}
                    className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <img
                        src={applicant.profilePic}
                        alt={applicant.name}
                        className="h-10 w-10 rounded-full"
                      />
                      <div>
                        <h3 className="font-semibold">{applicant.name}</h3>
                        <p className="text-sm text-gray-500">
                          {applicant.position}
                        </p>
                      </div>
                    </div>
                    <button className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs">
                      View Profile
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Notifications */}
            <div className="bg-white shadow-lg rounded-xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold flex items-center">
                  <Bell className="mr-2 h-6 w-6 text-orange-500" />
                  Notifications
                </h2>
                <span className="text-gray-500">
                  {notifications.length} New
                </span>
              </div>
              <div className="space-y-4">
                {notifications.slice(0, 3).map((notification) => (
                  <div
                    key={notification.id}
                    className="bg-gray-50 p-3 rounded-lg"
                  >
                    <p className="text-sm font-medium">
                      {notification.message}
                    </p>
                    <span className="text-xs text-gray-500">
                      {notification.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Interviews & Recent Activity */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Upcoming Interviews */}
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-6 flex items-center">
              <Calendar className="mr-2 h-6 w-6 text-purple-500" />
              Upcoming Interviews
            </h2>
            <div className="space-y-4">
              {employerProfile?.upcomingInterviews?.map((interview) => (
                <div
                  key={interview.id}
                  className="flex justify-between items-center bg-gray-50 p-4 rounded-lg"
                >
                  <div>
                    <h3 className="font-semibold">{interview.candidateName}</h3>
                    <p className="text-sm text-gray-500">
                      {interview.position}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{interview.date}</p>
                    <p className="text-xs text-gray-500">{interview.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-6 flex items-center">
              <CheckCircle className="mr-2 h-6 w-6 text-green-500" />
              Recent Activity
            </h2>
            <div className="space-y-4">
              {employerProfile?.recentActivity?.map((activity) => (
                <div
                  key={activity.id}
                  className="flex justify-between items-center bg-gray-50 p-4 rounded-lg"
                >
                  <div>
                    <h3 className="font-semibold">{activity.description}</h3>
                    <p className="text-sm text-gray-500">{activity.details}</p>
                  </div>
                  <span className="text-xs text-gray-500">
                    {activity.timestamp}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerDashboard;
