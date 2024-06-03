import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import { HTTP_BAD_REQUEST, HTTP_UNAUTHORIZED } from '../constants/http_status';
import { OrderModel } from '../models/order.model';
import authMid from '../middlewares/auth.mid';

const router = Router();
router.use(authMid);


/**
 * @swagger
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         items:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/OrderItem'
 *         totalPrice:
 *           type: number
 *         name:
 *           type: string
 *         address:
 *           type: string
 *         paymentId:
 *           type: string
 *         user:
 *           type: string
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     OrderItem:
 *       type: object
 *       properties:
 *         food:
 *           $ref: '#/components/schemas/Food'
 *         price:
 *           type: number
 *         quantity:
 *           type: number
 */

/**
 * @swagger
 * /orders/create:
 *   post:
 *     summary: Create a new order
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 */
//create api
router.post('/create', asyncHandler(
    async (req:any, res:any) => {
        const requestOrder = req.body;
        
        if(requestOrder.items.length <= 0){
            res.status(HTTP_BAD_REQUEST).send('Cart is empty!');
            return;
        }

        const newOrder = new OrderModel({...requestOrder, user: req.user.id});
        await newOrder.save();
        res.send(newOrder);
    }
));


/**
 * @swagger
 * /orders/all:
 *   get:
 *     summary: Get all orders for user
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 */
// get all orders for user
router.get('/all', asyncHandler(
    async (req: any, res: any) => {
        const orders = await OrderModel.find({ user: req.user.id });
        res.send(orders);
    }
));


/**
 * @swagger
 * /orders/{id}:
 *   get:
 *     summary: Get an order by ID
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
 *               $ref: '#/components/schemas/Order'
 */
//get orders/:id
router.get("/orders/:id", asyncHandler(
    async (req, res) => {
        const orders = await OrderModel.findById(req.params.id);
        res.send(orders);
    }
));

export default router;