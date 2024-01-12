import { Component, OnInit } from '@angular/core';
import { AuthService } from './_core/services/auth.service';
import { User } from './_shared/models/user';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  name = 'Angular';
  user?: User | null;

  constructor(public api: AuthService) {
  }

  ngOnInit() {
    this.api.userSubject.subscribe((user) => {
      console.log(user);

      this.user = user;

    }
    );
  }

  isLoggedIn() {
    return this.api.isLoggedIn();
  }

  logOut() {
    this.api.logOut();
  }
}
