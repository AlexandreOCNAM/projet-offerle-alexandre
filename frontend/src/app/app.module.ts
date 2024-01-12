import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule, routing} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ApiHttpInterceptor} from "./_core/interceptors/http-interceptor";
import {ApiService} from "./_core/services/api.service";
import {LoginComponent} from './public/auth/login/login.component';
import {LogoutComponent} from './private/auth/logout/logout.component';
import {SignupComponent} from './public/auth/signup/signup.component';
import {ShopComponent} from './private/shop/shop.component';
import {CarService} from './_core/services/car.service';
import {NotfoundComponent} from './_layout/notfound/notfound.component';
import {HomeComponent} from './public/home/home.component';
import {CarComponent} from './private/shop/car/car.component';
import {UnauthorizedComponent} from './_layout/unauthorized/unauthorized.component';
import {IsSignedInGuard} from './_core/guards/is-signed-in.guard';
import {NavbarComponent} from './_shared/layout/navbar/navbar.component';
import {CartComponent} from './private/shop/cart/cart.component';
import {StoreModule} from '@ngrx/store';
import {NgxsModule} from '@ngxs/store';
import {CartStateModel} from 'src/shared/states/cart-state-model';
import {carReducer} from 'src/shared/reducers/cars';
import {CarDetailsComponent} from './private/shop/cart/car-details/car-details.component';
import {CartSummaryComponent} from './private/shop/cart-summary/cart-summary.component';
import {StepsComponent} from './_layout/steps/steps.component';
import {CheckoutComponent} from './private/shop/checkout/checkout.component';
import {FooterComponent} from './_shared/layout/footer/footer.component';
import {CartState} from "../shared/states/cart-state";


@NgModule({
  declarations: [AppComponent, LoginComponent, LogoutComponent, SignupComponent, ShopComponent, NotfoundComponent, HomeComponent, CarComponent, UnauthorizedComponent, NavbarComponent, CartComponent, CarDetailsComponent, CartSummaryComponent, StepsComponent, CheckoutComponent, FooterComponent],
  imports: [BrowserModule,NgxsModule.forRoot([CartState]), FormsModule, HttpClientModule, ReactiveFormsModule, AppRoutingModule],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ApiHttpInterceptor, multi: true},
    ApiService, CarService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
