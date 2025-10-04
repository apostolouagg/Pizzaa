import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { SalesComponent } from './components/pages/sales/sales.component';
import { CsComponent } from './components/pages/cs/cs.component';
import { MixanologiaComponent } from './components/pages/mixanologia/mixanologia.component';
import { ItemPageComponent } from './components/pages/item-page/item-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { IlektronikiComponent } from './components/pages/ilektroniki/ilektroniki.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { authGuard } from './auth/guards/auth.guard';
import { AllOrdersComponent } from './components/pages/all-orders/all-orders.component';
import { TilepikinoniesComponent } from './components/pages/tilepikinonies/tilepikinonies.component';

export const routes: Routes = [
    {path:'', component:HomeComponent}, //default route
    {path:'search/:searchTerm', component:HomeComponent},
    {path:'sales', component:SalesComponent},
    {path:'cs', component:CsComponent},
    {path:'eeng', component:IlektronikiComponent},
    {path:'meng', component:MixanologiaComponent},
    {path:'teng', component:TilepikinoniesComponent},
    {path:'item/:id', component:ItemPageComponent},
    {path:'cart-page', component:CartPageComponent},
    {path:'contact', component:ContactComponent},
    {path:'login-page', component:LoginPageComponent},
    {path:'register-page', component:RegisterPageComponent},
    {path:'checkout-page', component:CheckoutPageComponent, canActivate:[authGuard]},
    {path:'all-orders', component:AllOrdersComponent},
];
