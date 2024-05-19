import express from "express";

import subcategoriesController from  "../controllers/sub-categories.controller.js";

const router = express.Router();

router.post("/",subcategoriesController.createSubcategory);
router.get("/", subcategoriesController.getSubcategories);
router.get("/details/:id", subcategoriesController.getSubcategoryById);

export default router;
