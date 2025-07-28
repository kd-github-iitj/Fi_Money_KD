const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const auth = require('../middlewares/auth');
const productController = require('../controllers/productController');

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Add a new product
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - type
 *               - sku
 *               - quantity
 *               - price
 *             properties:
 *               name:
 *                 type: string
 *               type:
 *                 type: string
 *               sku:
 *                 type: string
 *               image_url:
 *                 type: string
 *               description:
 *                 type: string
 *               quantity:
 *                 type: integer
 *               price:
 *                 type: number
 *     responses:
 *       201:
 *         description: Product added
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 message:
 *                   type: string
 *       400:
 *         description: Validation error
 *   get:
 *     summary: Get paginated list of products
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Items per page
 *     responses:
 *       200:
 *         description: Paginated products
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 page:
 *                   type: integer
 *                 limit:
 *                   type: integer
 *                 total:
 *                   type: integer
 *                 products:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Product'
 * /products/{id}/quantity:
 *   put:
 *     summary: Update product quantity
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Product ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - quantity
 *             properties:
 *               quantity:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Quantity updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 product:
 *                   $ref: '#/components/schemas/Product'
 *       400:
 *         description: Validation error
 *       404:
 *         description: Product not found
 */
// Add Product
router.post(
  '/',
  auth,
  [
    body('name').notEmpty(),
    body('type').notEmpty(),
    body('sku').notEmpty(),
    body('quantity').isInt({ min: 0 }),
    body('price').isFloat({ min: 0 })
  ],
  productController.addProduct
);

// Update Product Quantity
router.put(
  '/:id/quantity',
  auth,
  [body('quantity').isInt({ min: 0 })],
  productController.updateProductQuantity
);

// Get Products (Paginated)
router.get('/', auth, productController.getProducts);

module.exports = router; 