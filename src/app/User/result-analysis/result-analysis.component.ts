import { Component, OnInit } from '@angular/core';
import { ResultAnalysisService } from 'src/app/services/result-analysis.service';
import { AuthenticationService } from 'src/app/Services/authentication.service';


@Component({
  selector: 'app-result-analysis',
  templateUrl: './result-analysis.component.html',
  styleUrls: ['./result-analysis.component.css']
})
export class ResultAnalysisComponent implements OnInit {
  var:any
  temp1: number
  temp2: number
  temp3: string
  detailedResult: any
  userTest: any;
  questions: any;
  showDetails: boolean
  noOfCrrctAns: number
  categoryResult: any

  constructor(private resultService: ResultAnalysisService, private auth: AuthenticationService) { }

  ngOnInit() {
    this.showDetails = false
    this.resultService.getResultForUser(this.auth.getUserid() ).subscribe(data => {
      this.userTest = data;
      console.log(this.userTest);
    },err=>{
      console.log(err.error);
      alert("Problem while fetching the data:" + "\n message: "
      + err.error.message + "\n details: " + err.error.details)
    });
  }

  showDetailedResults(obj: any) {
    this.detailedResult = obj
    // console.log(this.detailedResult.usertestAnswer);
    this.resultService.getQuestions(obj.test.test_Id).subscribe(data => {
      this.questions = data;
      console.log(this.questions);

    },err=>{
      console.log(err.error);
      alert("Problem while fetching the data:" + "\n message: "
      + err.error.message + "\n details: " + err.error.details)
    });
    setTimeout(() => {
      this.showDetails = true                          
    }, 1000);
    this.noOfCrrctAns = 0
    for (let i = 0; i < this.detailedResult.testCorrectAnswer.length; i++) {
      if (this.detailedResult.testCorrectAnswer[i] == true)
        this.noOfCrrctAns++
    }

    this.resultService.getCategoryResultForTest(obj.user_Test_Id).subscribe(data => {
      this.categoryResult = data;
      console.log(this.categoryResult);
      this.temp1 = 0;
      this.temp2 = 0;
      this.temp3 = "";

      setTimeout(() => {
        for (let i = 0; i < this.categoryResult.length; i++) {
          this.temp1 = 0
          for (let j = 0; j < this.questions.length; j++) {
            if (this.questions[j].questionCategory.categoryId == this.categoryResult[i].category.categoryId) {
              this.temp1 += this.questions[j].questionMarks
            }
          }
          this.temp2 = (this.categoryResult[i].categoryResult / this.temp1) * 100
  
          console.log(this.temp2);
          console.log(this.categoryResult[i].category.name);
          this.temp3=this.temp2.toString()+"%";
          console.log(this.temp3);
          (<HTMLInputElement>document.getElementById("fill-"+this.categoryResult[i].category.name.toString())).style.width=this.temp2.toString()+"%";
          (<HTMLInputElement>document.getElementById("marks-"+this.categoryResult[i].category.name.toString())).value=this.temp2.toString()+"%";
        }
      }, 3000);
    },err=>{
      console.log(err.error);
      alert("Problem while fetching the data:" + "\n message: "
      + err.error.message + "\n details: " + err.error.details)
    });
  }

  goBack(){
    this.showDetails = false;
  }

}
