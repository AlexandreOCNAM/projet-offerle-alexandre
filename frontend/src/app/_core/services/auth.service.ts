import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';
import { HttpLoginResponse } from '../../interfaces/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userSubject: BehaviorSubject<User | null>;
  user$: Observable<User | null>;

  constructor(private http: HttpClient) {
    this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    this.user$ = this.userSubject.asObservable();
  }

  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }

  logOut() {
    localStorage.removeItem('token');
  }

  get currentUserValue() {
    return this.userSubject.value;
  }

  login(email: string, password: string) {
    const url = 'http://localhost:8000/auth/login';
    return this.http.post<HttpLoginResponse>(url, { email, password }).pipe(
      map((response) => {
        localStorage.setItem('token', response.backendTokens.accessToken);
        localStorage.setItem('user', JSON.stringify(response.user));
        this.userSubject.next(response.user);
        return response;
      })
    );
  }

  getProfile() {
    const url = 'http://localhost:8000/user/1';
    return this.http.get(url);
  }

  register(email: string, password: string, username: string) {
    const url = 'http://localhost:8000/auth/register';
    return this.http.post<User>(url, { email, password, username });
  }

}
