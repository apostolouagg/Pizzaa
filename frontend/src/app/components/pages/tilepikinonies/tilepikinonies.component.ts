import { Component } from '@angular/core';
import { Item } from '../../../shared/models/Item';
import { ItemService } from '../../../services/item.service';
import { RouterModule } from '@angular/router';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tilepikinonies',
  standalone: true,
  imports: [RouterModule, NgFor, NgIf, CurrencyPipe],
  templateUrl: './tilepikinonies.component.html',
  styleUrl: './tilepikinonies.component.css'
})
export class TilepikinoniesComponent {
  
  foods:Item[] = [];

  constructor (private foodService:ItemService) {
    let foodsObservable:Observable<Item[]>;
    foodsObservable = foodService.getAllFood();

    foodsObservable.subscribe((serverFoods) => {
      this.foods = serverFoods;
    });
  }
}