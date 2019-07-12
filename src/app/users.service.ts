import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    users = [{
        email: 'afifa@gmail.com',
        passwords: {
          password: '1234567',
          confirm: '1234567'
        },
        nickname: 'afifa',
        phone: '+380123654789',
        website: 'https://www.youtube.com/',
        agreement : true
      }];
    constructor() { }

    addUser(user) {
        this.users.push(user);
    }

    RemoveUser(user) {
        this.users.splice(this.users.indexOf(user), 1);
        return this.users;
    }

    getUsers() {
        return this.users;
    }
}