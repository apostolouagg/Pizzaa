//Food Router
import {Router} from 'express';
import { sample_foods } from '../data';

const router  = Router();

//foods
router.get("/", (req, res) => {
    res.send(sample_foods);
});


//get food/:id
router.get("/food/:id", (req, res) => {
    const id = req.params.id;
    const foods = sample_foods.find(food => food.id == id);
    res.send(foods);
});

export default router;