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
export class EmpleeysService {
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
}
