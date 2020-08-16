import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import swal from 'sweetalert';
import { MainService } from '../Services/main.services';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { SubmitTest } from '../Models/SubmitTest';





@Component({
  selector: 'app-attempt-test',
  templateUrl: './attempt-test.component.html',
  styleUrls: ['./attempt-test.component.css']
})
export class AttemptTestComponent implements OnInit {


 submitFeedback: FormGroup;
 step: number = 1;
 testId: number;
 userId: number;
 submitTest: SubmitTest;
 SelectOption:FormGroup;
 questionList: any[];
 totalAttempts: number = 0;
 numberOfQuestion:number[] = [];
 answer:number[] = [];
 checked: boolean = false;
 currentQuestion: number  = 0;
 timeLeftSecond: number = 60;
 timeLeftMin: number = 0;
 timeOutAlert: boolean = false;
 answerStatus:number[] = [];
 value: number = 1;
 interval;
 test: any;
  constructor(@Inject(DOCUMENT) private document: any, private services: MainService, private router: Router, private route:ActivatedRoute
  , private formBuilder: FormBuilder) { 
    
    
    this.route.params.subscribe(params=>{
        this.userId = params['userId'];
        this.testId = params['testId'];
    })
    this.services.getTestByUserId(this.userId, this.testId).subscribe((data)=>{
      this.test = data;
      console.log(this.test);
      this.timeLeftMin = this.test.testDuration - 1;
      for(let i = 0; i < this.test.totalQuestion; i++){
        this.numberOfQuestion[i] = i;
        this.answer[i] = 0;
        this.answerStatus[i] = -1;
      }
      // this.numberOfQuestion = Array(this.test.totalQuestion).fill(10).map((x,i)=>i);
      // this.answer = Array(this.test.totalQuestion).fill(0);
      // this.answerStatus = Array(this.test.totalQuestion).fill(-1);
    },
    (err)=>{
      console.log(err);
      swal(err.error.details, err.error.message, "warning");
      
    })

  } 
  elem;

  @HostListener('window:beforeunload', ['$event'])
  onWindowClose(event: any): void {
    event.preventDefault();
    event.returnValue = false;
    this.submitTestAnswerRefress();
 }
 openFullscreen() {
  if (this.elem.requestFullscreen) {
    this.elem.requestFullscreen();
  } else if (this.elem.mozRequestFullScreen) {
    /* Firefox */
    this.elem.mozRequestFullScreen();
  } else if (this.elem.webkitRequestFullscreen) {
    /* Chrome, Safari and Opera */
    this.elem.webkitRequestFullscreen();
  } else if (this.elem.msRequestFullscreen) {
    /* IE/Edge */
    this.elem.msRequestFullscreen();
  }
  this.step++;
}
 ngOnInit() {
  this.elem = document.documentElement;
  this.SelectOption = this.formBuilder.group({
    option: ['', Validators.required]
  })

  this.submitFeedback = this.formBuilder.group({
    review1: ['', Validators.required],
    review2: ['', Validators.required],
    review3: ['', Validators.required]
  })
}

nextStep(){
  
  this.services.getAllQuestion(this.userId, this.testId).subscribe((data)=>{
    this.questionList = data;
    console.log(data);
    this.step++;
    this.startTimer();
    console.log(this.questionList[0]);
  },
  (err)=>{
    console.log("Error...Occurs");
    swal(err.error);
  })
}

visitQuestion(num: number){
  if(this.answer[this.currentQuestion] == 0){
    this.SelectOption.controls['option'].reset();
    this.answerStatus[this.currentQuestion] = -1;
  }
  else{
    this.answerStatus[this.currentQuestion] = 1;
    
  }
    this.currentQuestion = num;
   
    // this.value = this.answer[this.currentQuestion];
    // swal("value: "+  this.value + "\nchosenAnser: " + this.answer[this.currentQuestion] + "\ncurren: " + this.currentQuestion);
}

startTimer(){
  this.interval = setInterval(()=>{
    if(this.timeLeftSecond > 0){
      this.timeLeftSecond--;
    }
    else{
      this.timeLeftMin--;
      this.timeLeftSecond = 60;
      if(this.timeLeftMin == 1){
        if(this.step == 3){
        swal("Last 2 Minute Left... Complete Fast.");
        }
        this.timeOutAlert = true;
      }
      if(this.timeLeftMin == -1){
        this.submitTestAnswersTimeOut();
      }
    }
  },1000)

}
clearOption(){
  // swal(this.answer[this.currentQuestion] + " option");
  if(this.answer[this.currentQuestion] == 0){
    swal("Not attemplted...");
    this.SelectOption.controls['option'].reset();
    return;
  }
  this.answerStatus[this.currentQuestion] = -1;
  this.answer[this.currentQuestion] = 0;
  this.SelectOption.controls['option'].reset();
  this.totalAttempts--;
}
setChooseOption(){


  if(this.answer[this.currentQuestion] != 0 && this.SelectOption.controls.option.invalid){
    this.totalAttempts--;
  }
  if(this.SelectOption.controls.option.invalid){
    swal("No Option Select!");
    this.answer[this.currentQuestion] = 0;
    this.answerStatus[this.currentQuestion] = -1;
    return;
  }
  if(this.answer[this.currentQuestion] == 0){
    this.totalAttempts++;
  }
  this.answerStatus[this.currentQuestion] = 1;
  
  this.answer[this.currentQuestion] = this.SelectOption.controls.option.value;
  this.SelectOption.controls['option'].reset();
  
}

priviousQuestion(){
  if(this.answer[this.currentQuestion] == 0){
    this.SelectOption.controls['option'].reset();
    this.answerStatus[this.currentQuestion] = -1;
  }
  else{
    this.answerStatus[this.currentQuestion] = 1;
    
  }
  this.currentQuestion--;
  
  // this.value = this.answer[this.currentQuestion];
  // swal("value: "+  this.value + "\nchosenAnser: " + this.answer[this.currentQuestion] + "\ncurren: " + this.currentQuestion);
}
nextQuestion(){
  if(this.answer[this.currentQuestion] == 0){
    this.SelectOption.controls['option'].reset();
    this.answerStatus[this.currentQuestion] = -1;
  }
  else{
    this.answerStatus[this.currentQuestion] = 1;
  }
  this.currentQuestion++;
  console.log(this.answer);
  // this.SelectOption.controls.option[1].defaultChecked;
  // this.value = this.answer[this.currentQuestion];
  // swal("value: "+  this.value + "\nchosenAnser: " + this.answer[this.currentQuestion] + "\ncurren: " + this.currentQuestion);
}
submitTestAnswerRefress(){
  if(this.step != 3){
    return;
  }
  this.services.setTestAnswer([this.answer, this.testId, this.userId]).subscribe((data)=>{
    console.log(data);
 },
 (err)=>{
   console.log(err);
   swal(err.error.details, err.error.message, "warning");
   
 })
}
submitTestAnswersTimeOut(){
  if(this.step == 3){
  this.services.setTestAnswer([this.answer, this.testId, this.userId]).subscribe((data)=>{
    swal("Time Out!!! \nTest Is Submitted...", "Helps Us To Improve... Give FeedBack", "success");
      this.step++;
 },
 (err)=>{
   console.log(err);
   swal(err.error.details, err.error.message, "warning");
   
 })
}
}

Review(){
  swal({
    title: "Are you sure Want to Submit?",
    text: "Total Attempted: " + this.totalAttempts + "\nTotal Left: " + (this.test.totalQuestion-this.totalAttempts),
    icon: "warning",
    buttons: [true, true],
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
    
    this.services.setTestAnswer([this.answer, this.testId, this.userId]).subscribe((data)=>{
      swal("Test Is Submitted...", "Helps Us To Improve... Give FeedBack", "success");
        this.step++;
   },
   (err)=>{
     console.log(err);
     swal(err.error.details, err.error.message, "warning");
     
   })
  
      
    } else {
     
    }
  });
}
submitFeedbackByUser(){
  if(this.submitFeedback.invalid){
    swal("all Fields are Mondatory..");
    return;
  }
  this.services.submitFeedback([this.userId, this.testId, [this.submitFeedback.controls.review1.value, this.submitFeedback.controls.review2.value,
    this.submitFeedback.controls.review3.value]]).subscribe((data)=>{
         swal("Thank You!!!", "Your data has been recorded!", "success");
         this.step++;
    },
    (err)=>{
      swal(err.error.details, err.error.message, "warning");
    })
  
}
skipFeedback(){
  this.step++;
  swal("Thank You!!!", "Your data has been recorded!", "success");
}
}


