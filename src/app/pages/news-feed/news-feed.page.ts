import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { BaseComponent } from '@common/base/base.component';
import { ISetType, IExercise } from './news-feed.interface';

import { IUser } from '@models/user.interface';

import { GetActivities } from '@store/actions/activity.actions';
import { IAppState } from '@store/state/app.state';
import { IActivityState } from '@store/state/listActivities.state';
import { selectActivitiesList } from '@store/selectors/activity.selectors';
import { selectUser } from '@store/selectors/user.selectors';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.page.html',
  styleUrls: ['./news-feed.page.scss'],
})
export class NewsFeedPage extends BaseComponent implements OnInit {

  public listActivities$: Observable<IActivityState> = this.store.pipe(select(selectActivitiesList));
  public user$: Observable<IUser> = this.store.pipe(select(selectUser));
  public username: string;

  constructor(
    private store: Store<IAppState>
  ) {
    super();
  }

  ngOnInit() {}

  ionViewDidEnter() {
    this.store.dispatch(new GetActivities());

    this.user$
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe((item: IUser) => {
        this.username = item.username ? item.username : '';
      });
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
