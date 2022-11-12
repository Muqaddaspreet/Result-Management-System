import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ResultService} from '../result.service';

@Component({
  selector: 'app-show-result-list',
  templateUrl: './show-result-list.component.html',
  styleUrls: ['./show-result-list.component.css']
})
export class ShowResultListComponent implements OnInit {
  currstudent: any={};
  
  constructor(private router: ActivatedRoute, private result:ResultService) { }
  
  ngOnInit(): void {
    console.warn(this.router.snapshot.params['id'])
    this.result.getCurrStudent(this.router.snapshot.params['id']).subscribe((record: any)=>
    {
      console.warn("result", record)
      this.currstudent = {
        rollnumber: record['rollnumber'],
        sname: record['sname'],
        dob: record['dob'],
        score: record['score']
      }
    })

  }

}
