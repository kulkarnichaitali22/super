import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  employee_info = [

  {
    empno:101,
    empname:"abc",
    country:"India",
    position: "manager"
  },
  
  {
    empno:102,
    empname:"xyz",
    country:"US",
    position: "backend"
  },
  {
    empno:103,
    empname:"aaa",
    country:"China",
    position: "developer"
  },
  {
    empno:104,
    empname:"pqr",
    country:"Japan",
    position: "tester"
  }
  ]

}
