import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { LoaderService } from 'src/app/admin/Services/loader.services';
import swal from 'sweetalert';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { UserServices } from '../Services/user.services';

@Component({
  selector: 'app-register-test',
  templateUrl: './register-test.component.html',
  styleUrls: ['./register-test.component.css']
})
export class RegisterTestComponent implements OnInit {

  isActive: boolean = true;
  testDetails: any[];
  feedback: any[];
 
  constructor(private router: Router,private datepipe: DatePipe, private Service: UserServices, private loaderService: LoaderService, private auth: AuthenticationService) {
    this.Service.getAllTest().subscribe((data)=>{
      this.testDetails = data;
      this.loaderService.hide();
      this.testDetails = this.testDetails.filter(t => (t.testStatus != -1));
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
    this.isActive = false;
    // swal(this.auth.getUserid() + ": userId and testID: " + test.test_Id);
    this.Service.getRegisterInTest(this.auth.getUserid(), test.test_Id).subscribe((data)=>{
      this.isActive = true;
      this.testDetails = this.testDetails.filter(t=>(t.test_Id != test.test_Id));
      swal("Registered SuccessFully!", "check the Details very carefully..", "success");
  },
  (err)=>{
    console.log(err);
    if(err.error.text == "User Founded... and Test Assigned"){
      swal("Registered SuccessFully!", "check the Details very carefully..", "success");
      this.isActive = true;
      this.loaderService.hide();
      return;
    }
    console.log(err.error.text);
    swal("You have already Register in this test", "Problem occured!", "info")
    this.isActive = true;
    this.loaderService.hide();
  })
  }

}
