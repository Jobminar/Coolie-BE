import express from "express";

import {createCategory,getCategories, getCategoryById} from "../controllers/categories.controller.js";

const router = express.Router();

router.post("/", createCategory);
router.get("/", getCategories);
router.get("/details/:id", getCategoryById);

export default router;
