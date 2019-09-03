import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  public frm = new FormGroup({
    email: new FormControl(''),
    username: new FormControl(''),
    fullName: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }

}
