import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../../../shared/models/Cart';
import { CartService } from '../../../services/cart.service';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [NgIf]
})
export class HeaderComponent {

  cart!: Cart;
  
  constructor(private router:Router, private cartService: CartService){
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    });
  }

  onSelect(navTerm:string){
    this.router.navigate([navTerm]);
  }

}
