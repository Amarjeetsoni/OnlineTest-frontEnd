import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';

@Component({
  selector: 'app-view-feedback',
  templateUrl: './view-feedback.component.html',
  styleUrls: ['./view-feedback.component.css']
})
export class ViewFeedbackComponent implements OnInit {

  constructor() { } 

  ngOnInit() {
  }

  logInPage(){
    swal("Good job!", "You clicked the button!", "success");
  }

}
