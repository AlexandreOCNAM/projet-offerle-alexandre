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
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule, AppRoutingModule],
  declarations: [AppComponent, LoginComponent, LogoutComponent, SignupComponent, ShopComponent, NotfoundComponent, HomeComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiHttpInterceptor, multi: true },
    ApiService, CarService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
