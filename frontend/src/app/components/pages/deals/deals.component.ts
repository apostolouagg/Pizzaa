import { Component } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { RouterModule } from '@angular/router';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-deals',
  standalone: true,
  imports: [RouterModule, NgFor, NgIf, CurrencyPipe],
  templateUrl: './deals.component.html',
  styleUrl: './deals.component.css'
})
export class DealsComponent {

  foods:Food[] = [];

  constructor (private foodService:FoodService) {
    let foodsObservable:Observable<Food[]>;
    foodsObservable = foodService.getAllFood();

    foodsObservable.subscribe((serverFoods) => {
      this.foods = serverFoods;
    });
  }

}
