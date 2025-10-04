import { Item } from "./Item";

export class CartItem{

    constructor(public food:Item){ 
        this.price = this.food.price;
    }
    
    quantity: number = 1;
    price: number = this.food.price;
}