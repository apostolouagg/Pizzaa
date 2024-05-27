import { Component } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { CurrencyPipe, NgIf } from '@angular/common';
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../shared/models/CartItem';

@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [CurrencyPipe, NgIf],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent {

  food!: Food;
  cart_item!: CartItem;

  constructor(activatedRoute:ActivatedRoute, foodService:FoodService, private cartService:CartService, private router:Router){
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
