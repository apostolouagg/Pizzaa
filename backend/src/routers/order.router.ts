import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import { HTTP_BAD_REQUEST, HTTP_UNAUTHORIZED } from '../constants/http_status';
import { OrderModel } from '../models/order.model';
import authMid from '../middlewares/auth.mid';

const router = Router();
router.use(authMid);

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


// Get all orders for the authenticated user
router.get('/all', asyncHandler(
    async (req: any, res: any) => {
        const orders = await OrderModel.find({ user: req.user.id });
        res.send(orders);
    }
));

//get orders/:id
router.get("/orders/:id", asyncHandler(
    async (req, res) => {
        const orders = await OrderModel.findById(req.params.id);
        res.send(orders);
    }
));

export default router;