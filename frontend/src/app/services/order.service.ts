import { Injectable } from '@angular/core';
import { Order } from '../shared/models/Order';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ALL_ORDERS_URL, ORDER_BY_ID_URL, ORDER_CREATE_URL } from '../shared/constants/urls';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  getAllOrders(): Observable<Order[]> {
    
    const headers = this.getToken();

    return this.http.get<Order[]>(ALL_ORDERS_URL, {headers});
  }

  getOrderById(orderid:string): Observable<Order>{

    const headers = this.getToken();

    return this.http.get<Order>(ORDER_BY_ID_URL + orderid, {headers});
  }

  create(order:Order){

    const headers = this.getToken();
    
    return this.http.post<Order>(ORDER_CREATE_URL, order, {headers});
  }

  private getToken(){
    const token = localStorage.getItem('User');

    if (!token) {
      throw new Error('No token found');
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'access_token': token
    });

    return headers;
  }
}
