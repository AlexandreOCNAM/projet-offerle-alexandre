import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../_shared/models/user';
import { HttpLoginResponse, backendTokens } from '../../_shared/interfaces/http';
import {BehaviorSubject, Observable, map, Subject} from 'rxjs';
import { environment } from 'src/environments/environments';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userSubject: Subject<User>;
  user$: Observable<User | null>;

  constructor(private http: HttpClient) {
    this.userSubject = new Subject();
    this.user$ = this.userSubject.asObservable();
  }

  isLoggedIn() {
    return sessionStorage.getItem('isLoggedIn')! === 'true';
  }

  logOut() {
    sessionStorage.removeItem('isLoggedIn');
  }

  get currentUserValue() {
    return this.userSubject;
  }

  login(email: string, password: string) {
    const url = environment.backendLoginClient + 'auth/login';
    return this.http.post<HttpLoginResponse>(url, { email, password }).pipe(
      map((response) => {
        localStorage.setItem('token', response.backendTokens.accessToken);
        localStorage.setItem('user', JSON.stringify(response.user));
        sessionStorage.setItem('isLoggedIn', 'true');
        this.userSubject.next(response.user);
        return response;
      })
    );
  }

  refresh() {
    console.log('refreshing');
    const url = environment.backendLoginClient + '/auth/refresh';
    return this.http.post<backendTokens>(url, { refreshToken: localStorage.getItem('refreshToken') }).pipe(
      map((response) => {
        localStorage.setItem('token', response.accessToken);
        localStorage.setItem('refreshToken', response.refreshToken);
        localStorage.setItem('tokenExpiration', response.expiresIn);
        return response;
      })
    );
  }

  register(email: string, password: string, username: string) {
    const url = environment.backendLoginClient + 'auth/register';
    return this.http.post<User>(url, { email, password, username });
  }

}
