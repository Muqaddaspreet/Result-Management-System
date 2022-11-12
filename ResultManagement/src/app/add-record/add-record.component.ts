import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ResultService} from '../result.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent implements OnInit {
  alert:boolean=false;
  addstudent = new FormGroup({
    rollnumber: new FormControl(''),
    sname: new FormControl(''),
    dob: new FormControl(''),
    score: new FormControl('')
  })

  constructor(private route:Router, private result: ResultService) { }

  ngOnInit(): void {
  }

  addStudent()
  {
    console.warn(this.addstudent.value);
    this.result.setStudent(this.addstudent.value).subscribe((record)=>
    {
      console.warn('record is here',record);
      this.alert= true;
      this.addstudent.reset({})
      setTimeout(()=>
      {
        this.route.navigate(['teachercontrol']);
      },2000);
    })
    
  }
  CloseAlert()
  {
    this.alert= false;
  }
}
