import { Component } from '@angular/core';
import { Item } from '../../../shared/models/Item';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ItemService } from '../../../services/item.service';
import { CurrencyPipe, NgIf } from '@angular/common';
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../shared/models/CartItem';

@Component({
  selector: 'app-item-page',
  standalone: true,
  imports: [CurrencyPipe, NgIf],
  templateUrl: './item-page.component.html',
  styleUrl: './item-page.component.css'
})
export class ItemPageComponent {

  food!: Item;
  cart_item!: CartItem;

  constructor(activatedRoute:ActivatedRoute, foodService:ItemService, private cartService:CartService, private router:Router){
    activatedRoute.params.subscribe((params) => {
      if(params.id){
        foodService.getFoodById(params.id).subscribe((serverFood) => {
          this.food = serverFood;
        });
      }
    })
  }

  addToCart(){
    this.cartService.changeQuantityIfExists(this.food.id);
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }

}
