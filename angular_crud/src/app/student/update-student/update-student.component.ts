import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiResponse } from 'src/app/model/api.response';
import { Student } from 'src/app/model/student.model';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  id: number=0;
  student: Student=new Student();
  apiResponse: ApiResponse |undefined;

  constructor(private httpClient:HttpClient,
    private router: Router,
    private studentService: StudentService, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.student=new Student();
    this.id=this.route.snapshot.params['id'];
    this.studentService.getStudentById(this.id).subscribe(
      data=>{
        console.log(data)
        this.student=data;
      }
    );


  }

onSubmit(){
  this.studentService.updateStudent(this.id,this.student).subscribe(
    data=> console.log(data), error=>console.error()
    
  );
  this.student = new Student();
  this.router.navigate(['/allstudent']);
}







}
