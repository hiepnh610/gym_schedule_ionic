import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { BaseComponent } from '@common/base/base.component';

import { IUser } from '@models/user.interface';

import { IAppState } from '@store/state/app.state';
import { selectUser } from '@store/selectors/user.selectors';

@Component({
  selector: 'activities-footer',
  templateUrl: './activities-footer.component.html',
  styleUrls: ['./activities-footer.component.scss'],
})
export class ActivitiesFooterComponent extends BaseComponent implements OnInit {

  @Input() activity: any;

  public user$: Observable<IUser> = this.store.pipe(select(selectUser));
  public isOwner = false;

  constructor(
    private store: Store<IAppState>
  ) {
    super();
  }

  ngOnInit() {
    this.user$
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe((item: IUser) => {
        this.isOwner = !!(this.activity.created_by === item.username);
      });
  }

}
