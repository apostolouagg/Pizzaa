import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [NgIf]
})
export class HeaderComponent {

  constructor(private router:Router){
  }

  onSelect(navTerm:string){

    this.router.navigate([navTerm]);

  }

}
