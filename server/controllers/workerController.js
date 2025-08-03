import Worker from "../models/worker.model.js";
// import JobApplication from "../models/jobApplication.model.js";
// import Job from "../models/job.model.js";
// import Notification from "../models/notification.model.js";

export const getDashboardData = async (req, res) => {
  try {
    const workerId = req.user._id;

    // Fetch worker profile
    const workerProfile = await Worker.findById(workerId).select("-password");
    if (!workerProfile) {
      return res.status(404).json({
        success: false,
        message: "Worker profile not found",
      });
    }

    // Fetch job applications with detailed job information
    const jobApplications = await JobApplication.find({ worker: workerId })
      .populate({
        path: "job",
        populate: {
          path: "employer",
          select: "businessName contactName",
        },
      })
      .sort({ appliedDate: -1 })
      .limit(10);

    // Aggregate job application statistics
    const applicationStats = await JobApplication.aggregate([
      { $match: { worker: workerId } },
      {
        $group: {
          _id: "$status",
          count: { $sum: 1 },
        },
      },
    ]);

    // Fetch upcoming jobs matching worker type
    const upcomingJobs = await Job.find({
      workerType: workerProfile.workerType,
      status: "Open",
      startDate: {
        $gte: new Date(),
        $lte: new Date(new Date().setDate(new Date().getDate() + 30)),
      },
    })
      .populate("employer", "businessName contactName")
      .limit(5);

    // Fetch recent notifications
    const notifications = await Notification.find({
      recipient: workerId,
      isRead: false,
    })
      .sort({ createdAt: -1 })
      .limit(10);

    // Calculate profile completion
    const profileCompletion = calculateProfileCompletion(workerProfile);

    res.status(200).json({
      success: true,
      data: {
        workerProfile: {
          ...workerProfile.toObject(),
          profileCompletion,
        },
        jobApplications,
        applicationStats,
        upcomingJobs,
        notifications,
      },
    });
  } catch (error) {
    console.error("Dashboard data fetch error:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching dashboard data",
      error: error.message,
    });
  }
};

// Helper function to calculate profile completion
// const calculateProfileCompletion = (worker) => {
//   const requiredFields = [
//     "fullName",
//     "phone",
//     "email",
//     "workerType",
//     "city",
//     "area",
//     "availability",
//   ];

//   let completedFields = 0;
//   requiredFields.forEach((field) => {
//     if (worker[field]) completedFields++;
//   });

//   if (worker.skills && worker.skills.length > 0) completedFields++;
//   if (worker.experience > 0) completedFields++;

//   return Math.round((completedFields / (requiredFields.length + 2)) * 100);
// };

// export const updateWorkerProfile = async (req, res) => {
//   try {
//     const workerId = req.user._id;
//     const updateData = req.body;

//     // Validate update data
//     const allowedFields = [
//       "fullName",
//       "email",
//       "workerType",
//       "skills",
//       "city",
//       "area",
//       "availability",
//       "experience",
//     ];

//     const filteredUpdateData = {};
//     allowedFields.forEach((field) => {
//       if (updateData[field] !== undefined) {
//         filteredUpdateData[field] = updateData[field];
//       }
//     });

//     // Update worker profile
//     const worker = await Worker.findByIdAndUpdate(
//       workerId,
//       filteredUpdateData,
//       {
//         new: true,
//         runValidators: true,
//       }
//     ).select("-password");

//     if (!worker) {
//       return res.status(404).json({
//         success: false,
//         message: "Worker profile not found",
//       });
//     }

//     // Calculate profile completion
//     const profileCompletion = calculateProfileCompletion(worker);

//     res.status(200).json({
//       success: true,
//       message: "Profile updated successfully",
//       data: {
//         ...worker.toObject(),
//         profileCompletion,
//       },
//     });
//   } catch (error) {
//     console.error("Profile update error:", error);
//     res.status(500).json({
//       success: false,
//       message: "Error updating profile",
//       error: error.message,
//     });
//   }
// };

// export const getJobApplications = async (req, res) => {
//   try {
//     const workerId = req.user._id;
//     const { status, page = 1, limit = 10 } = req.query;

//     // Build query
//     const query = { worker: workerId };
//     if (status) query.status = status;

//     // Paginated job applications
//     const jobApplications = await JobApplication.find(query)
//       .populate({
//         path: "job",
//         populate: {
//           path: "employer",
//           select: "businessName contactName",
//         },
//       })
//       .sort({ appliedDate: -1 })
//       .skip((page - 1) * limit)
//       .limit(Number(limit));

//     // Total count for pagination
//     const total = await JobApplication.countDocuments(query);

//     res.status(200).json({
//       success: true,
//       data: {
//         jobApplications,
//         pagination: {
//           currentPage: page,
//           totalPages: Math.ceil(total / limit),
//           totalApplications: total,
//         },
//       },
//     });
//   } catch (error) {
//     console.error("Job applications fetch error:", error);
//     res.status(500).json({
//       success: false,
//       message: "Error fetching job applications",
//       error: error.message,
//     });
//   }
// };

// export const markNotificationAsRead = async (req, res) => {
//   try {
//     const { notificationId } = req.params;
//     const workerId = req.user._id;

//     const notification = await Notification.findOneAndUpdate(
//       { _id: notificationId, recipient: workerId },
//       { isRead: true },
//       { new: true }
//     );

//     if (!notification) {
//       return res.status(404).json({
//         success: false,
//         message: "Notification not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Notification marked as read",
//     });
//   } catch (error) {
//     console.error("Mark notification error:", error);
//     res.status(500).json({
//       success: false,
//       message: "Error marking notification",
//       error: error.message,
//     });
//   }
// };
