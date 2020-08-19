import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Test } from '../models/Test';

@Injectable({
  providedIn: 'root'
})
export class TestService
 {

  test:Test = new Test();

  constructor(private _http:HttpClient) { }

  addTest(test:Test):Observable<any>
  {
    let url = "http://localhost:8082/Test/test/new";
    return this._http.post(url, test, {responseType:'text'});
  }
  
  deleteTest(test_Id:number):Observable<any>
  {
    let url = "http://localhost:8082/Test/delete/"+test_Id;
    return this._http.delete(url, {responseType:'text'});
  }


  viewAllTests():Observable<any>
  {
    let url = "http://localhost:8082/Test/tests";
   return this._http.get(url);
  }


  updateTest(test:Test):Observable<any>
  {
    let url = "http://localhost:8082/Test/update/test";
    return this._http.put(url, test, {responseType:'text'});
  }
  

  setTest(test:Test)
  {
    this.test=test;
  }

  getTest()
  {
    return this.test;
  }

}
