import express from "express";

import {
  createSubcategory,
  getSubcategories,
  getSubcategoryById,
} from "../_core/services/controllers/sub-categories.controller.js";

const router = express.Router();

router.post("/subcategories", upload.single("image"), createSubcategory);
router.get("/subcategories", getSubcategories);
router.get("/subcategories/:id", getSubcategoryById);

export default router;
