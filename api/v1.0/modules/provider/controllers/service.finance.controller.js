import serviceProviderFinanceModel from "../models/serviceProviderFinance.model.js";

const createServiceProviderFinance = async (req, res) => {
  try {
    const serviceProviderFinance = await serviceProviderFinanceModel.create(
      req.body,
    );
    res.status(201).json(serviceProviderFinance);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllServiceProviderFinances = async (req, res) => {
  try {
    const serviceProviderFinances = await serviceProviderFinanceModel.find();
    res.status(200).json(serviceProviderFinances);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getServiceProviderFinanceById = async (req, res) => {
  try {
    const serviceProviderFinance = await serviceProviderFinanceModel.findById(
      req.params.id,
    );
    if (!serviceProviderFinance) {
      return res
        .status(404)
        .json({ error: "Service provider finance details not found" });
    }
    res.status(200).json(serviceProviderFinance);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateServiceProviderFinance = async (req, res) => {
  try {
    const serviceProviderFinance =
      await serviceProviderFinanceModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
      );
    if (!serviceProviderFinance) {
      return res
        .status(404)
        .json({ error: "Service provider finance details not found" });
    }
    res.status(200).json(serviceProviderFinance);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteServiceProviderFinance = async (req, res) => {
  try {
    const serviceProviderFinance =
      await serviceProviderFinanceModel.findByIdAndDelete(req.params.id);
    if (!serviceProviderFinance) {
      return res
        .status(404)
        .json({ error: "Service provider finance details not found" });
    }
    res.status(200).json({
      message: "Service provider finance details deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export {
  createServiceProviderFinance,
  getAllServiceProviderFinances,
  getServiceProviderFinanceById,
  updateServiceProviderFinance,
  deleteServiceProviderFinance,
};
