import { Router } from "express";
const router = Router();
import { submitOTP } from "../controllers/otp.controllers.js";

router.post("/submit-otp", submitOTP);

export default router;
