import { Component, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import {Observable, Subject} from 'rxjs';
import { AuthService } from 'src/app/_core/services/auth.service';
import { Car } from 'src/app/_shared/models/car';
import { User } from 'src/app/_shared/models/user';
import {Select} from "@ngxs/store";
import {CartStateModel} from "../../../../shared/states/cart-state-model";
import {CartState} from "../../../../shared/states/cart-state";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() user?: User | null;
  nbOfCarsInCart: number = 0;
  totalPrice: number = 0;

  constructor(private authService: AuthService, private store: Store) {
    this.store.select(state => state.cart).subscribe((data: CartStateModel) => {
      this.nbOfCarsInCart = data.cart.length;
      this.totalPrice = data.cart.reduce((total: any, car: { price: number; }) => total + car.price, 0);
    });
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
}
