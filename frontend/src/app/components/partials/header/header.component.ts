import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { Food } from '../../../shared/models/Food';
import { SearchComponent } from "../search/search.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [RouterModule, SearchComponent]
})
export class HeaderComponent {

  foods:Food[] = [];
  
  constructor(private foodService:FoodService){
    
  }

}
