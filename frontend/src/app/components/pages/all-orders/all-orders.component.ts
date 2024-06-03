import { Component, OnInit } from '@angular/core';
import { Order } from '../../../shared/models/Order';
import { OrderService } from '../../../services/order.service';
import { CurrencyPipe, DatePipe, NgFor, NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Cart } from '../../../shared/models/Cart';
import { map, Observable } from 'rxjs';
import { CartService } from '../../../services/cart.service';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css'],
  standalone: true,
  imports:[NgFor, NgIf, CurrencyPipe, DatePipe, RouterLink]
})
export class AllOrdersComponent implements OnInit {
  orders: Order[] = [];
  datePipe: any;
  food!:Food;

  constructor(private orderService: OrderService, private cartService:CartService, private foodService:FoodService, private router:Router) {}

  ngOnInit(): void {
    this.orderService.getAllOrders().subscribe({
      next: (orders) => {
        this.orders = orders.reverse(); //gia na deixnei thn pio prosfath paraggelia
      },
      error: (error) => {
        console.error('Error fetching orders:', error);
      }
    });
  }

  formatDate(date: string): string | null {
    return this.datePipe.transform(date, 'medium');
  }

  reorder(ordid:string){
    this.orderService.getOrderById(ordid).subscribe(
      (order:Order) => {
        console.log(order);
        
        for(let i = 0; i < order.items.length; i++){

          this.foodService.getFoodById(order.items[i].food.id.toString()).subscribe(
            (food:Food) => {
              this.food = food;
              console.log(this.food);
              this.cartService.changeQuantityIfExists(this.food.id);
              this.cartService.addToCart(this.food);
              this.router.navigateByUrl('/cart-page');
            }
          )
        }
      }
    );
  }
}
