import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShopComponent} from "./shop.component";
import {CartComponent} from "./cart/cart.component";
import {CheckoutComponent} from "./checkout/checkout.component";

const routes: Routes = [
  { path: '', component: ShopComponent, title: 'Shop'},
  { path: 'cart', component: CartComponent, title: 'Cart'},
  { path: 'checkout', component: CheckoutComponent, title: 'Checkout'},
  { path: '**', redirectTo: ''}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ShopRoutingModule { }
