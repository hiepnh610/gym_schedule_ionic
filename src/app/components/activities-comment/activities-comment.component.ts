import { Component, OnInit } from '@angular/core';

import { BaseComponent } from '@common/base/base.component';

@Component({
  selector: 'activities-comment',
  templateUrl: './activities-comment.component.html',
  styleUrls: ['./activities-comment.component.scss'],
})
export class ActivitiesCommentComponent extends BaseComponent implements OnInit {

  public comment: string;

  constructor() {
    super();
  }

  ngOnInit() {}

}
