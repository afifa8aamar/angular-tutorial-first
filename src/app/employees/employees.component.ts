import { EmployeesService } from '../employees.service';
import { Component, OnInit } from '@angular/core';
import { Event, Router, NavigationStart, NavigationEnd } from '@angular/router';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  animations: [
    trigger('progressBar', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),
      transition(':enter, :leave', animate(0)),
    ])
  ]
})
export class EmployeesComponent implements OnInit {
  ShowLoader = true;
  employees$;

  constructor(private EmployeesService: EmployeesService, private Router: Router) {
    this.employees$ = this.EmployeesService.getEmployees();
    this.Router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.ShowLoader = true;
      }
      if (event instanceof NavigationEnd) {
        this.ShowLoader = false;
      }
    })
  }

  ngOnInit() {

  }

  hideForm() {
    this.ShowLoader = false;
  }

  showFrom() {
    this.ShowLoader = true;
  }

}
