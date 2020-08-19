import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
    providedIn: 'root'
  })
export class AdminServices {
    url: string = "http://localhost:8082";
    constructor(private http: HttpClient) { }

    getAllTest(){
       return this.http.get<any[]>(this.url + "/Start/getAllTest");
    }

    getAllFeedbackByTestId(testId: any)
    {
       return this.http.get<any[]>(this.url + "/Start/getAllFeedbackByTestId?testId=" + testId);
    }

    getAllCategory(){
       return this.http.get<any[]>(this.url + "/checkOnly/getAllcategory");
    }

    getTestByTestTitle(test: any){
        return this.http.get<any>(this.url + "/checkOnly/getTestIdByTestTitle?title=" + test);
    }


    getRegisterInTest(userId: any, testId:any){
      return this.http.get<any>(this.url + "getResult/assignTest?userId=" + userId + "&testId=" + testId);
    }
  
  
  
  
    getAllQuestion(){
       return this.http.get<any[]>(this.url + "/checkOnly/getAllQuestion");
    }

    setTestQuestion(questionId: any, testId: any){
       return this.http.post(this.url + "/checkOnly/setTestQuestion", {"question_id": questionId, "test_id": testId}, { responseType: 'text' as 'json' });
    }

    getTotalUsers() {
      return this.http.get<any[]>(this.url + "/dashboard/total_users");
    }
  
    getTotalTests() {
      return this.http.get<any[]>(this.url + "/dashboard/total_tests");
    }
  
    getTotalQuestions() {
      return this.http.get<any[]>(this.url + "/dashboard/total_questions");
    }
  
    getAllExams() {
      return this.http.get<any[]>(this.url + "/dashboard/all_exams");
    }
  
    getQuestionCategory() {
      return this.http.get<any[]>(this.url + "/dashboard/questions_category")
    }
    
    getTopPerformers(){
      return this.http.get<any[]>(this.url + "/dashboard/top_performers");
    }
  
    getTopPerformersAverage(){
      return this.http.get<any[]>(this.url+"/dashboard/top_performer_avg")
    }

}