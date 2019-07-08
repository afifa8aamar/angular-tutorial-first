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

  registerForm : FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      email: '',
      password: '',
      confirm:'',
      nickname:'',
      phone:'',
      website:'',
      agreement: ''
    })
   }

  ngOnInit() {
  }

  get email() {
    return this.registerForm.get('email') as FormControl;
  }
  get password() {
    return this.registerForm.get('password') as FormControl;
  }
  get confirm() {
    return this.registerForm.get('confirm') as FormControl;
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
