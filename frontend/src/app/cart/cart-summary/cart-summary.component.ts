import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent {
  nbCars: number = 0;
  totalPrice: number = 0;

  currentRoute = this.router.url;

  constructor(private store: Store<{cars: Car[]}>, private router: Router) {
    this.store.select('cars').subscribe(cars => {
      this.nbCars = cars.length;
      this.totalPrice = cars.reduce((acc, car) => acc + car.price, 0);
    });
  }
}
