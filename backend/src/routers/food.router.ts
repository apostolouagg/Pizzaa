//Food Router
import {Router} from 'express';
import asyncHandler from 'express-async-handler';
import { FoodModel } from '../models/food.model';

const router  = Router();

//foods api
router.get("/", asyncHandler(
    async (req, res) => {
        const foods = await FoodModel.find();
        res.send(foods);
    }
));


//get food/:id api
router.get("/food/:id", asyncHandler(
    async (req, res) => {
        const food = await FoodModel.findById(req.params.id);
        res.send(food);
    }
));

export default router;