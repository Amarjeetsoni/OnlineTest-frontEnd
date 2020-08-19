import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MainService } from '../Services/main.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  addUserForm: FormGroup;
  submitted: boolean = false;
  message: string;
  errorFlag = false;


  constructor(private userService:MainService,private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group({
        
      username: ["", [Validators.required, Validators.pattern("[A-Za-z][A-Za-z0-9]{7,20}")]],
      password: ["",[ Validators.required,Validators.pattern("[A-Za-z0-9!@#]{8,20}")]],
      email:["",[Validators.required,Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$")]],

    });
    if (localStorage.usr != null) {
      localStorage.removeItem("usr");
    }
  }

     // convenience getter for easy access to form fields
get formFields() {
  return this.addUserForm.controls;
  }

  addUser() {
    this.submitted = true;
    if (this.addUserForm.invalid) {
      return alert(`Not Registered`);
    }
    console.log(this.addUserForm.value);
    this.userService.customerSignUp(this.addUserForm.value).subscribe(
      (data) => {
        alert(
          `Hello, ${this.addUserForm.controls.username.value}. Your Account has been created successfully😊`
        );
         this.router.navigate(["login"]);
      },
      (error) => {
        alert(error.error);
        this.message = error.error;
        this.errorFlag = true;
      }
    );
  }

}
