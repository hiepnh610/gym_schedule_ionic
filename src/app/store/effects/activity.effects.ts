import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import {
  EActivityActions,
  GetActivities,
  GetActivitiesSuccess,
  LikeActivity,
  LikeActivitySuccess
} from '@store/actions/activity.actions';

import { NewsFeedService } from '@services/news-feed/news-feed.service';
import { LikeService } from '@services/like/like.service';

import { ILikeParams, ILikeMessage } from '@models/activity.interface';
import { IActivityHttp } from '@models/http-models/activity-http.interface';

@Injectable()
export class ActivityEffects {
  private idActivity: string;

  @Effect()
  getActivities$ = this.actions$.pipe(
    ofType<GetActivities>(EActivityActions.getActivities),
    switchMap(() => this.activityService.newsFeed()),
    switchMap((activityHttp: IActivityHttp) => of(new GetActivitiesSuccess(activityHttp)))
  );

  @Effect()
  likeActivity$ = this.actions$.pipe(
    ofType<LikeActivity>(EActivityActions.likeActivity),
    map(action => {
      this.idActivity = action.payload.object_id;

      return action.payload;
    }),
    switchMap((params: ILikeParams) => this.likeService.likeAndUnlike(params)),
    switchMap((payload: ILikeMessage) => {
      const newData = {
        message: payload.message,
        id: this.idActivity
      };

      return of(new LikeActivitySuccess(newData));
    })
  );

  constructor(
    private likeService: LikeService,
    private activityService: NewsFeedService,
    private actions$: Actions
  ) {}
}
