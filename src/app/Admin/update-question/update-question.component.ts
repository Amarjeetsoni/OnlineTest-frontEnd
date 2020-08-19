import { Component, OnInit } from '@angular/core';
import { QuestionBank, updateQuestion, Category } from '../Services/question-bank';
import { QuestionService } from '../Services/question.service';




@Component({
  selector: 'app-updatequestion',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {

  questions: QuestionBank[] = [];
  questionUpdate: updateQuestion = new updateQuestion();
  categoryId: number;
  category: Category = new Category();
  route: any;

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.questionService.getAllQuestion().subscribe(data => {
      this.questions = data;
    });


  }



  updateQuestion1(question: updateQuestion): void {
    this.questionUpdate = question;
  }


  updateQuestion2(): void {
    console.log(this.questionUpdate);
    this.questionService.updateQuestion(this.questionUpdate.questionId, this.questionUpdate);
    this.route.navigateByUrl('/admin/updateQuestion');


  }

}