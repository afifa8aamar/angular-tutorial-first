import { LoginService } from './../login.service';
import { UserService } from './../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar-component.scss']
})
export class TopBarComponent implements OnInit {
    constructor(private LoginService: LoginService) {
    }
    ngOnInit() { }

    activate() {
        if (this.LoginService.isUserAuthenticated()) {
            return false;
        } else {
            return true;
        }
    }
}

