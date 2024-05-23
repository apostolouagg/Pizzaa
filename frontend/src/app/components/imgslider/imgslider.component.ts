import { CommonModule, NgFor } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-imgslider',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './imgslider.component.html',
  styleUrl: './imgslider.component.css'
})
export class ImgsliderComponent {

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
}
