import { UserService } from './../users.service';
import { AuthService } from './../auth.service';
import { LoginService } from './../login.service';
import { FormBuilder, ValidatorFn, Validators, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  redirect = false;
  LoginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private LoginService: LoginService, private UserService: UserService) {
    this.LoginForm = this.formBuilder.group({
      nickname: '',
      password: ''
    });
    this.LoginService.blockAccess();
  }

  ngOnInit() {
  }

  get nickname() {
    return this.LoginForm.get('nickname') as FormControl;
  }

  get password() {
    return this.LoginForm.get('password') as FormControl;
  }


  get access() {
    return this.LoginService.isUserAuthenticated() ? 'Allowed' : 'Blocked'
  }

  allow(nickname, password) {
    const user = this.UserService.getUsers().find(u => u.nickname == nickname.value);
    if (user && nickname.value == user.nickname && password.value == user.passwords.password) {
      this.redirect = true;
      this.LoginService.allowAccess();
    }
    else {
      this.LoginService.blockAccess();
    }

  }


}
;