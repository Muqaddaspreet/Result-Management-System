import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {StudentCornerComponent} from './student-corner/student-corner.component'
import {TeacherCornerComponent} from './teacher-corner/teacher-corner.component'
import {ShowResultListComponent} from './show-result-list/show-result-list.component'
import { TeacherControlComponent } from './teacher-control/teacher-control.component';
import { UpdateRecordComponent } from './update-record/update-record.component';
import { AddRecordComponent } from './add-record/add-record.component';
const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'studentlogin',
    component:StudentCornerComponent
  },
  {
    path:'teacherlogin',
    component:TeacherCornerComponent
  },
  {
    path:'sturesult/:id',
    component:ShowResultListComponent
  },
  {
    path:'teachercontrol',
    component:TeacherControlComponent
  },
  {
    path:'updateresult/:id',
    component:UpdateRecordComponent
  },
  {
    path:'addresult',
    component:AddRecordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
