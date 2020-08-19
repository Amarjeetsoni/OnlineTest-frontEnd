import { Component, OnInit } from '@angular/core';

import { DatePipe } from '@angular/common';
import { Test } from '../models/Test';
import { TestService } from '../Services/service';


@Component({
  selector: 'app-update-test',
  templateUrl: './update-test.component.html',
  styleUrls: ['./update-test.component.css']
})
export class UpdateTestComponent implements OnInit {

  allTests:Test[]=[];
  constructor(private service:TestService) { }

  test:Test=new Test();
  ngOnInit() :void
  {
    
    this.test=this.service.getTest();
    // console.log("hello");
    
    // console.log(this.datepipe.transform(this.test.startDate, 'yyyy/MM/dd'));
  }

  updateTest(index:number)
  {
    this.service.updateTest(this.test).subscribe(data=>
    {
     alert("successfully updated")
    },
    error=>
    {
     alert("error");
     console.log(error);
    }

  );

}



}
