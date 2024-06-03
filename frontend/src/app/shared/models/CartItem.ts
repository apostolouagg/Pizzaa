import { Food } from "./Food";

export class CartItem{

    constructor(public food:Food){ 
        this.price = this.food.price;
    }
    
    quantity: number = 1;
    price: number = this.food.price;
}