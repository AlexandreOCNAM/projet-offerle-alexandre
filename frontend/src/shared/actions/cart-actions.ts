import { createAction, props } from "@ngrx/store";
import { Car } from "src/app/_shared/models/car";

export const Add_Car = createAction('[Car] Add', props<{ car: Car }>());
export const Add_Car_To_Cart = createAction('[Car] Add to cart', props<{ car: Car }>());
export const Delete_Car_From_Cart = createAction('[Car] Delete from cart', props<{ car: Car }>());

export class AddCarToCart {
    static readonly type = '[Car] Add to cart';
    constructor(public payload: Car) { }
}

export class DeleteCarFromCart {
    static readonly type = '[Car] Delete from cart';
    constructor(public payload: Car) { }
}

export class ClearCart {
    static readonly type = '[Car] Clear cart';
}
