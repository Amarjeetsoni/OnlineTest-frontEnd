import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionBank } from '../Services/question-bank';
import { QuestionService } from '../Services/question.service';


@Component({
  selector: 'app-addquestion',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  questions: QuestionBank = new QuestionBank();
  question: QuestionBank = new QuestionBank();
  info: String;
  errorInfo: String;
  msg: any;
  router: any;


  constructor(private questionService: QuestionService, private route: Router) { }


  ngOnInit(): void {
    this.questionService.getAllQuestion().subscribe(data => {
      this.questions = data;
    });
    this.question.questionTitle = "";
    this.question.questionMarks = null;
    this.question.option = [];
    this.question.questionAnswer = null;
    this.question.category_id = null;


  }

  public option: any;

  // addOption() {
  //   this.question.questionOptions.push(this.option);
  //   console.log(this.question.questionOptions);
  //   this.option = '';
  // }
  addQuestion() {
    console.log(this.question.questionTitle);
    console.log(this.question.questionMarks);
    console.log(this.question.option);
    console.log(this.question.category_id);
    console.log(this.question.questionAnswer);
  

    this.questionService.addQuestion(this.question).subscribe(data =>
       {
      this.question = data;
      alert("Question Added!");
      this.route.navigateByUrl('/admin/deleteQuestion');

      console.log(this.question);
      this.info = data;
      this.errorInfo = undefined;
    },
      error => {
        this.info = undefined;
        this.errorInfo = JSON.parse(error.error).message;
        this.msg = undefined;
        alert("Question Added!")
        this.route.navigateByUrl('/admin/deleteQuestion');
      
      }


    );

  }

}
