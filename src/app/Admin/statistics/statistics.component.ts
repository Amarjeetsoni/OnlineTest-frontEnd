import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { AdminServices } from '../Services/admin.services';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

 //search by for pipe "search"
 searchBy: any = ["user","test"];
 searchUser: any
 searchTest: any
 cardDetails: any = ['', '', '']
 //for test given by table
 testsUserDetails: any
 //for user given test table 
 usersTestDetails: any
 topPerformers: any

 //Chart data
 graph: any[];
 category: any [];
 questions: any [];
 checkLoading: any = true;
 constructor(private dashboardService: AdminServices) {
   this.dashboardService.getTotalUsers().subscribe(data => {
     this.cardDetails[0] = data;
   }, err => {
     console.log(err.error);
     this.checkLoading = false;
   });

   this.dashboardService.getTotalTests().subscribe(data => {
     this.cardDetails[1] = data;
   }, err => {
     console.log(err.error);
     this.checkLoading = false;
   });

   this.dashboardService.getTotalQuestions().subscribe(data => {
     this.cardDetails[2] = data;
   }, err => {
     console.log(err.error);
     this.checkLoading = false;
   });

   this.dashboardService.getAllExams().subscribe(data=>{
     this.testsUserDetails = data;
     this.usersTestDetails = data;
   }, err => {
     console.log(err.error);
     this.checkLoading = false;
   });

   this.dashboardService.getTopPerformers().subscribe(data=>{
     this.topPerformers = data;
   }, err=>{
     console.log(err.error);
     this.checkLoading = false;
   }); 
   if(this.checkLoading==false)
   alert("Cannot load all fields of dashboard");
 }

 ngOnInit() {
 //graph initialization
   this.dashboardService.getQuestionCategory().subscribe(data=>{
     this.category = Object.keys(data);
     this.questions = Object.values(data);
     console.log(this.category);
     console.log(this.questions);
     
     this.graph = new Chart('canvas', {
       type: 'bar',
       data: {
         labels: this.category,
         datasets: [{
           data: this.questions,
           borderColor: '#3cba9f',
           backgroundColor: [
             "#3cb371",
             "#0000FF",
             "#9966FF",
             "#4C4CFF",
             "#00FFFF",
             "#f990a7",
             "#aad2ed",
             "#FF00FF",
             "Blue",
             "Red",
             "Blue"
           ],
           fill: true
         }]
       },
       options: {
         title: {
           display: true,
           text: 'Questions vs Category'
         },
         legend: {
           display: false
         },
         scales: {
           xAxes: [{
             display: true
           }],
           yAxes: [{
             display: true
           }],
         }
       }
     });

   }, err=>{
     alert(err.error);
   });


 }

}
