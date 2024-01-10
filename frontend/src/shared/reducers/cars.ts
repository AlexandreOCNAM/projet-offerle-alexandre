import { Action, createReducer, on } from "@ngrx/store";
import { Add_Car, Add_Car_To_Cart, Delete_Car_From_Cart } from "../actions/car-actions";
import { Car } from "src/app/models/car";

export const initialState = Array<Car>();

export const carReducer = createReducer(
    initialState,
    on(Add_Car, (state, { car }) => [...state, car]),
    on(Add_Car_To_Cart, (state, { car }) => [...state, car]),
    on(Delete_Car_From_Cart, (state, { car }) => {
      const index = state.findIndex(c => c.id === car.id);
      if (index !== -1) {
        return [...state.slice(0, index), ...state.slice(index + 1)];
      }
      return state;
    })
);
