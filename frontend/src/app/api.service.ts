import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '../environments/environments';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  public loginClient(username: string, email: string, password: string ) {
    let data: String;
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    data = '{"username":"' + username + '","email":"' + email + '","password":"' + password + '"}';
    return this.http.post(
      environment.backendLoginClient + 'auth/login',
      data,
      httpOptions
    );
  }
}
