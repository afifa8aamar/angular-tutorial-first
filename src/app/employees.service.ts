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
export class EmployeesService {
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

  registerEmplyee(employee: IEmployee) {
    const url = `${this.host}/create`;
    return this.HttpClient.post<IEmployee>(url, employee)
  }

  transformEmployee(employee) {
    const { id, employee_age, employee_name, employee_salary } = employee;
    const employeeTransformed = {
      id,
      age: employee_age,
      name: employee_name,
      salary: employee_salary
    };
    return employeeTransformed;
  }

  getEmployee(Id) {
    return this.HttpClient.get(`${this.host}/employee/${Id}`).pipe(map((employee: IEmployee) => {
      return this.transformEmployee(employee);
    }));
  }

  delete(employee) {
    const url = `${this.host}/delete/${employee.id}`;
    return this.HttpClient.delete(url, employee);
  }
  update(employee) {
    const url = `${this.host}/update/${employee.id}`;
    return this.HttpClient.put<IEmployee>(url, employee);
  }
}

