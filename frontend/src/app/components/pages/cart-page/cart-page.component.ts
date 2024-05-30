import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { Cart } from '../../../shared/models/Cart';
import { CartItem } from '../../../shared/models/CartItem';
import { CurrencyPipe, NgFor, NgIf} from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
  imports: [ CurrencyPipe, RouterLink, NgIf, NgFor],
})
export class CartPageComponent implements OnInit {
  cart!: Cart; 

  constructor(private cartService: CartService) {
    this.cartService.getCartObservable().subscribe(
      (cart) => {
        this.cart = cart;
    });
  }

  ngOnInit(): void {
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
  }

  changeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
  }

  clearCart(){
    this.cartService.clearCart();
  }

}