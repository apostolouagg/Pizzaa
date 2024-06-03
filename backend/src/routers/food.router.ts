//Food Router
import {Router} from 'express';
import asyncHandler from 'express-async-handler';
import { FoodModel } from '../models/food.model';

const router  = Router();


/**
 * @swagger
 * components:
 *   schemas:
 *     Food:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         name:
 *           type: string
 *         ingredients:
 *           type: string
 *         price:
 *           type: number
 *         imageUrl:
 *           type: string
 *         meat:
 *           type: boolean
 *         tag:
 *           type: string
 */

/**
 * @swagger
 * /foods:
 *   get:
 *     summary: Get all foods
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Food'
 */
//get foods
router.get("/", asyncHandler(
    async (req, res) => {
        const foods = await FoodModel.find();
        res.send(foods);
    }
));


/**
 * @swagger
 * /foods/{id}:
 *   get:
 *     summary: Get a food by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Food'
 */
//get food/:id
router.get("/food/:id", asyncHandler(
    async (req, res) => {
        const food = await FoodModel.findById(req.params.id);
        res.send(food);
    }
));

export default router;