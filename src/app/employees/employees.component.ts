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

  constructor(private EmployeesService: EmployeesService) {
    this.employees$ = this.EmployeesService.getEmployees();
    this.employees$.subscribe(data => {
      this.employees$ = this.EmployeesService.getEmployees();
      this.ShowLoader = false;
    })
  }

  ngOnInit() {

  }

}
