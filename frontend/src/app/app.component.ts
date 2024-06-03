import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/partials/header/header.component";
import { HomeComponent } from "./components/pages/home/home.component";
import { DealsComponent } from "./components/pages/deals/deals.component";
import { PizzasComponent } from './components/pages/pizzas/pizzas.component';
import { DrinksComponent } from './components/pages/drinks/drinks.component';
import { ImgsliderComponent } from './components/imgslider/imgslider.component';
import { PastaComponent } from './components/pages/pasta/pasta.component';
import { OrderItemsListComponent } from './components/partials/order-items-list/order-items-list.component';
import { AllOrdersComponent } from './components/pages/all-orders/all-orders.component';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, HomeComponent, DealsComponent, PizzasComponent, DrinksComponent, PastaComponent, ImgsliderComponent, AllOrdersComponent]
})
export class AppComponent {
  title = 'frontend';
}
