import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, delay } from 'rxjs/operators';

import { Employee } from '../model/Employee';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get("http://dummy.restapiexample.com/api/v1/employees").pipe(delay(2000), map((data: any)=> {
        let employees = [];
        if (data && data.status === 'success' && data.data && data.data.length) {
          employees = data.data.map((item) => {
            return new Employee(item.id, item.employee_name, item.employee_salary, item.employee_age);
          }); 
        }
        return employees;
    }))
  }
}