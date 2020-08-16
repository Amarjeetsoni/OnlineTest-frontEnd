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

}