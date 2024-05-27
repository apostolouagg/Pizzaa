import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { sample_foods } from '../../data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FOOD_BY_ID_URL, FOODS_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }

  getAllFood(): Observable<Food[]>{
    return this.http.get<Food[]>(FOODS_URL);
  }

  getFoodById(foodid:string): Observable<Food>{
    return this.http.get<Food>(FOOD_BY_ID_URL + foodid);
  }
}
