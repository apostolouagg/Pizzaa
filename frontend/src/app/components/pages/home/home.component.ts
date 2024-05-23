import { Component } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { RouterModule } from '@angular/router';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DealsComponent } from "../deals/deals.component";
import { PizzasComponent } from "../pizzas/pizzas.component";
import { DrinksComponent } from "../drinks/drinks.component";
import { ImgsliderComponent } from "../../imgslider/imgslider.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [RouterModule, NgFor, CurrencyPipe, NgIf, DealsComponent, PizzasComponent, DrinksComponent, ImgsliderComponent]
})
export class HomeComponent {

  foods:Food[] = [];

  constructor (private foodService:FoodService, activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm){
        this.foods = this.foodService.getAllProductsBySearchTerm(params.searchTerm);
      }
      else {
        this.foods = foodService.getAllFood();
      }
    })
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }



  //images for slider
  images:any[] = [
    {
      url: '/assets/pizza/margarita.jpg',
      title: 'Margarita'
    },
    {
      url: 'assets/pizza/american_classic.jpg',
      title: 'American Classic'
    },
    {
      url: 'assets/pizza/peperoni.jpg',
      title: 'Peperoni'
    },
    {
      url: 'assets/pizza/fiorentina.jpg',
      title: 'Fiorentina'
    },
    {
      url: 'assets/pizza/veggie.jpg',
      title: 'Veggie'
    },
    {
      url: 'assets/pizza/garden_classic.jpg',
      title: 'Garden Classic'
    },
  ];
}
