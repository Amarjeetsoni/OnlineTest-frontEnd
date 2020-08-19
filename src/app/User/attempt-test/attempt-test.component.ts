import { Component, OnInit } from '@angular/core';
import { TestDetails } from '../models/TestDetails';
import { UserServices } from '../Services/user.services';
import { LoaderService } from '../Services/loader.services';

import { DatePipe } from '@angular/common';
import swal from 'sweetalert';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-attempt-test',
  templateUrl: './attempt-test.component.html',
  styleUrls: ['./attempt-test.component.css']
})
export class AttemptTestComponent implements OnInit {

  testDetails: TestDetails[];
  userId: number;

  constructor(private router: Router,private datepipe: DatePipe, private userService: UserServices, private loaderService:LoaderService,
    private auth: AuthenticationService) { 
      loaderService.show();
    this.userService.getAllTestAssignedToAUser(this.auth.getUserid()).subscribe((data)=>{
        this.userId  = this.auth.getUserid();
        this.testDetails = data;
        this.loaderService.hide();
    },
    (err)=>{
      swal("User Is Not Registered in any Test.!");
      this.loaderService.hide();
    })
  }

  ngOnInit() {

  }


  checkStatus(num: number){
    if(num == 0){
      return "Currently Active !";
    }
    if(num == -1){
      return "Test Passed! Go and Check Result";
    }
    if(num == 1){
      return "Upcoming Test!";
    }
  }
  getDetails(test: TestDetails){
   
    let startdate = this.datepipe.transform(test.startDate, 'dd-MM-yyyy HH:mm:ss');
    let enddate = this.datepipe.transform(test.endDate, 'dd-MM-yyyy HH:mm:ss');
    swal(test.testTitle, "Test Start Date: " + startdate + "\nTest End Date: " + enddate
     + "\nTotal Question: "+ test.totalQuestion + "\nTotal Marks: "+ test.testTotalMarks + "\nTest Duration(min): "
     +  test.testDuration + "\nTest Status: " + this.checkStatus(test.testStatus));
  }

  AttemptTest(test: any){
    console.log(test);
    let link = "attemptTest/" + this.userId + "/" + test.test_Id;
    this.router.navigate([]).then(result=>{window.open(link, '_blank');});
  }
  


}
