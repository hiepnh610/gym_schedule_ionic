import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { BaseComponent } from '@common/base/base.component';

import { AuthService } from '@services/auth/auth.service';

import { IAppState } from '@store/state/app.state';
import { GetUser } from '@store/actions/user.actions';

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
    private store: Store<IAppState>
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
            this.store.dispatch(new GetUser());
          }
        });
    });
  }
}
