import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { SignupComponent } from './signup/signup.component';
import { NotfoundComponent } from './_layout/notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { IsSignedInGuard } from './_core/guards/is-signed-in.guard';
import { UnauthorizedComponent } from './_layout/unauthorized/unauthorized.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './cart/checkout/checkout.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent, canActivate: [IsSignedInGuard]},
  { path: 'cart', component: CartComponent, canActivate: [IsSignedInGuard]},
  { path: 'register', component: SignupComponent},
  { path: 'checkout', component: CheckoutComponent, canActivate: [IsSignedInGuard]},
  { path: 'shop', component: ShopComponent, canActivate: [IsSignedInGuard]},
  { path: 'unauthorized', component: UnauthorizedComponent},
  { path: 'not-found', component: NotfoundComponent},
  { path: '**', redirectTo: 'not-found'}
];

export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
