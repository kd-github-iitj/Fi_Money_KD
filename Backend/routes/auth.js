const express = require('express');
const router = express.Router();
const { login } = require('../controllers/authController');

/**
 * @swagger
 * /login:
 *   post:
 *     summary: User or Admin login
 *     description: |
 *       Login as either an admin or a regular user. Use the credentials seeded in the database (see README). The returned JWT will include the user's role (admin or user).
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 example: admin
 *               password:
 *                 type: string
 *                 example: admin123
 *     responses:
 *       200:
 *         description: JWT token (with user role)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: JWT token (contains user id, username, and role)
 *       400:
 *         description: Invalid credentials
 */
router.post('/', login);

module.exports = router; 