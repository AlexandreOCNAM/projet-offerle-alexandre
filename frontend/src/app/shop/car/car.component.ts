import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Car } from 'src/app/models/car';
import { Add_Car_To_Cart } from 'src/shared/actions/car-actions';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit{
  @Input() car: Car = new Car();

  constructor(private store: Store<{cars: Car[]}>) { }
  ngOnInit(): void {
    
  }

  addCarToCart(car: Car) {
    this.store.dispatch(Add_Car_To_Cart({ car }));
    console.log("added to cart");
    console.log(this.store.select('cars'));
  }
}
