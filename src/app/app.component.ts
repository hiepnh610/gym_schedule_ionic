import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { BaseComponent } from '@common/base/base.component';

import { AuthService } from '@services/auth/auth.service';
import { UserService } from '@services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent extends BaseComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) {
    super();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.authService.authState
        .pipe(takeUntil(this.unsubscribeAll))
        .subscribe((state: boolean): void => {
          if (state) {
            this.router.navigate(['tabs/news-feed']);
          }
        });

      this.userService.getUser()
        .pipe(takeUntil(this.unsubscribeAll))
        .subscribe((resp: any) => {
          console.log(resp);
        });
    });
  }
}
