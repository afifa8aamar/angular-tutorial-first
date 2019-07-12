import { UserService } from './users.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isAccessAllowed = false;
  isNotEditable = true;
  constructor() { }

  isUserAuthenticated() {
    return this.isAccessAllowed;
  }
  allowAccess() {
    this.isAccessAllowed = true;
    this.isNotEditable = false;
  }

  blockAccess() {
    this.isAccessAllowed = false;
    this.isNotEditable = true;
  }

}
