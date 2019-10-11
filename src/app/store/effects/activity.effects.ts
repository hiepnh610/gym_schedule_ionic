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
  getActivities$ = this.Actions$.pipe(
    ofType<GetActivities>(EActivityActions.getActivities),
    switchMap(() => this.ActivityService.newsFeed()),
    switchMap((activityHttp: IActivityHttp) => {
      return of(new GetActivitiesSuccess(activityHttp));
    })
  );

  constructor(
    private ActivityService: NewsFeedService,
    private Actions$: Actions
  ) {}
}
