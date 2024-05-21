import { Injectable } from '@angular/core';
import {Food} from '../shared/models/Food';
import { sample_foods } from '../../data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllFood():Food[]{
    return sample_foods;
  }

  getAllProductsBySearchTerm(searchTerm:string){
    return this.getAllFood().filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.tag.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
