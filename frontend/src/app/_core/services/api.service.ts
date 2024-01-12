import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '../../../environments/environments';
import { User } from '../../_shared/models/user';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  public loginClient(email: string, password: string ) {
    const url = environment.backendLoginClient + 'auth/login';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post<User>(url, { email, password }, { headers });
  }

  public getProfileClient() {
    const url = environment.backendLoginClient + 'user/1';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.get(url, { headers });
  }
}
