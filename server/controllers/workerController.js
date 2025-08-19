import User from "../models/user.model.js";

// @desc    Get all workers (admin or company only)
// @route   GET /api/v1/workers
export const getAllWorkers = async (req, res) => {
  try {
    const workers = await User.find({ role: "worker" }).select("-password");
    res.status(200).json(workers);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch workers", error: error.message });
  }
};

// @desc    Get single worker profile
// @route   GET /api/v1/workers/:id
export const getWorkerProfile = async (req, res) => {
  try {
    const worker = await User.findById(req.params.id).select("-password");

    if (!worker || worker.role !== "worker") {
      return res.status(404).json({ message: "Worker not found" });
    }

    res.status(200).json(worker);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching worker profile", error: error.message });
  }
};

// @desc    Update logged-in worker's profile
// @route   PUT /api/v1/workers/me
export const updateWorkerProfile = async (req, res) => {
  try {
    if (req.user.role !== "worker") {
      return res
        .status(403)
        .json({ message: "Only workers can update this profile" });
    }

    const updates = {
      fullName: req.body.fullName,
      age: req.body.age,
      gender: req.body.gender,
      skills: req.body.skills,
      experience: req.body.experience,
      workPreference: req.body.workPreference,
      city: req.body.city,
      area: req.body.area,
    };

    const updatedWorker = await User.findByIdAndUpdate(req.user.id, updates, {
      new: true,
      runValidators: true,
      select: "-password",
    });

    res.status(200).json(updatedWorker);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update profile", error: error.message });
  }
};

// @desc    Search workers by skill/city/area
// @route   GET /api/v1/workers/search?skill=plumber&city=delhi&area=south
export const searchWorkers = async (req, res) => {
  try {
    const { skill, city, area } = req.query;

    const query = {
      role: "worker",
    };

    if (skill) query.skills = { $regex: skill, $options: "i" };
    if (city) query.city = { $regex: city, $options: "i" };
    if (area) query.area = { $regex: area, $options: "i" };

    const workers = await User.find(query).select("-password");
    res.status(200).json(workers);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to search workers", error: error.message });
  }
};

// controllers/workerController.js

export const addAvailability = async (req, res) => {
  try {
    if (req.user.role !== 'worker') {
      return res.status(403).json({ message: 'Only workers can update availability' });
    }

    const { start, end } = req.body;

    if (!start) {
      return res.status(400).json({ message: 'Start date is required' });
    }

    const updatedWorker = await User.findByIdAndUpdate(
      req.user.id,
      {
        $push: {
          availability: {
            start: new Date(start),
            end: end ? new Date(end) : null,
          },
        },
      },
      { new: true, select: '-password' }
    );

    res.status(200).json(updatedWorker.availability);
  } catch (error) {
    res.status(500).json({ message: 'Failed to add availability', error: error.message });
  }
};

export const getAvailability = async (req, res) => {
  try {
    const worker = await User.findById(req.params.id).select('availability');

    if (!worker || worker.role !== 'worker') {
      return res.status(404).json({ message: 'Worker not found' });
    }

    res.status(200).json(worker.availability);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch availability', error: error.message });
  }
};
