/**
 * @swagger
 * tags:
 *   name: Services
 *   description: Operations related to services
 */

import express from "express";
import serviceController from "../controllers/services.controller.js";

const router = express.Router();

/**
 * @swagger
 * path:
 *   /api/v1.0/services:
 *     post:
 *       summary: Create a new service
 *       tags: [Services]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Service'
 *       responses:
 *         '201':
 *           description: Service created successfully
 *         '500':
 *           description: Internal server error
 */
router.post("/", serviceController.createService);

/**
 * @swagger
 * path:
 *   /api/v1.0/services:
 *     get:
 *       summary: Get all services
 *       tags: [Services]
 *       responses:
 *         '200':
 *           description: A list of services
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Service'
 *         '500':
 *           description: Internal server error
 */
router.get("/", serviceController.getServices);

export default router;
