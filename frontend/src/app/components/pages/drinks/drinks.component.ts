import { Component } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { RouterModule } from '@angular/router';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-drinks',
  standalone: true,
  imports: [RouterModule, NgFor, NgIf, CurrencyPipe],
  templateUrl: './drinks.component.html',
  styleUrl: './drinks.component.css'
})
export class DrinksComponent {
  
  foods:Food[] = [];

  constructor (private foodService:FoodService) {
    this.foods = foodService.getAllFood();
  }
}
