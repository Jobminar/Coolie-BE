import express from "express";
import {
  createSubcategory,
  getSubcategories,
  getSubcategoryById,
} from "../controllers/sub-categories.controller.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Sub-Categories
 *   description: Sub-category management endpoints
 */

/**
 * @swagger
 * /sub-categories:
 *   post:
 *     summary: Create a new sub-category
 *     tags: [Sub-Categories]
 *     description: Create a new sub-category with the given information.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Subcategory'
 *     responses:
 *       201:
 *         description: Sub-category created successfully.
 *       400:
 *         description: Bad Request. Invalid input data.
 *       500:
 *         description: Internal server error.
 */
router.post("/", createSubcategory);

/**
 * @swagger
 * /sub-categories:
 *   get:
 *     summary: Get all sub-categories
 *     tags: [Sub-Categories]
 *     description: Retrieve a list of all sub-categories.
 *     responses:
 *       200:
 *         description: A list of sub-categories.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Subcategory'
 *       500:
 *         description: Internal server error.
 */
router.get("/", getSubcategories);

/**
 * @swagger
 * /sub-categories/details/{id}:
 *   get:
 *     summary: Get a sub-category by ID
 *     tags: [Sub-Categories]
 *     description: Retrieve a sub-category by its unique identifier.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: The ID of the sub-category.
 *     responses:
 *       200:
 *         description: The requested sub-category.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Subcategory'
 *       404:
 *         description: Sub-category not found.
 *       500:
 *         description: Internal server error.
 */
router.get("/details/:id", getSubcategoryById);

export default router;
