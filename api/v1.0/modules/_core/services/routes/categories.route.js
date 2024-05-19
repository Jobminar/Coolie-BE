import express from "express";
import categoriesController from "../controllers/categories.controller.js"

const router = express.Router();

router.post("/",categoriesController.createCategory);
router.get("/",categoriesController.getCategories);
router.get("/details/:id" ,categoriesController.getCategoryById);

export default router;
