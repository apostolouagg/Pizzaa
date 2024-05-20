import { Injectable } from '@angular/core';
import {Food} from '../shared/models/Food';
import {Drinks} from '../shared/models/Drinks';
import { sample_drinks, sample_foods } from '../../data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllFood():Food[]{
    return sample_foods;
  }

  getAllDrinks():Drinks[]{
    return sample_drinks;
  }
}
