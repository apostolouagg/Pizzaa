import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pasta',
  standalone: true,
  imports: [NgFor, NgIf, RouterModule, CurrencyPipe],
  templateUrl: './pasta.component.html',
  styleUrl: './pasta.component.css'
})
export class PastaComponent {
  foods:Food[] = [];

  constructor(private foodService:FoodService){
    let foodsObservable:Observable<Food[]>;
    foodsObservable = foodService.getAllFood();

    foodsObservable.subscribe((serverFoods) => {
      this.foods = serverFoods;
    });
  }
}
