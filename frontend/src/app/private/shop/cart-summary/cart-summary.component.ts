import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Car } from 'src/app/_shared/models/car';
import {CartStateModel} from "../../../../shared/states/cart-state-model";

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent {
  nbCars: number = 0;
  totalPrice: number = 0;

  currentRoute = this.router.url;

  constructor(private store: Store, private router: Router) {
    this.store.select(state => state.cart).subscribe(( data: CartStateModel) => {
      this.nbCars = data.cart.length;
      this.totalPrice = data.cart.reduce((total: any, car: { price: number; }) => total + car.price, 0);
    });
  }
}
