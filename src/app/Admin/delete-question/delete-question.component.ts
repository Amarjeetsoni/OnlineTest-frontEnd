import { Component, OnInit } from '@angular/core';
import { QuestionBank, Category } from '../Services/question-bank';
import { QuestionService } from '../Services/question.service';




@Component({
  selector: 'app-deletequestion',
  templateUrl: './delete-question.component.html',
  styleUrls: ['./delete-question.component.css']
})
export class DeleteQuestionComponent implements OnInit {

  questions: QuestionBank[] = [];
  category: Category[] = [];
  router: any;

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.questionService.getAllQuestion().subscribe(data => {
      this.questions = data;
    });
  }

  deleteQuestion(questionId: Number): void {
    this.questionService.deleteQuestion(questionId);
    alert("Question Deleted!!");
    this.questionService.getAllQuestion().subscribe(data => {
      this.questions = data;

    });

    this.router.navigateByUrl('/deleteQuestion');
  }


}
