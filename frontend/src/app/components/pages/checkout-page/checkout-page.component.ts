import { Component } from '@angular/core';
import { Order } from '../../../shared/models/Order';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CartService } from '../../../services/cart.service';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CurrencyPipe, NgIf } from '@angular/common';
import { OrderItemsListComponent } from '../../partials/order-items-list/order-items-list.component';
import { OrderService } from '../../../services/order.service';

@Component({
  selector: 'app-checkout-page',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgIf, RouterModule, CurrencyPipe, OrderItemsListComponent],
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.css'
})
export class CheckoutPageComponent {
  
  order = new Order();
  private orders: Order[] = [];
  checkoutForm!:FormGroup;
  returnUrl = '';
  isSubmitted = false;

  constructor(private cartService:CartService, private formbuilder:FormBuilder, private userService:UserService, private orderService:OrderService, private activatedRoute:ActivatedRoute, private router:Router) {
    const cart = cartService.getCart();
    this.order.items = cart.items;
    this.order.totalPrice = cart.totalPrice;
  }

  ngOnInit(): void {
    //user info
    let { id, name, address } =  this.userService.currentUser;

    //user info
    this.checkoutForm = this.formbuilder.group({
      id:[id, Validators.required],
      name:[name, [Validators.required, Validators.minLength(5)]],
      address:[address, [Validators.required, Validators.minLength(10)]],
      payment:['', Validators.required]
    });

    this.returnUrl= this.activatedRoute.snapshot.queryParams.returnUrl;
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
    this.order.paymentId = this.fc.payment.value;

    this.orderService.create(this.order).subscribe(
      {
        next:() => {
          alert('Your order is confirmed! Thank you!');
          this.cartService.clearCart();
          this.router.navigateByUrl(this.returnUrl);
        },
        error:(errorResponse) => {
          alert('Order Failed!');
        }
      }
    );
  }

}
