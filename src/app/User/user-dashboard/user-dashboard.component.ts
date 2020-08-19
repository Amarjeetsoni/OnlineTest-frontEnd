import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  todaysDate = new Date();
  userName:string;
 constructor(private router: Router, private auth: AuthenticationService) {
  this.userName =  this.auth.userName; 
  setInterval(() => {
     this.todaysDate = new Date();
   }, 1000);
 }

  ngOnInit() {
  }


  logOut(){
      this.auth.logout();
  }

}
