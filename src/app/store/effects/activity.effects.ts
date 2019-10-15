import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import {
  EActivityActions,
  GetActivities,
  GetActivitiesSuccess
} from '@store/actions/activity.actions';
import { NewsFeedService } from '@services/news-feed/news-feed.service';
import { IActivityHttp } from '@models/http-models/activity-http.interface';

@Injectable()
export class ActivityEffects {

  @Effect()
  getActivities$ = this.actions$.pipe(
    ofType<GetActivities>(EActivityActions.getActivities),
    switchMap(() => this.activityService.newsFeed()),
    switchMap((activityHttp: IActivityHttp) => {
      return of(new GetActivitiesSuccess(activityHttp));
    })
  );

  constructor(
    private activityService: NewsFeedService,
    private actions$: Actions
  ) {}
}
