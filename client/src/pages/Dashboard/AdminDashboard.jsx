import React, { useState, useEffect } from 'react';
import {
  Users,
  Briefcase,
  Activity,
  PieChart,
  Shield,
  Server,
  Truck,
  Database,
  BarChart2,
  TrendingUp,
  User,
  CheckCircle,
  XCircle,
  PlusCircle,
  Settings,
  Bell,
  Search,
  Filter
} from 'lucide-react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

const AdminDashboard = () => {
  const { user } = useSelector((store) => store.auth);
  const [dashboardStats, setDashboardStats] = useState({
    totalUsers: 0,
    totalWorkers: 0,
    totalEmployers: 0,
    totalJobPostings: 0,
    activeJobs: 0,
    completedJobs: 0,
    pendingVerifications: 0
  });

  const [recentActivities, setRecentActivities] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [systemHealth, setSystemHealth] = useState({
    cpuUsage: 0,
    memoryUsage: 0,
    diskUsage: 0
  });

  // Sample chart data
  const userGrowthData = [
    { month: 'Jan', Workers: 400, Employers: 240 },
    { month: 'Feb', Workers: 300, Employers: 139 },
    { month: 'Mar', Workers: 200, Employers: 980 },
    { month: 'Apr', Workers: 278, Employers: 390 },
    { month: 'May', Workers: 189, Employers: 480 },
    { month: 'Jun', Workers: 239, Employers: 380 }
  ];

  // Fetch admin dashboard data
  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        // Fetch dashboard statistics
        const statsResponse = await axios.get('/api/admin/dashboard-stats');
        setDashboardStats(statsResponse.data);

        // Fetch recent activities
        const activitiesResponse = await axios.get('/api/admin/recent-activities');
        setRecentActivities(activitiesResponse.data);

        // Fetch notifications
        const notificationsResponse = await axios.get('/api/admin/notifications');
        setNotifications(notificationsResponse.data);

        // Fetch system health
        const systemHealthResponse = await axios.get('/api/admin/system-health');
        setSystemHealth(systemHealthResponse.data);
      } catch (error) {
        console.error('Failed to fetch admin dashboard data', error);
      }
    };

    fetchAdminData();
  }, []);

  // Render activity status badge
  const renderActivityBadge = (type) => {
    switch(type) {
      case 'user_registration':
        return <Users className="h-5 w-5 text-blue-500" />;
      case 'job_posting':
        return <Briefcase className="h-5 w-5 text-green-500" />;
      case 'verification':
        return <CheckCircle className="h-5 w-5 text-orange-500" />;
      default:
        return <Activity className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="container mx-auto">
        {/* Dashboard Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Admin Dashboard
            </h1>
            <p className="text-gray-600">
              Welcome back, {user?.name || 'Admin'}!
            </p>
          </div>
          <div className="flex space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition flex items-center">
              <PlusCircle className="mr-2 h-5 w-5" />
              Create New
            </button>
            <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition">
              <Settings className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { 
              icon: Users, 
              title: 'Total Users', 
              value: dashboardStats.totalUsers,
              color: 'text-blue-500'
            },
            { 
              icon: Truck, 
              title: 'Total Workers', 
              value: dashboardStats.totalWorkers,
              color: 'text-green-500'
            },
            { 
              icon: Briefcase, 
              title: 'Total Employers', 
              value: dashboardStats.totalEmployers,
              color: 'text-purple-500'
            },
            { 
              icon: Database, 
              title: 'Job Postings', 
              value: dashboardStats.totalJobPostings,
              color: 'text-orange-500'
            }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="bg-white shadow-md rounded-xl p-6 flex items-center justify-between hover:shadow-lg transition"
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
          {/* User Growth Chart */}
          <div className="bg-white shadow-lg rounded-xl p-6 md:col-span-2">
            <h2 className="text-xl font-semibold mb-6 flex items-center">
              <TrendingUp className="mr-2 h-6 w-6 text-blue-500" />
              User Growth
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={userGrowthData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Workers" fill="#8884d8" />
                <Bar dataKey="Employers" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* System Health */}
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-6 flex items-center">
              <Server className="mr-2 h-6 w-6 text-green-500" />
              System Health
            </h2>
            <div className="space-y-4">
              {[
                { 
                  title: 'CPU Usage', 
                  value: systemHealth.cpuUsage,
                  color: systemHealth.cpuUsage > 80 ? 'text-red-500' : 'text-green-500'
                },
                { 
                  title: 'Memory Usage', 
                  value: systemHealth.memoryUsage,
                  color: systemHealth.memoryUsage > 80 ? 'text-red-500' : 'text-green-500'
                },
                { 
                  title: 'Disk Usage', 
                  value: systemHealth.diskUsage,
                  color: systemHealth.diskUsage > 80 ? 'text-red-500' : 'text-green-500'
                }
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span>{item.title}</span>
                  <div className="flex items-center">
                    <span className={`mr-2 font-semibold ${item.color}`}>
                      {item.value}%
                    </span>
                    <div className="w-32 bg-gray-200 rounded-full h-2.5">
                      <div 
                        className={`h-2.5 rounded-full ${item.color.replace('text', 'bg')}`} 
                        style={{ width: `${item.value}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activities & Notifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Recent Activities */}
          <div className="bg-white shadow-lg rounded-xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold flex items-center">
                <Activity className="mr-2 h-6 w-6 text-purple-500" />
                Recent Activities
              </h2>
              <div className="flex space-x-2">
                <button className="bg-gray-200 p-2 rounded-lg">
                  <Search className="h-5 w-5 text-gray-600" />
                </button>
                <button className="bg-gray-200 p-2 rounded-lg">
                  <Filter className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div 
                  key={activity.id} 
                  className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    {renderActivityBadge(activity.type)}
                    <div>
                      <h3 className="font-semibold">{activity.description}</h3>
                      <p className="text-sm text-gray-500">{activity.details}</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">{activity.timestamp}</span>
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
              <span className="text-gray-500">{notifications.length} New</span>
            </div>
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div 
                  key={notification.id} 
                  className="bg-gray-50 p-3 rounded-lg flex justify-between items-center"
                >
                  <div>
                    <p className="text-sm font-medium">{notification.message}</p>
                    <span className="text-xs text-gray-500">{notification.date}</span>
                  </div>
                  {notification.type === 'alert' && (
                    <XCircle className="h-5 w-5 text-red-500" />
                  )}
                  {notification.type === 'success' && (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;