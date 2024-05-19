import serviceProviderTargetsModel from "../models/serviceProviderTargets.model.js";

const createServiceProviderTarget = async (req, res) => {
  try {
    const serviceProviderTarget = await serviceProviderTargetsModel.create(
      req.body,
    );
    await calculateMetrics(serviceProviderTarget);
    res.status(201).json(serviceProviderTarget);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllServiceProviderTargets = async (req, res) => {
  try {
    const serviceProviderTargets = await serviceProviderTargetsModel.find();
    res.status(200).json(serviceProviderTargets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getServiceProviderTargetById = async (req, res) => {
  try {
    const serviceProviderTarget = await serviceProviderTargetsModel.findById(
      req.params.id,
    );
    if (!serviceProviderTarget) {
      return res
        .status(404)
        .json({ error: "Service provider target not found" });
    }
    res.status(200).json(serviceProviderTarget);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateServiceProviderTarget = async (req, res) => {
  try {
    const serviceProviderTarget =
      await serviceProviderTargetsModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
      );
    if (!serviceProviderTarget) {
      return res
        .status(404)
        .json({ error: "Service provider target not found" });
    }
    // After updating, recalculate the metrics
    await calculateMetrics(serviceProviderTarget);
    res.status(200).json(serviceProviderTarget);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteServiceProviderTarget = async (req, res) => {
  try {
    const serviceProviderTarget =
      await serviceProviderTargetsModel.findByIdAndDelete(req.params.id);
    if (!serviceProviderTarget) {
      return res
        .status(404)
        .json({ error: "Service provider target not found" });
    }
    res
      .status(200)
      .json({ message: "Service provider target deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Function to calculate and update metrics
const calculateMetrics = async (serviceProviderTarget) => {
  serviceProviderTarget.total_earnings = calculateTotalEarnings(
    serviceProviderTarget,
  );
  serviceProviderTarget.upcoming_earnings = calculateUpcomingEarnings(
    serviceProviderTarget,
  );
  serviceProviderTarget.sp_rating = calculateRating(serviceProviderTarget);

  // Save the updated serviceProviderTarget
  await serviceProviderTarget.save();
};

// Example calculation functions (replace with your actual logic)
const calculateTotalEarnings = (serviceProviderTarget) => {
  // Calculation logic for total earnings
};

const calculateUpcomingEarnings = (serviceProviderTarget) => {
  // Calculation logic for upcoming earnings
};

const calculateRating = (serviceProviderTarget) => {
  // Calculation logic for rating
};

export {
  createServiceProviderTarget,
  getAllServiceProviderTargets,
  getServiceProviderTargetById,
  updateServiceProviderTarget,
  deleteServiceProviderTarget,
};
