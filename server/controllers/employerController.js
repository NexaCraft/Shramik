import Employer from "../models/employer.model.js";
// import Job from '../models/job.model.js';
// import JobApplication from '../models/jobApplication.model.js';
// import Notification from '../models/notification.model.js';
// import Worker from '../models/worker.model.js';

export const getDashboardData = async (req, res) => {
  try {
    const employerId = req.user._id;

    // Fetch employer profile
    const employerProfile = await Employer.findById(employerId).select('-password');
    if (!employerProfile) {
      return res.status(404).json({
        success: false,
        message: 'Profile not found'
      });
    }

    // Fetch job postings with application counts
    // const jobPostings = await Job.aggregate([
    //   { $match: { employer: employerId } },
    //   {
    //     $lookup: {
    //       from: 'jobapplications',
    //       localField: '_id',
    //       foreignField: 'job',
    //       as: 'applications'
    //     }
    //   },
    //   {
    //     $addFields: {
    //       applicationCount: { $size: '$applications' }
    //     }
    //   },
    //   {
    //     $project: {
    //       applications: 0
    //     }
    //   },
    //   { $sort: { createdAt: -1 } },
    //   { $limit: 10 }
    // ]);

    // Fetch recent applicants
    // const recentApplicants = await JobApplication.aggregate([
    //   {
    //     $lookup: {
    //       from: 'jobs',
    //       localField: 'job',
    //       foreignField: '_id',
    //       as: 'jobDetails'
    //     }
    //   },
    //   {
    //     $unwind: '$jobDetails'
    //   },
    //   {
    //     $match: { 'jobDetails.employer': employerId }
    //   },
    //   {
    //     $lookup: {
    //       from: 'workers',
    //       localField: 'worker',
    //       foreignField: '_id',
    //       as: 'workerDetails'
    //     }
    //   },
    //   {
    //     $unwind: '$workerDetails'
    //   },
    //   {
    //     $project: {
    //       worker: '$workerDetails',
    //       job: '$jobDetails',
    //       status: 1,
    //       appliedDate: 1
    //     }
    //   },
    //   { $sort: { appliedDate: -1 } },
    //   { $limit: 10 }
    // ]);

    // Fetch notifications
    // const notifications = await Notification.find({ 
    //   recipient: employerId, 
    //   isRead: false 
    // })
    // .sort({ createdAt: -1 })
    // .limit(10);

    // Calculate dashboard statistics
    // const stats = await calculateDashboardStats(employerId);

    res.status(200).json({
      success: true,
      data: {
        employerProfile,
        // jobPostings,
        // recentApplicants,
        // notifications,
        // stats
      }
    });
  } catch (error) {
    console.error('Dashboard data fetch error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching dashboard data',
      error: error.message
    });
  }
};

// Calculate dashboard statistics
// const calculateDashboardStats = async (employerId) => {
//   const currentDate = new Date();
//   const thirtyDaysAgo = new Date(currentDate.getTime() - 30 * 24 * 60 * 60 * 1000);

//   // Total job postings
//   const totalJobPostings = await Job.countDocuments({ employer: employerId });

//   // Active job postings
//   const activeJobPostings = await Job.countDocuments({ 
//     employer: employerId, 
//     status: 'Open' 
//   });

//   // Job applications in the last 30 days
//   const jobApplications = await JobApplication.aggregate([
//     {
//       $lookup: {
//         from: 'jobs',
//         localField: 'job',
//         foreignField: '_id',
//         as: 'jobDetails'
//       }
//     },
//     { $unwind: '$jobDetails' },
//     {
//       $match: {
//         'jobDetails.employer': employerId,
//         appliedDate: { $gte: thirtyDaysAgo }
//       }
//     },
//     {
//       $group: {
//         _id: '$status',
//         count: { $sum: 1 }
//       }
//     }
//   ]);

//   // Hired workers in the last 30 days
//   const hiredWorkersCount = await JobApplication.countDocuments({
//     status: 'Hired',
//     appliedDate: { $gte: thirtyDaysAgo }
//   });

//   return {
//     totalJobPostings,
//     activeJobPostings,
//     jobApplications: jobApplications.reduce((acc, curr) => {
//       acc[curr._id] = curr.count;
//       return acc;
//     }, {}),
//     hiredWorkersCount
//   };
// };

// export const createJobPosting = async (req, res) => {
//   try {
//     const employerId = req.user._id;
//     const jobData = {
//       ...req.body,
//       employer: employerId
//     };

//     const newJob = new Job(jobData);
//     await newJob.save();

//     res.status(201).json({
//       success: true,
//       message: 'Job posting created successfully',
//       data: newJob
//     });
//   } catch (error) {
//     console.error('Job posting creation error:', error);
//     res.status(500).json({
//       success: false,
//       message: 'Error creating job posting',
//       error: error.message
//     });
//   }
// };

// export const getJobApplications = async (req, res) => {
//   try {
//     const employerId = req.user._id;
//     const { jobId, status, page = 1, limit = 10 } = req.query;

//     // Build query
//     const query = { 
//       'jobDetails.employer': employerId 
//     };

//     if (jobId) query['job'] = jobId;
//     if (status) query['status'] = status;

//     // Paginated job applications
//     const jobApplications = await JobApplication.aggregate([
//       {
//         $lookup: {
//           from: 'jobs',
//           localField: 'job',
//           foreignField: '_id',
//           as: 'jobDetails'
//         }
//       },
//       { $unwind: '$jobDetails' },
//       {
//         $lookup: {
//           from: 'workers',
//           localField: 'worker',
//           foreignField: '_id',
//           as: 'workerDetails'
//         }
//       },
//       { $unwind: '$workerDetails' },
//       { $match: query },
//       { $sort: { appliedDate: -1 } },
//       { $skip: (page - 1) * limit },
//       { $limit: Number(limit) },
//       {
//         $project: {
//           job: '$jobDetails',
//           worker: '$workerDetails',
//           status: 1,
//           appliedDate: 1
//         }
//       }
//     ]);

//     // Total count for pagination
//     const total = await JobApplication.aggregate([
//       {
//         $lookup: {
//           from: 'jobs',
//           localField: 'job',
//           foreignField: '_id',
//           as: 'jobDetails'
//         }
//       },
//       { $unwind: '$jobDetails' },
//       { $match: query },
//       { $count: 'totalApplications' }
//     ]);

//     res.status(200).json({
//       success: true,
//       data: {
//         jobApplications,
//         pagination: {
//           currentPage: page,
//           totalPages: Math.ceil(total[0]?.totalApplications / limit) || 0,
//           totalApplications: total[0]?.totalApplications || 0
//         }
//       }
//     });
//   } catch (error) {
//     console.error('Job applications fetch error:', error);
//     res.status(500).json({
//       success: false,
//       message: 'Error fetching job applications',
//       error: error.message
//     });
//   }
// };

// export const updateJobApplicationStatus = async (req, res) => {
//   try {
//     const { applicationId } = req.params;
//     const { status } = req.body;
//     const employerId = req.user._id;

//     // Verify job belongs to employer
//     const jobApplication = await JobApplication.findById(applicationId)
//       .populate('job');

//     if (!jobApplication || jobApplication.job.employer.toString() !== employerId.toString()) {
//       return res.status(403).json({
//         success: false,
//         message: 'Unauthorized to update this application'
//       });
//     }

//     jobApplication.status = status;
//     await jobApplication.save();

//     // Create notification for worker
//     const notification = new Notification({
//       recipient: jobApplication.worker,
//       type: 'Application',
//       message: `Your application status has been updated to ${status}`,
//       relatedEntity: applicationId,
//       entityModel: 'JobApplication'
//     });
//     await notification.save();

//     res.status(200).json({
//       success: true,
//       message: 'Application status updated successfully',
//       data: jobApplication
//     });
//   } catch (error) {
//     console.error('Job application status update error:', error);
//     res.status(500).json({
//       success: false,
//       message: 'Error updating job application status',
//       error: error.message
//     });
//   }
// };