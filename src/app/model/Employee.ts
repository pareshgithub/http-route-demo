export class Employee {
    id: string;
    employee_name: string;
    employee_salary: string;
    employee_age: string;
    constructor( id: string,  employee_name: string,  employee_salary: string,  employee_age: string) {
        this.id = id;
        this.employee_name = employee_name;
        this.employee_salary = employee_salary;
        this.employee_age = employee_age;
    }
}
