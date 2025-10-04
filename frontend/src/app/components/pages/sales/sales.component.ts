import { Component } from '@angular/core';
import { Item } from '../../../shared/models/Item';
import { ItemService } from '../../../services/item.service';
import { RouterModule } from '@angular/router';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [RouterModule, NgFor, NgIf, CurrencyPipe],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.css'
})
export class SalesComponent {

  foods:Item[] = [];

  constructor (private foodService:ItemService, activatedRoute:ActivatedRoute) {
    // let foodsObservable:Observable<Item[]>;
    // foodsObservable = foodService.getAllFood();

    // foodsObservable.subscribe((serverFoods) => {
    //   this.foods = serverFoods;
    // });

    activatedRoute.params.subscribe((params) => {
      
      let foodsObservable:Observable<Item[]>;

      if(params.searchTerm){
        foodsObservable = foodService.getAllFoodBySearchTerm(params.searchTerm);
      }
      else{
        foodsObservable = foodService.getAllFood();
      }

      foodsObservable.subscribe((serverFoods) => {
        this.foods = serverFoods;
      });
    })
  }

}
