import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentCornerComponent } from './student-corner/student-corner.component';
import { TeacherCornerComponent } from './teacher-corner/teacher-corner.component';
import { ShowResultListComponent } from './show-result-list/show-result-list.component';
import { TeacherControlComponent } from './teacher-control/teacher-control.component';
import { UpdateRecordComponent } from './update-record/update-record.component';
import { AddRecordComponent } from './add-record/add-record.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentCornerComponent,
    TeacherCornerComponent,
    ShowResultListComponent,
    TeacherControlComponent,
    UpdateRecordComponent,
    AddRecordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
