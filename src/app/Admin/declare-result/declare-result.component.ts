import { Component, OnInit } from '@angular/core';
import { CalculateServiceService } from 'src/app/services/calculate-service.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-declare-result',
  templateUrl: './declare-result.component.html',
  styleUrls: ['./declare-result.component.css']
})
export class DeclareResultComponent implements OnInit {

  public userTest:any;
  public score: any;
  search: any;
  attemptedCheckBox: boolean=false;
  undeclaredCheckBox: boolean=false;

  constructor(private route:ActivatedRoute,private router:Router,private calculateService: CalculateServiceService) { }

  ngOnInit() {
   this.getAllTests();    
}
getAllTests(){
  console.log("Work1");
  this.calculateService.getTests().subscribe(data=>{
    this.userTest=data;
    console.log(this.userTest);
    console.log(data[0].attempted);
  },
  err => {
    // on reject or on error
    console.log(err.stack);
  });
}
showAttempted(){
    console.log("Attempted only");
    this.attemptedCheckBox=!this.attemptedCheckBox;
    console.log(this.attemptedCheckBox);
}
declareResult(userTestId: number){
    console.log("Selected button");
    this.calculateService.declareTestResult(userTestId).subscribe(data=>{
      this.score = data;
      console.log(this.score);
      window.location.reload();
    });
  }
}
