import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AutosizeModule } from 'ngx-autosize';

import { NewsFeedPage } from './news-feed.page';
import { FormatDatePipe } from '@src/app/pipes/format-date/format-date.pipe';

import { ActivitiesFooterComponent } from '@components/activities-footer/activities-footer.component';
import { ActivitiesCommentComponent } from '@components/activities-comment/activities-comment.component';

const routes: Routes = [
  {
    path: '',
    component: NewsFeedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutosizeModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    NewsFeedPage,
    FormatDatePipe,
    ActivitiesFooterComponent,
    ActivitiesCommentComponent
  ]
})
export class NewsFeedPageModule {}
