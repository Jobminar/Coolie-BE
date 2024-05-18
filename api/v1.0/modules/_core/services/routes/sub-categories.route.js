/**
 * @swagger
 * tags:
 *   name: Subcategories
 *   description: Operations related to subcategories
 */

import express from "express";
import {
  createSubcategory,
  getSubcategories,
  getSubcategoryById,
} from "../controllers/sub-categories.controller.js";

const router = express.Router();

/**
 * @swagger
 * path:
 *   /api/v1.0/subcategories:
 *     post:
 *       summary: Create a new subcategory
 *       tags: [Subcategories]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Subcategory'
 *       responses:
 *         '201':
 *           description: Subcategory created successfully
 *         '500':
 *           description: Internal server error
 */
router.post("/", createSubcategory);

/**
 * @swagger
 * path:
 *   /api/v1.0/subcategories:
 *     get:
 *       summary: Get all subcategories
 *       tags: [Subcategories]
 *       responses:
 *         '200':
 *           description: A list of subcategories
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Subcategory'
 *         '500':
 *           description: Internal server error
 */
router.get("/", getSubcategories);

/**
 * @swagger
 * path:
 *   /api/v1.0/subcategories/details/{id}:
 *     get:
 *       summary: Get a subcategory by ID
 *       tags: [Subcategories]
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: ID of the subcategory
 *           schema:
 *             type: string
 *       responses:
 *         '200':
 *           description: A single subcategory object
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Subcategory'
 *         '404':
 *           description: Subcategory not found
 *         '500':
 *           description: Internal server error
 */
router.get("/details/:id", getSubcategoryById);

export default router;
