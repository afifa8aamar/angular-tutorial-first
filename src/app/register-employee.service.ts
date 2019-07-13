import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
interface IEmployee {
  id: string,
  employee_name: string,
  employee_salary: string,
  employee_age: string
}
@Injectable({
  providedIn: 'root'
})
export class RegisterEmployeeService {

  host = `http://dummy.restapiexample.com/api/v1`;

  constructor(private HttpClient: HttpClient) { }

  getEmployees() {
    const url = `${this.host}/employees`;
    return this.HttpClient.get(url)
      .pipe(map((employees: Array<IEmployee>) => {
        const employeesTransformed = employees.map((employee) => {
          const { id, employee_name, employee_salary, employee_age } = employee;

          const employeesTransformed = {
            id,
            name: employee_name,
            salary: employee_salary,
            age: employee_age,
          }

          return employeesTransformed;
        });
        return employeesTransformed;
      }))
  }

  registerEmplyee(employee : IEmployee) {
    let emp = this.transformEmployee(employee);
    return this.HttpClient.post(`${this.host}/create`, JSON.stringify(emp))
  } 

  private transformEmployee(employee) {
    const { id, employee_age, employee_name, employee_salary } = employee;
    const employeeTransformed = {
      id,
      age: employee_age,
      name: employee_name,
      salary: employee_salary
    };
    return employeeTransformed;
  }

}
