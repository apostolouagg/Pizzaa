//Food Router
import {Router} from 'express';
import asyncHandler from 'express-async-handler';
import { ItemModel } from '../models/item.model';

const router  = Router();


//get items
router.get("/", asyncHandler(
    async (req, res) => {
        const items = await ItemModel.find();
        res.send(items);
    }
));

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