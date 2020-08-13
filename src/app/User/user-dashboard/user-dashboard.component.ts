import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  todaysDate = new Date();
 constructor(private router: Router) {
   setInterval(() => {
     this.todaysDate = new Date();
   }, 1000);
 }

  ngOnInit() {
  }


  logOut(){
       this.router.navigate(['/home']);
  }

}
