import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestDetails } from '../models/TestDetails';


@Injectable({
    providedIn: 'root'
  })
export class UserServices {
    url: string = "http://localhost:8082";
    constructor(private http: HttpClient) { }

    getAllTestAssignedToAUser(userId: number){
       return this.http.get<TestDetails[]>(this.url + "/Start/getAllTestByUserId?userId=" + userId);
    }

    getRegisterInTest (userId:any, testId:any){
      return this.http.get<any>(this.url + "/getResultModule/assignTest?testId=" + testId + "&userId=" + userId);
    }

    getAllTest(){
      return this.http.get<any[]>(this.url + "/Start/getAllTest");
   }
    


}