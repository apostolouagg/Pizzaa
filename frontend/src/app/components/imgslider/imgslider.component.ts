import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Food } from '../../shared/models/Food';
import { Router, RouterLink } from '@angular/router';
import { FoodService } from '../../services/food.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-imgslider',
  standalone: true,
  imports: [NgFor, NgIf, CommonModule, RouterLink],
  templateUrl: './imgslider.component.html',
  styleUrl: './imgslider.component.css'
})
export class ImgsliderComponent {
  foods!: Food[];

  constructor(foodService:FoodService, private router:Router){
    let foodsObservable:Observable<Food[]>;
    foodsObservable = foodService.getAllFood();

    foodsObservable.subscribe((serverFoods) => {
      this.foods = serverFoods;
    });
  }

  @Input() images: any[] = [];

  currentSlide = 0;

  next(){
    this.currentSlide = (this.currentSlide + 1) % this.images.length;
  }

  previous(){
    this.currentSlide = (this.currentSlide - 1 + this.images.length) % this.images.length;
  }

  jumpToSlide(index:number){
    this.currentSlide = index;
  }

  jumpToFood(title:string){
    let item = this.foods.find(x => x.name === title);
    
    if(item){
      this.router.navigate(['/food/' + item.id]);
    }
  }
}
