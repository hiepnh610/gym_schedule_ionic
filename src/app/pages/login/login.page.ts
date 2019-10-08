import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

import { Storage } from '@ionic/storage';

import { BaseComponent } from '@common/base/base.component';
import { ERROR_MESSAGES } from '@constants/messages';
import { AuthService } from '@services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage extends BaseComponent implements OnInit {

  public frm: FormGroup;
  public errorMessage: string;

  public controlConfig = {
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])
  };

  public formErrors = {
    username: '',
    password: ''
  };

  public validationMessages = {
    username: {
      required: ERROR_MESSAGES.USERNAME_REQUIRED,
      minlength: ERROR_MESSAGES.MIN_LENGTH
    },
    password: {
      required: ERROR_MESSAGES.PASSWORD_REQUIRED,
      minlength: ERROR_MESSAGES.MIN_LENGTH
    }
  };

  constructor(
    private router: Router,
    private authService: AuthService,
    public toastController: ToastController,
    private storage: Storage
  ) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }

  login() {
    const params = {
      username: this.username.value,
      password: this.password.value
    };

    this.authService.login(params)
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe(res => {
        if (res.token) {
          this.storage.set('token', res.token);
          this.router.navigate(['tabs/news-feed']);
          this.authService.authState.next(true);
        }
      }, (err) => {
        if (err && err.error && err.error.message) {
          this.presentToast(err.error.message);
        }
      });
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });

    toast.present();
  }

  get username() { return this.frm.get('username'); }

  get password() { return this.frm.get('password'); }

}
