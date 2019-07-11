import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guard',
  templateUrl: './guard.component.html',
  styleUrls: ['./guard.component.scss']
})
export class GuardComponent implements OnInit {

  constructor(private AuthService: AuthService) { }

  ngOnInit() {
  }

  get access() {
    return this.AuthService.isUserAuthenticated() ? 'Allowed' : 'Blocked'
  }
  
  allow () {
    this.AuthService.allowAccess();
  }

  block () {
    this.AuthService.blockAccess();
  }
}
