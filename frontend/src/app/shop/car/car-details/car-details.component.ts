import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Car } from 'src/app/models/car';
import { Delete_Car_From_Cart } from 'src/shared/actions/car-actions';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent {
  @Input() car: Car = new Car();

  constructor(private store: Store<{cars: Car[]}>) { }

  removeFromCart(car: Car) {
    this.store.dispatch(Delete_Car_From_Cart({ car }));
  }
}
