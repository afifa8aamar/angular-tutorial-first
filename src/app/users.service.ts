import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    users = [];
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