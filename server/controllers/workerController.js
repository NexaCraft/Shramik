import Worker from "../models/worker.model.js";

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

    // Aggregate job application statistics

    // Fetch upcoming jobs matching worker type

    // Fetch recent notifications

    // Calculate profile completion

    res.status(200).json({
      success: true,
      message: "Profile Data Fetched Successfully.",
      data: {
        profileData: workerProfile,
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
