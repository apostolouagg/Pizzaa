import { RouterModule } from '@angular/router';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';

@Component({
  selector: 'app-pizzas',
  standalone: true,
  imports: [NgFor, NgIf, RouterModule, CurrencyPipe],
  templateUrl: './pizzas.component.html',
  styleUrl: './pizzas.component.css'
})
export class PizzasComponent {
  foods:Food[] = [];

  constructor(private foodService:FoodService){
    this.foods = foodService.getAllFood();
  }

}
