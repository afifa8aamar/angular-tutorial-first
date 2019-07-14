import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeesService } from '../employees.service';
import { RegisterValidators } from '../register-employee/register-validators';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  Employee;
  EmpForm;
  constructor(private FormBuilder: FormBuilder, private EmployeesService: EmployeesService, private Router: Router, private routeState: ActivatedRoute) {
    this.EmpForm = this.FormBuilder.group({
      id:  [{disabled:true}],
      name: '',
      salary: '',
      age: ''
    })
  }

  ngOnInit() {
    this.routeState.paramMap.subscribe(params => {
      this.EmployeesService.getEmployee(+params.get('id')).subscribe((data) => {
        this.EmpForm.setValue({ ...data });
        this.Employee = { ...data };
      });
    });
  }

  get id() {
    return this.EmpForm.get('id');
  }

  get name() {
    return this.EmpForm.get('name');
  }

  get salary() {
    return this.EmpForm.get('salary');
  }

  get age() {
    return this.EmpForm.get('age');
  }

  delete() {
    this.EmployeesService.delete(this.Employee).subscribe(() => {
      this.Router.navigate(['/employees']);
    });
  }

  update() {
    this.EmployeesService.update(this.EmpForm.value).subscribe();
  }

}
