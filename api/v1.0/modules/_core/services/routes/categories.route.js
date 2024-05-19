/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: Operations related to categories
 */

import express from "express";
import {
  createCategory,
  getCategories,
  getCategoryById,
} from "../controllers/categories.controller.js";

const router = express.Router();

/**
 * @swagger
 * path:
 *   /api/v1.0/categories:
 *     post:
 *       summary: Create a new category
 *       tags: [Categories]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       responses:
 *         '201':
 *           description: Category created successfully
 *         '500':
 *           description: Internal server error
 */
router.post("/", createCategory);

/**
 * @swagger
 * path:
 *   /api/v1.0/categories:
 *     get:
 *       summary: Get all categories
 *       tags: [Categories]
 *       responses:
 *         '200':
 *           description: A list of categories
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Category'
 *         '500':
 *           description: Internal server error
 */
router.get("/", getCategories);

/**
 * @swagger
 * path:
 *   /api/v1.0/categories/details/{id}:
 *     get:
 *       summary: Get category details by ID
 *       tags: [Categories]
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: ID of the category to retrieve
 *           schema:
 *             type: string
 *       responses:
 *         '200':
 *           description: Category details retrieved successfully
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Category'
 *         '404':
 *           description: Category not found
 *         '500':
 *           description: Internal server error
 */
router.get("/details/:id", getCategoryById);

export default router;
