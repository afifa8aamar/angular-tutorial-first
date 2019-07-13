import { RegisterEmployeeService } from './../register-employee.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RegisterValidators } from './register-validators';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.scss']
})
export class RegisterEmployeeComponent implements OnInit {
  employees$;
  Response;
  empRegForm: FormGroup;
  constructor(private FormBuilder: FormBuilder, private RegisterEmployeeService: RegisterEmployeeService) {
    this.empRegForm = this.FormBuilder.group({
      name: ['', [RegisterValidators.Required]],
      salary: ['', [RegisterValidators.Required]],
      age: ['', [RegisterValidators.Required]]
    })
  }

  ngOnInit() {
    this.employees$ = this.RegisterEmployeeService.getEmployees();
  }

  get name() {
    return this.empRegForm.get('name') as FormControl;
  }

  get salary() {
    return this.empRegForm.get('salary') as FormControl;
  }

  get age() {
    return this.empRegForm.get('age') as FormControl;
  }


  register() {
    this.RegisterEmployeeService.registerEmplyee(this.empRegForm.value)
      .subscribe(res => {
        this.Response = res;
      }, (e)=>{
        this.Response = e.error
      })

      console.log(this.RegisterEmployeeService.registerEmplyee(this.empRegForm.value), this.Response  )
  }

}
