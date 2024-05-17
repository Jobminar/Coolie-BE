import express from "express";

import {
  createSubcategory,
  getSubcategories,
  getSubcategoryById,
} from  "../controllers/sub-categories.controller.js";

const router = express.Router();

router.post("/", createSubcategory);
router.get("/", getSubcategories);
router.get("/details/:id", getSubcategoryById);

export default router;
