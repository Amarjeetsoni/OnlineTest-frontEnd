import { Injectable } from '@angular/core';
import { QuestionServiceInterface } from './question-service-interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuestionBank, Category } from './question-bank';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class QuestionService implements QuestionServiceInterface{


  constructor(private http:HttpClient, private route:Router) { }
  
  addQuestion(question: QuestionBank): Observable<any> 
  {
    return this.http.put("http://localhost:8082/AddQuestion",question,{responseType:"text"});
  }

  getAllQuestion():Observable<any> 
  {
     return this.http.get("http://localhost:8082/getAllQuestion");
  }
  deleteQuestion(questionId: Number): void {
    this.http.delete("http://localhost:8082/deleteQuestion/"+questionId).subscribe(data=>{
      console.log(data);
    });

  }
  updateQuestion(questionId: Number, question: import("./question-bank").updateQuestion): void {
    this.http.put("http://localhost:8082/updateQuestion/"+questionId,question).subscribe(data=>{
      console.log(data);
    });


  }
 
  // getCategory(categoryId: Number):Observable<any> 
  // {
  //    return this.http.get("http://localhost:8082/getCategory"+categoryId);
  // }
}
