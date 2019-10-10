import { Component, OnInit } from '@angular/core';

import { takeUntil } from 'rxjs/internal/operators/takeUntil';

import { BaseComponent } from '@common/base/base.component';
import { NewsFeedService } from '@services/news-feed/news-feed.service';

interface SetType {
  reps?: number;
  weight?: number;
}

interface Exercise {
  'exercise_id'?: string;
  'exercise_log'?: SetType[];
  'exercise_image'?: string;
  'exercise_name'?: string;
  'exercise_note'?: string;
}

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.page.html',
  styleUrls: ['./news-feed.page.scss'],
})
export class NewsFeedPage extends BaseComponent implements OnInit {

  public listActivities: any = [];

  constructor(
    private newsFeedService: NewsFeedService
  ) {
    super();
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.getNewsFeed();
  }

  getNewsFeed() {
    this.newsFeedService.newsFeed()
    .pipe(takeUntil(this.unsubscribeAll))
      .subscribe(res => {
        this.listActivities = res;
      }, (err) => {
        if (err && err.error && err.error.message) {
          console.log(err.error.message);
        }
      });
  }

  weightTotal(exercises: Exercise[]) {
    let total = 0;

    for (const exercise of exercises) {
      const exerciseLog: SetType[] = exercise.exercise_log || [];

      for (const exercise2 of exerciseLog) {
        const weight: number = exercise2.weight || 0;

        total += weight;
      }
    }

    return total;
  }

}
