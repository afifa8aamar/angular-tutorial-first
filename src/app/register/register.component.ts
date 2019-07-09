import { RegisterValidators } from './register-validators';
import { UserService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private UserService: UserService) {
    this.registerForm = this.formBuilder.group({
      email: ['', [RegisterValidators.Required, RegisterValidators.InvalidEmail]],
      passwords: this.formBuilder.group({
        password: ['', [RegisterValidators.Required, RegisterValidators.InvalidPassword]],
        confirm: ['', [RegisterValidators.Required, RegisterValidators.InvalidPassword]],
      }, {
        PasswordsShouldMatch: RegisterComponent.PasswordsShouldMatch
        }),
      nickname: ['', [RegisterValidators.Required, RegisterValidators.InvalidNickname]],
      phone: ['', [RegisterValidators.Required, RegisterValidators.InvalidPhone]],
      website: ['', [RegisterValidators.Required, RegisterValidators.InvalidWebsite]],
      agreement: ['', [RegisterValidators.Required, RegisterValidators.UncheckedAgreement]]
    })
  }

  ngOnInit() {
  }

  static PasswordsShouldMatch(FormGroup) {
    const password = FormGroup.get('password').value;
    const confirm = FormGroup.get('confirm').value;
    if (password !== confirm)
      return { PasswordsShouldMatch: { message: "Passwords should match" } };
    return null;
  }

  setUser(user: RegisterComponent) {
    window.alert("Registered Successfully")
    this.UserService.addUser(user);
  }
  get email() {
    return this.registerForm.get('email') as FormControl;
  }
  get password() {
    return this.registerForm.get('passwords.password') as FormControl;
  }
  get confirm() {
    return this.registerForm.get('passwords.confirm') as FormControl;
  }
  get nickname() {
    return this.registerForm.get('nickname') as FormControl;
  }
  get phone() {
    return this.registerForm.get('phone') as FormControl;
  }
  get website() {
    return this.registerForm.get('website') as FormControl;
  }
  get agreement() {
    return this.registerForm.get('agreement') as FormControl;
  }
}
