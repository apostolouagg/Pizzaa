import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { DealsComponent } from './components/pages/deals/deals.component';
import { PizzasComponent } from './components/pages/pizzas/pizzas.component';
import { DrinksComponent } from './components/pages/drinks/drinks.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';

export const routes: Routes = [
    {path:'', component:HomeComponent}, //default route
    {path:'deals', component:DealsComponent},
    {path:'pizzas', component:PizzasComponent},
    {path:'drinks', component:DrinksComponent},
    {path:'food/:id', component:FoodPageComponent},
];
