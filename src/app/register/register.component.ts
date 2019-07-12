import { RegisterValidators } from './register-validators';
import { UserService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl,
  AbstractControl
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  valid = true;
  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private UserService: UserService) {
    this.registerForm = this.formBuilder.group({
      email: ['', [RegisterValidators.Required, RegisterValidators.InvalidEmail]],
      passwords: this.formBuilder.group({
        password: ['', [RegisterValidators.Required, RegisterValidators.InvalidPassword]],
        confirm: ['', [RegisterValidators.Required]],
      }, {
          validator: RegisterValidators.PasswordsShouldMatch
        }),
      nickname: ['', [RegisterValidators.Required, RegisterValidators.InvalidNickname]],
      phone: ['', [RegisterValidators.Required, RegisterValidators.InvalidPhone]],
      website: ['', [RegisterValidators.Required, RegisterValidators.InvalidWebsite]],
      agreement: ['', [RegisterValidators.Required, RegisterValidators.UncheckedAgreement]]
    }, {
        validator: RegisterValidators.InValidInputs
      })
  }

  ngOnInit() {
  }

  setDefault() {
    // this.checkoutForm.get('name').setValue("John Boe");
    // this.checkoutForm.get('address').setValue("Tbilisi");
    this.registerForm.patchValue({
      email: 'afifa@gmail.com',
      passwords :{
        password : '1234567',
        confirm:'1234567'
      },
      nickname: 'afifa',
      phone: '+380123654789',
      website: 'https://www.youtube.com/',
    });
  }

  setUser(user: RegisterComponent) {
    window.alert("Registered Successfully")
    this.UserService.addUser(user);
    window.alert(this.UserService.getUsers())
  }
  get email() {
    return this.registerForm.get('email') as FormControl;
  }
  get passwords() {
    return this.registerForm.get('passwords') as FormGroup;
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
