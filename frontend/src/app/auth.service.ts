import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user';
import { HttpLoginResponse } from './interfaces/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }

  logOut() {
    localStorage.removeItem('token');
  }

  login(email: string, password: string) {
    const url = 'http://localhost:8000/auth/login';
    return this.http.post<HttpLoginResponse>(url, { email, password });
  }

  getProfile(){
    const url = 'http://localhost:8000/user/1';
    return this.http.get(url);
  }

  register(email: string, password: string, username: string) {
    const url = 'http://localhost:8000/auth/register';
    return this.http.post<User>(url, { email, password, username });
  }
}
