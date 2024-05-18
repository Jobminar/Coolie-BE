import express from "express";
import {
  createServiceVariant,
  getServiceVariants,
} from "../controllers/service-variants.controller.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Service Variants
 *   description: Service Variant management endpoints
 */

/**
 * @swagger
 * /service-variants:
 *   post:
 *     summary: Create a new service variant
 *     tags: [Service Variants]
 *     description: Create a new service variant with the given information.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ServiceVariant'
 *     responses:
 *       201:
 *         description: Service variant created successfully.
 *       400:
 *         description: Bad Request. Invalid input data.
 *       500:
 *         description: Internal server error.
 */
router.post("/", createServiceVariant);

/**
 * @swagger
 * /service-variants:
 *   get:
 *     summary: Get all service variants
 *     tags: [Service Variants]
 *     description: Retrieve a list of all service variants.
 *     responses:
 *       200:
 *         description: A list of service variants.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ServiceVariant'
 *       500:
 *         description: Internal server error.
 */
router.get("/", getServiceVariants);

export default router;
