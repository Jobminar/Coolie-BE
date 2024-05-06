import express from "express";
import multer from "multer";
import {
  createSubcategory,
  getSubcategories,
  getSubcategoryById,
} from "../_core/services/controllers/sub-category.controller.js";
import {
  createCategory,
  getCategories,
  getCategoryById,
} from "../_core/services/controllers/category.controller.js";

const router = express.Router();

router.post("/categories", createCategory);
router.get("/categories", getCategories);
router.get("/categories/:id", getCategoryById);

router.post("/subcategories", upload.single("image"), createSubcategory);
router.get("/subcategories", getSubcategories);
router.get("/subcategories/:id", getSubcategoryById);

export default router;
