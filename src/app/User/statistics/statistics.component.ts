import { Component, OnInit } from '@angular/core';
import { UserServices } from '../Services/user.services';
import swal from 'sweetalert';
import { AdminServices } from 'src/app/admin/Services/admin.services';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { LoaderService } from 'src/app/admin/Services/loader.services';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  allTest: any[];
  allRegisterTest: any[];
  upcomingTest: any[];
  ActiveTest:any[];
  TotalnumberOfTest:number  = 0;
  TotalUpcomingTest: number = 0;
  TotalCurrentlyActiveTest:number = 0;
  TotalPassTest: number = 0;
  constructor(private services: UserServices, private adminService: AdminServices, private auth: AuthenticationService,private loaderService:LoaderService) {
    loaderService.show(); 
    this.services.getAllTestAssignedToAUser(this.auth.getUserid()).subscribe((data)=>{

            this.allRegisterTest = data;
            this.TotalnumberOfTest = this.allRegisterTest.length;
            this.upcomingTest =  this.allRegisterTest.filter(t=>(t.testStatus == 1));
            this.ActiveTest = this.allRegisterTest.filter(t=>(t.testStatus == 0));
            this.TotalUpcomingTest = this.allRegisterTest.filter(t=>(t.testStatus == 1)).length;
            this.TotalCurrentlyActiveTest = this.allRegisterTest.filter(t=>(t.testStatus == 0)).length;
            this.TotalPassTest = this.allRegisterTest.filter(t=>(t.testStatus == -1)).length;
            loaderService.hide(); 

     },
     (err)=>{
       console.log(err);
          swal(err.error.details);
          loaderService.hide(); 
     })
    
     this.adminService.getAllTest().subscribe((data)=>{
           console.log(data);
           this.allTest  = data;
     },
     (err)=>{
          swal(err.error.details);
     })

     
   }

  ngOnInit() {
  }

}
