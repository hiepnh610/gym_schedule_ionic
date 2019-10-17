import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LikeParams } from '@interfaces/like.interface';

import config from '@src/config';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  constructor(
    private http: HttpClient
  ) {}

  likeAndUnlike(param: LikeParams): Observable<any> {
    return this.http.post<any>(config.BASE_URL + config.api.likeActivity, param);
  }
}
