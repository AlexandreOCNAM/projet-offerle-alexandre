import { Component, OnInit } from '@angular/core';
import { CarService } from '../../_core/services/car.service';
import { Car } from '../../_shared/models/car';
import { Observable, Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  cars$: Observable<Car[]>;
  searchString: Subject<string> = new Subject();
  searchString$: Observable<string> = this.searchString.asObservable();
  search: string = '';

  constructor(private carService : CarService) {
    this.cars$ = this.carService.getCars();
  }

  ngOnInit(): void {
    this.searchString$.pipe(
      debounceTime(500)
    )
    .subscribe(search => {
      if (search === '') {
        this.cars$ = this.carService.getCars();
        return;
      }
      this.cars$ = this.carService.searchCars(search);
    });
  }

  updateSearch (search: string) {
    this.searchString.next(search);
  }

}
