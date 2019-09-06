import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BaseComponent } from '@common/base/base.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage extends BaseComponent implements OnInit {

  public frm: FormGroup;

  public controlConfig = {
    email: new FormControl('', [
      Validators.required
    ]),
    username: new FormControl('', [
      Validators.required
    ]),
    fullName: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required
    ]),
    confirmPassword: new FormControl('', [
      Validators.required
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
      required: 'Email is required.'
    },
    username: {
      required: 'Username is required.'
    },
    fullName: {
      required: 'Full name is required.'
    },
    password: {
      required: 'Password is required.'
    },
    confirmPassword: {
      required: 'Confirm password is required.'
    }
  };

  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
