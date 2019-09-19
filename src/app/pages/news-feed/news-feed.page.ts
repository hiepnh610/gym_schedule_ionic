import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.page.html',
  styleUrls: ['./news-feed.page.scss'],
})
export class NewsFeedPage implements OnInit {

  constructor(
    private router: Router,
    private storage: Storage
  ) {}

  ngOnInit() {
  }

  logout() {
    this.storage
      .remove('token')
      .then(() => {
        this.router.navigate(['login']);
      });
  }

}
