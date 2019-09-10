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
      required: 'Email is required.',
      email: 'Email address must be valid.'
    },
    username: {
      required: 'Username is required.',
      minlength: 'The minimum length of a password is 8 characters'
    },
    fullName: {
      required: 'Full name is required.',
      minlength: 'The minimum length of a password is 8 characters'
    },
    password: {
      required: 'Password is required.',
      minlength: 'The minimum length of a password is 8 characters'
    },
    confirmPassword: {
      required: 'Confirm password is required.',
      minlength: 'The minimum length of a password is 8 characters'
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
