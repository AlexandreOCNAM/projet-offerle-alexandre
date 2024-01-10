import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Car } from '../models/car';
import { Observable } from 'rxjs';
import { Delete_Car_From_Cart } from 'src/shared/actions/car-actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart$: Observable<Car[]>;

  constructor(private store: Store<{ cars: Car[] }>) {
    this.cart$ = store.select('cars');
  }

  onRemoveFromCart(car: Car) {
    this.store.dispatch(Delete_Car_From_Cart({ car }));
  }
}
