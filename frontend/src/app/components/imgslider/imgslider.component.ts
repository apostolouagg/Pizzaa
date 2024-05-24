import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Food } from '../../shared/models/Food';
import { Router, RouterLink } from '@angular/router';
import { FoodService } from '../../services/food.service';

@Component({
  selector: 'app-imgslider',
  standalone: true,
  imports: [NgFor, NgIf, CommonModule, RouterLink],
  templateUrl: './imgslider.component.html',
  styleUrl: './imgslider.component.css'
})
export class ImgsliderComponent {
  food!: Food[];

  constructor(foodService:FoodService, private router:Router){
    this.food = foodService.getAllFood();
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
    let item = this.food.find(x => x.name === title);
    
    if(item){
      this.router.navigate(['/food/' + item.id]);
    }
  }
}
