import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAccessAllowd = false;
  constructor() { }

  isUserAuthenticated() {
    return this.isAccessAllowd;
  }
  allowAccess() {
    this.isAccessAllowd = true;
  }

  blockAccess() {
    this.isAccessAllowd = false;
  }
}
