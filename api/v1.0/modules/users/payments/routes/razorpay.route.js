import express from "express";
import bodyParser from "body-parser";
import { createPayment } from "../../controllers/razorpay.controllers.js";

const router = express.Router();

// Middleware to parse JSON request bodies
router.use(bodyParser.json());

// Routes
router.post("/create-payment", createPayment);

export default router;
