import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../../../shared/models/Cart';
import { CartService } from '../../../services/cart.service';
import { UserService } from '../../../services/user.service';
import { User } from '../../../shared/models/User';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [NgIf]
})
export class HeaderComponent {

  cart!: Cart;
  user!:User;
  
  constructor(private router:Router, private cartService: CartService, private userService:UserService){
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    });

    userService.userObservable.subscribe((newUser) => {
      this.user = newUser;
    });
  }

  onSelect(navTerm:string){
    this.router.navigate([navTerm]);
  }

  logout(){
    this.userService.logout();
    this.router.navigate(['/']);
  }

}
