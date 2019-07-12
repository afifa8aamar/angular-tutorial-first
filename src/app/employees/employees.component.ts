import { EmpleeysService } from './../empleeys.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employees$;

  constructor(private EmpleeysService:EmpleeysService) { }

  ngOnInit() {
    this.employees$ = this.EmpleeysService.getEmployees();
  }

}
