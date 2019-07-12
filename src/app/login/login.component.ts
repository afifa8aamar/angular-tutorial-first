import { LoginValidator } from './login-validator';
import { FormBuilder, ValidatorFn, Validators, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.LoginForm = this.formBuilder.group({
      nickname: ['', , LoginValidator.InvalidNickname],
      password: ['', , LoginValidator.InvalidPassword]
    })
  }

  ngOnInit() {
  }

  get nickname() {
    return this.LoginForm.get('nickname') as FormControl;
  }

  get password() {
    return this.LoginForm.get('password') as FormControl;
  }
}
;