import { Component, OnInit } from '@angular/core';


import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TestService } from '../Services/service';
import { Test } from '../models/Test';
import { AdminServices } from '../Services/admin.services';
import swal from 'sweetalert';

@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.css']
})
export class AddTestComponent implements OnInit 
{

  SelectOption:FormGroup;
  filteredQuestionList: any[];
  allCategory:any[];
  allQuestion: any[];
  isDisabled: boolean = false;
  testId: number;
  totalQuestion:number ;
  step: number = 1;
  constructor(private service:TestService, private adminService: AdminServices, private formBuilder: FormBuilder) {
       
   }

  test:Test=new Test();

  msg:string;
  errorMessage:string;

  ngOnInit() 
  {
    this.SelectOption = this.formBuilder.group({
      category: ['', Validators.required]
    })
  }

  addTest()
  {
    this.service.addTest(this.test).subscribe
    (data=>
      {
         this.msg=data;
         alert(this.msg);
         this.errorMessage=undefined;
         this.service.setTest(this.test);
         this.getQuestionId();
         swal("Test Added Successfully!", "Now Proceed To Add Question In test", "success");
         this.totalQuestion = this.test.TotalQuestion;
         this.step++;
         
      },
      error=>
      {
        this.errorMessage = JSON.parse(error.error).message;
 
        this.msg = undefined;
        alert(this.errorMessage)
        console.log("error occured", error);
      }
    );
  }

  getQuestionId(){
    this.adminService.getTestByTestTitle(this.test.testTitle).subscribe((data)=>{
      this.testId = data;
      console.log(this.testId);
      this.getAllCategory();
    },
    (err)=>{
      swal("an Error has Ocuured");
    })
  }
  getAllCategory(){
     this.adminService.getAllCategory().subscribe((data)=>{
          this.allCategory = data;
          console.log(this.allCategory);
          this.getAllQuestion();
     },
     (err)=>{
       swal("Some Error Is There...")
     })
  }
   getAllQuestion(){
     this.adminService.getAllQuestion().subscribe((data)=>{
       this.allQuestion = data;
       this.filteredQuestionList = this.allQuestion;
       console.log(this.allQuestion);
     },
     (err)=>{
      swal("Some Error Is There...")
     })
   }

   addQuestion(question){
        if(this.totalQuestion > 0){
          this.isDisabled = true;
          this.adminService.setTestQuestion(question.questionId, this.testId).subscribe((data)=>{
            this.totalQuestion--;  
            this.allQuestion = this.allQuestion.filter(t=>(t.questionId != question.questionId));
            this.filteredQuestionList = this.filteredQuestionList.filter(t=>(t.questionId != question.questionId));
            swal(this.totalQuestion + " More TO Go...");
            if(this.totalQuestion == 0){
              swal("added All The Question", "Your Test Is Ready To Launch", "success");
              this.step--;
            }
            this.isDisabled = false;
          },
          (err)=>{
            swal("Problem In adding in test");
          })
        }
   }

   filterData(){
     if(this.SelectOption.invalid){
       this.filteredQuestionList = this.allQuestion;
       return;
     }
    //  swal(this.allQuestion[0].questionCategory["categoryId"] + " is id");
     this.filteredQuestionList = this.allQuestion.filter(t=>(t.questionCategory["categoryId"] == this.SelectOption.controls.category.value));

   }

}
