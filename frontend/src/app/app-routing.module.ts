import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {LoginComponent} from './public/auth/login/login.component';
import {LogoutComponent} from './private/auth/logout/logout.component';
import {SignupComponent} from './public/auth/signup/signup.component';
import {NotfoundComponent} from './_layout/notfound/notfound.component';
import {HomeComponent} from './public/home/home.component';
import {ShopComponent} from './private/shop/shop.component';
import {IsSignedInGuard} from './_core/guards/is-signed-in.guard';
import {UnauthorizedComponent} from './_layout/unauthorized/unauthorized.component';
import {CartComponent} from './private/shop/cart/cart.component';
import {CheckoutComponent} from './private/shop/checkout/checkout.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'public', loadChildren: () => import('./public/public-routing.module').then(m => m.PublicRoutingModule)},
  {
    path: 'private',
    loadChildren: () => import('./private/private-routing.module').then(m => m.PrivateRoutingModule),
    canActivate: [IsSignedInGuard]
  },
  {path: 'unauthorized', component: UnauthorizedComponent},
  {path: 'not-found', component: NotfoundComponent},
  {path: '**', redirectTo: 'not-found'}
];

export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
