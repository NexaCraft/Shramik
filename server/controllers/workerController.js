import Worker from "../models/worker.model.js";

export const createWorker = async (req, res) => {
  try {
    const workerData = req.body;

    // Check if worker with phone/email already exists
    const existingWorker = await Worker.findOne({
      $or: [{ phone: workerData.phone }, { email: workerData.email }],
    });

    if (existingWorker) {
      return res.status(400).json({
        message: "Worker with this phone or email already exists",
      });
    }

    const newWorker = new Worker(workerData);

    await newWorker.save();

    res.status(201).json({
      success: true,
      message: "Worker profile created successfully",
      worker: newWorker,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating worker profile",
      error: error.message,
    });
  }
};

export const getWorkers = async (req, res) => {
  try {
    const workers = await Worker.find();

    res.status(200).json({ success: true, workers });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching workers",
      error: error.message,
    });
  }
};
