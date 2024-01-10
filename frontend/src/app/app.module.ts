import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ApiHttpInterceptor} from "./http-interceptor";
import {ApiService} from "./_core/services/api.service";
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { SignupComponent } from './signup/signup.component';
import { ShopComponent } from './shop/shop.component';
import { CarService } from './_core/services/car.service';
import { NotfoundComponent } from './_layout/notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { CarComponent } from './shop/car/car.component';
import { UnauthorizedComponent } from './_layout/unauthorized/unauthorized.component';
import { IsSignedInGuard } from './_core/guards/is-signed-in.guard';
import { NavbarComponent } from './_layout/navbar/navbar.component';
import { CartComponent } from './cart/cart.component';
import { StoreModule } from '@ngrx/store';
import { NgxsModule } from '@ngxs/store';
import { CarStateModel } from 'src/shared/states/car-state-model';
import { carReducer } from 'src/shared/reducers/cars';
import { CarDetailsComponent } from './shop/car/car-details/car-details.component';
import { CartSummaryComponent } from './cart/cart-summary/cart-summary.component';
import { StepsComponent } from './_layout/steps/steps.component';
import { CheckoutComponent } from './cart/checkout/checkout.component';
import { FooterComponent } from './_layout/footer/footer.component';


@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule, AppRoutingModule, StoreModule.forRoot({ cars: carReducer})],
  declarations: [AppComponent, LoginComponent, LogoutComponent, SignupComponent, ShopComponent, NotfoundComponent, HomeComponent, CarComponent, UnauthorizedComponent, NavbarComponent, CartComponent, CarDetailsComponent, CartSummaryComponent, StepsComponent, CheckoutComponent, FooterComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiHttpInterceptor, multi: true },
    ApiService, CarService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
