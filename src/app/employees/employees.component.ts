import { EmployeesService } from '../employees.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employees$;

  constructor(private EmployeesService:EmployeesService) { }

  ngOnInit() {
    this.employees$ = this.EmployeesService.getEmployees();
  }

}
