import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../shared/models/Food';
import { CartItem } from '../shared/models/CartItem';
import { FoodPageComponent } from '../components/pages/food-page/food-page.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);

  x!:FoodPageComponent;

  constructor() { }

  addToCart(food:Food):void{
    let cartItem = this.cart.items.find(item => item.food.id === food.id);

    if(cartItem){
      return;
    }

    this.cart.items.push(new CartItem(food));

    this.setCartToLocalStorage();

  }

  removeFromCart(foodid: string):void{
    this.cart.items = this.cart.items.filter(item => item.food.id != foodid);

    this.setCartToLocalStorage();
  }

  changeQuantity(foodid:string, quantity:number){
    let cartItem = this.cart.items.find(item => item.food.id === foodid);

    if(!cartItem){
      return;
    }

    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.food.price;

    this.setCartToLocalStorage();
  }

  changeQuantityIfExists(foodid:string){
    let cartItem = this.cart.items.find(item => item.food.id === foodid);

    if(!cartItem){
      return;
    }
    else if(cartItem.quantity > 5){
      return;
    }

    cartItem.quantity += 1;
    cartItem.price = cartItem.quantity * cartItem.food.price;

    this.setCartToLocalStorage();
  }

  clearCart(){
    this.cart = new Cart();

    this.setCartToLocalStorage();
  }

  getCartObservable():Observable<Cart>{
    return this.cartSubject.asObservable();
  }

  getCart():Cart{
    return this.cartSubject.value;
  }

  private setCartToLocalStorage():void{
    this.cart.totalPrice = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);
    this.cart.totalCount = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);

    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage():Cart{
    const cartJson = localStorage.getItem('Cart');
    
    return cartJson? JSON.parse(cartJson) : new Cart();
  }
}
