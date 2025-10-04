import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Item } from '../../shared/models/Item';
import { Router, RouterLink } from '@angular/router';
import { ItemService } from '../../services/item.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-imgslider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './imgslider.component.html',
  styleUrl: './imgslider.component.css'
})
export class ImgsliderComponent {
  foods!: Item[];

  constructor(foodService:ItemService, private router:Router){
    let foodsObservable:Observable<Item[]>;
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
      this.router.navigate(['/item/' + item.id]);
    }
  }
}
