import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { BaseComponent } from '@common/base/base.component';
import { ISetType, IExercise } from './news-feed.interface';
import { GetActivities } from '@store/actions/activity.actions';
import { IAppState } from '@store/state/app.state';
import { selectActivityList } from '@store/selectors/activity.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.page.html',
  styleUrls: ['./news-feed.page.scss'],
})
export class NewsFeedPage extends BaseComponent implements OnInit {

  public listActivities$: Observable<{}> = this.store.pipe(select(selectActivityList));

  constructor(
    private store: Store<IAppState>
  ) {
    super();
  }

  ngOnInit() {
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

}
