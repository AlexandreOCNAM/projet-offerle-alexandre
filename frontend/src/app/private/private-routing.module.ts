import { NgModule} from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {LogoutComponent} from "./auth/logout/logout.component";
import {HomeComponent} from "../public/home/home.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'auth/logout', component: LogoutComponent},
  { path: 'shop', loadChildren: () => import('../private/shop/shop-routing.module').then(m => m.ShopRoutingModule)},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PrivateRoutingModule { }
