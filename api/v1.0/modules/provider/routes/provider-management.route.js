import express from "express";
import {
  createServiceProvider,
  getAllServiceProviders,
  getServiceProviderById,
  updateServiceProvider,
  deleteServiceProvider,
  updateCredits,
} from "../controllers/service-pro.controller.js";

const router = express.Router();

router.post("/", createServiceProvider);
router.get("/serviceProviders", getAllServiceProviders);
router.get("/serviceProviders/:id", getServiceProviderById);
router.put("/serviceProviders/:id", updateServiceProvider);
router.delete("/serviceProviders/:id", deleteServiceProvider);
router.patch("/serviceProviders/:id/credits", updateCredits);

export default router;
