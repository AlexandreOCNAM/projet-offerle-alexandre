import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { Car } from 'src/app/models/car';
import { Add_Car_To_Cart } from 'src/shared/actions/car-actions';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit{
  @Input() car: Car = new Car();
  btnAddContent: SafeHtml;

  constructor(private store: Store<{cars: Car[]}>, private sanitizer: DomSanitizer) { 
    this.btnAddContent = this.sanitizer.bypassSecurityTrustHtml("Add to cart")
  }
  ngOnInit(): void {
    
  }

  addCarToCart(car: Car) {
    this.btnAddContent = "<span class='loading loading-spinner'></span>";
    this.store.dispatch(Add_Car_To_Cart({ car }));
    setTimeout(() => {
      this.btnAddContent = this.sanitizer.bypassSecurityTrustHtml("<svg xmlns='http://www.w3.org/2000/svg' class='stroke-current shrink-0 h-6 w-6' fill='none' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' /></svg>");
    }, 500);
    setTimeout(() => {
      this.btnAddContent = "Add to cart";
    }, 1000);
  }
}
