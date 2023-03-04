import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from './student/create-student/create-student.component';
import { ListStudentComponent } from './student/list-student/list-student.component';
import { UpdateStudentComponent } from './student/update-student/update-student.component';

const routes: Routes = [
  {path: 'studentsave', component:CreateStudentComponent},
  {path: 'allstudent', component:ListStudentComponent},
 
  {path: 'updateStudent/:id', component:UpdateStudentComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
