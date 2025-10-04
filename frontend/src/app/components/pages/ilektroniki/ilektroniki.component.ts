import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Item } from '../../../shared/models/Item';
import { ItemService } from '../../../services/item.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ilektroniki',
  standalone: true,
  imports: [NgFor, NgIf, RouterModule, CurrencyPipe],
  templateUrl: './ilektroniki.component.html',
  styleUrl: './ilektroniki.component.css'
})
export class IlektronikiComponent {
  foods:Item[] = [];

  constructor(private foodService:ItemService, activatedRoute:ActivatedRoute){
    let foodsObservable:Observable<Item[]>;
    foodsObservable = this.foodService.getAllFood();

    foodsObservable.subscribe((serverFoods) => {
      this.foods = serverFoods;
    });

    // activatedRoute.params.subscribe((params) => {
      
    //   let foodsObservable:Observable<Item[]>;

    //   if(params.searchTerm){
    //     foodsObservable = this.foodService.getAllFoodBySearchTerm(params.searchTerm);
    //   }
    //   else{
    //     foodsObservable = this.foodService.getAllFood();
    //   }

    //   foodsObservable.subscribe((serverFoods) => {
    //     this.foods = serverFoods;
    //   });
    // })
  }
}
