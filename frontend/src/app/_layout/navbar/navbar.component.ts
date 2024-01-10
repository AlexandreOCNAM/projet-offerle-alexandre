import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/_core/services/auth.service';
import { Car } from 'src/app/models/car';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() user?: User | null;
  nbCarInCart: number = 0;

  constructor(private authService: AuthService, private store: Store<{ cars: Car[] }>) { 
    this.store.select('cars').subscribe(cars => this.nbCarInCart = cars.length);
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
}
