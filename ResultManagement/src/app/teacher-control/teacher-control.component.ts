import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {ResultService} from '../result.service'

@Component({
  selector: 'app-teacher-control',
  templateUrl: './teacher-control.component.html',
  styleUrls: ['./teacher-control.component.css']
})


export class TeacherControlComponent implements OnInit {
  constructor(private router:Router, private result:ResultService) {}
  collection: any=[];
  ngOnInit(): void {
    this.result.getStudentList().subscribe((result)=>
    {
      console.warn(result);
      this.collection=result;
    })
  }

  DeleteStudent(item: any)
  {
    //this.collection.splice(item-1,1)
    this.result.DeleteStudent(item).subscribe((result)=>
    {
      console.warn("result",result)
    })
      // var data:any={}
      // for(let element of this.collection)
      // {
      //   if(item.id < element.id)
      //   {
      //     data=element;
      //     data.id=element.id-1;
      //     console.log("data",data);
      //     this.result.UpdateStudent(element.id, data).subscribe((result :any)=>
      //     {
      //       console.warn(result);
      //     })
      //   }
      // }
  }
}
