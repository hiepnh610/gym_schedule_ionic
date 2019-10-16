import { Component, OnInit, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { BaseComponent } from '@common/base/base.component';
import { ISetType, IExercise } from './news-feed.interface';

import { GetActivities } from '@store/actions/activity.actions';
import { IAppState } from '@store/state/app.state';
import { IActivityState } from '@store/state/listActivities.state';
import { selectActivitiesList } from '@store/selectors/activity.selectors';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.page.html',
  styleUrls: ['./news-feed.page.scss'],
})
export class NewsFeedPage extends BaseComponent implements OnInit {

  public listActivities$: Observable<IActivityState> = this.store.pipe(select(selectActivitiesList));

  constructor(
    private store: Store<IAppState>
  ) {
    super();
  }

  ionViewDidEnter() {
    this.store.dispatch(new GetActivities());
  }

  weightTotal(exercises: IExercise[]) {
    let total = 0;

    for (const exercise of exercises) {
      const exerciseLog: ISetType[] = exercise.exercise_log || [];

      for (const exercise2 of exerciseLog) {
        const weight: number = exercise2.weight || 0;

        total += weight;
      }
    }

    return total;
  }

  returnZero(): number {
    return 0;
  }

}
