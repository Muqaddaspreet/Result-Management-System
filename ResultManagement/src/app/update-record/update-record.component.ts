import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ResultService} from '../result.service'
import {ActivatedRoute,Router} from '@angular/router'

@Component({
  selector: 'app-update-record',
  templateUrl: './update-record.component.html',
  styleUrls: ['./update-record.component.css']
})
export class UpdateRecordComponent implements OnInit {
  alert:boolean=false;
  editstudent = new FormGroup({
    rollnumber: new FormControl(''),
    sname: new FormControl(''),
    dob: new FormControl(''),
    score: new FormControl('')
  })

  constructor(private route:Router, private router: ActivatedRoute, private result: ResultService) { }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params['id'])
    this.result.getCurrStudent(this.router.snapshot.params['id']).subscribe((record: any)=>
    {
      console.warn("result", record)
      this.editstudent = new FormGroup({
        rollnumber: new FormControl(record['rollnumber']),
        sname: new FormControl(record['sname']),
        dob: new FormControl(record['dob']),
        score: new FormControl(record['score'])
      })
    })
  }

  updateCollection()
  {
    console.warn(this.editstudent.value);
    this.result.UpdateStudent(this.router.snapshot.params['id'], this.editstudent.value).subscribe((record)=>
    {
      console.warn('record is here',record)
      this.alert= true;
      //this.editstudent.reset({})
    })
    setTimeout(()=>
        {
          this.route.navigate(['teachercontrol']);
        },2000);
  }
  CloseAlert()
  {
    this.alert= false;
  }
}
