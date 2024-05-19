import serviceProviderModel from "../models/service-pro.model.js";
import serviceProTargetModel from "../models/service-pro-target.model.js";

const createServiceProvider = async (req, res) => {
  try {
    const serviceProvider = await serviceProviderModel.create(req.body);
    res.status(201).json(serviceProvider);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllServiceProviders = async (req, res) => {
  try {
    const serviceProviders = await serviceProviderModel.find();
    res.status(200).json(serviceProviders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getServiceProviderById = async (req, res) => {
  try {
    const serviceProvider = await serviceProviderModel.findById(req.params.id);
    if (!serviceProvider) {
      return res.status(404).json({ error: "Service provider not found" });
    }
    res.status(200).json(serviceProvider);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateServiceProvider = async (req, res) => {
  try {
    const serviceProvider = await serviceProviderModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    if (!serviceProvider) {
      return res.status(404).json({ error: "Service provider not found" });
    }
    res.status(200).json(serviceProvider);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteServiceProvider = async (req, res) => {
  try {
    const serviceProvider = await serviceProviderModel.findByIdAndDelete(
      req.params.id,
    );
    if (!serviceProvider) {
      return res.status(404).json({ error: "Service provider not found" });
    }
    res.status(200).json({ message: "Service provider deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateCredits = async (req, res) => {
  try {
    const serviceProviderId = req.params.id;
    const { creditsToAdd } = req.body;

    const updatedServiceProvider = await serviceProTargetModel.findOneAndUpdate(
      { serviceProvider: serviceProviderId },
      { $inc: { credits: creditsToAdd } },
      { new: true },
    );

    if (!updatedServiceProvider) {
      return res.status(404).json({ error: "Service provider not found" });
    }

    res.status(200).json(updatedServiceProvider);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export {
  createServiceProvider,
  getAllServiceProviders,
  getServiceProviderById,
  updateServiceProvider,
  deleteServiceProvider,
  updateCredits,
};
