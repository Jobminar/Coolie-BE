import express from "express";
import { json } from "body-parser";
import { adminLogin } from "../controller/authController.js";

const router = express.Router();
router.use(json());

router.post("/admin-login", adminLogin);

export default router;
