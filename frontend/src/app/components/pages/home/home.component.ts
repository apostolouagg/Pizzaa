import { Component } from '@angular/core';
import { Item } from '../../../shared/models/Item';
import { ItemService } from '../../../services/item.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { SalesComponent } from "../sales/sales.component";
import { CsComponent } from "../cs/cs.component";
import { MixanologiaComponent } from "../mixanologia/mixanologia.component";
import { ImgsliderComponent } from "../../imgslider/imgslider.component";
import { Observable } from 'rxjs';
import { IlektronikiComponent } from '../ilektroniki/ilektroniki.component';
import { TilepikinoniesComponent } from "../tilepikinonies/tilepikinonies.component";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [RouterModule, SalesComponent, CsComponent, MixanologiaComponent, IlektronikiComponent, ImgsliderComponent, TilepikinoniesComponent, NgIf, NgFor, CurrencyPipe]
})
export class HomeComponent {

  foods: Item[] = [];
  paramsFlag = false;

  constructor(private foodService: ItemService, activatedRoute: ActivatedRoute) {

    activatedRoute.params.subscribe((params) => {

      let foodsObservable: Observable<Item[]>;

      if (params.searchTerm) {
        this.paramsFlag = true;
        foodsObservable = this.foodService.getAllFoodBySearchTerm(params.searchTerm);

        foodsObservable.subscribe((serverFoods) => {
          this.foods = serverFoods;
        });
      }
    })
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }



  //images for slider
  images: any[] = [
    {
      url: '/assets/sales/1.jpg',
      title: 'Σχεδίαση Συστημάτων Μηχανικής Μάθησης',
      price: 29.70
    },
    {
      url: 'assets/sales/4.jpg',
      title: 'Εισαγωγή στον Υπολογισμό και τον Προγραμματισμό με την Python',
      price: 40.50
    },
    {
      url: 'assets/sales/16.jpg',
      title: 'Μικροηλεκτρονικά Κυκλώματα',
      price: 81.00
    },
    {
      url: 'assets/sales/22.jpg',
      title: 'Ασύρματες Επικοινωνίες',
      price: 54.00
    },
    {
      url: 'assets/sales/37.jpg',
      title: 'Βασικές Αρχές Μηχανών Εσωτερικής Καύσης',
      price: 76.50
    },
    {
      url: 'assets/sales/38.jpg',
      title: 'Ανάλυση Μηχανολογικών Καταστροφών',
      price: 25.20
    },
  ];
}
