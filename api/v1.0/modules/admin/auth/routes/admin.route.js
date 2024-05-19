/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: Operations related to admin
 */

import express from "express";
import adminController from "../controllers/admin.controller.js";

const router = express.Router();

/**
 * @swagger
 * path:
 *   /api/v1.0/admin/signup:
 *     post:
 *       summary: Create a new admin
 *       tags: [Admin]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Admin'
 *       responses:
 *         '200':
 *           description: Admin signed up successfully
 *         '500':
 *           description: Internal server error
 */
router.post("/signup", adminController.signup);

/**
 * @swagger
 * path:
 *   /api/v1.0/admin/admin-login:
 *     post:
 *       summary: Login as admin
 *       tags: [Admin]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginRequest'
 *       responses:
 *         '200':
 *           description: Admin logged in successfully
 *         '401':
 *           description: Unauthorized - Invalid credentials
 *         '500':
 *           description: Internal server error
 */
router.post("/admin-login", adminController.login);

/**
 * @swagger
 * path:
 *   /api/v1.0/admin/get/{id}:
 *     get:
 *       summary: Get admin by ID
 *       tags: [Admin]
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: ID of the admin to retrieve
 *           schema:
 *             type: string
 *       responses:
 *         '200':
 *           description: Admin details retrieved successfully
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Admin'
 *         '404':
 *           description: Admin not found
 *         '500':
 *           description: Internal server error
 */
router.get("/get/:id", adminController.getAdminById);

export default router;
