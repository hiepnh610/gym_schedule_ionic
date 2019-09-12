import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import config from '@src/config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'http://localhost:3000/api/';

  constructor(
    private http: HttpClient
  ) {}

  login(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + config.api.login, data);
  }

  logout(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'signout');
  }

  signUp(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + config.api.signUp, data);
  }
}
