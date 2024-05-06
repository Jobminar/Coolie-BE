import Admins from "../models/admins.js";

// Controller logic for creating a new admin
export const createAdmins = async (req, res) => {
  try {
    const { phone, password } = req.body;
    const admins = new Admins({ phone, password });
    await admins.save();
    res.status(201).json(admins);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller logic for getting all admins
export const getAdmins = async (req, res) => {
  try {
    const admins = await Admins.find();
    res.json(admins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
