import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
    providedIn: 'root'
  })
export class MainService {
    url: string = "http://localhost:8082";
    constructor(private http: HttpClient) { }

    getTestByUserId(userId: any, testId: any)
    {
       return this.http.get<any>(this.url + "/Start/getTestByUserId?userId=" + userId + "&testId=" + testId);
    }

    getAllQuestion(userId: any, testId: any){
      return this.http.get<any[]>(this.url + "/Start/getAllQuestion?userId=" + userId + "&testId=" + testId);
    }

    setTestAnswer(submitTest: any){
      console.log(submitTest);
      return this.http.post(this.url + "/Start/setTestAnswer", {"answer": submitTest[0], "userId": submitTest[2], "testId": submitTest[1]}, { responseType: 'text' as 'json' });
    }

    submitFeedback(submit: any){
      console.log(submit);
      return this.http.post(this.url + "/Start/addFeedback", {"user_id": submit[0], "test_id": submit[1], "feedback": submit[2]}, { responseType: 'text' as 'json' });

    }

}