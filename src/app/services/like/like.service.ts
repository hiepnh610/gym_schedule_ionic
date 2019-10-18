import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ILikeParams } from '@models/activity.interface';

import config from '@src/config';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  constructor(
    private http: HttpClient
  ) {}

  likeAndUnlike(param: ILikeParams): Observable<any> {
    return this.http.post<any>(config.BASE_URL + config.api.likeActivity, param);
  }
}
