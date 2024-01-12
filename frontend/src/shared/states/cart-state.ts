import {Injectable} from '@angular/core';
import {
  Action,
  Selector,
  State,
  StateContext,
  createSelector
} from "@ngxs/store";

import {CartStateModel} from "./cart-state-model";
import {AddCarToCart, DeleteCarFromCart, ClearCart} from "../actions/cart-actions";
import {Car} from "../../app/_shared/models/car";

@State<CartStateModel>({
  name: 'cart',
  defaults: {
    cart: []
  }
})
@Injectable()
export class CartState{
  @Selector()
  static getCart(state: CartStateModel) {
    return state.cart;
  }
  static getNumberOfCarsInCart(state: CartStateModel) {
    return state.cart.length;
  }
  static getTotalPrice(state: CartStateModel) {
    return state.cart.reduce((total, car) => total + car.price, 0);
  }

  @Action(AddCarToCart)
  add({getState, patchState}: StateContext<CartStateModel>, {payload}: AddCarToCart) {
    const state = getState();
    patchState({
      cart: [...state.cart, payload]
    });
  }

  @Action(DeleteCarFromCart)
  delete({getState, patchState}: StateContext<CartStateModel>, {payload}: DeleteCarFromCart) {
    const state = getState();
    patchState({
      cart: state.cart.filter(car => car.id !== payload.id)
    });
  }

  @Action(ClearCart)
  clear({patchState}: StateContext<CartStateModel>) {
    patchState({
      cart: []
    });
  }
}
