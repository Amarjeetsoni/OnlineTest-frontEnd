import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { LoaderService } from '../Services/loader.services';
import { AdminServices } from '../Services/admin.services';


@Component({
  selector: 'app-view-feedback',
  templateUrl: './view-feedback.component.html',
  styleUrls: ['./view-feedback.component.css']
})
export class ViewFeedbackComponent implements OnInit {

  testDetails: any[];
  feedback: any[];
  finalMessage: string = "";
  str: string = "";
  constructor(private router: Router,private datepipe: DatePipe, private adminService: AdminServices, private loaderService: LoaderService) { 
    this.adminService.getAllTest().subscribe((data)=>{
      this.testDetails = data;
      this.loaderService.hide();
      this.testDetails = this.testDetails.filter(t => (t.testStatus != 1));
  },
  (err)=>{
    swal("No Test is available!");
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
      return "Test Completed and Review Taken...";
    }
    if(num == 1){
      return "Upcoming Test!";
    }
  }
  getDetails(test: any){
    console.log(test);
    let startdate = this.datepipe.transform(test.startDate, 'dd-MM-yyyy HH:mm:ss');
    let enddate = this.datepipe.transform(test.endDate, 'dd-MM-yyyy HH:mm:ss');
    swal(test.testTitle, "Test Start Date: " + startdate + "\nTest End Date: " + enddate
     + "\nTotal Question: "+ test.totalQuestion + "\nTotal Marks: "+ test.testTotalMarks + "\nTest Duration(min): "
     +  test.testDuration + "\nTest Status: " + this.checkStatus(test.testStatus));
  }

  FeedbackTest(test: any){
    
    this.adminService.getAllFeedbackByTestId(test.test_Id).subscribe((data)=>{
      this.feedback = data;
      this.loaderService.hide();
      this.feedback.forEach(e=>(
        this.finalMessage += "UserId: " + e.user_id + "\nMessage:\n 1. Any Suggestion About Plateform:  " + e.feedBackMessage[0] + "\n2.Problem Faced in any Question(explain):  " + e.feedBackMessage[1] + "\n3.Any Problem With Question:  " + e.feedBackMessage[2] + "\n\n" 
        ));
      swal(
        this.finalMessage
      )
      this.finalMessage = "";
  },
  (err)=>{
    swal("No Feedback available for this test!");
    this.loaderService.hide();
  })
  }

}
