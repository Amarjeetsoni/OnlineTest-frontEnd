import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResultAnalysisService {

  baseUrl : string = "http://localhost:8082/result/";
  constructor(private http : HttpClient) { }

  getResultForUser(userId : any){
    return this.http.get<any>(this.baseUrl+"getResult/"+userId);
  }

  getCategoryResultForTest(userTestId : number){
    return this.http.get<any>(this.baseUrl+"getCategoryResult/"+userTestId);
  }

  getQuestions(testId : number){
    return this.http.get<any>(this.baseUrl+"getQuestions/"+testId);
  }
}
