import { LoginService } from './../login.service';
import { UserService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users;
  constructor(private UserService: UserService, private LoginService: LoginService) {
    this.users = this.UserService.getUsers();
  }
  ngOnInit() {

  }
  getUsers() {
    this.users = this.UserService.getUsers();
    return this.users;
  }

  RemoveUser(user) {
    this.UserService.RemoveUser(user);
    this.users = this.UserService.getUsers();
  }

  get email() {
    return this.users;
  }
  get passwords() {
    return this.users.get('passwords') as FormGroup;
  }
  get password() {
    return this.users.get('passwords.password') as FormControl;
  }
  get confirm() {
    return this.users.get('passwords.confirm') as FormControl;
  }
  get nickname() {
    return this.users.get('nickname') as FormControl;
  }
  get phone() {
    return this.users.get('phone') as FormControl;
  }
  get website() {
    return this.users.get('website') as FormControl;
  }
  get agreement() {
    return this.users.get('agreement') as FormControl;
  }

  isAllowEdit() {
    return this.LoginService.isNotEditable;
  }
  logout() {
    this.LoginService.blockAccess();
  }
}
