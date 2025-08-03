import { useState, useEffect } from "react";
import {
  Briefcase,
  CheckCircle,
  Calendar,
  MapPin,
  User,
  Bell,
  FileText,
  Settings,
} from "lucide-react";
import axios from "axios";
import { useSelector } from "react-redux";
import { baseURL } from "../../assets/asstes";

const WorkerDashboard = () => {
  const { user } = useSelector((store) => store.auth);
  const [workerProfile, setWorkerProfile] = useState(null);
  const [jobApplications, setJobApplications] = useState([]);
  const [upcomingJobs, setUpcomingJobs] = useState([]);
  const [notifications, setNotifications] = useState([]);

  // Fetch worker data and job information
  useEffect(() => {
    const fetchWorkerData = async () => {
      try {
        // Fetch worker profile
        const profileResponse = await axios.get(
          `${baseURL}/workers/profile/${user._id}`
        );
        const data = profileResponse?.data?.data?.profileData;
        setWorkerProfile(data);

        // Fetch job applications
        const applicationsResponse = await axios.get(
          `/api/jobs/applications/${user._id}`
        );
        setJobApplications(applicationsResponse.data);

        // Fetch upcoming jobs
        const upcomingJobsResponse = await axios.get(
          `/api/jobs/upcoming/${user._id}`
        );
        setUpcomingJobs(upcomingJobsResponse.data);

        // Fetch notifications
        const notificationsResponse = await axios.get(
          `/api/notifications/${user._id}`
        );
        setNotifications(notificationsResponse.data);
      } catch (error) {
        console.error("Failed to fetch dashboard data", error);
      }
    };

    fetchWorkerData();
  }, [user._id]);

  // Render job application status badge
  const renderStatusBadge = (status) => {
    switch (status) {
      case "pending":
        return (
          <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">
            Pending
          </span>
        );
      case "approved":
        return (
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
            Approved
          </span>
        );
      case "rejected":
        return (
          <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">
            Rejected
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
              Worker Dashboard
            </h1>
            <p className="text-gray-600">
              Welcome back, {workerProfile?.fullName}!
            </p>
          </div>
          <div className="flex space-x-4">
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition flex items-center">
              <Settings className="mr-2 h-5 w-5" />
              Profile Settings
            </button>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Profile Summary */}
          <div className="bg-white shadow-lg rounded-xl p-6">
            <div className="flex items-center space-x-4 mb-6">
              <User className="h-12 w-12 text-orange-500" />
              <div>
                <h2 className="text-xl font-semibold">{workerProfile?.name}</h2>
                <p className="text-gray-500">
                  {workerProfile?.skills?.join(", ")}
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Experience</span>
                <span className="font-semibold">
                  {workerProfile?.experience}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Location</span>
                <span className="font-semibold">{workerProfile?.city}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Work Preference</span>
                <span className="font-semibold">
                  {workerProfile?.workPreference}
                </span>
              </div>
            </div>
          </div>

          {/* Job Applications */}
          <div className="bg-white shadow-lg rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold flex items-center">
                <Briefcase className="mr-2 h-6 w-6 text-blue-500" />
                Job Applications
              </h2>
              <span className="text-gray-500">
                {jobApplications.length} Total
              </span>
            </div>
            <div className="space-y-4">
              {jobApplications.slice(0, 3).map((application) => (
                <div
                  key={application.id}
                  className="flex justify-between items-center bg-gray-50 p-3 rounded-lg"
                >
                  <div>
                    <h3 className="font-semibold">{application.jobTitle}</h3>
                    <p className="text-sm text-gray-500">
                      {application.company}
                    </p>
                  </div>
                  {renderStatusBadge(application.status)}
                </div>
              ))}
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white shadow-lg rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold flex items-center">
                <Bell className="mr-2 h-6 w-6 text-green-500" />
                Notifications
              </h2>
              <span className="text-gray-500">{notifications.length} New</span>
            </div>
            <div className="space-y-4">
              {notifications.slice(0, 3).map((notification) => (
                <div
                  key={notification.id}
                  className="bg-gray-50 p-3 rounded-lg"
                >
                  <p className="text-sm font-medium">{notification.message}</p>
                  <span className="text-xs text-gray-500">
                    {notification.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Jobs and Work History */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Upcoming Jobs */}
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-6 flex items-center">
              <Calendar className="mr-2 h-6 w-6 text-purple-500" />
              Upcoming Jobs
            </h2>
            <div className="space-y-4">
              {upcomingJobs.map((job) => (
                <div
                  key={job.id}
                  className="flex justify-between items-center bg-gray-50 p-4 rounded-lg"
                >
                  <div>
                    <h3 className="font-semibold">{job.title}</h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="mr-1 h-4 w-4" />
                      {job.location}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{job.date}</p>
                    <p className="text-xs text-gray-500">{job.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Work History */}
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-6 flex items-center">
              <FileText className="mr-2 h-6 w-6 text-indigo-500" />
              Work History
            </h2>
            <div className="space-y-4">
              {workerProfile?.workHistory?.map((work) => (
                <div
                  key={work.id}
                  className="flex justify-between items-center bg-gray-50 p-4 rounded-lg"
                >
                  <div>
                    <h3 className="font-semibold">{work.jobTitle}</h3>
                    <p className="text-sm text-gray-500">{work.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{work.period}</p>
                    <div className="flex items-center text-green-600">
                      <CheckCircle className="mr-1 h-4 w-4" />
                      Completed
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkerDashboard;
