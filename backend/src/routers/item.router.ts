//Food Router
import {Router} from 'express';
import asyncHandler from 'express-async-handler';
import { ItemModel } from '../models/item.model';

const router  = Router();


/**
 * @swagger
 * components:
 *   schemas:
 *     Items:
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
 * /items:
 *   get:
 *     summary: Get all items
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
//get items
router.get("/", asyncHandler(
    async (req, res) => {
        const items = await ItemModel.find();
        res.send(items);
    }
));


/**
 * @swagger
 * /items/item/{id}:
 *   get:
 *     summary: Get a item by ID
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
 *               $ref: '#/components/schemas/Item'
 */
//get item/:id
router.get("/item/:id", asyncHandler(
    async (req, res) => {
        const item = await ItemModel.findById(req.params.id);
        res.send(item);
    }
));


router.get("/search/:searchTerm", asyncHandler(
    async (req, res) => {
        const searchTerm = req.params.searchTerm;
        const items = (await ItemModel.find())
        .filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
        res.send(items);
    }
));

export default router;