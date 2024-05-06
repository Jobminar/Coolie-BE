import express from "express";
import {
  createServiceVariant,
  getServiceVariants,
} from "../controllers/serviceVariant.controller.js";

const router = express.Router();

// POST /service-variants
router.post("/service-variants", createServiceVariant);

// GET /service-variants
router.get("/service-variants", getServiceVariants);

export default router;
