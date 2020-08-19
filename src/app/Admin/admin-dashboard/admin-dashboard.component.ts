import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  todaysDate = new Date();
 constructor(private router: Router, private service: AuthenticationService) {
   setInterval(() => {
     this.todaysDate = new Date();
   }, 1000);
 }

  ngOnInit() {
  }

  logOut(){
      this.service.logout();
  }

}
