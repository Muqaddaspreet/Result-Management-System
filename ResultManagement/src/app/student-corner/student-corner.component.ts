import { Component, OnInit } from '@angular/core';
import {ResultService} from '../result.service';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-student-corner',
  templateUrl: './student-corner.component.html',
  styleUrls: ['./student-corner.component.css']
})
export class StudentCornerComponent implements OnInit {
  alert:boolean=false;
  status=true;
  msg= "";
  str= "";

  studentLogin = new FormGroup({
    rollnumber: new FormControl(''),
    dob: new FormControl('')
  })

  constructor(private router: Router, private result: ResultService) { }

  ngOnInit(): void {
  }

  Login()
  {
    this.alert=true;
    this.result.getStudentList().subscribe((record: any)=>
    {
      var user=false;
      const id = record.find((a: any)=>
      {
        if(a.rollnumber === this.studentLogin.value.rollnumber && a.dob === this.studentLogin.value.dob)
        {
          user=true;
          return a.id;
        }
      })
      if(user)
      {
        //alert("Login successful!!");
        this.studentLogin.reset();
        console.warn("ID is: ",id.id);
        this.status=true;
        this.msg='Success!';
        this.str='Login is successful';
        setTimeout(()=>
        {
          this.router.navigate(['sturesult',id.id]);
        },2000);
      }
      else
      {
        this.msg='Failed!';
        this.str='User not found';
        this.status=false;
        //alert("User not found!!");
      }
    })

  }
  CloseAlert()
  {
    this.alert= false;
  }
}
