import Employer from "../models/employer.model.js";

export const createEmployer = async (req, res) => {
  try {
    const employerData = req.body;

    // Check if employer with phone/email already exists
    const existingEmployer = await Employer.findOne({
      $or: [{ phone: employerData.phone }, { email: employerData.email }],
    });

    if (existingEmployer) {
      return res.status(400).json({
        message: "Employer with this phone or email already exists",
      });
    }

    const newEmployer = new Employer(employerData);
    await newEmployer.save();

    res.status(201).json({
      success: true,
      message: "Employer profile created successfully",
      employer: newEmployer,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating employer profile",
      error: error.message,
    });
  }
};

export const getEmployers = async (req, res) => {
  try {
    const employers = await Employer.find();
    res.status(200).json({ success: true, employers });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching employers",
      error: error.message,
    });
  }
};
