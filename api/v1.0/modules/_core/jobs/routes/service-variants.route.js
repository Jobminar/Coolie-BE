import express from "express";
import {  createServiceVariant,  getServiceVariants,} from "../controllers/service-variants.controller.js";

const router = express.Router();

// POST /service-variants
router.post("/", createServiceVariant);

// GET /service-variants
router.get("/", getServiceVariants);

export default router;
