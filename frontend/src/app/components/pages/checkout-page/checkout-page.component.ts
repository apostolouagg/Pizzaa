import { Component } from '@angular/core';
import { Order } from '../../../shared/models/Order';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CartService } from '../../../services/cart.service';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CurrencyPipe, NgIf } from '@angular/common';
import { OrderItemsListComponent } from '../../partials/order-items-list/order-items-list.component';

@Component({
  selector: 'app-checkout-page',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgIf, RouterModule, CurrencyPipe, OrderItemsListComponent],
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.css'
})
export class CheckoutPageComponent {
  
  order:Order = new Order();
  checkoutForm!:FormGroup;
  returnUrl = '';
  isSubmitted = false;

  constructor(cartService:CartService, private formbuilder:FormBuilder, private userService:UserService, private activatedRoute:ActivatedRoute) {
    const cart = cartService.getCart();
    this.order.items = cart.items;
    this.order.totalPrice = cart.totalPrice;
  }

  ngOnInit(): void {
    let { name, address } =  this.userService.currentUser;

    this.checkoutForm = this.formbuilder.group({
      name:[name, [Validators.required, Validators.minLength(5)]],
      address:[address, [Validators.required, Validators.minLength(10)]]
    });
  }

  get fc(){
    return this.checkoutForm.controls;
  }

  createOrder(){
    this.isSubmitted = true;
    if(this.checkoutForm.invalid){
      return;
    }
    this.order.name = this.fc.name.value;
    this.order.address = this.fc.address.value;

    console.log(this.order);
  }

}