import { Component, OnInit } from '@angular/core';
import {ResultService} from '../result.service';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-teacher-corner',
  templateUrl: './teacher-corner.component.html',
  styleUrls: ['./teacher-corner.component.css']
})
export class TeacherCornerComponent implements OnInit {
  alert:boolean=false;
  status=true;
  msg= "";
  str= "";
  loginData = new FormGroup({
    temail: new FormControl(''),
    tpass: new FormControl('')
  })

  constructor(private router: Router, private result: ResultService) {}
  // collection: any=[];
  ngOnInit(): void {
    // this.result.getStudentList().subscribe((result)=>
    // {
    //   console.warn(result);
    //   this.collection=result;
    // })
  }

  Login()
  {
    this.alert= true;
    this.result.getTeacherList().subscribe((record: any)=>
    {
      const user = record.find((a: any)=>
      {
        return (a.temail === this.loginData.value.temail && a.tpass === this.loginData.value.tpass)
      })
      if(user)
      {
        
        //alert("Login successful!!");
        this.status=true;
        this.msg='Success!';
        this.str='Login is successful';
        setTimeout(()=>
        {
          this.router.navigate(['teachercontrol']);
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
