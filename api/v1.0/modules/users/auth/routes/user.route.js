/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Operations related to users
 */

import express from "express";
import userController from "../../../users/auth/controllers/user.controller.js";

const router = express.Router();

/**
 * @swagger
 * path:
 *   /api/v1.0/users/signup:
 *     post:
 *       summary: Create a new user
 *       tags: [Users]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'  // Reference to your User schema
 *       responses:
 *         '200':
 *           description: User signed up successfully
 *         '500':
 *           description: Internal server error
 */
router.post("/signup", userController.signup);

/**
 * @swagger
 * path:
 *   /api/v1.0/users/login:
 *     post:
 *       summary: Login as user
 *       tags: [Users]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginRequest'  // Reference to your LoginRequest schema
 *       responses:
 *         '200':
 *           description: User logged in successfully
 *         '401':
 *           description: Unauthorized - Invalid credentials
 *         '500':
 *           description: Internal server error
 */
router.post("/login", userController.login);

export default router;
