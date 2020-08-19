import { Component, OnInit } from '@angular/core';

import { Test } from '../models/Test';
import { TestService } from '../Services/service';



@Component({
  selector: 'app-delete-test',
  templateUrl: './delete-test.component.html',
  styleUrls: ['./delete-test.component.css']
})
export class DeleteTestComponent implements OnInit 
{
   allTests:Test[]=[];
   tests:Test=new Test();
  constructor(private service: TestService) { }



  ngOnInit() 
  {
    this.service.viewAllTests().subscribe(data=>
      {
        this.allTests=data;
      },
      error=>
      {
        alert("error");
        console.log(error);
      }
      );
  }


  deleteTest(index:number)
  {
    this.service.deleteTest(this.allTests[index].test_Id).subscribe
    (data=>
      {
        alert("Test Deleted successfully");
      this.ngOnInit();
      },
      
      error=>
      {
        alert("error");
        console.log(error);
      }
      
      
      
      );
  }



  updateTest(index:number)
  {
    this.service.setTest(this.allTests[index]);
  }



}
