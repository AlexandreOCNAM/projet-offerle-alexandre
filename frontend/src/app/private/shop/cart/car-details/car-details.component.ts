import { Component, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { Car } from 'src/app/_shared/models/car';
import {Delete_Car_From_Cart, DeleteCarFromCart} from 'src/shared/actions/cart-actions';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent {
  @Input() car: Car = new Car();

  constructor(private store: Store) { }

  removeFromCart(car: Car) {
    this.store.dispatch(new DeleteCarFromCart(car));
  }
}
