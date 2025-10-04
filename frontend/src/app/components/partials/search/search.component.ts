import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  searchTerm = '';
  constructor(activatedRoute:ActivatedRoute,private router:Router) {
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm) this.searchTerm = params.searchTerm;
    });
  }

  ngOnInit(): void {
  }

  isOpen: boolean = false;

  toggleSearch(input: HTMLInputElement) {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      setTimeout(() => input.focus(), 300);
    }
  }

  closeIfEmpty(value: string) {
    if (!value.trim()) {
      this.isOpen = false;
    }
  }

  search(term:string):void{
    if(term)
    this.router.navigateByUrl('/search/'+ term);
  }

}
