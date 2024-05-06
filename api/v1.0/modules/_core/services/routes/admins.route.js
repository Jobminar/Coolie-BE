import express from "express";
import { createAdmins, getAdmins } from "../controllers/admins.controller.js";

const router = express.Router();

// Route for creating a new admin
router.post("/admins", async (req, res) => {
  try {
    const admins = await createAdmins(req.body);
    res.status(201).json(admins);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route for getting all admins
router.get("/admins", async (req, res) => {
  try {
    const admins = await getAdmins();
    res.json(admins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
