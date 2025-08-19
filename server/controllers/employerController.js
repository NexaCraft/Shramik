import User from "../models/user.model.js";

// @desc    Get all employers (admin only or public listing)
// @route   GET /api/v1/employers
export const getAllEmployers = async (req, res) => {
  try {
    const employers = await User.find({ role: "company" }).select("-password");
    res.status(200).json(employers);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch employers", error: error.message });
  }
};

// @desc    Get employer by ID
// @route   GET /api/v1/employers/:id
export const getEmployerById = async (req, res) => {
  try {
    const employer = await User.findById(req.params.id).select("-password");

    if (!employer || employer.role !== "company") {
      return res.status(404).json({ message: "Employer not found" });
    }

    res.status(200).json(employer);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching employer", error: error.message });
  }
};

// @desc    Update logged-in employer profile
// @route   PUT /api/v1/employers/me
export const updateEmployerProfile = async (req, res) => {
  try {
    if (req.user.role !== "company") {
      return res
        .status(403)
        .json({ message: "Only employers can update this profile" });
    }

    const updates = {
      contactName: req.body.contactName,
      businessName: req.body.businessName,
      businessType: req.body.businessType,
      teamSize: req.body.teamSize,
      businessDescription: req.body.businessDescription,
      address: req.body.address,
      city: req.body.city,
      area: req.body.area,
      hiringFrequency: req.body.hiringFrequency,
    };

    const updatedEmployer = await User.findByIdAndUpdate(req.user.id, updates, {
      new: true,
      runValidators: true,
      select: "-password",
    });

    res.status(200).json(updatedEmployer);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update profile", error: error.message });
  }
};

// @desc    Search employers by businessType, city, area
// @route   GET /api/v1/employers/search?type=plumbing&city=delhi
export const searchEmployers = async (req, res) => {
  try {
    const { type, city, area } = req.query;

    const query = { role: "company" };

    if (type) query.businessType = { $regex: type, $options: "i" };
    if (city) query.city = { $regex: city, $options: "i" };
    if (area) query.area = { $regex: area, $options: "i" };

    const employers = await User.find(query).select("-password");
    res.status(200).json(employers);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to search employers", error: error.message });
  }
};
