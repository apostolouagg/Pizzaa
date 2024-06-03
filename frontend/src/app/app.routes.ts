import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { DealsComponent } from './components/pages/deals/deals.component';
import { PizzasComponent } from './components/pages/pizzas/pizzas.component';
import { DrinksComponent } from './components/pages/drinks/drinks.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { PastaComponent } from './components/pages/pasta/pasta.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { authGuard } from './auth/guards/auth.guard';
import { AllOrdersComponent } from './components/pages/all-orders/all-orders.component';

export const routes: Routes = [
    {path:'', component:HomeComponent}, //default route
    {path:'deals', component:DealsComponent},
    {path:'pizzas', component:PizzasComponent},
    {path:'pasta', component:PastaComponent},
    {path:'drinks', component:DrinksComponent},
    {path:'food/:id', component:FoodPageComponent},
    {path:'cart-page', component:CartPageComponent},
    {path:'contact', component:ContactComponent},
    {path:'login-page', component:LoginPageComponent},
    {path:'register-page', component:RegisterPageComponent},
    {path:'checkout-page', component:CheckoutPageComponent, canActivate:[authGuard]},
    {path:'all-orders', component:AllOrdersComponent},
];
