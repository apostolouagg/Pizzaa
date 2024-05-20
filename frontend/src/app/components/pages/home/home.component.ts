import { Component } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { Drinks } from '../../../shared/models/Drinks';
import { FoodService } from '../../../services/food.service';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor (private foodService:FoodService) {
    this.foods = foodService.getAllFood();
    this.drinks = foodService.getAllDrinks();
  }

  foods:Food[] = [];
  drinks:Drinks[] = [];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
}
