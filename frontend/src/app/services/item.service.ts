import { Injectable } from '@angular/core';
import { Item } from '../shared/models/Item';
import { sample_foods } from '../../data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITEM_BY_ID_URL, ITEMS_URL, ITEM_BY_SEARCH_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http:HttpClient) { }

  getAllFood(): Observable<Item[]>{
    return this.http.get<Item[]>(ITEMS_URL);
  }

  getFoodById(foodid:string): Observable<Item>{
    return this.http.get<Item>(ITEM_BY_ID_URL + foodid);
  }

  getAllFoodBySearchTerm(searchTerm:string): Observable<Item[]>{
    return this.http.get<Item[]>(ITEM_BY_SEARCH_URL + searchTerm);
  }
}
