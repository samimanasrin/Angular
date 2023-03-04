import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Student } from 'src/app/model/student.model';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
student: Student=new Student();
submitted=false;



  constructor(private httpClient:HttpClient,private router: Router,private studentService: StudentService) { 


    }

  ngOnInit(): void {
  }

  onSubmit(){
    this.submitted=true;
    this.studentService.createStudent(this.student).subscribe(
      data=> console.log(data),error =>console.log(error)
      
    );
   // this.student=new Student();
    this.router.navigate(['/allstudent']);
  }

}
