import express from "express";

import serviceController from "../controllers/services.controller.js";

const router = express.Router();


router.post("/", serviceController.createService);
router.get("/", serviceController.getServices);
router.delete("/delete/:id",serviceController.deleteService)

export default router;
