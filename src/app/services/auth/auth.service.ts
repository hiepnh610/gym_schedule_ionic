import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';

import config from '@src/config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public authState = new BehaviorSubject(false);

  constructor(
    private http: HttpClient,
    private storage: Storage,
    private platform: Platform
  ) {
    this.platform.ready().then(() => {
      this.ifLoggedIn();
    });
  }

  ifLoggedIn() {
    this.storage
      .get('token')
      .then((response) => {
        if (response) {
          this.authState.next(true);
        }
      });
  }

  login(data: any): Observable<any> {
    return this.http.post<any>(config.BASE_URL + config.api.login, data);
  }

  signUp(data: any): Observable<any> {
    return this.http.post<any>(config.BASE_URL + config.api.signUp, data);
  }

  isAuthenticated() {
    return this.authState.value;
  }
}
