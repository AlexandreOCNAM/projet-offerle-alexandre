import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Car } from '../../../_shared/models/car';
import {Observable, Subject} from 'rxjs';
import {Delete_Car_From_Cart, DeleteCarFromCart} from 'src/shared/actions/cart-actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart$: Observable<Car[]> = this.store.select(state => state.cart.cart);

  constructor(private store: Store) {

  }

  onRemoveFromCart(car: Car) {
    this.store.dispatch(new DeleteCarFromCart(car));
  }
}
