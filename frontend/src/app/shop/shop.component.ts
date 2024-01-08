import { Component, OnInit } from '@angular/core';
import { CarService } from '../_core/services/car.service';
import { Car } from '../models/car';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  cars$: Observable<Car[]>;

  constructor(private carService : CarService) { 
    this.cars$ = this.carService.getCars();
  }

  ngOnInit(): void {
    
  }
}
