import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  constructor(private api: ApiService) {}

  onClick() {
    this.api.getProfileClient().subscribe((data) => {
      console.log(data);
    }
    );
  }
}
