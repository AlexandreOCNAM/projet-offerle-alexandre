import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '../../../environments/environments';
import { User } from '../../models/user';
import { Car } from 'src/app/models/car';

@Injectable()
export class CarService {
  constructor(private http: HttpClient) {}

  public getCars(): Observable<Car[]> {
    const url = environment.backendLoginClient + 'cars';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.get<Car[]>(url, { headers });
  }

  public searchCars(search: string): Observable<Car[]> {
    const url = environment.backendLoginClient + 'cars/search?name=' + search;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.get<Car[]>(url, { headers });
  }
}