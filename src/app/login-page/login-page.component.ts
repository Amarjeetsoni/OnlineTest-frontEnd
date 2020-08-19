import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../Services/authentication.service';
import { NgForm } from '@angular/forms';
import { User } from '../Models/user';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private authservice:AuthenticationService) { }

  user:User=new User();

   login(form:NgForm){
      console.log(form.form.value);
      this.authservice.authenticate(form.form.value);
   }
  ngOnInit() {
  }

}
