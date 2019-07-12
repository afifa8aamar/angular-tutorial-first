import { UserService } from './users.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isAccessAllowd = false;
  isNotEditable = true;
  constructor() { }

  isUserAuthenticated() {
    return this.isAccessAllowd;
  }
  allowAccess() {
    this.isAccessAllowd = true;
    this.isNotEditable = false;
  }

  blockAccess() {
    this.isAccessAllowd = false;
    this.isNotEditable = true;
  }

}
