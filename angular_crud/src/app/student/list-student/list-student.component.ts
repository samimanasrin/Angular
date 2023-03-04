import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  students: any;

  constructor(private httpClient:HttpClient,
    private router:Router,
    private studentService: StudentService)
     { }

  ngOnInit(): void {
    this.students=this.studentService.getAllStudent();
  }
  deleteStudent(id:number){

    this.studentService.deleteStudent(id).subscribe(
      data=>{console.log(data);
      this.students=this.studentService.getAllStudent;
      this.router.navigate
      },
      error=>console.error(error)
      
      
    );


  }
updateStudent(id: number){
  this.router.navigate(['updateStudent/',id]);
}




}
