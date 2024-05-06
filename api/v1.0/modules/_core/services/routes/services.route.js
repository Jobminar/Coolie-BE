import express from "express";

import {
  createService,
  getServices,
} from "../controllers/services.controller.js";

const router = express.Router();

// POST /services
router.post("/services", createService);

// GET /services
router.get("/services", getServices);

export default router;
