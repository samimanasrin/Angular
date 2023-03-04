import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { ApiResponse } from '../model/api.response';
import { Student } from '../model/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {


  baseUrl: string="http://localhost:8081/api/student/";

  constructor(private httpClient: HttpClient) { }



  getAllStudent(): Observable<ApiResponse>{
    
    return this.httpClient.get<ApiResponse>(this.baseUrl+"all/");

  }
  createStudent(student : Student): Observable<ApiResponse>{
    return this.httpClient.post<ApiResponse>(this.baseUrl+"save/",student);
  }
  deleteStudent(id: number): Observable<ApiResponse>{
    return this.httpClient.delete<ApiResponse>(this.baseUrl+"delete/"+id);

  }
  updateStudent(id: number,student : Student): Observable<ApiResponse>{
    return this.httpClient.put<ApiResponse>(this.baseUrl+"update/"+student.id+"/",student);
  }
  getStudentById(id:number): Observable<any>{
    return this.httpClient.get(this.baseUrl+id);
  }


}
