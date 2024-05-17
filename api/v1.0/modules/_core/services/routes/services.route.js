import express from "express";

import serviceController from "../controllers/services.controller.js";

const router = express.Router();


router.post("/", serviceController.createService);
router.get("/", serviceController.getServices);

export default router;
