import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import Admin from "../models/admin.model.js";
import dotenv from "dotenv";

dotenv.config();

const adminController = {
  signup: async (req, res) => {
    const { email, password } = req.body;

    try {
      // Check if user exists
      const existingUser = await Admin.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create new admin user
      const newAdmin = new Admin({ email, password: hashedPassword });
      await newAdmin.save();

      res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  login: async (req, res) => {
    const { email, password } = req.body;

    try {
      // Check if user exists
      const user = await Admin.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      // Check if password is correct
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      // Generate JWT token
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '12h' });

      // Return token
      res.status(200).json({ token,userId: user._id});
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  getAdminById: async (req, res) => {
    const adminId = req.params.id;

    try {
      // Find admin by ID
      const admin = await Admin.findById(adminId);
      if (!admin) {
        return res.status(404).json({ message: "Admin not found" });
      }

      // Return admin data
      res.status(200).json(admin);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};

export default adminController;
