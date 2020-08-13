import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  signupPage(){
    this.router.navigate(['/signup']);
  }
  loginPage(){
    this.router.navigate(['/login']);
  }
  admin(){
    this.router.navigate(['/admin']);
  }
  user(){
    this.router.navigate(['/user']);
  }

}
