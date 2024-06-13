import { Component } from '@angular/core';
import { Service1Service } from '../service1.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  stud:any

  constructor(private s : Service1Service){}

 ngOnInit()
 {
  this.stud = this.s.student;
  console.log(this.stud);
 }

}
