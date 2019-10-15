import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import config from '@src/config';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) {}

  getUser(): Observable<any> {
    return this.http.get<any>(config.BASE_URL + config.api.user);
  }
}
