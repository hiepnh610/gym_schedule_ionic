import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Storage } from '@ionic/storage';

import { BaseComponent } from '@common/base/base.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage extends BaseComponent implements OnInit {

  constructor(
    private router: Router,
    private storage: Storage
  ) {
    super();
  }

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
