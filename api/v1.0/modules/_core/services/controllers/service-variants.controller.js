import ServiceVariant from "../models/service-variants.model.js";

export const createServiceVariant = async (req, res) => {
  try {
    const serviceVariant = await ServiceVariant.create(req.body);
    res.status(201).json(serviceVariant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getServiceVariants = async (req, res) => {
  try {
    const serviceVariants = await ServiceVariant.find();
    res.json(serviceVariants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
