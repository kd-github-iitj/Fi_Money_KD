const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const isAdmin = require('../middlewares/isAdmin');
const { mostAddedProducts } = require('../controllers/analyticsController');

/**
 * @swagger
 * /analytics/most-added-products:
 *   get:
 *     summary: Get top 5 products with highest quantity
 *     tags: [Analytics]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of top 5 products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   quantity:
 *                     type: integer
 *       403:
 *         description: Forbidden: Admins only
 */
router.get('/most-added-products', auth, isAdmin, mostAddedProducts);

module.exports = router; 