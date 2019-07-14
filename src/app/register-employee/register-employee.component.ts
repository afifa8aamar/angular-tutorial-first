import { EmployeesService } from '../employees.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RegisterValidators } from './register-validators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.scss']
})
export class RegisterEmployeeComponent implements OnInit {
  employees$;
  Response;
  empRegForm: FormGroup;
  constructor(private FormBuilder: FormBuilder, private EmployeesService: EmployeesService, private router: Router) {
    this.empRegForm = this.FormBuilder.group({
      name: ['', [RegisterValidators.Required]],
      salary: ['', [RegisterValidators.Required, RegisterValidators.InvalidSalary]],
      age: ['', [RegisterValidators.Required, RegisterValidators.InvalidAge]]
    })
  }

  ngOnInit() {
    this.employees$ = this.EmployeesService.getEmployees();
  }


  register(employee) {
    this.EmployeesService.registerEmplyee(employee).subscribe();
    this.router.navigate(['/employees']);
  }

}
