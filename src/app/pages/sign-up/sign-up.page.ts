import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { BaseComponent } from '@common/base/base.component';
import { ERROR_MESSAGES } from '@constants/messages';

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

  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }

  get email() { return this.frm.get('email'); }

  get username() { return this.frm.get('username'); }

  get fullName() { return this.frm.get('fullName'); }

  get password() { return this.frm.get('password'); }

  get confirmPassword() { return this.frm.get('confirmPassword'); }
}
