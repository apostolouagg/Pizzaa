import { RouterModule } from '@angular/router';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Item } from '../../../shared/models/Item';
import { ItemService } from '../../../services/item.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cs',
  standalone: true,
  imports: [NgFor, NgIf, RouterModule, CurrencyPipe],
  templateUrl: './cs.component.html',
  styleUrl: './cs.component.css'
})
export class CsComponent {
  foods:Item[] = [];

  constructor(private foodService:ItemService){
    let foodsObservable:Observable<Item[]>;
    foodsObservable = foodService.getAllFood();

    foodsObservable.subscribe((serverFoods) => {
      this.foods = serverFoods;
    });
  }

}
