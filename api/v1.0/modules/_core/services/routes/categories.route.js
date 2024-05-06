import express from "express";

import {
  createCategory,
  getCategories,
  getCategoryById,
} from "../controllers/categories.controller.js";

const router = express.Router();

router.post("/categories", createCategory);
router.get("/categories", getCategories);
router.get("/categories/:id", getCategoryById);

export default router;
