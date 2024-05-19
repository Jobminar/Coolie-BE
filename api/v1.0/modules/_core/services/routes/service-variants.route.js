/**
 * @swagger
 * tags:
 *   name: Service Variants
 *   description: Operations related to service variants
 */

import express from "express";
import {
  createServiceVariant,
  getServiceVariants,
} from "../controllers/service-variants.controller.js";

const router = express.Router();

/**
 * @swagger
 * path:
 *   /api/v1.0/service-variants:
 *     post:
 *       summary: Create a new service variant
 *       tags: [Service Variants]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ServiceVariant'
 *       responses:
 *         '201':
 *           description: Service variant created successfully
 *         '500':
 *           description: Internal server error
 */
router.post("/", createServiceVariant);

/**
 * @swagger
 * path:
 *   /api/v1.0/service-variants:
 *     get:
 *       summary: Get all service variants
 *       tags: [Service Variants]
 *       responses:
 *         '200':
 *           description: A list of service variants
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/ServiceVariant'
 *         '500':
 *           description: Internal server error
 */
router.get("/", getServiceVariants);

export default router;
