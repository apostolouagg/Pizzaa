import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/partials/header/header.component";
import { HomeComponent } from "./components/pages/home/home.component";
import { SalesComponent } from "./components/pages/sales/sales.component";
import { CsComponent } from './components/pages/cs/cs.component';
import { MixanologiaComponent } from './components/pages/mixanologia/mixanologia.component';
import { ImgsliderComponent } from './components/imgslider/imgslider.component';
import { IlektronikiComponent } from './components/pages/ilektroniki/ilektroniki.component';
import { OrderItemsListComponent } from './components/partials/order-items-list/order-items-list.component';
import { AllOrdersComponent } from './components/pages/all-orders/all-orders.component';
import { TilepikinoniesComponent } from './components/pages/tilepikinonies/tilepikinonies.component';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, HomeComponent, SalesComponent, CsComponent, MixanologiaComponent, IlektronikiComponent, ImgsliderComponent, AllOrdersComponent, OrderItemsListComponent, TilepikinoniesComponent]
})
export class AppComponent {
  title = 'frontend';
}
