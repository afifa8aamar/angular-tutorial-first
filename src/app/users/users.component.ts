import { UserService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users;
  constructor(private route: ActivatedRoute, private UserService:UserService) {
    this.users = UserService.getUsers();
  }

  getUsers () {
    this.users = this.UserService.getUsers();
    return this.users;
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.users = this.users[+params.get('userId')];
    });
  }
}
