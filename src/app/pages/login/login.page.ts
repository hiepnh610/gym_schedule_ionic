import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { BaseComponent } from '@common/base/base.component';
import { ERROR_MESSAGES } from '@constants/messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage extends BaseComponent implements OnInit {

  public frm: FormGroup;

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

  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }

  get username() { return this.frm.get('username'); }

  get password() { return this.frm.get('password'); }

}
