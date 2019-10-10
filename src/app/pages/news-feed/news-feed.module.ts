import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewsFeedPage } from './news-feed.page';
import { FormatDatePipe } from '@src/app/pipes/format-date/format-date.pipe';

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
    RouterModule.forChild(routes)
  ],
  declarations: [
    NewsFeedPage,
    FormatDatePipe
  ]
})
export class NewsFeedPageModule {}
