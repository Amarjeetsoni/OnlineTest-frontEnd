import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalculateServiceService {
  public user_test:any;

  baseUrl : string = "http://localhost:8082/Score/";
  constructor(private http : HttpClient) { }

  getTests(){
      this.user_test = this.http.get<any[]>(this.baseUrl+"getTests");
      console.log("Service");
      //console.log(this.user_test[1]);
      return this.user_test;
  }
  declareTestResult(userTestId: number){
    return this.http.get<any>(this.baseUrl+"getScore/"+userTestId);
  }
}
