import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

import { BaseComponent } from '@common/base/base.component';
import { ERROR_MESSAGES } from '@constants/messages';
import { AuthService } from '@services/auth/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage extends BaseComponent implements OnInit {

  public frm: FormGroup;

  public controlConfig = {
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]),
    fullName: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])
  };

  public formErrors = {
    email: '',
    username: '',
    fullName: '',
    password: '',
    confirmPassword: ''
  };

  public validationMessages = {
    email: {
      required: ERROR_MESSAGES.EMAIL_REQUIRED,
      email: ERROR_MESSAGES.EMAIL_VALID
    },
    username: {
      required: ERROR_MESSAGES.USERNAME_REQUIRED,
      minlength: ERROR_MESSAGES.MIN_LENGTH
    },
    fullName: {
      required: ERROR_MESSAGES.FULL_NAME_REQUIRED,
      minlength: ERROR_MESSAGES.MIN_LENGTH
    },
    password: {
      required: ERROR_MESSAGES.PASSWORD_REQUIRED,
      minlength: ERROR_MESSAGES.MIN_LENGTH
    },
    confirmPassword: {
      required: ERROR_MESSAGES.CONFIRM_PASSWORD_REQUIRED,
      minlength: ERROR_MESSAGES.MIN_LENGTH
    }
  };

  constructor(
    private router: Router,
    private authService: AuthService,
    public toastController: ToastController
  ) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }

  login() {
    this.router.navigate(['']);
  }

  signUp() {
    const params = {
      email: this.email.value,
      full_name: this.fullName.value,
      password: this.password.value,
      confirm_password: this.confirmPassword.value,
      username: this.username.value
    };

    this.authService.signUp(params)
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe(res => {
        if (res.token) {
          localStorage.setItem('token', res.token);
          this.router.navigate(['news-feed']);
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

  get email() { return this.frm.get('email'); }

  get username() { return this.frm.get('username'); }

  get fullName() { return this.frm.get('fullName'); }

  get password() { return this.frm.get('password'); }

  get confirmPassword() { return this.frm.get('confirmPassword'); }
}
